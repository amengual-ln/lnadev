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
		{#each JOBS as job, i}
			{#if i % 2 === 0}
				<article class="flex gap-8 items-center">
					<div class="flex-1"><JobCard {job} /></div>
					<div class="flex-0 opacity-50 {i === JOBS.length - 1 ? '' : 'timeline'}">⏺</div>
					<div class="flex-1" />
				</article>
			{:else}
				<article class="flex gap-8 items-center">
					<div class="flex-1" />
					<div class="flex-0 opacity-50 {i === JOBS.length - 1 ? '' : 'timeline'}">⏺</div>
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
		transform: translate(-80%, 22%);
		left: 50%;
		height: 10em;
	}
</style>
