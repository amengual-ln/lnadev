# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People evaluating Lautaro Amengual's software engineering and product building experience. The first impression should foreground his product judgment.

## Product Purpose

A personal portfolio that communicates professional experience, how Lautaro approaches frontend systems and products, and ways to contact him or read his CV.

## Capabilities and Constraints

- The landing can evolve visually; preserve its current identity unless a broader redesign is agreed.
- Employer imagery is illustrative. In most cases, confidentiality prevents showing actual work.
- Public employment data lives in `src/jobs.js` and feeds both the landing and the on-demand CV. The user confirmed this shared source.
- LinkedIn is a public profile link, not an automatic source of employment history.

## Evidence on Hand

- Five public roles, descriptions, dates, and technology lists in `src/jobs.js`.
- Employer imagery in `static/jobs/`; these images are not evidence of Lautaro's own deliverables.
- No approved case study artifacts or impact metrics are supplied. Do not invent them.

## Product Principles

- Let visitors distinguish career history from demonstrable work.
- Explain contribution without exposing confidential material.
- Keep the CV aligned with the portfolio's public career data.

## Design Direction and Audit Progress

- The saved [Impeccable critique](.impeccable/critique/2026-11-08T00-47-09Z__src-routes-page-svelte.md) identified a gap between clearly listing experience and demonstrating product judgment. Its findings are a snapshot, not a current checklist: the CV inconsistency it identified has since been addressed through the shared jobs data.
- Lautaro preferred the [Working Proof concept](.impeccable/mocks/decision/working-proof.webp) among the exploratory mockups. It is inspiration, not an implementation specification: use its editorial emphasis on product thinking and frontend systems without copying unverified imagery, claims, or every visual detail. The current site remains the visual baseline.
- The hero portrait was inspired by AI Hero's integrated portrait treatment. In dark mode, the transparent cutout meets the bottom divider, sits in front of the extended profile rules and LinkedIn hover area, and has a softly animated, irregular backdrop. Respect reduced-motion preferences and keep the backdrop clipped at the divider. The portrait and backdrop are hidden in light mode for now; the user accepted that compromise rather than an unreviewed light-mode treatment.
- `static/personalportrait.jpeg` is the supplied original; `static/personalportrait-cutout.png` is an AI-edited transparent version used by the hero. Preserve the original when revising the asset.
- Future audit work: make the opening and role descriptions more specific about verified contributions; clearly distinguish employer illustrations and links from work artifacts; improve scanability and review small text on mobile. Do not invent cases, results, or metrics. Any future light-mode portrait treatment needs visual review in both themes and on mobile.
