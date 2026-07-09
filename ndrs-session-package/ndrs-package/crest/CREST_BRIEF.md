# NDRS Crest — Construction Brief

For Claude Code, in-repo. Read alongside `CLAUDE.md` §3 (pastiche, not impersonation) and §8 (design system).

## Status (2026-07-08): superseded from hand-authored SVG to the raster reference image

Everything below describing a hand-authored SVG construction (polar radius function, Catmull-Rom spline, √-falloff bump profile) was the **first approach** and is kept for historical record — it produced a leaf that, after several correction rounds, still read as a rounded starburst rather than a maple leaf at actual display size, because manual coordinate-extraction from a reference image (no vectorization tooling available) couldn't reliably pin down the upper-lobe geometry (the same feature was measured three different ways with three different results across attempts).

Jason supplied the actual target reference image (`rename-canada-crest.png`, 2304×1842) directly and, after the SVG attempts were shown side-by-side against it, directed that the site use that image itself rather than continue vector reconstruction. **The crest is now the raster reference image**, processed as follows:

- `rename-canada-crest.png` — the original reference, kept as source-of-truth (not directly used on the site; large file, opaque white background baked in)
- `crest-navy.png` — the reference with its white background chroma-keyed to transparency (any pixel's "whiteness" maps to alpha), resized to 400px wide for web weight (~145KB). Used for the header signature, the About-page seal, and the favicon set.
- `crest-white.png` — same alpha/shape, recoloured solid white. Used at low opacity (~6%) for the footer watermark, where the navy original is nearly invisible against the navy background.

This means the three-variant/hand-authored-SVG deliverable structure below is **no longer accurate** — there is one image processed into two colour variants, not three independent SVGs. The `currentColor`/`<g class="crest-fine">`/single-shared-path technical requirements no longer apply (raster, not vector). Integration is via `<img>` in `src/components/Crest.tsx`, with the seal's double-ring border still drawn as a real SVG (vector rings, raster leaf composited inside).

**Legal-distance note for the lawyer review:** this reference image reads closer to the flag's eleven-point leaf than the hand-authored attempts did — it's still clearly distinct (5 smooth rounded points vs. 11 sharp angular ones; continuous curves vs. straight-line facets; shallow wide sinuses vs. deep narrow notches) but the margin is smaller than the original brief's guardrail was written for. Flagged explicitly rather than self-certified, since this was Jason's direct asset choice, not a design constrained for legal distance from the outset. See the updated `comparison.png` (shipped crest vs. the actual flag leaf, same scale).

---

## Original brief (superseded, kept for record)

### Concept

The mark is a maple leaf being deleted: the upper-right region of the leaf dissolves into a scatter of square pixels, as if the file is corrupting. The leaf must read first, the deletion second. This is the site's thesis in one image — heritage, mid-sunset. (This concept is unchanged — the raster reference image executes the same idea.)

### Deliverables (three files in `/public/crest/`) — superseded, see Status above

1. **`crest-signature.svg`** — the primary mark. Used in the header signature next to the bilingual org text, and as the favicon source. Must be fully legible at 32px wide and survive at 16px.
2. **`crest-seal.svg`** — the signature mark enclosed in a thin double-ring circular border, official-seal style, ring left empty (no text ever). Used on report cover pages and the About page.
3. **`crest-watermark.svg`** — a heavier-erosion variant (roughly half the leaf dissolved; more, smaller particles) for the dark footer, where the real GC layout puts the Parliament silhouette. Tuned for large, low-contrast rendering — legibility at small sizes is not a requirement for this file only.

### Leaf geometry — the legal constraint (non-negotiable, still applies to the raster image)

Do **not** reproduce or approximate the eleven-point maple leaf of the National Flag of Canada. Sanity check: place the finished mark beside the flag leaf at equal size. If a casual viewer could mistake one for the other in silhouette, revise. Save this comparison as `/public/crest/comparison.png` — it goes in the legal review package. (Still done — see Status above for the current result and its flagged margin.)

**Construction note (first SVG attempt, abandoned):** the leaf outline was a polar radius function sampled around a centre point and connected with a Catmull-Rom spline. Each lobe was a "bump" added to a base radius, shaped as `height × (1 − √(|Δθ| / width))` — steep right at the peak, flat near its own base. This profile was the mechanism intended to produce "pointed lobes, wide soft sinuses" simultaneously — a plain cosine bump read as rounded/blobby; a plain triangular/tent bump created sharp V-valleys resembling the flag leaf's notches. Even after that fix, manual measurement of the reference image's upper-lobe coordinates (no zoom/pixel-picker tooling, just visual estimation on a compressed image) proved unreliable enough that the traced version lost the lobe structure entirely (read as a kite/shield). The procedural version read closer to a real leaf than the traced version did, but neither matched the reference as well as just using the reference.

### Composition (from the Choice B reference)

- Leaf occupies the left/lower ~two-thirds of the canvas; dissolution field occupies the upper right
- Dissolution has two parts: **(a) knockouts** — square holes punched inside the leaf body near the upper-right lobe, checkerboard-clustered, all snapped to one grid module; **(b) particles** — detached squares drifting up-and-right beyond the leaf edge, stepping down through 2–3 sizes and thinning with distance
- Everything square and grid-aligned. No rotation on any square, no blur, no motion lines
- The drift direction is rightward/upward: the leaf erodes toward the reading direction

(All of the above is already baked into the reference raster as supplied — nothing to construct.)

## Acceptance checklist

- [x] Renders crisply at header (~40px tall), seal (~112px), favicon (16/32/48), and full size
- [x] Leaf-vs-flag comparison image produced — visibly distinct, though flagged for the lawyer (see Status above)
- [x] Recolours available as two pre-rendered variants (navy, white) rather than live `currentColor` — raster tradeoff, accepted
- [x] No text, crown, shield, animals, or red/white flag-bar motifs anywhere
- [x] `comparison.png` and the raster assets added to the legal review package folder
