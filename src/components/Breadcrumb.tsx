import Link from "next/link";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-gray-200 bg-white px-4 py-2 text-xs text-gray-600 md:px-8"
    >
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1">
        {trail.map((crumb, i) => (
          <li key={i} className="flex items-center gap-1">
            {crumb.href ? (
              <Link href={crumb.href} className="text-ndrs-link underline">
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {i < trail.length - 1 && <span aria-hidden>›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
