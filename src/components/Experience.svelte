<script>
	import Button from './Button.svelte';
	import Coderhouse from './Coderhouse.svelte';
	import Icon from './Icon.svelte';
</script>

<section
	id="experience"
	class="relative flex flex-col gap-6 justify-center items-center min-h-screen"
>
	<div class="h-16"></div>
	<h2 class="text-3xl">Experience</h2>

	<div class="relative w-full group">
		<div class="absolute inset-0 bg-black rounded-lg blur opacity-75" />
		<article class="relative w-full bg-black text-white p-8 rounded-lg shadow-xl dark:shadow-none">
			<h3 class="text-2xl mb-2">
				<a href="https://www.coderhouse.com" target="_blank">
					<Coderhouse />
				</a>
			</h3>
			<span>
				<b>JS Mentor</b>
				| Jun 2022 - Present
			</span>
			<p class="my-4">Supporting and motivating students in the process of learning to code</p>

			<div class="flex justify-between mt-6">
				<div class="flex gap-2 h-12">
					<Icon type="js" fill="#fff" size={6} />
				</div>
				<Button>Read more</Button>
			</div>
		</article>
	</div>

	<div class="relative w-full group">
		<div class="absolute inset-0 bg-indigo-upya rounded-lg blur opacity-75" />
		<article
			class="relative w-full bg-indigo-upya text-white p-8 rounded-lg shadow-xl shadow-purple-200 dark:shadow-none"
		>
			<h3 class="text-2xl mb-2">
				<a href="https://www.coderhouse.com" target="_blank"> UPYA </a>
			</h3>
			<span>
				<b>Co-Founder, Frontend Engineer</b>
				| Oct 2020 - Present
			</span>
			<p class="my-4">Designing and developing a platform for education management</p>

			<div class="flex justify-between mt-6">
				<div class="flex gap-2 h-12">
					<Icon type="react" fill="#fff" size={6} />
					<Icon type="next" fill="#fff" size={6} />
					<Icon type="nest" fill="#fff" size={6} />
					<Icon type="ts" fill="#fff" size={6} />
				</div>
				<Button>Read more</Button>
			</div>
		</article>
	</div>

	<div class="relative w-full group">
		<div class="absolute inset-0.5 bg-red-9net rounded-lg blur opacity-75" />
		<article
			class="relative w-full bg-red-9net text-white p-8 rounded-lg shadow-xl shadow-red-300 dark:shadow-none"
		>
			<h3 class="text-2xl mb-2">
				<a href="https://www.9net.com.ar" target="_blank">
					<img src="/9net.png" alt="9net" class="h-8" />
				</a>
			</h3>
			<span>
				<b>Fullstack Engineer</b>
				| Oct 2018 - Oct 2020
			</span>
			<p class="my-4">
				Designing, developing and maintaining custom web-based solutions for clients like: San
				Fernando Municipio, Biblioteca del Congreso de la Nación
			</p>
			<div class="flex justify-between mt-6">
				<div class="flex gap-2 h-12">
					<Icon type="vue" fill="#fff" size={6} />
					<Icon type="js" fill="#fff" size={6} />
					<Icon type="php" fill="#fff" size={6} />
				</div>
				<Button>Read more</Button>
			</div>
		</article>
	</div>
</section>
