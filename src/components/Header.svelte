<script>
  import { onMount } from 'svelte';
  import DarkModeToggle from './DarkModeToggle.svelte';

  let collapsed = false;
  onMount(() => {
    const timer = setTimeout(() => { collapsed = true; }, 3000);
    return () => clearTimeout(timer);
  });
</script>

<header class="site-header">
  <div class="nav shell">
    <a class="identity" href="#home" aria-label="Lautaro N Amengual, home">
      <span class="wordmark" class:collapsed aria-hidden="true"><span>L</span><span class="remainder">autaro</span><span class="word-space"> </span><span>N</span><span class="word-space"> </span><span>A</span><span class="remainder">mengual</span></span>
    </a>
    <DarkModeToggle />
  </div>
</header>

<style>
  .site-header { position: sticky; top: 0; z-index: 30; border-bottom: var(--rule-thin); background: var(--color-nav-background); color: var(--color-ink); backdrop-filter: blur(14px) saturate(1.25); -webkit-backdrop-filter: blur(14px) saturate(1.25); }
  .nav { min-height: 3.75rem; display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); animation: enter var(--dur-slow) var(--ease-out) both; }
  .identity { min-height: 2.75rem; display: inline-flex; align-items: center; font: 500 var(--text-sm)/1 var(--font-mono); text-decoration: none; white-space: nowrap; }
  .wordmark { display: inline-flex; align-items: baseline; font-family: var(--font-display); font-size: 1.125rem; font-weight: 600; letter-spacing: -0.035em; transition: letter-spacing 0.9s var(--ease-out); }
  .remainder, .word-space { overflow: hidden; white-space: pre; opacity: 1; transition: max-width 0.9s var(--ease-out), opacity 0.9s var(--ease-out); }
  .remainder { max-width: 6rem; }
  .word-space { width: 0.3em; max-width: 0.3em; flex-shrink: 0; }
  .collapsed { letter-spacing: -0.09em; }
  .collapsed .remainder, .collapsed .word-space { max-width: 0; opacity: 0; }
  .identity:focus-visible .wordmark { letter-spacing: -0.035em; }
  .identity:focus-visible .remainder { max-width: 6rem; opacity: 1; }
  .identity:focus-visible .word-space { max-width: 0.3em; opacity: 1; }
  @media (hover: hover) { .identity:hover .wordmark { letter-spacing: -0.035em; } .identity:hover .remainder { max-width: 6rem; opacity: 1; } .identity:hover .word-space { max-width: 0.3em; opacity: 1; } }
  @keyframes enter { from { opacity: 0; transform: translateY(-0.35rem); } to { opacity: 1; transform: translateY(0); } }
  @media (prefers-reduced-motion: reduce) { .nav { animation: none; } .collapsed { letter-spacing: -0.035em; } .collapsed .remainder { max-width: 6rem; opacity: 1; } .collapsed .word-space { max-width: 0.3em; opacity: 1; } }
</style>
