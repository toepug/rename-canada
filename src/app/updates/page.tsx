import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getUpdateEntries } from "@/lib/content";

export const metadata = {
  title: "Progress updates | NDRS",
};

export default function UpdatesIndex() {
  const updates = getUpdateEntries();

  return (
    <>
      <Header />
      <Breadcrumb
        trail={[{ label: "NDRS.ca", href: "/" }, { label: "Progress updates" }]}
      />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
          <h1 className="mb-1 border-b-4 border-ndrs-accent pb-3 font-heading text-3xl font-bold text-foreground">
            Progress updates
          </h1>
          <p className="mt-4 text-sm text-gray-700">
            The Secretariat publishes regular updates confirming that work
            continues.
          </p>
          <ul className="mt-8 divide-y divide-gray-200 border-t border-gray-200">
            {updates.map((update) => (
              <li key={update.slug} className="py-4">
                <Link
                  href={`/updates/${update.slug}`}
                  className="font-heading text-lg font-bold text-ndrs-link underline"
                >
                  {update.title}
                </Link>
                <p className="mt-1 text-sm text-gray-600">
                  {update.date} · {update.category}
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
