<script>
  import { JOBS } from '../jobs.js';
</script>

<section class="intro shell" id="home">
  <div class="intro-content">
    <div class="intro-main">
      <p class="meta">Software engineer · Product builder</p>
      <h1>Building the system and experience behind products people enjoy using.</h1>
    </div>
    <dl class="profile-data">
      <div><dt>Now</dt><dd>{JOBS[0].position}<br />{JOBS[0].company}</dd></div>
      <div><dt>Based</dt><dd>Argentina<br />UTC−3</dd></div>
    </dl>
    <nav class="profile-links" aria-label="Profile links">
      <a href="#experience">Experience <span>↓</span></a>
      <a href="/cv.pdf" target="_blank" rel="noopener">CV / Resume <span>↗</span></a>
      <a href="mailto:amengual.ln@gmail.com">Email <span>↗</span></a>
      <a href="https://www.linkedin.com/in/lautaroamengual" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
    </nav>
  </div>
  <div class="portrait-scene">
    <img class="portrait" src="/portrait-cutout-v2.png" alt="Lautaro Amengual" width="880" height="1194" fetchpriority="high" />
    <img class="portrait portrait-light" src="/personalportrait.jpeg" alt="Lautaro Amengual" width="880" height="1194" fetchpriority="high" />
  </div>
</section>

<style>
  .intro { display: grid; grid-template-columns: minmax(0, 1fr) minmax(16rem, 31rem); gap: 0; align-items: end; padding-top: var(--space-3xl); }
  .intro-content { position: relative; z-index: 1; padding-bottom: 7rem; }
  .intro-main { min-width: 0; }
  .portrait-scene { position: relative; z-index: 2; display: grid; align-items: end; align-self: stretch; isolation: isolate; pointer-events: none; clip-path: inset(-100vmax -100vmax 0 -100vmax); }
  .portrait-scene::before { content: ''; position: absolute; inset: 0 -10rem -8rem -7rem; z-index: -1; background: radial-gradient(ellipse 38% 48% at 42% 52%, var(--color-accent-soft), transparent 100%), radial-gradient(ellipse 34% 42% at 61% 70%, var(--color-accent-soft), transparent 100%), radial-gradient(ellipse 28% 35% at 47% 79%, var(--color-accent-soft), transparent 100%); animation: drift 12s ease-in-out infinite alternate; }
  .portrait { display: block; width: 115%; max-width: none; max-height: 39rem; height: auto; object-fit: contain; object-position: center bottom; justify-self: center; animation: enter var(--dur-slow) var(--ease-out) both; animation-delay: calc(var(--dur-fast) * 2); }
  .portrait-light { display: none; }
  :global(html:not(.dark)) .portrait:not(.portrait-light) { display: none; }
  :global(html:not(.dark)) .portrait-light { display: block; clip-path: inset(0 0 8% 0); }
  :global(html:not(.dark)) .portrait-scene::before { display: none; }
  @media (min-width: 48.001rem) { .intro-content { padding-bottom: 5.5rem; } .profile-data { margin-top: calc(var(--space-2xl) + 1.5rem); } :global(html:not(.dark)) .portrait-scene { clip-path: inset(-100vmax -100vmax 5.5rem -100vmax); } :global(html:not(.dark)) .portrait-light { clip-path: none; } }
  .meta { animation: enter var(--dur-slow) var(--ease-out) both; animation-delay: calc(var(--dur-fast) * 0.5); }
  h1 { width: 100%; max-width: 24ch; margin-top: var(--space-lg); font-size: var(--text-display); line-height: 1.02; animation: enter var(--dur-slow) var(--ease-out) both; animation-delay: var(--dur-fast); }
  .profile-data { position: relative; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: var(--space-2xl) 0 0; border-top: var(--rule-thin); border-bottom: var(--rule-thin); animation: enter var(--dur-slow) var(--ease-out) both; animation-delay: calc(var(--dur-fast) * 1.5); }
  .profile-data::before, .profile-data::after, .profile-links::after { content: ''; position: absolute; left: 100%; width: min(25vw, 18rem); border-top: var(--rule-thin); pointer-events: none; }
  .profile-data::before { top: -1px; }
  .profile-data::after, .profile-links::after { bottom: -1px; }
  .profile-data div { min-width: 0; padding-block: var(--space-lg); }
  .profile-data div + div { border-inline-start: var(--rule-thin); padding-inline-start: var(--space-lg); }
  dt { margin-bottom: var(--space-sm); color: var(--color-muted); font: 500 var(--text-xs)/1.4 var(--font-mono); text-transform: uppercase; letter-spacing: 0.06em; }
  dd { margin: 0; color: var(--color-ink); font-size: var(--text-sm); line-height: 1.5; }
  .profile-links { position: relative; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-bottom: var(--rule-thin); animation: enter var(--dur-slow) var(--ease-out) both; animation-delay: calc(var(--dur-fast) * 2); }
  .profile-links a { min-height: 3.5rem; display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); padding-inline: var(--space-md); color: var(--color-ink); font-size: var(--text-sm); text-decoration: none; white-space: nowrap; }
  .profile-links a:first-child { padding-inline-start: 0; }
  .profile-links a + a { border-inline-start: var(--rule-thin); }
  .profile-links a:last-child { position: relative; }
  .profile-links a:last-child::after { content: ''; position: absolute; left: 100%; top: 0; bottom: 0; width: min(25vw, 18rem); }
  .profile-links span { color: var(--color-accent); transition: transform var(--dur-base) var(--ease-out); }
  @media (hover: hover) and (pointer: fine) { .profile-links a:hover, .profile-links a:last-child:hover::after { background: var(--color-accent-soft); } .profile-links a:hover span { transform: translate(0.18rem, -0.12rem); } }
  .profile-links a:focus-visible span { transform: translate(0.18rem, -0.12rem); }
  @media (hover: hover) and (pointer: fine) { .profile-links a:first-child:hover span { transform: translateY(0.2rem); } }
  .profile-links a:first-child:focus-visible span { transform: translateY(0.2rem); }
  @keyframes enter { from { opacity: 0; transform: translateY(0.5rem); } to { opacity: 1; transform: translateY(0); } }
  @keyframes drift { from { transform: translate(-1%, 1%) scale(0.97, 1.03); } to { transform: translate(1%, -1%) scale(1.04, 0.96); } }
  @media (max-width: 60rem) { .profile-links { grid-template-columns: repeat(2, minmax(0, 1fr)); } .profile-links a:nth-child(3) { border-inline-start: 0; border-top: var(--rule-thin); padding-inline-start: 0; } .profile-links a:nth-child(4) { border-top: var(--rule-thin); } }
  @media (max-width: 48rem) { .intro { grid-template-columns: 1fr; gap: 0; } .intro-content { padding-bottom: var(--space-xl); } .profile-data::before, .profile-data::after, .profile-links::after, .profile-links a:last-child::after { display: none; } .portrait-scene { width: min(100%, 26rem); justify-self: center; } .portrait-scene::before { inset: 0 -2rem -8rem; } .portrait { width: 100%; max-height: 28rem; } }
  @media (max-width: 32rem) { .profile-data { grid-template-columns: 1fr; } .profile-data div + div { border-inline-start: 0; border-top: var(--rule-thin); padding-inline-start: 0; } }
  @media (prefers-reduced-motion: reduce) { .meta, h1, .profile-data, .profile-links, .portrait, .portrait-scene::before { animation: none; } .profile-links span { transition: none; } }
</style>
