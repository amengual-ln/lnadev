<svelte:head>
  <title>LinkedIn banner · Lautaro Amengual</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main class="banner" aria-label="LinkedIn banner for Lautaro Amengual">
  <div class="avatar-safe" aria-hidden="true"></div>

  <section class="message">
    <p class="banner-meta">Lautaro Amengual · Software engineer</p>
    <h1>I build the systems behind products and the interfaces people enjoy using.</h1>
    <div class="details">
      <p>Product engineering · DX · UX</p>
      <p>Frontend Engineer @ Mercado Libre</p>
    </div>
  </section>
</main>

<style>
  /* Hallmark · derivative asset: LinkedIn banner · design-system: portfolio Cobalt
   * canvas: 1584 × 396 · tone: minimal technical · profile-photo safe zone: left 28%
   */
  :global(html),
  :global(body) { min-height: 100%; background: var(--color-paper); }

  .banner { width: 100%; min-height: 100svh; display: grid; grid-template-columns: minmax(22rem, 36%) minmax(0, 1fr); overflow: clip; background: var(--color-paper); color: var(--color-ink); }
  .avatar-safe { position: relative; border-inline-end: var(--rule-thin); }
  .message { min-width: 0; display: flex; flex-direction: column; justify-content: center; align-items: flex-end; padding: var(--space-xl) clamp(3rem, 5vw, 5rem); text-align: right; }
  .banner-meta { color: var(--color-muted); font: 500 var(--text-xs)/1.4 var(--font-mono); letter-spacing: 0.06em; text-transform: uppercase; }
  h1 { max-width: 22ch; margin-top: var(--space-md); font-size: clamp(2.25rem, 3.55vw, 3.5rem); line-height: 1; }
  .details { width: 100%; display: flex; justify-content: flex-end; align-items: center; gap: var(--space-2xl); margin-top: var(--space-xl); padding-top: var(--space-md); border-top: var(--rule-thin); color: var(--color-muted); font-size: var(--text-sm); }
  .details p:last-child { color: var(--color-ink-2); font-weight: 500; white-space: nowrap; }

  @media (max-aspect-ratio: 2 / 1) {
    .banner { grid-template-columns: 1fr; }
    .avatar-safe { display: none; }
    .message { min-height: 100svh; padding: var(--space-xl); }
    .details { align-items: flex-start; flex-direction: column; gap: var(--space-sm); }
  }
</style>
