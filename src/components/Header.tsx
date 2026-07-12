import Link from "next/link";
import { CrestSignature } from "./Crest";

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="bg-white px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <CrestSignature className="h-10 w-auto shrink-0" />
            <span className="font-heading text-sm font-bold leading-tight text-foreground md:text-base">
              National Designation Renewal Secretariat
              <br />
              <span className="font-body font-normal text-xs text-gray-500 md:text-sm">
                Secrétariat du renouvellement des désignations nationales
              </span>
            </span>
          </Link>
          <button
            type="button"
            className="shrink-0 font-body text-sm text-ndrs-link underline"
          >
            Français
          </button>
        </div>
      </div>
      <div className="bg-white px-4 pb-3 md:px-8">
        <div className="mx-auto flex max-w-6xl gap-0">
          <input
            type="search"
            placeholder="Search NDRS-SRDN.ca"
            className="w-full border border-gray-400 px-3 py-2 text-sm"
          />
          <button
            type="button"
            className="shrink-0 bg-ndrs-navy px-4 py-2 text-sm font-bold text-white"
          >
            Search
          </button>
        </div>
      </div>
      <div className="bg-ndrs-navy px-4 py-2 md:px-8">
        <div className="mx-auto max-w-6xl">
          <button
            type="button"
            className="font-body text-sm font-bold text-white"
          >
            MENU ▾
          </button>
        </div>
      </div>
    </header>
  );
}
