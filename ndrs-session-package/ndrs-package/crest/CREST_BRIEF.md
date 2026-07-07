# NDRS Crest — SVG Construction Brief

For Claude Code, in-repo. Read alongside `CLAUDE.md` §3 (pastiche, not impersonation) and §8 (design system). Reference raster: the approved generator output ("Choice B" composition) — leaf mostly intact, grid-aligned pixel dissolution drifting to the upper right.

## Concept

The mark is a maple leaf being deleted: the upper-right region of the leaf dissolves into a scatter of square pixels, as if the file is corrupting. The leaf must read first, the deletion second. This is the site's thesis in one image — heritage, mid-sunset.

## Deliverables (three files in `/public/crest/`)

1. **`crest-signature.svg`** — the primary mark. Used in the header signature next to the bilingual org text, and as the favicon source. Must be fully legible at 32px wide and survive at 16px.
2. **`crest-seal.svg`** — the signature mark enclosed in a thin double-ring circular border, official-seal style, ring left empty (no text ever). Used on report cover pages and the About page.
3. **`crest-watermark.svg`** — a heavier-erosion variant (roughly half the leaf dissolved; more, smaller particles) for the dark footer, where the real GC layout puts the Parliament silhouette. Tuned for large, low-contrast rendering — legibility at small sizes is not a requirement for this file only.

## Leaf geometry — the legal constraint (non-negotiable)

Do **not** reproduce or approximate the eleven-point maple leaf of the National Flag of Canada, and do not trace any generator output, which drifted toward the canonical leaf. Draw an original leaf:

- **Five lobes** (three prominent upper, two lateral), generic sugar-maple silhouette
- Deliberately different proportions from the flag leaf: broader and rounder lateral lobes, shallower/wider sinuses, thin and slightly tapered petiole (stem) — superseded from an earlier "shorter and thicker stem" instruction during iteration; the leaf-body distinction (smooth pointed lobes and wide soft sinuses vs. the flag's 11 sharp jagged points and deep straight-edged notches) carries the legal distance on its own
- Sanity check: place the finished path beside the flag leaf at equal size. If a casual viewer could mistake one for the other in silhouette, revise. Save this comparison as `/public/crest/comparison.png` — it goes in the legal review package.

**Construction note (as-built):** the leaf outline is a polar radius function sampled around a centre point and connected with a Catmull-Rom spline (not hand-drawn Bezier curves). Each lobe is a "bump" added to a base radius, shaped as `height × (1 − √(|Δθ| / width))` — steep right at the peak (produces an actual point, not a rounded dome) and flat near its own base (blends adjacent lobes into wide, soft, gently-curved sinuses rather than sharp V-notches). Base radius is kept high relative to bump height so the sinuses stay shallow. This profile is the mechanism that produces "pointed lobes, wide soft sinuses" simultaneously — a plain cosine bump (smooth dome, tried first) reads as rounded/blobby rather than leaf-like; a plain triangular/tent bump (tried second) creates sharp V-valleys resembling the flag leaf's notches. The √-falloff shape is what threads that needle.

## Composition (from the Choice B reference)

- Leaf occupies the left/lower ~two-thirds of the canvas; dissolution field occupies the upper right
- Dissolution has two parts: **(a) knockouts** — square holes punched inside the leaf body near the upper-right lobe, checkerboard-clustered, all snapped to one grid module; **(b) particles** — detached squares drifting up-and-right beyond the leaf edge, stepping down through 2–3 sizes (e.g. 1.0×, 0.6×, 0.35× module) and thinning with distance
- Everything square and grid-aligned. No rotation on any square, no blur, no motion lines — the erosion must look computed, not windblown
- Particle budget for the signature mark: ~18–24 particles total. Restraint reads governmental
- The drift direction is rightward/upward: the leaf erodes toward the reading direction

## Technical requirements

- Hand-authored SVG: one `<path>` for the leaf (with knockouts via `fill-rule="evenodd"` subpaths or a compound path), plus `<rect>` elements for particles. No `<image>`, no filters, no gradients
- `fill="currentColor"` throughout — no hardcoded colours anywhere. Page CSS decides: navy `#26374A` in the header, background-tinted in the footer
- Smallest particle tier wrapped in `<g class="crest-fine">` so it can be hidden via CSS below 24px rendering, keeping the favicon clean
- Square `viewBox` (e.g. `0 0 64 64`), tight but with the drift field inside the box so nothing clips
- `role="img"` and a `<title>` ("National Designation Renewal Secretariat crest (fictional)") on each file
- Target: signature mark under ~4KB

## Acceptance checklist

- [ ] Renders crisply at 16, 32, 64, and 320px (screenshot each)
- [ ] Leaf-vs-flag comparison image produced and visibly distinct
- [ ] Recolours correctly via CSS `color` on a parent element
- [ ] No text, crown, shield, animals, or red/white flag-bar motifs anywhere
- [ ] All three files share the same leaf path — variants differ only in erosion and framing
- [ ] `comparison.png` and the three SVGs added to the legal review package folder
