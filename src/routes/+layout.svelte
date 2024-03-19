<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Technologies from "../components/Technologies.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<Header />
<div class="dark:bg-neutral-900 dark:text-gray-200">
	<div class="w-full max-w-screen-lg m-auto p-4">
		<slot />
		<Technologies />
	</div>
</div>
<Footer />
