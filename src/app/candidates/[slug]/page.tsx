import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getCandidateEntries, getCandidateEntry } from "@/lib/content";

export function generateStaticParams() {
  return getCandidateEntries().map((entry) => ({ slug: entry.slug }));
}

export default async function CandidatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getCandidateEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[
          { label: "NDRS.ca", href: "/" },
          { label: "Candidate Designations", href: "/candidates" },
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
