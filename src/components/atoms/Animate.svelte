<script>
  import * as transition from "svelte/transition";
  import { inview } from "svelte-inview";

  export let type;
  export let config = {};

  const defaultConfig = { delay: 50, duration: 500, y: 50, opacity: 0 };

  config = { ...defaultConfig, ...config };

  const animation = transition[type];

  let isInView;
</script>

<div
  use:inview={{ unobserveOnEnter: true, rootMargin: "0%" }}
  on:change={({ detail }) => {
    isInView = detail?.inView || false;
  }}
>
  {#if isInView}
    <div in:animation={config}>
      <slot />
    </div>
  {/if}
</div>
