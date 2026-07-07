import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getPage } from "@/lib/content";

export const metadata = {
  title: "Support the Program | NDRS",
};

export default function DonatePage() {
  const page = getPage("donate");

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[{ label: "NDRS.ca", href: "/" }, { label: "Support the Program" }]}
      />
      <main className="flex-1">
        <MarkdownContent body={page.body} />
      </main>
      <Footer />
    </>
  );
}
