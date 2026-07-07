import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getPage } from "@/lib/content";

export const metadata = {
  title: "Candidate Designations | NDRS",
};

export default function CandidatesIndex() {
  const page = getPage("candidates");

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[
          { label: "NDRS.ca", href: "/" },
          { label: "Candidate Designations" },
        ]}
      />
      <main className="flex-1">
        <MarkdownContent body={page.body} />
      </main>
      <Footer />
    </>
  );
}
