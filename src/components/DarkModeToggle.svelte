<script lang="ts">
  import { onMount } from 'svelte';
  let theme = 'light';

  onMount(() => {
    theme = localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  });

  function toggleDarkMode() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }
</script>

<button type="button" on:click={toggleDarkMode} aria-label={theme === 'dark' ? 'Use light theme' : 'Use dark theme'} title={theme === 'dark' ? 'Use light theme' : 'Use dark theme'}>
  <svg viewBox="0 0 16 16" aria-hidden="true">
    {#if theme === 'dark'}
      <path d="M8 1.25v1.5M8 13.25v1.5M1.25 8h1.5M13.25 8h1.5M3.23 3.23l1.06 1.06M11.71 11.71l1.06 1.06M12.77 3.23l-1.06 1.06M4.29 11.71l-1.06 1.06M10.75 8A2.75 2.75 0 1 1 5.25 8a2.75 2.75 0 0 1 5.5 0Z" />
    {:else}
      <path d="M13.8 10.4A6.3 6.3 0 0 1 5.6 2.2 6.3 6.3 0 1 0 13.8 10.4Z" />
    {/if}
  </svg>
</button>

<style>
  button { width: 2.75rem; height: 2.75rem; display: grid; place-items: center; padding: 0; border: 0; border-radius: var(--radius-sm); background: transparent; color: var(--color-muted); cursor: pointer; }
  svg { width: 1rem; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }
  button:active { transform: translateY(1px); }
  @media (hover: hover) and (pointer: fine) { button:hover { background: var(--color-paper-2); color: var(--color-ink); } }
</style>
