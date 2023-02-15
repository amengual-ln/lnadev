<script>
	import JobCard from './JobCard.svelte';
	import { JOBS } from '../jobs';
</script>

<section
	id="experience"
	class="relative flex flex-col gap-6 justify-center items-center min-h-screen"
>
	<div class="h-16" />
	<h2 class="text-3xl mb-8">Experience</h2>

	<div class="w-full">
		<!-- TODO: move timeline to its own component -->
		{#each JOBS as job, i}
			{#if i % 2 === 0}
				<article class="flex gap-8 items-center">
					<div class="flex-1"><JobCard {job} /></div>
					<div class="flex-0 opacity-50 {i === JOBS.length - 1 ? '' : 'timeline'}">
						<img src="/dot.svg" alt="⏺" class="timeline-img" />
					</div>
					<div class="flex-1" />
				</article>
			{:else}
				<article class="flex gap-8 items-center">
					<div class="flex-1" />
					<div class="flex-0 opacity-50 {i === JOBS.length - 1 ? '' : 'timeline'}">
						<img src="/dot.svg" alt="⏺" class="timeline-img" />
					</div>
					<div class="flex-1"><JobCard {job} /></div>
				</article>
			{/if}
		{/each}
	</div>
</section>

<style>
	.timeline:before {
		content: '';
		border-left: 1px solid gray;
		position: absolute;
		transform: translate(-80%, 18%);
		left: 50%;
		height: 10em;
	}
	.timeline-img {
		height: 11px;
	}
</style>
