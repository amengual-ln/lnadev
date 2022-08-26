<script>
	import DarkModeToggle from './DarkModeToggle.svelte';
</script>

<header class="hidden fixed w-full justify-between items-center p-8 backdrop-blur-sm z-50 sm:flex dark:text-gray-200">
	<div></div>
	<nav>
		<ul class="flex gap-8">
			<li><a href="/">Home</a></li>
			<li><a href="#experience">Experience</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#education">Education</a></li>
		</ul>
	</nav>
	<DarkModeToggle />
</header>
