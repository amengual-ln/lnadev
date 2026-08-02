<script>
  import '../app.css';
  import { page } from '$app/stores';
  import Footer from '../components/Footer.svelte';
</script>

<slot />
{#if $page.url.pathname !== '/linkedin-banner'}
  <Footer />
{/if}
