<script>
	import Hero from '../components/Hero.svelte';
	import Experience from '../components/Experience.svelte';
	import Projects from '../components/Projects.svelte';
	import Education from '../components/Education.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.querySelector('html')?.classList.add('dark');
		} else {
			document.querySelector('html')?.classList.remove('dark');
		}
	});
</script>

<Hero />

<Experience />

<Projects />

<Education />
