<footer class="footer shell">
  <p>© {new Date().getFullYear()} Lautaro Amengual</p>
  <div><a href="mailto:amengual.ln@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/lautaroamengual" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
</footer>

<style>
  .footer { min-height: 7rem; display: flex; align-items: center; justify-content: space-between; gap: var(--space-lg); border-top: var(--rule-thin); color: var(--color-muted); font: var(--text-xs)/1.5 var(--font-mono); text-transform: uppercase; }
  .footer div { display: flex; gap: var(--space-lg); }
  .footer a { min-height: 2.75rem; display: inline-flex; align-items: center; text-decoration: none; white-space: nowrap; }
  @media (hover: hover) and (pointer: fine) { .footer a:hover { color: var(--color-accent); } }
  @media (max-width: 42rem) { .footer { align-items: flex-start; flex-direction: column; padding-block: var(--space-xl); } }
</style>
