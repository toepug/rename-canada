import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getUpdateEntries } from "@/lib/content";

export function generateStaticParams() {
  return getUpdateEntries().map((entry) => ({ slug: entry.slug }));
}

export default async function UpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getUpdateEntries().find((e) => e.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[
          { label: "NDRS.ca", href: "/" },
          { label: "Progress updates", href: "/updates" },
          { label: entry.title },
        ]}
      />
      <main className="flex-1">
        <MarkdownContent body={`# ${entry.title}\n\n${entry.body}`} />
      </main>
      <Footer />
    </>
  );
}
