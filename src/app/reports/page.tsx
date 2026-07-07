import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getReportEntries } from "@/lib/content";

export const metadata = {
  title: "Reports and publications | NDRS",
};

export default function ReportsIndex() {
  const reports = getReportEntries();

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[
          { label: "NDRS.ca", href: "/" },
          { label: "Reports and publications" },
        ]}
      />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
          <h1 className="mb-1 border-b-4 border-ndrs-accent pb-3 font-heading text-3xl font-bold text-foreground">
            Reports and publications
          </h1>
          <p className="mt-4 text-sm text-gray-700">
            Commissioned research, feasibility studies, and tabulation
            records, including deliverables prepared by Meridian Narrative
            Partners under Project Northstar.
          </p>
          <ul className="mt-8 divide-y divide-gray-200 border-t border-gray-200">
            {reports.map((report) => (
              <li key={report.slug} className="py-4">
                <Link
                  href={`/reports/${report.slug}`}
                  className="font-heading text-lg font-bold text-ndrs-link underline"
                >
                  {report.title}
                </Link>
                <p className="mt-1 text-sm text-gray-600">
                  {report.deliverable} · {report.author} · {report.status}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
