import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = {
  title: "Page not found (Error 404) | NDRS",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <Breadcrumb trail={[{ label: "NDRS-SRDN.ca", href: "/" }, { label: "Page not found" }]} />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
          <h1 className="mb-1 border-b-4 border-ndrs-accent pb-3 font-heading text-3xl font-bold text-foreground">
            We couldn&rsquo;t find that page (Error 404)
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
            <p>
              The resource you requested could not be located. It may have
              been deprecated ahead of schedule, sunset without ceremony, or
              may not yet have completed Phase 0 intake.
            </p>
            <p>
              This is not necessarily cause for concern. The Secretariat
              maintains a complete record of every designation, page, and
              record scheduled for removal, and regrets any inconvenience
              this may have caused.
            </p>
          </div>

          <h2 className="mt-8 mb-3 font-heading text-lg font-bold text-foreground">
            You may find these useful
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>
              <Link href="/" className="text-ndrs-link underline">
                NDRS-SRDN.ca home
              </Link>
            </li>
            <li>
              <Link href="/candidates" className="text-ndrs-link underline">
                Candidate designations
              </Link>
            </li>
            <li>
              <Link href="/archive" className="text-ndrs-link underline">
                Legacy Deprecation Archive
              </Link>
            </li>
            <li>
              <Link href="/updates" className="text-ndrs-link underline">
                Progress updates
              </Link>
            </li>
          </ul>

          <p className="mt-8 text-sm text-foreground">
            <em>Did you find what you were looking for?</em>{" "}
            <strong>Yes / No</strong>
          </p>
          <p className="mt-2 text-sm text-foreground">
            <strong>Date modified:</strong> 2026-07-09
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
