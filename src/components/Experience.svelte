<script lang="ts">
	import JobCard from "./JobCard.svelte";
	import { JOBS } from "../jobs";
	import { onMount } from "svelte";
	import Animate from "./atoms/Animate.svelte";

	let theme: string;

	onMount(() => {
		theme = localStorage.getItem("theme") ?? "light";
	});
</script>

<section
	id="experience"
	class="relative flex flex-col gap-6 justify-center items-center min-h-screen"
>
	<!-- Padding por el header fixeado -->
	<div class="h-16" />

	<h2 class="text-3xl mb-8">Experience</h2>

	<div class="w-full flex flex-col items-center gap-8 min-h-screen">
		<!-- TODO: move timeline to its own component -->
		{#each JOBS as job}
			<Animate type="fly" config={{ y: 100, duration: 1200 }}>
				<Animate type="blur" config={{ y: 100, duration: 800 }}>
					<div class="w-full">
						<JobCard {job} />
					</div>
				</Animate>
			</Animate>
		{/each}
	</div>
</section>
