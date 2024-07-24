<script>
	import Animate from "./atoms/Animate.svelte";
	import DarkModeToggle from "./DarkModeToggle.svelte";
</script>

<header
	class="hidden fixed w-full justify-center items-center p-8 backdrop-blur-sm z-50 sm:flex dark:text-gray-200 font-medium dark:drop-shadow-[0_0_3px_black]"
>
	<Animate type="blur" config={{ duration: 1800 }}>
		<nav>
			<ul class="flex gap-8">
				<li><a href="/">Home</a></li>
				<li><a href="#experience">Experience</a></li>
			</ul>
		</nav>
	</Animate>
</header>

<Animate type="blur" config={{ duration: 1800 }}>
	<div class="absolute right-2 p-8 z-50">
		<DarkModeToggle />
	</div>
</Animate>
