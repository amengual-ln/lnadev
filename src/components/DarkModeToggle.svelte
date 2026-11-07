<script lang="ts">
  import { onMount } from 'svelte';
  let label = 'Toggle color theme';

  onMount(() => {
    label = document.documentElement.classList.contains('dark') ? 'Use light theme' : 'Use dark theme';
  });

  function toggleDarkMode() {
    const dark = document.documentElement.classList.toggle('dark');
    label = dark ? 'Use light theme' : 'Use dark theme';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  }
</script>

<button type="button" on:click={toggleDarkMode} aria-label={label} title={label}>
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path class="sun" d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.23 3.23l1.06 1.06M11.71 11.71l1.06 1.06M12.77 3.23l-1.06 1.06M4.29 11.71l-1.06 1.06M10.75 8A2.75 2.75 0 1 1 5.25 8a2.75 2.75 0 0 1 5.5 0Z" />
    <path class="moon" d="M13.8 10.4A6.3 6.3 0 0 1 5.6 2.2 6.3 6.3 0 1 0 13.8 10.4Z" />
  </svg>
</button>

<style>
  button { width: 2.75rem; height: 2.75rem; display: grid; place-items: center; padding: 0; border: 0; border-radius: var(--radius-sm); background: transparent; color: var(--color-muted); cursor: pointer; }
  svg { width: 1rem; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
  .sun { display: none; }
  :global(html.dark) .sun { display: block; }
  :global(html.dark) .moon { display: none; }
  button:active { transform: translateY(1px); }
  @media (hover: hover) and (pointer: fine) { button:hover { background: var(--color-paper-2); color: var(--color-ink); } }
</style>
