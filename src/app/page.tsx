import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getPage } from "@/lib/content";

export default function Home() {
  const page = getPage("home");

  return (
    <>
      <Header />
      <main className="flex-1">
        <MarkdownContent body={page.body} />
      </main>
      <Footer />
    </>
  );
}
