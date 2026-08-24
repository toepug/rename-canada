"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ArchiveEntry } from "@/lib/content";

const STATUS_ORDER = [
  "DEPRECATION SCHEDULED",
  "SUNSET PENDING",
  "DEFERRED",
  "REVIEW COMPLETE",
  "WITHDRAWN FROM SCHEDULE",
] as const;

const STATUS_LABELS: Record<string, string> = {
  "DEPRECATION SCHEDULED": "Deprecation scheduled",
  "SUNSET PENDING": "Sunset pending",
  DEFERRED: "Deferred",
  "REVIEW COMPLETE": "Review complete",
  "WITHDRAWN FROM SCHEDULE": "Withdrawn from schedule",
};

const ASSET_CLASS_ORDER = [
  "Engineering Works",
  "Maritime",
  "Persons of Record",
  "Events",
  "Objects of State",
] as const;

type ReviewWindow = "all" | "30" | "90" | "older";

function daysBetween(a: Date, b: Date): number {
  return Math.floor((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
}

export function ArchiveFilterPanel({ entries }: { entries: ArchiveEntry[] }) {
  const [statusFilters, setStatusFilters] = useState<Set<string>>(new Set());
  const [classFilters, setClassFilters] = useState<Set<string>>(new Set());
  const [reviewWindow, setReviewWindow] = useState<ReviewWindow>("all");

  const referenceDate = useMemo(() => {
    const dates = entries
      .map((e) => new Date(e.dateModified))
      .filter((d) => !Number.isNaN(d.getTime()));
    if (dates.length === 0) return new Date();
    return new Date(Math.max(...dates.map((d) => d.getTime())));
  }, [entries]);

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of STATUS_ORDER) counts[s] = 0;
    for (const e of entries) counts[e.status] = (counts[e.status] ?? 0) + 1;
    return counts;
  }, [entries]);

  const classCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const c of ASSET_CLASS_ORDER) counts[c] = 0;
    for (const e of entries) {
      if (e.assetClass) counts[e.assetClass] = (counts[e.assetClass] ?? 0) + 1;
    }
    return counts;
  }, [entries]);

  function toggle(set: Set<string>, setSet: (s: Set<string>) => void, value: string) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setSet(next);
  }

  const filtered = entries.filter((e) => {
    if (statusFilters.size > 0 && !statusFilters.has(e.status)) return false;
    if (classFilters.size > 0) {
      if (!e.assetClass || !classFilters.has(e.assetClass)) return false;
    }
    if (reviewWindow !== "all") {
      const modified = new Date(e.dateModified);
      if (Number.isNaN(modified.getTime())) return false;
      const age = daysBetween(referenceDate, modified);
      if (reviewWindow === "30" && age > 30) return false;
      if (reviewWindow === "90" && age > 90) return false;
      if (reviewWindow === "older" && age <= 90) return false;
    }
    return true;
  });

  const grouped = STATUS_ORDER.map((status) => ({
    status,
    entries: filtered.filter((e) => e.status === status),
  })).filter((g) => g.entries.length > 0);

  const hasActiveFilters =
    statusFilters.size > 0 || classFilters.size > 0 || reviewWindow !== "all";

  return (
    <div className="mt-8">
      <div className="bg-ndrs-grey border border-gray-300 p-4 md:p-6">
        <h2 className="font-heading text-base font-bold text-foreground">
          Filter this archive
        </h2>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <fieldset>
            <legend className="font-heading text-sm font-bold text-foreground">
              Status
            </legend>
            <ul className="mt-2 space-y-1">
              {STATUS_ORDER.map((status) => (
                <li key={status}>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={statusFilters.has(status)}
                      onChange={() =>
                        toggle(statusFilters, setStatusFilters, status)
                      }
                      disabled={statusCounts[status] === 0}
                    />
                    <span
                      className={
                        statusCounts[status] === 0 ? "text-gray-400" : ""
                      }
                    >
                      {STATUS_LABELS[status]} ({statusCounts[status]})
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>

          <fieldset>
            <legend className="font-heading text-sm font-bold text-foreground">
              Asset class
            </legend>
            <ul className="mt-2 space-y-1">
              {ASSET_CLASS_ORDER.map((cls) => (
                <li key={cls}>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={classFilters.has(cls)}
                      onChange={() =>
                        toggle(classFilters, setClassFilters, cls)
                      }
                      disabled={classCounts[cls] === 0}
                    />
                    <span
                      className={classCounts[cls] === 0 ? "text-gray-400" : ""}
                    >
                      {cls} ({classCounts[cls]})
                    </span>
                  </label>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-gray-500">
              Withdrawn files carry no asset-class facet.
            </p>
          </fieldset>

          <fieldset>
            <legend className="font-heading text-sm font-bold text-foreground">
              Review date
            </legend>
            <select
              value={reviewWindow}
              onChange={(e) => setReviewWindow(e.target.value as ReviewWindow)}
              className="mt-2 w-full border border-gray-400 bg-white px-2 py-1.5 text-sm"
            >
              <option value="all">All dates</option>
              <option value="30">Reviewed in the last 30 days</option>
              <option value="90">Reviewed in the last 90 days</option>
              <option value="older">Reviewed more than 90 days ago</option>
            </select>
          </fieldset>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={() => {
              setStatusFilters(new Set());
              setClassFilters(new Set());
              setReviewWindow("all");
            }}
            className="mt-4 text-sm text-ndrs-link underline"
          >
            Clear filters
          </button>
        )}
      </div>

      <p className="mt-4 text-sm font-bold text-foreground">
        {filtered.length} of {entries.length} drafted files shown
      </p>

      <div className="mt-2 divide-y divide-gray-200 border-t border-gray-200">
        {grouped.map((group) => {
          const isWithdrawn = group.status === "WITHDRAWN FROM SCHEDULE";
          return (
            <div key={group.status} className="py-4">
              <h3
                className={
                  isWithdrawn
                    ? "font-body text-sm font-bold text-gray-600"
                    : "font-heading text-base font-bold text-foreground"
                }
              >
                {STATUS_LABELS[group.status]}
              </h3>
              <ul className="mt-3 divide-y divide-gray-200">
                {group.entries.map((entry) => (
                  <li key={entry.slug} className="py-3">
                    <Link
                      href={`/archive/${entry.slug}`}
                      className="font-heading text-lg font-bold text-ndrs-link underline"
                    >
                      {entry.title}
                    </Link>
                    <p className="mt-1 text-sm text-gray-600">
                      {[entry.assetNumber, entry.category, entry.region]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span
                        className={
                          isWithdrawn
                            ? "inline-block bg-gray-200 px-2 py-0.5 text-xs font-bold text-gray-700"
                            : "inline-block bg-yellow-100 px-2 py-0.5 text-xs font-bold text-yellow-900"
                        }
                      >
                        {entry.status}
                      </span>
                      {!isWithdrawn && entry.assetClass && (
                        <span className="inline-block border border-gray-300 px-2 py-0.5 text-xs text-gray-600">
                          {entry.assetClass}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="py-6 text-sm text-gray-600">
            No heritage assets match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
