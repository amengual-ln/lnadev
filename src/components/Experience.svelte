<script lang="ts">
	import JobCard from "./JobCard.svelte";
	import { JOBS } from "../jobs";
	import { onMount } from "svelte";

	let theme: string;

	onMount(() => {
		theme = localStorage.getItem("theme") ?? "light";
	});
</script>

<section
	id="experience"
	class="relative flex flex-col gap-6 justify-center items-center min-h-screen"
>
	<div class="h-16" />
	<h2 class="text-3xl mb-8">Experience</h2>

	<div class="w-full flex flex-col items-center gap-8">
		<!-- TODO: move timeline to its own component -->
		{#each JOBS as job}
			<div class="w-full">
				<JobCard {job} />
			</div>
		{/each}
	</div>
</section>
