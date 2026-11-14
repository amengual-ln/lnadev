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
- Lautaro founded [Spärck](https://www.sparck.com.ar/), an open AI learning community with a public website, events agenda, and learning resources. The site is a potential public example of his work; his specific contributions and any claims of impact still need confirmation.
- Employer imagery in `static/jobs/`; these images are not evidence of Lautaro's own deliverables.
- No approved case study artifacts or impact metrics are supplied. Do not invent them.

## Product Principles

- Let visitors distinguish career history from demonstrable work.
- Explain contribution without exposing confidential material.
- Keep the CV aligned with the portfolio's public career data.

## Design Direction and Audit Progress

- The saved [Impeccable critique](.impeccable/critique/2026-11-08T00-47-09Z__src-routes-page-svelte.md) identified a gap between clearly listing experience and demonstrating product judgment. Its findings are a snapshot, not a current checklist: the CV inconsistency it identified has since been addressed through the shared jobs data.
- Lautaro preferred the [Working Proof concept](.impeccable/mocks/decision/working-proof.webp) among the exploratory mockups. It is inspiration, not an implementation specification: use its editorial emphasis on product thinking and frontend systems without copying unverified imagery, claims, or every visual detail. The current site remains the visual baseline.
- The landing currently consists of the hero and Experience, followed by the shared footer. The hero identifies Lautaro as Spärck's founder and links directly to its website in a new tab; this replaced the Argentina / UTC−3 profile block. Spärck is not yet presented as a dedicated project or case study.
- The hero portrait was inspired by AI Hero's integrated portrait treatment. Dark mode uses a transparent cutout that meets the bottom divider, sits in front of the extended profile rules and LinkedIn hover area, and has a softly animated backdrop. Respect reduced-motion preferences and keep the backdrop clipped at the divider.
- Light mode uses the original photo as a rectangular frame: the cutout looked too stark against the light background. On desktop, its bottom aligns with the profile links; the profile details and links have matching placement across themes, and the portrait's scale and position remain consistent when switching. Lautaro approved this balance.
- On mobile, the portrait follows the profile details and links and precedes Experience. Keep the light-mode photo inset from the section edges; a full-width black background was considered but not adopted. A shorter crop is an option if the photo feels too tall when scrolling, not a requested change.
- `static/personalportrait.jpeg` is the supplied original; `static/portrait-cutout-v2.png` is the Adobe background-removal cutout used in dark mode. `static/personalportrait-cutout.png` is the previous AI-edited cutout. Preserve the original when revising assets.

## Pending and Proposed Work

- Consider a dedicated Spärck feature between the hero and Experience, separate from employment history. This was proposed as a way to show a public product and community, but only the hero mention has been requested and implemented so far. Confirm which contributions, decisions, and artifacts Lautaro wants to highlight before writing a case study; do not invent outcomes or metrics.
- Make the opening and role descriptions more specific about verified contributions and decisions.
- Clearly distinguish employer illustrations and links from work artifacts, and make any genuine work samples legible and accurately attributed.
- Improve scanability and review small text and the repeated rhythm of Experience on mobile. Review future portrait changes in both themes and on mobile.
