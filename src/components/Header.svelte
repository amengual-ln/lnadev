<script>
	import DarkModeToggle from './DarkModeToggle.svelte';
</script>

<header
	class="hidden fixed w-full justify-center items-center p-8 backdrop-blur-sm z-50 sm:flex dark:text-gray-200"
>
	<nav>
		<ul class="flex gap-8">
			<li><a href="/">Home</a></li>
			<li><a href="#experience">Experience</a></li>
			<li><a href="#projects">Projects</a></li>
		</ul>
	</nav>
</header>

<div class="absolute right-0 p-8 z-50">
	<DarkModeToggle />
</div>
