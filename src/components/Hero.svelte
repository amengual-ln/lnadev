<section class="intro shell" id="home">
  <div class="intro-main">
    <p class="meta">Software engineer · Product builder</p>
    <h1>Building the system and experience behind products people enjoy using.</h1>
  </div>
  <dl class="profile-data">
    <div><dt>Now</dt><dd>Frontend Engineer<br />Mercado Libre</dd></div>
    <div><dt>Based</dt><dd>Argentina<br />UTC−3</dd></div>
  </dl>
  <nav class="profile-links" aria-label="Profile links">
    <a href="#experience">Experience <span>↓</span></a>
    <a href="/cv-lna-2024c.pdf" target="_blank">CV / Resume <span>↗</span></a>
    <a href="mailto:amengual.ln@gmail.com">Email <span>↗</span></a>
    <a href="https://www.linkedin.com/in/lautaroamengual" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
  </nav>
</section>

<style>
  .intro { padding-block: var(--space-3xl) 7rem; }
  .intro-main { min-width: 0; }
  .meta { animation: enter var(--dur-slow) var(--ease-out) both; animation-delay: calc(var(--dur-fast) * 0.5); }
  h1 { width: 100%; max-width: 24ch; margin-top: var(--space-lg); font-size: var(--text-display); line-height: 1.02; animation: enter var(--dur-slow) var(--ease-out) both; animation-delay: var(--dur-fast); }
  .profile-data { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: var(--space-2xl) 0 0; border-top: var(--rule-thin); border-bottom: var(--rule-thin); animation: enter var(--dur-slow) var(--ease-out) both; animation-delay: calc(var(--dur-fast) * 1.5); }
  .profile-data div { min-width: 0; padding-block: var(--space-lg); }
  .profile-data div + div { border-inline-start: var(--rule-thin); padding-inline-start: var(--space-lg); }
  dt { margin-bottom: var(--space-sm); color: var(--color-muted); font: 500 var(--text-xs)/1.4 var(--font-mono); text-transform: uppercase; letter-spacing: 0.06em; }
  dd { margin: 0; color: var(--color-ink); font-size: var(--text-sm); line-height: 1.5; }
  .profile-links { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-bottom: var(--rule-thin); animation: enter var(--dur-slow) var(--ease-out) both; animation-delay: calc(var(--dur-fast) * 2); }
  .profile-links a { min-height: 3.5rem; display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); padding-inline: var(--space-md); color: var(--color-ink); font-size: var(--text-sm); text-decoration: none; white-space: nowrap; }
  .profile-links a:first-child { padding-inline-start: 0; }
  .profile-links a + a { border-inline-start: var(--rule-thin); }
  .profile-links span { color: var(--color-accent); transition: transform var(--dur-base) var(--ease-out); }
  @media (hover: hover) and (pointer: fine) { .profile-links a:hover { background: var(--color-accent-soft); } .profile-links a:hover span { transform: translate(0.18rem, -0.12rem); } }
  .profile-links a:focus-visible span { transform: translate(0.18rem, -0.12rem); }
  @media (hover: hover) and (pointer: fine) { .profile-links a:first-child:hover span { transform: translateY(0.2rem); } }
  .profile-links a:first-child:focus-visible span { transform: translateY(0.2rem); }
  @keyframes enter { from { opacity: 0; transform: translateY(0.5rem); } to { opacity: 1; transform: translateY(0); } }
  @media (max-width: 48rem) { .intro { padding-block: var(--space-3xl) 6.5rem; } .profile-links { grid-template-columns: repeat(2, minmax(0, 1fr)); } .profile-links a:nth-child(3) { border-inline-start: 0; border-top: var(--rule-thin); padding-inline-start: 0; } .profile-links a:nth-child(4) { border-top: var(--rule-thin); } }
  @media (max-width: 32rem) { .profile-data { grid-template-columns: 1fr; } .profile-data div + div { border-inline-start: 0; border-top: var(--rule-thin); padding-inline-start: 0; } }
  @media (prefers-reduced-motion: reduce) { .meta, h1, .profile-data, .profile-links { animation: none; } .profile-links span { transition: none; } }
</style>
