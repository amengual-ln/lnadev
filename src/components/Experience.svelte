<script lang="ts">
	import JobCard from './JobCard.svelte';
	import { JOBS } from '../jobs';
	import { onMount } from 'svelte';

	let theme: string;

	onMount(() => {
		theme = localStorage.getItem('theme') ?? 'light';
	});
</script>

<section
	id="experience"
	class="relative flex flex-col gap-6 justify-center items-center min-h-screen"
>
	<div class="h-16" />
	<h2 class="text-3xl mb-8">Experience</h2>

	<div class="w-full hidden md:block">
		<!-- TODO: move timeline to its own component -->
		{#each JOBS as job, i}
			{#if i % 2 === 0}
				<article class="flex gap-8 items-center">
					<div class="flex-1"><JobCard {job} /></div>
					<div class="flex-0 opacity-50 {i === JOBS.length - 1 ? '' : 'timeline'}">
						<img src="/dot.svg" alt="⏺" class="timeline-img brightness-0 dark:brightness-200" />
					</div>
					<div class="flex-1" />
				</article>
			{:else}
				<article class="flex gap-8 items-center">
					<div class="flex-1" />
					<div class="flex-0 opacity-50 {i === JOBS.length - 1 ? '' : 'timeline'}">
						<img src="/dot.svg" alt="⏺" class="timeline-img brightness-0 dark:brightness-200" />
					</div>
					<div class="flex-1"><JobCard {job} /></div>
				</article>
			{/if}
		{/each}
	</div>

	<div class="w-full flex flex-col items-center gap-8 md:hidden">
		<!-- TODO: move timeline to its own component -->
		{#each JOBS as job}
			<div class="opacity-50 timeline-mobile">
				<img src="/dot.svg" alt="⏺" class="timeline-img brightness-0 dark:brightness-200" />
			</div>
			<div class="w-full px-12">
				<JobCard {job} />
			</div>
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
	.timeline-mobile:before {
		content: '';
		border-left: 1px solid gray;
		position: absolute;
		transform: translate(-10%, 10%);
		left: 50%;
		height: 15.2em;
	}
	.timeline-img {
		height: 11px;
	}
</style>
