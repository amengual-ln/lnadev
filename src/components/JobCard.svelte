<script lang="ts">
	import Icon from "./Icon.svelte";

	interface Job {
		company: string;
		color: string;
		url: string;
		logoUrl: string | undefined;
		logoDarkUrl?: string | undefined;
		imgUrl: string | undefined;
		position: string;
		from: string;
		to: string;
		description: string;
		skills: string[];
	}

	import { onMount } from "svelte";

	let theme: string;

	onMount(() => {
		theme = localStorage.getItem("theme") ?? "light";
	});

	export let job: Job;
</script>

<div class="group w-full">
	<div>
		<article
			class="rounded-2xl bg-neutral-50 text-neutral-700 dark:bg-neutral-100 grid lg:grid-cols-[2fr_1fr] min-h-[250px]"
		>
			<div class="p-8">
				<h3 class="h-12 text-2xl mb-8 lg:mb-4 grid items-center">
					<a href={job.url} target="_blank" class="flex justify-center lg:justify-start">
						{#if job.logoUrl}
							<img
								src={job.logoUrl}
								alt={job.company}
								class="max-h-12 max-w-[80%] lg:max-w-[50%]"
							/>
						{:else}
							<h1>{job.company}</h1>
						{/if}
					</a>
				</h3>
				<span>
					<b>{job.position}</b>
					| {job.from} - {job.to}
				</span>
				<p class="pt-4">
					{job.description}
				</p>
				<div class="flex justify-center mt-6">
					<div class="flex gap-2 h-12">
						{#each job.skills as skill}
							<Icon type={skill} fill="#bbb" size={6} />
						{/each}
					</div>
				</div>
			</div>
			<div class="flex order-first lg:order-none rounded-t-2xl lg:rounded-r-2xl lg:rounded-l-none items-center overflow-hidden">
				<img
					loading="lazy"
					src={job.imgUrl}
					alt="Imagen de la empresa o producto"
					class="rounded-t-2xl lg:rounded-l-none lg:rounded-r-2xl w-auto object-cover aspect-video lg:aspect-none h-full"
				/>
			</div>
		</article>
	</div>
</div>
