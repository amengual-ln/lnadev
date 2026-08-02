<script>
  import DarkModeToggle from './DarkModeToggle.svelte';
</script>

<header class="site-header">
  <div class="nav shell">
    <a class="identity" href="#home" aria-label="Lautaro Amengual, home">
      <span class="status" aria-hidden="true"></span>
      <span>Lautaro Amengual</span>
    </a>
    <DarkModeToggle />
  </div>
</header>

<style>
  .site-header { position: sticky; top: 0; z-index: 30; border-bottom: var(--rule-thin); background: var(--color-nav-background); color: var(--color-ink); backdrop-filter: blur(14px) saturate(1.25); -webkit-backdrop-filter: blur(14px) saturate(1.25); }
  .nav { min-height: 3.75rem; display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); animation: enter var(--dur-slow) var(--ease-out) both; }
  .identity { min-height: 2.75rem; display: inline-flex; align-items: center; gap: var(--space-sm); font: 500 var(--text-sm)/1 var(--font-mono); text-decoration: none; white-space: nowrap; }
  .status { width: 0.5rem; height: 0.5rem; border-radius: 50%; background: var(--color-accent); }
  @keyframes enter { from { opacity: 0; transform: translateY(-0.35rem); } to { opacity: 1; transform: translateY(0); } }
  @media (prefers-reduced-motion: reduce) { .nav { animation: none; } }
</style>
