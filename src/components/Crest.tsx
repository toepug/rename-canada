// Raster crest, sourced directly from the hand-drawn reference image
// (public/crest/rename-canada-crest.png) rather than a hand-authored SVG --
// see CLAUDE.md decision log for why the vector-trace attempts were
// dropped. Navy and white variants are pre-rendered with the white
// background chroma-keyed to transparency (public/crest/crest-navy.png,
// crest-white.png).
const ASPECT_RATIO = 2304 / 1842; // source image width / height

interface CrestProps {
  className?: string;
  /** Purely decorative usage (e.g. a background watermark) -- hides the
   * image from assistive tech instead of announcing it a second time next
   * to real page content. */
  decorative?: boolean;
}

export function CrestSignature({ className, decorative }: CrestProps) {
  return (
    <img
      src="/crest/crest-navy.png"
      alt={decorative ? "" : "National Designation Renewal Secretariat crest (fictional)"}
      aria-hidden={decorative || undefined}
      className={`inline-block object-contain ${className ?? ""}`}
      style={{ aspectRatio: ASPECT_RATIO }}
    />
  );
}

export function CrestSeal({ className, decorative }: CrestProps) {
  // Positioning/sizing classes from the caller (e.g. "absolute top-10
  // right-4 h-28 w-28") go on this outer span. The inner span is always
  // "relative" regardless of what the caller passes -- if "relative" lived
  // on the same element as a caller-supplied "absolute", the two classes
  // would collide (whichever Tailwind utility comes later in the generated
  // stylesheet wins, not whichever is later in the className string), which
  // is exactly what silently broke this the first time.
  return (
    <span className={className} aria-hidden={decorative || undefined}>
      <span className="relative block h-full w-full">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <title>National Designation Renewal Secretariat crest (fictional)</title>
          <circle cx="50" cy="50" r="47.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="50" cy="50" r="43" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <img
          src="/crest/crest-navy.png"
          alt=""
          aria-hidden
          className="absolute top-1/2 left-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 object-contain"
          style={{ aspectRatio: ASPECT_RATIO }}
        />
      </span>
    </span>
  );
}

export function CrestWatermark({ className, decorative }: CrestProps) {
  return (
    <img
      src="/crest/crest-white.png"
      alt={decorative ? "" : "National Designation Renewal Secretariat crest (fictional)"}
      aria-hidden={decorative || undefined}
      className={`inline-block object-contain ${className ?? ""}`}
      style={{ aspectRatio: ASPECT_RATIO }}
    />
  );
}
