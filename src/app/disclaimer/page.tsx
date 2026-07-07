import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = {
  title: "Satire Disclaimer | NDRS",
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        trail={[{ label: "NDRS.ca", href: "/" }, { label: "Satire Disclaimer" }]}
      />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
          <h1 className="mb-1 border-b-4 border-ndrs-accent pb-3 font-heading text-3xl font-bold text-foreground">
            Satire Disclaimer
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
            <p>
              renamecanada.ca is a work of satire and political commentary. It
              is not affiliated with, endorsed by, or produced by the
              Government of Canada, any Canadian federal ministry or
              department, or any real organization.
            </p>
            <p>
              The &ldquo;National Designation Renewal Secretariat,&rdquo; the
              &ldquo;Canada Name Transition Pilot Program,&rdquo;
              &ldquo;Meridian Narrative Partners,&rdquo; and every program,
              office, consultation, statistic, quotation, and individual
              described on this site are fictional and invented for satirical
              purposes, except where a page is explicitly and clearly
              presenting real, well-documented Canadian history (as in the
              Legacy Deprecation Archive).
            </p>
            <p>
              No real Government of Canada wordmark, coat of arms, flag, or
              other official mark is used anywhere on this site. Any
              resemblance in layout or tone to real government websites is
              intentional pastiche, made for the purpose of parody and
              commentary, and is not intended to deceive.
            </p>
            <p>
              Canada&rsquo;s name is not changing. No vote conducted on this
              site has any legal or governmental effect. Nothing here should
              be relied upon as fact about any actual government policy,
              program, or initiative.
            </p>
            <p>
              This site is non-commercial: it does not accept donations, sell
              anything, or run advertising. If it made you care about
              Canadian heritage, here are two real organizations that do this
              work — renamecanada.ca is not affiliated with either, and
              neither has endorsed this site:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <a
                  href="https://nationaltrustcanada.ca"
                  className="text-ndrs-link underline"
                >
                  National Trust for Canada
                </a>{" "}
                — a registered charity dedicated to preserving historic
                places across the country.
              </li>
              <li>
                <a
                  href="https://canadashistory.ca"
                  className="text-ndrs-link underline"
                >
                  Canada&rsquo;s History Society
                </a>{" "}
                — publisher of{" "}
                <em>Canada&rsquo;s History</em> magazine and administrator of
                the Governor General&rsquo;s History Awards.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
