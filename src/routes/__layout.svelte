<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Technologies from '../components/Technologies.svelte';
</script>

<Header />
<div class="w-full max-w-screen-lg m-auto p-4">
	<slot />
	<Technologies />
</div>
