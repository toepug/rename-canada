import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getArchiveEntries, getArchiveEntry } from "@/lib/content";

export function generateStaticParams() {
  return getArchiveEntries().map((entry) => ({ slug: entry.slug }));
}

export default async function ArchiveEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[
          { label: "NDRS.ca", href: "/" },
          { label: "Legacy Deprecation Archive", href: "/archive" },
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
