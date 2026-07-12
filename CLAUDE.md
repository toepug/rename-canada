@AGENTS.md

# renamecanada.ca — Master Spec

**Version:** 0.9
**Last updated:** 2026-07-06
**Status:** Design system locked. Launch content set drafted (10 files: homepage, About, 4 Archive entries, Rejected Designations Annex, Legacy Risk Register, updates backfill, testimonials) with full voice contract (§11). Remaining pre-build: fact-check ledger (§11.7), Next.js scaffold

---

## 1. Concept & Satirical Thesis

A satirical website presenting itself as an earnest campaign to rename Canada to something new (and deliberately absurd). Inspired by real-world renaming controversies — touchstone example: Yonge-Dundas Square → Sankofa Square (multi-million-dollar rebrand, widely ignored by residents).

**Surface layer:** An org enthusiastically campaigning to erase Canada's name and, by extension, its history and heritage — complete with polls, articles, consultant reports, and implementation timelines.

**Deep layer (the real point):** A celebration and preservation of Canadian history and heritage. The satire argues that performative, expensive, committee-driven renaming is a substitute for actually engaging with history — and the site's loving documentation of "everything scheduled for deletion" does the preservation work in plain sight.

**Satirical mode:** Swiftian "modest proposal." Full commitment to the absurd position. Deadpan must be airtight — the site should read as a genuine advocacy org. No winking. Ideally, some visitors briefly wonder if it's real (DHMO.org energy).

## 2. Satirical Targets — Guardrails

**This section must survive into Claude Code's context and all content generation.**

Legitimate targets (institutions and decisions):
- Bureaucratic renaming mania and rebranding-by-committee
- Consultant-speak, "brand refresh" language, stakeholder-engagement theatre
- Enormous costs (signage, legal, systems) for symbolic change
- Performative gestures substituting for substantive engagement with history
- Corporate Canada and government policy where relevant — always as institutional decisions

Off-limits (non-negotiable):
- No jokes aimed at ethnic groups, immigrant communities, or any identity group
- No stereotypes, including "running joke" stereotypes about who works where
- The renaming debate touches live tensions around Indigenous reconciliation and anti-racism; the satire must never read as "renaming things for marginalized groups is inherently stupid." Target the bureaucracy and the erasure of *everyone's* history instead
- Possible smart inversion: the fictional org dismisses Indigenous place names as "too historical"

**Litmus test for every joke:** Is the target something someone *chose* (a policy, a budget, a strategy)? If the target is who someone *is*, cut it.

## 3. Organization Voice — LOCKED: Government Pilot Program

The site presents as a **fictional federal pilot program** run by an invented ministry. Treasury Board / Canada.ca aesthetic pastiched at ~85% fidelity: right fonts and layout DNA, wrong crest, wrong ministry, absurd mandate.

### Naming — LOCKED

- **Ministry/org:** **National Designation Renewal Secretariat (NDRS)** — French: *Secrétariat du renouvellement des désignations nationales*. "Secretariat" = coordinates everything, responsible for nothing; "Designation Renewal" is the euphemism (never says *renaming* or *erasing*).
- **Program (public name):** **Canada Name Transition Pilot Program (Phase 0)**
- **Program (formal designation, fine print):** *National Identifier Sunset and Succession Program (TB Reg. 2024-117)* — real-government pattern of public brand name + formal registered name (cf. "Phoenix" = public name for the Transformation of Pay Administration Initiative). "Sunset and succession" mirrors the Archive's deprecation language.
- **Consultant-side project name:** *Project Northstar: A National Renaming Journey* — used only in Meridian Narrative Partners reports; the tension between the ministry's dry naming and the consultants' inspirational naming is its own running joke.

### "Phase 0" mechanics

Phase 0 = pre-phase scoping, before the work formally begins. Three functions:
1. **Promises infinity:** homepage timeline graphic shows Phase 0 highlighted with ~6 greyed-out future phases trailing to 2041.
2. **Excuses everything:** every fake progress update reports momentum with zero concrete change ("Phase 0 scoping revealed additional complexity"). The satirical thesis in miniature.
3. **Content mechanic (reserved):** a future site-wide event where the program triumphantly transitions to Phase 1 — which turns out to be a second scoping phase.

Why this voice: a government program is the only org that would plausibly maintain a deprecation registry — giving the Legacy Deprecation Archive its most believable home (reference numbers, review dates, sunset schedules).

The other two candidate voices are **embedded, not discarded**:
- **Consultancy layer:** commissioned reports from a fake firm (e.g. "Meridian Narrative Partners") — "Brand Transition Feasibility Study" with realistic budget line items ($4.2B signage, etc.). Lives in the Consultant Reports section.
- **Astroturf layer:** a "Public Engagement" section with curated testimonials from "Canadians like you," petition counters, manufactured-consent theatre.

### Pastiche, not impersonation — GUARDRAIL (non-negotiable)

The brief is: *unmistakably governmental in flavour, unmistakably fictional on inspection.* (Reference model: The Beaverton — perfect register, zero real confusion about source.)

- **Never** use the actual Government of Canada wordmark, coat of arms, flag-based federal identity marks, or any real official mark (these are protected as official marks under s. 9 of the Trade-marks Act)
- **Never** use a real ministry/department name; the fictional ministry name appears everywhere a real one would
- Invented crest/logo only; no canada.ca-lookalike URL structures
- The absurd mandate + fictional ministry + footer disclaimer must together make the fiction discoverable on inspection
- Rationale: avoids official-marks and impersonation exposure, and prevents "the government is renaming Canada??" media confusion. A fake ministry taking itself seriously is also funnier than a forgery.

## 4. Site Architecture — Route Map (LOCKED)

Every page and its URL. `[slug]` routes work like the blog patterns on contactsadvice/ReceiptSafety — one template, many entries.

| Route | Page | Notes |
|-------|------|-------|
| `/` | Homepage | Mission statement, Phase 0 timeline graphic (Phase 0 highlighted, ~6 greyed-out phases to 2041), live poll with current standings |
| `/candidates` | Shortlist index | All 8 candidate names + vote standings |
| `/candidates/[slug]` | Candidate profile | e.g. `/candidates/norterra`, `/candidates/kanada`. Register = Norterra™ voice sample (§5). Consultation stamp on every profile |
| `/archive` | Legacy Deprecation Archive index | The preservation layer's front door |
| `/archive/[slug]` | Archive entry | e.g. `/archive/welland-canal`. Loving, well-researched history in deprecation framing. Heart of the site |
| `/archive/rejected-designations` | "Too historical" rejects annex | Writing rule in §5 applies: names respected, rejection reasons are the only joke |
| `/reports` | Consultant reports | Meridian Narrative Partners deliverables; index + fake PDFs with realistic budget line items |
| `/engagement` | Public Engagement | Astroturf section: curated testimonials, petition counter, "Share Your Voice" submission form (intake per §5) |
| `/updates` | Progress updates | Momentum-without-change news ("The Secretariat continues to have confidence in the Kanada option") |
| `/about` | About the NDRS | Mandate, fictional org chart, formal program designation in fine print (TB Reg. 2024-117) |
| `/disclaimer` | Satire disclaimer | Linked in every footer |
| `/api/vote` | API route | Records poll votes (rate-limited) |
| `/api/submit` | API route | Receives name submissions into private queue (never publishes) |

