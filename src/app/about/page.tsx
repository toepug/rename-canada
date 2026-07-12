import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MarkdownContent } from "@/components/MarkdownContent";
import { CrestSeal } from "@/components/Crest";
import { getPage } from "@/lib/content";

export const metadata = {
  title: "About the NDRS | NDRS",
};

export default function AboutPage() {
  const page = getPage("about");

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[{ label: "NDRS-SRDN.ca", href: "/" }, { label: "About" }]}
      />
      <main className="relative flex-1">
        <CrestSeal
          decorative
          className="absolute top-10 right-4 hidden h-28 w-28 text-ndrs-navy opacity-80 sm:block md:right-8 md:h-32 md:w-32"
        />
        <MarkdownContent body={page.body} />
      </main>
      <Footer />
    </>
  );
}
