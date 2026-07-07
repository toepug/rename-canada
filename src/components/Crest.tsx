import fs from "fs";
import path from "path";

const CREST_DIR = path.join(process.cwd(), "public", "crest");

function readSvg(name: string) {
  return fs.readFileSync(path.join(CREST_DIR, name), "utf8");
}

interface CrestProps {
  className?: string;
  /** Purely decorative usage (e.g. a background watermark) -- hides the
   * mark's own role="img"/title from assistive tech instead of announcing
   * it a second time next to real page content. */
  decorative?: boolean;
}

function CrestIcon({
  file,
  className,
  decorative,
}: CrestProps & { file: string }) {
  const svg = readSvg(file);
  return (
    <span
      className={`crest-icon inline-block ${className ?? ""}`}
      aria-hidden={decorative || undefined}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export function CrestSignature(props: CrestProps) {
  return <CrestIcon file="crest-signature.svg" {...props} />;
}

export function CrestSeal(props: CrestProps) {
  return <CrestIcon file="crest-seal.svg" {...props} />;
}

export function CrestWatermark(props: CrestProps) {
  return <CrestIcon file="crest-watermark.svg" {...props} />;
}
