import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArchiveFilterPanel } from "@/components/ArchiveFilterPanel";
import { getArchiveEntries } from "@/lib/content";

export const metadata = {
  title: "Legacy Deprecation Archive | NDRS",
};

// Exempt from the faceted status/asset-class scheme (§12): these carry
// their own non-enum status values by design, not oversight.
const EXEMPT_SLUGS = new Set(["1867-naming-exercise", "rejected-designations"]);

export default function ArchiveIndex() {
  const allEntries = getArchiveEntries().sort((a, b) =>
    a.assetNumber < b.assetNumber ? -1 : 1,
  );
  const exemptEntries = allEntries.filter((e) => EXEMPT_SLUGS.has(e.slug));
  const separateReviewEntries = allEntries.filter(
    (e) => !EXEMPT_SLUGS.has(e.slug) && e.separateReview,
  );
  const entries = allEntries.filter(
    (e) => !EXEMPT_SLUGS.has(e.slug) && !e.separateReview,
  );

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[
          { label: "NDRS-SRDN.ca", href: "/" },
          { label: "Programs", href: "/" },
          {
            label: "Canada Name Transition Pilot Program",
            href: "/",
          },
          { label: "Legacy Deprecation Archive" },
        ]}
      />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
          <h1 className="mb-1 border-b-4 border-ndrs-accent pb-3 font-heading text-3xl font-bold text-foreground">
            Legacy Deprecation Archive
          </h1>
          <p className="mt-4 text-sm text-gray-700">
            2,344 heritage assets scheduled. The complete official record of
            the names, events, achievements, and stories scheduled to be
            lost.
          </p>
          <ArchiveFilterPanel entries={entries} />

          {separateReviewEntries.length > 0 && (
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h2 className="font-heading text-base font-bold text-foreground">
                Held under separate review
              </h2>
              <ul className="mt-3 divide-y divide-gray-200 border-t border-gray-200">
                {separateReviewEntries.map((entry) => (
                  <li key={entry.slug} className="py-3">
                    <Link
                      href={`/archive/${entry.slug}`}
                      className="font-heading text-lg font-bold text-ndrs-link underline"
                    >
                      {entry.title}
                    </Link>
                    <p className="mt-1 text-sm text-gray-600">
                      {[entry.assetNumber, entry.category]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {exemptEntries.length > 0 && (
            <div className="mt-10 border-t border-gray-200 pt-6">
              <h2 className="font-heading text-base font-bold text-foreground">
                Other archive records
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Not Asset Files; outside the status and asset-class facets
                above (§12).
              </p>
              <ul className="mt-3 divide-y divide-gray-200 border-t border-gray-200">
                {exemptEntries.map((entry) => (
                  <li key={entry.slug} className="py-3">
                    <Link
                      href={`/archive/${entry.slug}`}
                      className="font-heading text-lg font-bold text-ndrs-link underline"
                    >
                      {entry.title}
                    </Link>
                    <p className="mt-1 text-sm text-gray-600">
                      {[entry.assetNumber, entry.category]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    <span className="mt-1 inline-block bg-gray-200 px-2 py-0.5 text-xs font-bold text-gray-700">
                      {entry.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
