import Link from "next/link";
import { CrestWatermark } from "./Crest";

const govLinks = [
  {
    title: "Programs",
    links: [
      { label: "Candidate designations", href: "/candidates" },
      { label: "Legacy Deprecation Archive", href: "/archive" },
      { label: "Reports and publications", href: "/reports" },
    ],
  },
  {
    title: "Engagement",
    links: [
      { label: "Public engagement", href: "/engagement" },
      { label: "Progress updates", href: "/updates" },
      { label: "Share Your Voice", href: "/engagement" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About the Secretariat", href: "/about" },
      { label: "Support the Program", href: "/donate" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="relative overflow-hidden bg-ndrs-navy px-4 py-10 text-white md:px-8">
        <CrestWatermark
          decorative
          className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-72 opacity-[0.06] md:h-96 md:w-96"
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-3">
          {govLinks.map((col) => (
            <div key={col.title}>
              <h2 className="mb-3 font-heading text-sm font-bold uppercase tracking-wide">
                {col.title}
              </h2>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="opacity-90 underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-ndrs-grey px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm">
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/about" className="text-ndrs-link underline">
                About
              </Link>
            </li>
            <li>
              <span className="text-ndrs-link underline">Terms</span>
            </li>
            <li>
              <span className="text-ndrs-link underline">Privacy</span>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="font-bold text-ndrs-link underline"
              >
                Satire Disclaimer
              </Link>
            </li>
          </ul>
          <span className="font-heading font-bold text-ndrs-navy">NDRS</span>
        </div>
      </div>
    </footer>
  );
}
