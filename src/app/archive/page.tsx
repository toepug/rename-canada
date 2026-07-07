import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getArchiveEntries } from "@/lib/content";

export const metadata = {
  title: "Legacy Deprecation Archive | NDRS",
};

export default function ArchiveIndex() {
  const entries = getArchiveEntries().sort((a, b) =>
    a.assetNumber < b.assetNumber ? -1 : 1,
  );

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[
          { label: "NDRS.ca", href: "/" },
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
          <ul className="mt-8 divide-y divide-gray-200 border-t border-gray-200">
            {entries.map((entry) => (
              <li key={entry.slug} className="py-4">
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
                <span className="mt-1 inline-block bg-yellow-100 px-2 py-0.5 text-xs font-bold text-yellow-900">
                  {entry.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
