<script lang="ts">
  import { onMount } from 'svelte';
  import { JOBS } from '../jobs';

  const companyClass = (company: string) => company.toLowerCase().replaceAll(' ', '-');
  let section: HTMLElement;

  onMount(() => {
    const items = Array.from(section.querySelectorAll<HTMLElement>('.reveal'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-in'));
      return;
    }

    section.classList.add('reveal-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  });
</script>

<section class="experience" id="experience" bind:this={section}>
  <div class="shell">
    <header class="section-head reveal">
      <h2>Experience</h2>
      <p>Roles, products, and systems I've helped move forward.</p>
    </header>

    <div class="experience-list">
      {#each JOBS as job}
        <article class="experience-row reveal {companyClass(job.company)}">
          <div class="period"><span>{job.from}</span><span>{job.to}</span></div>
          <div class="role">
            <h3><a href={job.url} target="_blank" rel="noreferrer">{job.company}<span aria-hidden="true">↗</span></a></h3>
            <p class="position">{job.position}</p>
            <p class="description">{job.description.trim()}</p>
            <ul aria-label="Technologies used">
              {#each job.skills as skill}<li>{skill}</li>{/each}
            </ul>
          </div>
          <a class="visual" href={job.url} target="_blank" rel="noreferrer" aria-label="Open {job.company}">
            <img loading="lazy" width="890" height="500" src={job.wideImgUrl || job.imgUrl} alt="{job.company} product interface" />
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .experience { padding-block: var(--space-3xl); border-top: var(--rule-thin); }
  .section-head { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 0.65fr); gap: var(--space-xl); align-items: end; padding-bottom: var(--space-2xl); }
  .section-head h2 { font-size: var(--text-section); line-height: 1; }
  .section-head p { max-width: 28rem; color: var(--color-muted); line-height: 1.55; }
  .experience-list { border-top: var(--rule-thin); }
  :global(.reveal-ready) .reveal { opacity: 0; transform: translateY(0.75rem); }
  :global(.reveal-ready) .reveal:global(.is-in) { opacity: 1; transform: translateY(0); transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out); transition-delay: var(--reveal-delay, 0ms); }
  :global(.reveal-ready) .experience-row.reveal:global(.is-in) { transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out), background-color var(--dur-base) var(--ease-out); }
  .experience-row:nth-child(2) { --reveal-delay: calc(var(--dur-fast) * 0.5); }
  .experience-row:nth-child(3) { --reveal-delay: var(--dur-fast); }
  .experience-row:nth-child(4) { --reveal-delay: calc(var(--dur-fast) * 1.5); }
  .experience-row:nth-child(5) { --reveal-delay: calc(var(--dur-fast) * 2); }
  .experience-row { display: grid; grid-template-columns: 8.5rem minmax(0, 1fr) minmax(0, 19rem); gap: var(--space-xl); margin-inline: calc(var(--space-md) * -1); padding: var(--space-xl) var(--space-md); border-bottom: var(--rule-thin); border-radius: var(--radius-sm); align-items: start; transition: background-color var(--dur-base) var(--ease-out); }
  .period { display: grid; gap: var(--space-2xs); color: var(--color-muted); font: var(--text-xs)/1.4 var(--font-mono); font-variant-numeric: tabular-nums; text-transform: uppercase; }
  .role h3 { font-size: clamp(1.5rem, 3vw, 2.25rem); line-height: 1; }
  .role h3 a { display: inline-flex; align-items: baseline; gap: var(--space-sm); text-decoration: none; }
  .role h3 span { color: var(--color-accent); font: var(--text-sm) var(--font-mono); transition: transform var(--dur-base) var(--ease-out); }
  .position { margin-top: var(--space-sm); color: var(--color-ink); font-size: var(--text-sm); font-weight: 500; }
  .description { max-width: 39rem; margin-top: var(--space-md); color: var(--color-muted); font-size: var(--text-sm); line-height: 1.6; }
  ul { display: flex; flex-wrap: wrap; gap: var(--space-xs); margin: var(--space-lg) 0 0; padding: 0; list-style: none; }
  li { color: var(--color-muted); font: var(--text-xs) var(--font-mono); text-transform: uppercase; }
  li + li::before { content: '/'; margin-inline-end: var(--space-xs); color: var(--color-rule-strong); }
  .visual { min-width: 0; aspect-ratio: 16 / 10; overflow: clip; border: var(--rule-thin); border-radius: var(--radius-sm); background: var(--color-accent-soft); }
  .visual img { width: 100%; height: 100%; display: block; object-fit: cover; object-position: center; opacity: 0.72; filter: grayscale(1) contrast(1.08); mix-blend-mode: multiply; transition: opacity var(--dur-slow) var(--ease-out), filter var(--dur-slow) var(--ease-out); }
  :global(html.dark) .visual img { mix-blend-mode: luminosity; }
  .mercado-libre { --company-color: var(--color-company-meli); }
  .loud-intelligence { --company-color: var(--color-company-loud); }
  .talenthackers { --company-color: var(--color-company-talent); }
  .coderhouse { --company-color: var(--color-company-coder); }
  .\39 net { --company-color: var(--color-company-9net); }
  @media (hover: hover) and (pointer: fine) {
    .experience-row:hover { background: var(--color-paper-2); }
    .experience-row:hover .role h3 a { color: var(--company-color); }
    .experience-row:hover .role h3 span { transform: translate(0.16rem, -0.12rem); }
    .experience-row:hover .visual img { opacity: 1; filter: grayscale(0) contrast(1.02); mix-blend-mode: normal; }
  }
  .experience-row:focus-within { background: var(--color-paper-2); }
  .experience-row:focus-within .role h3 a { color: var(--company-color); }
  .experience-row:focus-within .role h3 span { transform: translate(0.16rem, -0.12rem); }
  .experience-row:focus-within .visual img { opacity: 1; filter: grayscale(0) contrast(1.02); mix-blend-mode: normal; }
  @media (max-width: 54rem) { .experience-row { grid-template-columns: 6.5rem minmax(0, 1fr); } .visual { grid-column: 2; max-width: 28rem; } }
  @media (max-width: 36rem) { .section-head { grid-template-columns: 1fr; } .experience-row { grid-template-columns: 1fr; gap: var(--space-md); } .period { display: flex; gap: var(--space-xs); } .period span + span::before { content: '—'; margin-inline-end: var(--space-xs); } .visual { grid-column: auto; margin-top: var(--space-sm); } }
  @media (prefers-reduced-motion: reduce) { :global(.reveal-ready) .reveal { opacity: 1; transform: none; transition: none; } .experience-row, .role h3 span, .visual img { transition: none; } }
</style>
