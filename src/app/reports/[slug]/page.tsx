import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getReportEntries, getReportEntry } from "@/lib/content";

export function generateStaticParams() {
  return getReportEntries().map((entry) => ({ slug: entry.slug }));
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getReportEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[
          { label: "NDRS.ca", href: "/" },
          { label: "Reports and publications", href: "/reports" },
          { label: entry.title },
        ]}
      />
      <main className="flex-1">
        <MarkdownContent body={entry.body} />
      </main>
      <Footer />
    </>
  );
}
