<script lang="ts">
	import Icon from './Icon.svelte';

	interface Job {
		company: string;
		color: string;
		url: string;
		imgUrl: string | undefined;
		position: string;
		from: string;
		to: string;
		skills: string[];
	}

	export let job: Job;
</script>

<div class="relative group w-full">
	<!-- la prop innerClass funciona, y esta en la docu. Pero en el tipo no? -->
	<div>
		<div class="absolute inset-0.5 bg-{job.color} rounded-lg blur opacity-75" />
		<article class="relative w-full bg-{job.color} text-white p-8 rounded-lg dark:shadow-none">
			<h3 class="text-2xl mb-4">
				<a href={job.url} target="_blank">
					{#if job.imgUrl}
						<img src={job.imgUrl} alt="9net" class="h-8" />
					{:else}
						<h1>{job.company}</h1>
					{/if}
				</a>
			</h3>
			<span>
				<b>{job.position}</b>
				| {job.from} - {job.to}
			</span>
			<div class="flex justify-between mt-6">
				<div class="flex gap-2 h-12">
					{#each job.skills as skill}
						<Icon type={skill} fill="#fff" size={6} />
					{/each}
				</div>
				<!-- <Button>Read more</Button> -->
			</div>
		</article>
	</div>
</div>