**Global elements:** GC-pastiche header (fictional crest, bilingual toggle), breadcrumbs, footer with disclaimer link + "Date modified" on every page.

**Donate button:** destination still undecided (dead-end vs. real heritage charity) — carried on the pre-launch checklist.

## 5. Candidate Country Names & Public Submissions

### Submission model — LOCKED: curated intake, open voting

**No user content publishes automatically.** Three-stage pipeline:
1. **Intake:** "Share Your Voice" suggestion form (perfect consultation pastiche). Submissions go to a private queue (Google Sheet or Upstash Redis — Jason's existing pattern) — never directly to the site.
2. **Curation:** Jason hand-picks the best submissions into the official shortlist. Guardrails (§2) apply to everything published, including user-derived names.
3. **Voting:** open public voting on the pre-approved shortlist only. Voting is low-risk because options are curated; needs basic rate limiting.

**Moderation-as-content (play the bottleneck straight):**
- Form confirmation: "Thank you. Your submission has entered Phase 0 intake review. Current processing time: 14–16 months."
- Public counter: "12,847 submissions received; 6 advanced to shortlist consideration."
- Periodic "Submission Disqualification Report" with invented rejection criteria ("insufficiently forward-looking," "too historical").

Rationale: open publishing = permanent moderation burden (slurs, harassment, guardrail violations under the site's name) + vote-integrity infrastructure. The bureaucratic bottleneck is both the safe design and the joke — it's how a real consultation behaves.

### Launch shortlist — LOCKED (v0.5)

Each name gets a profile page implying *who proposed it* — that's where the satire attaches.

| # | Name | Origin / joke |
|---|------|---------------|
| 1 | **Norterra™** | Meridian flagship deliverable; $340K development incl. "linguistic testing in 14 markets" |
| 2 | **Kanada (with a K)** | The ministry's **officially preferred candidate**; laziest possible deliverable billed at full rate; "a bold reimagining that honours legacy while signalling transformation" |
| 3 | **Vantage North** | "Performs strongly with the 25–54 demographic" |
| 4 | **Maplea** | Focus groups found it "inoffensive" |
| 5 | **Solvenna** | Global Resonance Slate: invented consultant-generated "international" name selected via cross-cultural resonance matrix; etymology section reads "N/A" |
| 6 | **Canada presented by [SPONSOR PENDING]** | Naming-rights culture target; negotiations in Phase 0 since 2023; placeholder never fills in. No real brands ever named |
| 7 | **Nameless McNameface** | Public-consultation entry; leads the vote by a considerable margin; "under review for compliance with dignity criteria" |
| 8 | **Canada 2** | Rejection drafted but not yet published: "implies the existence of Canada 1, creating legacy confusion" |

**Structural mechanics:**
- **Standing horse race:** Kanada perpetually endorsed by the Secretariat, perpetually losing to Nameless McNameface → endless progress-update content ("The Secretariat continues to have confidence in the Kanada option")
- **Consultation stamp:** every profile shows "Stakeholder consultation: COMPLETE ✓" linking to a report revealing a 45-minute Zoom, 11 attendees, 9 of them ministry staff
- **Core criterion (the thesis joke):** winning name must "carry no association with any historical event whatsoever," since all history contains grievance — meaninglessness celebrated as the program's central achievement
- **Global Resonance Slate rule:** "international" names are always *invented* consultant words (never real words borrowed from actual cultures); the joke targets the committee's selection logic (no speakers consulted, "cross-cultural resonance matrix"), never any culture or its names

### "Too historical" rejects page (Archive annex)

Separate page of rejected names drawn from real Canadian history and Indigenous place-naming traditions, each rejected for being "excessively rooted in heritage," "temporally regressive," or "insufficiently forward-compatible." **Writing rule:** the rejected names and their real histories are treated with full respect and genuine research — the ministry's rejection reasons are the only joke. This inversion (the ministry finds meaning itself disqualifying) quietly makes the site's real argument. Highest-care content on the site.

### Voice sample — Norterra™ profile page (register reference for Claude Code)

> **Candidate Designation 2024-CN-001: Norterra™**
> Status: Active — Shortlisted (Phase 0)
> Stakeholder consultation: COMPLETE ✓
>
> Norterra™ was developed by Meridian Narrative Partners following an 11-month discovery engagement encompassing linguistic testing across 14 international markets, three rounds of sentiment mapping, and a proprietary Cross-Cultural Resonance Matrix™ evaluation. Total development investment: $340,000 (excl. HST).
>
> Meridian's Final Naming Architecture Report describes Norterra™ as "a forward-compatible identity platform that decouples national belonging from geographic and historical specificity, unlocking meaning-agnostic brand equity for all Canadians and future Canadians alike."
>
> The designation carries no association with any historical event, figure, or tradition. The Secretariat wishes to assure Canadians that this was verified.
>
> *Etymology: None. This is a feature.*
>
> **Public support:** 4.1% *(Nameless McNameface: 61.7%)*
> **Date modified:** 2026-03-14

## 6. Content & Tone Guide

- Earnest advocacy-org register at all times; never break character on main pages
- Fake budget line items and implementation details should look plausibly real
- Archive entries: genuine, well-researched Canadian history framed as "content pending deletion"
- Polls and petition counters as engagement props

## 7. Technical — LOCKED

- **Stack:** Next.js / Tailwind, deployed on Vercel (consistent with EyeQ Vision, Timber and Trims builds)
- **Domain:** renamecanada.ca — register personally (CIRA Canadian presence: Canadian citizen category; individual registrants get WHOIS privacy by default)
- **Data store:** Upstash Redis for both poll vote counters and the submission queue (one store; Timber and Trims pattern — remember the KV_ vs. UPSTASH_ env-var prefix issue on Vercel)
- **Content format:** markdown with frontmatter in `/content/` directories (ReceiptSafety pattern). Applies to Archive entries, candidate profiles, updates, and engagement testimonials. Uniform format > mixing in the contactsadvice TS-file approach
- **Repo setup:** `CLAUDE.md` seeded from this spec; `.claude/settings.json` with `"model": "claude-sonnet-4-6"` pinned (prevents the 1M-context model switch that breaks the Pro workflow)

### Vote model — LOCKED: delayed/curated display

- **Recording:** every vote hits `/api/vote` → increments a Redis counter. Basic per-IP rate limiting via `@upstash/ratelimit`
- **Display:** public standings are a **static snapshot updated manually** ("quarterly tabulations"), stored in content files. Never live
- **In-universe framing:** "Standings as of the Q2 2026 Interim Tabulation. Next scheduled tabulation: Q4 2026. Vote processing time: 90–120 days"
- **Rationale:** live totals = vote-integrity infrastructure (bots, brigading, CAPTCHA) for a joke poll, plus an implicit legitimacy promise the site doesn't need. The delay is authentic government behaviour — no real consultation shows live results — so the constraint *is* the joke. Side benefits: editorial control over the horse race, each tabulation is an `/updates` content event, vote-stuffing accomplishes nothing visible
- True counts are viewable in the Upstash console and can inform (or be comedically ignored by) each tabulation update

## 8. Design System — GC Pastiche (LOCKED)

Derived from reference screenshots: Canada.ca Content Style Guide, ISED public consultations, "Connect with government," Canada Gazette commenting page, IRCC consultations, Consulting with Canadians directory. The rule everywhere: **structural DNA at 100%, identity marks swapped, fidelity ~85%.**

### Page anatomy (top to bottom — every page)

1. **Header:** [fictional NDRS crest] + dual-language org signature side by side ("National Designation Renewal Secretariat / Secrétariat du renouvellement des désignations nationales"), FR toggle top-right, full-width "Search NDRS-SRDN.ca" bar with dark search button, dark **MENU ▾** dropdown button on its own row
2. **Breadcrumbs:** small chevron-separated trail (`NDRS-SRDN.ca > Programs > Canada Name Transition Pilot Program`)
3. **H1:** large, with the signature **short red accent bar underneath** — the single most recognizable GC page element. Optional small "eyebrow" line above (program name), and "From: [Secretariat]" attribution line below, per the ISED pattern
4. **"On this page"** anchor-link TOC on longer pages
5. Body content (components below)
6. **"Did you find what you were looking for?" Yes/No feedback box** — keep verbatim; on this site it's also a joke
7. **"Date modified: YYYY-MM-DD"** — every page, always
8. **Footer, two-tier:** dark navy multi-column block ("Government links" style theme list; replace the Parliament-silhouette watermark with a fictional-crest silhouette) + light sub-footer strip (About, Terms, Privacy, **Satire Disclaimer**) + wordmark bottom-right (fictional "NDRS" mark where "Canada" wordmark sits)

### Design tokens

- **Fonts:** Lato (headings), Noto Sans (body) — the real GC pairing, both on Google Fonts
- **Colours:** body text near-black `#333`; link blue `#284162` (visited purple per browser default); H1 accent bar red `#AF3C43`; footer/menu navy `#26374A`; page background white; light grey `#F5F5F5` for boxes/feedback bar
- Keep colours exact — the pastiche reads through structure and marks, not palette deviation. The crest/wordmark swap carries the "fictional" signal

### Component inventory (from screenshots → site usage)

| Real component | NDRS usage |
|---|---|
| Numbered headings ("1.0", "1.1", "2.2") | Reports, About mandate, Archive entries ("3.2 Sunset rationale") |
| Yellow ⚠ warning callout ("Official languages requirements") | "⚠ This designation has not yet completed dignity compliance review" |
| Yellow **Archived** badge + date (IRCC) | Deprecation statuses: **DEPRECATION SCHEDULED** / **SUNSET PENDING** badges on Archive entries |
| Green "Open — accepting registrations" status tag (Consulting with Canadians) | Poll/consultation status tags ("Open — accepting designations") |
| Reports & publications date table (IRCC) | `/reports` index and quarterly tabulation history |
| "Recent updates" changelog with dates (style guide) | Ministry logging trivial revisions with gravity ("Updated hyphenation in section 4.6") |
| "In this section" boxes | Long-page navigation on About and Reports |
| Consultation search/filter panel ("854 consultations found") | Archive index filter ("2,344 heritage assets scheduled") |
| Account login flow + comment rules (Gazette) | Referenced in-universe only ("submissions require a MyNDRS account"; the form works without one — the requirement is aspirational, per Phase 0) |

### What is deliberately NOT reproduced (guardrail, cf. §3)

- No Canadian flag glyph, no real "Canada" wordmark, no coat of arms, no Parliament silhouette
- No real department names or gc.ca-style URL cues
- Crest built and integrated (2026-07-07, revised 2026-07-08, see §10 and `crest/CREST_BRIEF.md`): a maple leaf mid-dissolve into pixels. As shipped, this is Jason's own reference raster (`public/crest/rename-canada-crest.png`), not a hand-authored SVG — earlier vector-trace attempts (both procedural and coordinate-measured) failed to reliably match it. Processed into two transparent PNG variants: `crest-navy.png` (header, About-page seal, favicon) and `crest-white.png` (low-contrast footer watermark, since navy-on-navy was invisible). `src/components/Crest.tsx` renders these via `<img>`; the seal's double-ring border is still real SVG, drawn around the raster image. Verified distinct from the flag's 11-point leaf via `/public/crest/comparison.png`, though flagged for the lawyer review as a closer margin than the original hand-authored design targeted. Live in the header, footer (6% opacity), About page (seal near §1.0 Mandate), and the favicon set

### Voice note from the style-guide capture

The real Canada.ca style guide mandates plain language ("help people complete tasks," "the duty to be clear," "trim content"). NDRS pages should *cite* plain-language principles in headers while delivering maximal euphemism in body copy — the gap between the two is a running joke that the reference material hands us for free.

## 9. Pre-Launch Checklist

- [ ] **Legal review (required before launch, not before design):** fixed-fee consultation with an IP/media lawyer to review the live design — official-marks proximity, disclaimer adequacy, and defamation exposure in fictional consultant reports. Context: parody/satire are explicit fair dealing purposes under s. 29 of the Copyright Act (2012 amendment) and political satire is core Charter-protected expression, but official marks (Trade-marks Act s. 9) and government-impersonation provisions are the narrow real-risk zones the design guardrails are built around. Note: this reflects Claude's general research, not legal advice — hence the review.
- [x] Footer satire disclaimer in place and discoverable
- [x] Confirm no real GoC marks, crests, or ministry names anywhere in final assets: crest is an original 5-lobed leaf, verified distinct from the flag leaf via side-by-side comparison (`/public/crest/comparison.png`, §10 2026-07-07); no ministry names were ever real
- [x] Donate button destination decided: in-universe dead-end (see §10 2026-07-07). Real-charity link lives in the disclaimer instead, out of character.

## 10. Decision Log

| Date | Decision |
|------|----------|
| 2026-07-04 | Core concept locked: deadpan renaming-advocacy satire with hidden preservation layer |
| 2026-07-04 | Guardrails locked: institutional targets only; no jokes at ethnic/identity groups |
| 2026-07-04 | Legacy Deprecation Archive confirmed as the preservation mechanism |
| 2026-07-04 | Org voice locked: government pilot program (fictional ministry), with consultancy layer embedded as commissioned reports and astroturf layer as Public Engagement section |
| 2026-07-04 | Guardrail added: pastiche, not impersonation — no real GoC marks/ministry names, fiction discoverable on inspection |
| 2026-07-04 | Pre-launch legal review added as a required checklist item |
| 2026-07-05 | Naming locked: NDRS (ministry), Canada Name Transition Pilot Program (Phase 0) as public program name, National Identifier Sunset and Succession Program as formal designation, Project Northstar as consultant-side name |
| 2026-07-05 | Phase 0 mechanics defined: infinite timeline graphic, momentum-without-change progress updates, Phase 1 transition reserved as future content event |
| 2026-07-05 | Submission model locked: curated intake (private queue) + hand-picked shortlist + open voting on shortlist only; moderation bottleneck played straight as content |
| 2026-07-05 | Launch shortlist locked (8 names) with structural mechanics: Kanada-vs-McNameface horse race, consultation stamp, "no historical association" core criterion, invented-words-only rule for Global Resonance Slate |
| 2026-07-05 | "Too historical" rejects page confirmed as Archive annex; writing rule: real names/histories respected, rejection reasons are the only joke |
| 2026-07-05 | Norterra™ voice sample added as register reference for build phase |
| 2026-07-05 | Route map locked: 11 page routes + 2 API routes; candidates and archive as [slug] patterns; global GC-pastiche header/footer elements defined |
| 2026-07-05 | Tech locked: Next.js/Tailwind/Vercel, Upstash Redis (votes + submission queue), markdown-with-frontmatter content, model pin in .claude/settings.json |
| 2026-07-05 | Vote model locked: real recording with per-IP rate limit, but public standings are manual "quarterly tabulations" — never live. The delay is the joke |
| 2026-07-05 | Design system locked from 6 Canada.ca reference screenshots: full page anatomy, exact GC tokens (Lato/Noto Sans, #AF3C43 accent, #26374A navy), component inventory mapped to site features, identity-mark swap list |
| 2026-07-06 | Launch content set drafted (10 files): homepage, About, 4 Archive entries (Canada, Flag Debate, Welland Canal, Winnie), Precedent File (1867), Rejected Designations Annex, Legacy Risk Register (Meridian), updates backfill ×6, testimonials ×6 |
| 2026-07-06 | Content Register Reference added as §11 — the complete voice contract for build-phase content (three registers, recession rule, flourish budget, furniture dictionary, structural templates, fact-check ledger) |
| 2026-07-06 | Wink-threshold calls ruled (§11.4): bathos, ministry self-awareness aside, and the casual testimonial line all kept as written; the Kanata "pronounce its own name correctly" line and the About §4.0 circular transparency line softened |
| 2026-07-06 | All 8 candidate profiles drafted and integrated (Norterra, Kanada, Vantage North, Maplea, Solvenna, sponsor-pending, McNameface, Canada 2), plus `/api/vote` and `/api/submit` wired to a lazily-constructed Upstash Redis client; site now builds green with 34 routes |
| 2026-07-07 | Second wink-threshold pass ruled on candidate-profile lines (§11.4): Kanada's "This determination is final.", Solvenna's "verified at considerable expense," Maplea's Meridian quote, and the submit route's "You will not be contacted." all kept as written. Maplea ruling refined: the line reads as an *accidental* self-own from Meridian's point of view (a name that "asks nothing of the public and offers the same in return" is a friction-free-adoption triumph in their frame, not doubt) — consistent with the register rule rather than an exception to it |
| 2026-07-07 | Donate button destination decided: in-universe dead-end ("Donation intake is currently in Phase 0 scoping. Projected acceptance of contributions: 2029"), keeping the site itself non-commercial and unqualified. A real-charity pointer (National Trust for Canada; Canada's History Society) lives in the out-of-character disclaimer instead, where it costs nothing legally |
| 2026-07-07 | Crest built per `CREST_BRIEF.md`, first pass: original 5-lobed leaf (smooth cosine-bump polar-radius construction, rounded domed lobes, short thick stem) with a maple-leaf-into-pixels dissolution effect, verified visibly distinct from the flag's 11-point leaf via side-by-side comparison. Three files delivered, all sharing one leaf path, `currentColor` throughout, signature under 4KB |
| 2026-07-07 | Incidental fix while building the crest: raw HTML comments in markdown content (eyebrow/breadcrumb/render-note annotations) were rendering as literal visible text on every content page instead of being stripped; fixed in `src/lib/content.ts` |
| 2026-07-07 | Crest leaf redesigned against a supplied reference image: the first-pass rounded/domed lobes read as a starburst rather than a leaf. Rebuilt with a √-falloff bump profile (steep at each peak → pointed lobes, flat near the base → wide soft sinuses), thin tapered petiole (supersedes the original "shorter/thicker stem" line — the leaf-body distinction carries the legal distance on its own; logged in `CREST_BRIEF.md`). Caught and fixed a real clipping bug in the same pass: the leaf's coordinate bounds extended outside its declared viewBox (apex at y=-6, lateral lobe at x=-0.7) — invisible in the raster test tool used during iteration but would have clipped in an actual browser (confirmed via a real-browser Playwright render before and after the fix). Also fixed a non-square favicon render (68×70 leaf viewBox producing 48×49 PNGs) that broke Next.js's strict ICO decoder |
| 2026-07-07 | Crest integration completed: header, footer, About page, and favicon set all live with the redesigned leaf; comparison.png, the three SVGs, and `CREST_BRIEF.md` in the legal package folder all updated to match the shipped geometry |
| 2026-07-07 | Site pushed to GitHub (github.com/toepug/rename-canada), first commit — repo was not previously version-controlled |
| 2026-07-07 | Crest leaf corrected against feedback that the shipped mark read as a rounded starburst, not a leaf: BASE radius (the "waist" between lobes) was too high (15) and bump widths too wide, so adjacent lobes' flat-near-base regions overlapped and nearly erased the sinuses. Retuned to BASE=12 with narrower, better-separated bump widths — deep enough sinuses to read as 5 distinct lobes, not so narrow that they read as a sharp-pointed star (both intermediate tunings were tried and rejected first). Propagated through all three SVGs, the favicon set, and both the live site and the legal package |
| 2026-07-08 | Crest switched from hand-authored SVG to the raster reference image Jason supplied directly (`rename-canada-crest.png`), after further vector-trace attempts (measuring the reference's real coordinates via a grid overlay, since no vectorization tool was available) failed to reliably capture the upper-lobe geometry — the same feature was measured three different ways with three different results, and the resulting traced path lost the lobe structure entirely. A three-way comparison (reference / traced attempt / earlier procedural version) showed the procedural version was closer to the reference than the literal trace was, but Jason directed using the actual image rather than continuing vector reconstruction. Implementation: white background chroma-keyed to transparency, producing a navy variant (header, seal, favicon) and a white variant (footer watermark, since navy-on-navy was invisible). `Crest.tsx` rewritten from inline-SVG (`currentColor`) to `<img>`-based (two pre-rendered colour variants, since raster can't recolor per-context live). Caught and fixed a real bug in the same pass: `CrestSeal`'s own `relative` class collided with the caller's `absolute` class on the same element (Tailwind's generated CSS order decides which wins, not the className string order), which silently broke the About-page seal's positioning — it rendered inline at the top of the page instead of absolutely positioned top-right. `CREST_BRIEF.md` and the legal-review guardrails summary updated to flag that this reference image sits closer to the flag's eleven-point leaf than the hand-authored attempts did — still clearly distinct, but the margin is narrower and explicitly _not_ self-certified; called out for counsel to look at directly |
| 2026-07-09 | Fixed unreadable footer nav links (Programs/Engagement/About columns): they had no explicit text color, so they inherited the global `a`/`a:visited` rules (dark blue / purple, meant for body content on white backgrounds) — nearly invisible on the navy footer. Root cause turned out to be two-layered: (1) those links needed an explicit `text-white`, and (2) adding it alone didn't work at first because the global `a { color }` rule in `globals.css` was unlayered CSS, and unlayered CSS beats Tailwind's layered utility classes regardless of specificity. Fixed by wrapping the global link-color rules in `@layer base`, letting `text-white`/`visited:text-white` on the footer links correctly override them |
| 2026-07-10 | Site-wide broken-link crawl run (BFS from `/`, all 34 routes + markdown content links). Found exactly 2 broken links, both on the homepage: `/updates/faq-timeline` and `/engagement/submission-status`. Both trace back to `content/pages/home.md`'s "Most requested" list — the intended answer copy for each is already drafted in HTML comments right next to the links, but the actual pages were never built. Flagged to Jason rather than invented (his instruction); not yet fixed |
| 2026-07-10 | Custom `src/app/not-found.tsx` built in full GC pastiche (header, breadcrumb, red-bar H1, helpful links, feedback box, date modified, footer), replacing the framework-default 404. Copy wink-threshold checked against §11.4: "sunset without ceremony" judged to clear the bar — reads as dry procedural rhythm (three parallel deprecation-hypotheses, mirroring real GC list anaphora) rather than an audible joke, similar precedent to "Every story is a decision." being kept in an earlier pass despite being flagged as "written." Logged as ruled-and-kept rather than self-certified silently |
| 2026-07-11 | New archive entry: Asset File 1959, The Avro Arrow (`content/archive/avro-arrow.md`) — the CF-105 interceptor program cancelled by the Diefenbaker government on 20 February 1959 ("Black Friday"), all airframes and tooling ordered destroyed within weeks. Chosen deliberately as a flagship-tier entry: a real government-program cancellation, which lets the deprecation-assessment section discover the asset was already fully sunset decades before the Program existed — the archive format documenting its own logic back at itself. Facts cross-verified via web search (rollout/Sputnik coincidence, first-flight date, Black Friday date, ~14,000 same-day layoffs, destruction of aircraft and drawings, the Chamberlin/Maynard NASA diaspora) rather than drafted from memory alone; four figures flagged to Jason as needing his own verification pass rather than shipped on my confidence alone (exact top speed, total wider job-loss estimate, NASA "Avro Group" headcount, total program cost). Recession rule (§11.3) applied to the Black Friday layoff passage (§2.3) — straight, no adjacent ministry commentary. Added a matching §3.5 deep-dive to `legacy-risk-register.md` (bumped to Revision 5) to make the Meridian-report cross-reference real rather than a citation to a section that didn't exist; cross-referenced [Asset File 0117: The Great Flag Debate] on the genuine Diefenbaker-appears-in-both-files connection (government 1959, opposition 1964). The one flourish (consultation-stamp footnote, "the Secretariat notes with approval the precedent set in 1959 for prompt and thorough disposition of technical records") is *not yet ruled* — per standing process, flourishes are Jason's call, not self-certified. The "2,344 heritage assets scheduled" counter was deliberately left untouched — it's framed sitewide as the total inventory, not a count of drafted files, so a 7th drafted entry doesn't move it |
| 2026-07-10 | Chrome domain string changed sitewide, "NDRS.ca" → "NDRS-SRDN.ca": NDRS.ca is a real registered domain (a Vancouver high school), and the hyphenated bilingual-acronym-pair pattern (cf. tbs-sct.canada.ca, cra-arc.gc.ca) is also higher-fidelity pastiche than a plain English-only domain would be. Replaced in every user-facing location (header search placeholder, all 13 page breadcrumb trails, not-found.tsx's "home" link) and every doc/comment instance (breadcrumb HTML comments across all 9 live `content/` files, CLAUDE.md §8's page-anatomy description, the candidates `_index.md` frontmatter copy in the legal package). Left untouched, correctly: `renamecanada.ca` (the real domain — out of scope), "MyNDRS account" (the org acronym, not this domain string), and `renamecanada-launch-content/` (frozen paper-trail folder, doesn't match live content and was never updated for later content changes either). This is a chrome-string-only change — no DNS/config action taken; whether to actually register ndrs-srdn.ca is a separate decision |
| 2026-07-12 | Requested new archive entry on Winnie-the-bear turned out to duplicate Asset File 1877 (`winnie.md`, drafted in the original launch set), which already covers Colebourn, White River, the London Zoo, and the Milne connection framed strictly as history. Flagged rather than duplicated; Jason confirmed leave-as-is. No file changed |
| 2026-07-12 | New archive entry: Asset File 1892, The Stanley Cup (`content/archive/stanley-cup.md`) — chosen for its "object with an official keeper" angle. Facts cross-verified via web search rather than drafted from memory: 1892 donation by Governor General Lord Stanley (10 guineas, G.R. Collis & Co., announced 18 March 1892), the challenge-cup era to 1926, the 1947 NHL/trustees agreement, the three physical cups (original retired 1970, Presentation Cup 1963, Permanent Cup 1993 — which silently corrected engraving errors the touring cup still carries), documented engraving mistakes (Plante's five spellings, Bruins "BQSTQN" 1972, Deadmarsh "Deadmarch" 1996), the 1907 flowerpot incident, and the disputed 1905 Rideau Canal drop-kick legend (presented as disputed, per Bill Westwick's and Frank Calder's denials, not asserted as fact). Two points flagged [VERIFY] in the entry itself rather than shipped on confidence alone: the exact year of the Toronto "Leaes" misprint, and the total count of documented engraving errors. No recession-rule passage was needed — the subject has no real-loss core comparable to Welland's 137 or the Arrow's Black Friday layoffs. Central joke lives in §3.2: the Cup is held in a perpetual trust independent of the NHL, any team, or any government, leaving the Secretariat with no addressable counterparty for a deprecation order — mirrors the Avro Arrow's "already sunset before the Program existed" self-defeating-finding structure. Added a matching §3.6 deep-dive to `legacy-risk-register.md` (bumped to Revision 6; also corrected a stale "Revision 4" in the document's own body text left over from an earlier pass that only bumped the frontmatter). Cross-referenced Asset File 0009: The Bluenose and a not-yet-drafted Grey Cup entry (file pending) on the genuine Earl Grey/Governor-General-donated-trophy parallel. Flourish (consultation-stamp footnote, the trustees declining consultation on jurisdictional grounds) is *not yet ruled* — Jason's call, not self-certified. The "2,344 heritage assets scheduled" counter again left untouched per the established precedent (total inventory, not a file count) |
| 2026-07-12 | New archive entry: Asset File 1908, Anne of Green Gables (`content/archive/anne-of-green-gables.md`) — chosen for the "ministry assessing a fictional person" angle. First entry whose subject never happened, which the 3.1 finding addresses directly: the Program's core criterion (no association with any historical event) doesn't cleanly apply to a fictional character, yet Meridian's Fact Density instrument still reads severe off 118 years of downstream real-world effects. Facts verified via web search: 1908 publication by L. C. Page & Co. (hat-box manuscript story, ~19,000 copies in five months), the Cavendish/Macneill farmhouse origin, Green Gables Heritage Place as an actual Parks Canada National Historic Site, the Confederation Centre musical's Guinness World Record (running since 1965), Hanako Muraoka's 1952 wartime translation and Japan's ~20%-of-tourists / wedding-ceremony connection, and the Anne of Green Gables Licensing Authority Inc. (jointly PEI government + Montgomery's heirs) controlling the character under non-expiring Trade-marks Act s.9 official marks even though the novel itself is public domain — including the real 2023 *Anne With An E, LLC* lawsuit, dismissed by mutual agreement that July. One point flagged [VERIFY]: the exact Canadian public-domain entry date (sources gave 1992 without a specific day). Montgomery's 1942 death is mentioned once, plainly, with no cause stated and no adjacent commentary — the disputed-suicide account from her granddaughter's 2008 disclosure was deliberately left out as unnecessary and sensitive to a real person's family, not because the recession rule (§11.3) was formally invoked (the entry isn't substantially about her death). Central joke lives in §3.2, a dual-jurisdiction variant of the Stanley Cup's self-defeating finding: the physical site answers to Parks Canada, the character's likeness answers to the Licensing Authority in perpetuity, and neither is reachable by the Secretariat — cross-referenced directly to [Asset File 1892: The Stanley Cup] as a paired "official keeper" precedent. Added a matching §3.7 deep-dive to `legacy-risk-register.md` (bumped to Revision 7). Flourish (consultation-stamp footnote: the asset couldn't be reached for comment because it doesn't exist) is *not yet ruled* — Jason's call. The "2,344 heritage assets scheduled" counter again left untouched |
| 2026-07-12 | New archive entry: Asset File 1901, Signal Hill (`content/archive/signal-hill.md`) — Marconi's 12 December 1901 reception of the first transatlantic wireless signal, chosen to pair thematically with the site's digital-deletion motif. Facts verified via web search: the Poldhu-to-Signal-Hill setup, George Kemp, the kite-borne antenna after two balloon failures, the "S" signal and Marconi's diary line ("Sigs. at 12:30, 1:10 and 2:20"), contemporary skepticism (the signal was heard by ear only, with no independent physical record — noted straight, not invented), the Anglo-American Telegraph Company's monopoly threat that pushed Marconi to Glace Bay within the year, and the original receiving building (an abandoned fever and diphtheria hospital) having since burned down, distinct from the nearby Cabot Tower (built 1897–1900 for Cabot's quatercentenary and Victoria's Jubilee, unconnected to the 1901 event, later host to an unrelated 1933–1960 Marconi station). No [VERIFY] flags — every load-bearing fact had corroborating sources; contemporary-skepticism language was hedged rather than asserted, which covers the one point without full certainty. The core joke, structured as a 3.1/3.2 pair like the preceding three entries: Newfoundland was a separate British Dominion in 1901 and didn't join Canada until 1949, so the "Canadian achievement" is retroactive by 48 years (3.1), and the actual event site no longer physically exists while the popularly-photographed tower wasn't even built yet at the time (3.2) — no target and no jurisdiction in the same place at once. No recession-rule passage needed (no human-loss core). Cross-referenced [Asset File 1908: Anne of Green Gables] on the genuine shared Parks Canada jurisdiction thread. Added a matching §3.8 deep-dive to `legacy-risk-register.md` (bumped to Revision 8). Flourish (consultation-stamp footnote: the vanished building vs. the not-yet-built tower) is *not yet ruled* — Jason's call. The "2,344 heritage assets scheduled" counter again left untouched |
| 2026-07-12 | New archive entry: Asset File 1967, Expo 67 (`content/archive/expo-67.md`) — chosen to pair "peak national optimism" against a Program that promises the future indefinitely. Facts verified via web search: Moscow's 1962 bid withdrawal and Jean Drapeau's counter-pitch to the BIE, Pierre Dupuy's appointment and 125-country outreach, the two purpose-built islands (~25 million tons of fill, 10–12% from concurrent Montreal Metro excavation), the "Terre des Hommes"/Saint-Exupéry theme chosen at the 1963 Montebello meeting, attendance (54,991,806 against ~20 million national population, 569,500 single-day record, 62 nations), Habitat 67 (Safdie's McGill thesis, sold to private owners, 2009 federal heritage building designation — deliberately not conflated with "National Historic Site," a distinct designation), the 20 May 1976 dome fire (confirmed no fatalities before writing it in), the Biosphère's 1990 federal acquisition and 1995 reopening, "Man and His World"'s quiet 1981 closure, and the park's 1999 renaming to Parc Jean-Drapeau following the mayor's death that year. No [VERIFY] flags. No recession-rule passage needed (no human-loss core; explicitly checked the 1976 fire for casualties before treating it lightly). Central joke in §3.2 is a fragmentation variant, escalating past the prior three single-authority self-defeating findings: the site's three surviving pieces now answer to three unrelated authorities (a private condo corporation, Environment Canada, and the City of Montreal) — deliberately varied from Parks Canada to avoid repeating the same department a fourth time. Cross-referenced [Precedent File: The 1867 Naming Exercise] both directions — added a reciprocal link and changelog row to `1867-naming-exercise.md` §5.0, since the centennial connection is genuinely earned. Added a matching §3.9 deep-dive to `legacy-risk-register.md` (bumped to Revision 9). Flourish (consultation-stamp footnote: three authorities invited, none aware the other two existed) is *not yet ruled* — Jason's call. The "2,344 heritage assets scheduled" counter again left untouched |

## 11. Content Register Reference

**Consolidates all register decisions from the drafted launch set** (10 files: Asset Files 0001/Canada, 0117/Flag Debate, 0214/Welland Canal, 1877/Winnie; Precedent File 1867; Rejected Designations Annex; Legacy Risk Register; updates backfill ×6; testimonials ×6; homepage; About). This section plus the Norterra™ sample (§5) is the complete voice contract for build-phase content.

### 11.1 The three registers

| Register | Lives in | Character | Failure mode to avoid |
|---|---|---|---|
| **Ministry** | Archive, updates, About, homepage, candidate profiles | Underdescribes. Flat, procedural, passive where possible. Never enthusiastic. Declares victory over things it has not touched | Audible sarcasm; adjectives |
| **Meridian** | Reports, quoted excerpts | Overdescribes. Warm, inspirational, grateful, trademarked. Sincerity is the joke | Self-awareness; the consultants never doubt |
| **Curated public** | Testimonials, quoted submissions | Faintly wrong — each testimonial fails to sound human in a different way. One per set may sound genuinely human (that one sells the rest) | All six wrong in the same way |

The two institutional registers lie in opposite directions: the ministry says less than is true, Meridian says more. Their collision (e.g., a Meridian excerpt quoted inside a ministry page) is a standing joke — never smooth the seam.

### 11.2 The ordinary archive entry — three moves

Proven in Asset File 0214 (Welland); the repeatable form for all non-flagship entries:

1. **Summary-table hook.** One row in the 1.0 table carries the entry's recurring observation, marked `— **flagged**` (0214: "Times renamed: 0"; 1877: acquisition cost $20; 0001: etymology confirmed).
2. **History straight, one recession point.** The historical record is genuinely researched and warmly written. Exactly one passage per entry lets the frame recede entirely (see 11.3).
3. **Self-defeating assessment.** Section 3 finds the asset non-compliant, then discovers it cannot be touched (operational entanglement, jurisdiction, moral courage), and closes with the standard disposition: **deferred queue → "reviewed quarterly, indefinitely" → "The Secretariat is satisfied that this constitutes progress."**

Length target: 0214 is the workhorse benchmark (~⅔ of a flagship). Small-story entries (1877) run shorter; the panel or process may visibly break instead of the frame (1877 s. 3.2 minutes — "The panel has no further recommendations").

### 11.3 The recession rule

Where real loss appears — death, war dead, the disappearance of a people or language — **the joke goes fully silent**:

- One straight passage; no ministry commentary in the adjacent sentences; section break before the register resumes
- The only permitted editorial move is quiet enrollment into the Archive's own logic ("Their names are part of this asset's record")
- Applied at: St. Lawrence Iroquoians (0001 §2.1), McGee's assassination (Precedent §2.2), the 137 (0214 §2.3)
- **Insulin protocol** (for assets involving saved/lost lives in consultant voice): the matrix breaks against the asset — "resists reframing," "outside the matrix," scheduled "by someone else." The instrument fails; the thing is never joked about
- Standing guardrail restated: stories of actual state erasure of communities stay outside the deprecation device entirely (§2)

### 11.4 Flourish budget & the wink threshold

**One flourish per entry**, canonical placement: the consultation-stamp footnote (e.g., "The rock was not consulted and has filed no objection"; "Efforts to locate a stakeholder without emotional attachment were unsuccessful and have been discontinued"). If a flourish appears elsewhere, the stamp goes plain.

**Wink-threshold rulings (2026-07-06, Jason):**

| Line | File | Ruling |
|---|---|---|
| "…and Tim Hortons opening" | 0001 §3.2 | **Kept as written** |
| "Anyway — great website" | Testimonial (D.W.) | **Kept as written** |
| "an activity…now handled by vendors" | 0117 §2.1 | **Kept as written** |
| "pronounce its own name correctly" | Annex A.1 | **Softened** — revised to "asks the Program to adopt a living form of the word the country is already named for" (removes the "correctly" editorializing jab) |
| "Every story is a decision." (Meridian tagline) | Risk Register | **Kept as written** |
| "transparency about when pages were modified" | About §4.0 | **Softened** — trimmed to "as part of its commitment to transparency" (cut the redundant trailing clause) |

**Wink-threshold rulings (2026-07-06, second pass — candidate profiles, reviewed live on the dev server):**

| Line | File | Ruling |
|---|---|---|
| "This determination is final." | Kanada §Compliance | **Kept as written** |
| "...verified at considerable expense." | Solvenna §Compliance | **Kept as written** — flagged as the closest call ("considerable" is an adjective doing evaluative work, the Ministry register's flagged failure mode), ruled to keep anyway |
| "asks nothing of the public and offers the same in return" | Maplea (Meridian quote) | **Kept as written** — flagged as a possible Meridian-register violation (consultants sounding self-aware rather than sincere), ruled to keep anyway |
| "You will not be contacted." | /api/submit response copy | **Kept as written** |

Precedent from this pass: lines that read as procedural finality (Ministry) or as sincere-sounding but quietly hollow praise (Meridian) both clear the bar even when they brush against a named failure mode — the register test is read in context, not applied mechanically.

**Wink-threshold rulings (2026-07-10, 404 page copy):**

| Line | File | Ruling |
|---|---|---|
| "sunset without ceremony" | not-found.tsx | **Kept as written** — reads as dry procedural rhythm (three parallel deprecation-hypotheses in a row, mirroring real GC list anaphora) rather than an audible joke; same shape of call as "Every story is a decision." above |

Ruled lines are precedent for future drafts: bathos, half-sentence ministry self-awareness, and a lone human-sounding testimonial line all clear the bar; circular/redundant phrasing and history-section editorializing (even when gentle) get trimmed.

### 11.5 Furniture dictionary (established vocabulary — reuse, don't reinvent)

**Ministry process:**
- Deferred queue; "The Secretariat is satisfied that this constitutes progress." (standard entry closer)
- "referred to Phase 0 scoping" / "referred for additional scoping" (standard non-resolution)
- "The Secretariat continues to have confidence in the Kanada option." (verbatim, every tabulation context)
- "The Secretariat has elected not to [complete this field / discuss it]"
- "The question was logged." / "Attempts are logged."
- **RESTRICTED — MORALE** (files documenting successful cheap precedents)
- "consensus by error" (the 1964 committee vote; a classified methodology)
- "strongest momentum in the field when measured as momentum"
- Documentation obligation: **TB Reg. 2024-117, s. 12(b)** — cited at the top of every historical record; the site's covert oath lives in About §2.0 fn.3

**Numbers (canonical, never vary):**
- Processing: submissions **14–16 months**; votes **90–120 days**
- Consultation: **one (1) videoconference, 45 minutes, 11 attendees, 9 Secretariat staff**
- Inventory: **2,344 heritage assets**; **12,847 submissions received; 6 advanced**
- Meridian: **$340,000** per name (excl. HST); **18-month** deliverable warranty; **1:6.2** reference ratio; survey **n=1,204**; Feasibility Study is **214 pages**
- Standings: Q2 2026 = McNameface 61.7 / Kanada 11.2 / Vantage North 8.9 / Maplea 6.3 / Norterra 4.1 / Solvenna 3.8 / Canada 2 3.6 / [SPONSOR PENDING] 0.4

**Meridian vocabulary:** Heritage Density Scan™; Emotional Attachment Index™; Fact Density; Forward Compatibility; Tier One (Concerning); "Concerning (adj.): exhibiting resonance"; the streisand adjacency (always lowercase); "journey"; Work Order 7; deliverable numbers PN-D-###; Narrative Risk Practice.

**Cross-register echoes:** "Etymology: None. This is a feature." (Norterra profile → Annex note); "meaning-agnostic" (Meridian coinage, ministry adoption, testimonial leakage — E.D. of Moose Jaw).

**Numbering schemes:** Asset files `LDA-####` (Meridian asset # = LDA #); precedent suffix `-P`; rejected designations `RD-YYYY-###`; annex `LDA-ANNEX-A`; sections numbered `1.0/2.1` style throughout.

### 11.6 Structural templates

**Archive entry anatomy (fixed order):** frontmatter → eyebrow/breadcrumb comments → H1 → "From:" line → status blockquote (⚠ badge + one-line rationale + "preserved for administrative completeness only") → On this page → 1.0 summary table → 2.0 historical record (opens with the s. 12(b) citation line) → 3.0 deprecation assessment → 4.0/5.0 related records → consultation stamp + footnote → Recent updates table (3 rows) → feedback line → Date modified.

**Changelog gravity rule:** every Recent updates table contains exactly one trivial revision logged with full gravity (em dash correction, morale flag application, hyphenation).

**Depth devices (use all three across the set):** full cross-reference to a drafted page; Meridian asset-number citation; `*(file pending)*` related record. Every entry cites 2–4 others.

**Date ecosystem (backfill spine — new content must not contradict):** Meridian Risk Register final 2025 → Archive opens 2026-01-15 (Asset File 0001 logged) → correction post 03-12 → dignity review month 14 as of 04-09 → sponsor update 05-20 → Q2 Tabulation 2026-06-30 (votes to 03-31). Winnie-the-Pooh centenary = October 2026 (in-universe future event opportunity).

**Homepage/About register:** doormat descriptions are one sentence, load-bearing (Archive: "…the names, events, achievements, and stories scheduled to be lost"). Phase names on the timeline stay vague ("Initiation Readiness") to preserve the reserved Phase-1-is-more-scoping reveal (§3).

### 11.7 Fact-check ledger (pre-launch pass)

| Claim | File | Note |
|---|---|---|
| McGee remark, 9 Feb 1865 | Precedent §2.2, Annex A.2 | Paraphrased deliberately — wording varies by source; keep paraphrase, verify date |
| Canada Day bill, July 1982 "minutes, barely a quorum" | Precedent §2.4 | Standard telling; verify before hanging the MORALE joke on it |
| Flag: 163–78 vote; 14–0 committee story; "thousands" of designs | 0117 | Verify vote counts; submission count kept vague on purpose |
| Eleven points chosen for wind legibility | 0117 §2.4 | Widely reported; confirm phrasing |
| Welland: 43.4 km; ~99.5 m rise; 14.2 m lift; 137 fatalities; first transit 1829-11-30; traffic figures | 0214 | Traffic numbers are round approximations — pin to current Seaway source |
| Winnie: $20; White River Aug 1914; London Zoo Dec 1914; Pooh pub. Oct 1926; died 1934 | 1877 | Solid but verify $20 and zoo dates |
| Mohawk *kaná:ta'* "town" as living cognate | Annex A.1 | Verify orthography with a current Mohawk-language source |
| Kanata, Ont.: founded 1960s, amalgamated 2001 | Annex A.1 | Verify founding framing (Bill Teron planned community) |
| L'Anse aux Meadows: 1960 Ingstads; ~1000 CE; 1978 UNESCO first cohort | Annex A.4 | Solid; confirm "among the first" phrasing |
| Tilley / Psalm 72:8 / London Conference | Precedent §2.3 | Standard account; verify |

### 11.8 Care calibration (guardrails as practiced)

- Indigenous content: the Kanata entry (Annex A.1) is the template — living language facts stated plainly, full respect in the record, the ministry's criterion the only joke. The inversion (§2: "too historical") is now implemented; do not escalate it into mockery of any proposal's supporters
- Named individuals appear in ministry register only as historical figures with straight treatment; in Meridian register, individuals are minimized (the insulin protocol, 11.3)
- The satire's only villains remain the process and the vendor — reconfirmed across all ten files; no drafted joke targets a person, community, or heritage itself
