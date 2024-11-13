<script>
	import Animate from "./atoms/Animate.svelte";
</script>

<section
	id="home"
	class="flex flex-col justify-center min-h-screen text-center z-40"
>
	<Animate type="blur" config={{ duration: 1500 }}>
		<article class="flex flex-col gap-4 justify-center items-center">
			<h1 class="text-5xl font-medium">Hello! I'm Lautaro Amengual</h1>
			<h2 class="text-3xl">Frontend Engineer</h2>
			<span>
				Frontend Engineer @
				<a href="https://www.loudintelligence.com" target="_blank">
					<b>Loud Intelligence</b>
				</a>
				| JS Mentor @
				<a href="https://www.coderhouse.com" target="_blank">
					<b>Coderhouse</b>
				</a>
			</span>
			<div class="flex gap-3 scale-110 mt-2">
				<a href="https://www.linkedin.com/in/lautaroamengual" target="_blank">
					<img
						src="/linkedin.svg"
						alt="Linked In"
						class="rounded-md transition ring-gray-400 hover:ring dark:invert dark:opacity-80"
					/>
				</a>
				<a href="mailto:amengual.ln@gmail.com" target="_blank">
					<img
						src="/mail.svg"
						alt="Linked In"
						class="rounded-md transition ring-gray-400 hover:ring dark:invert dark:opacity-80"
					/>
				</a>
				<a href="/cv-lna-2024c.pdf" target="_blank">
					<img
						src="/cv.svg"
						alt="CV"
						class="rounded-md transition ring-gray-400 hover:ring dark:invert dark:opacity-80"
					/>
				</a>
			</div>
		</article>
		<div class="flex justify-center">
			<a
				href="#experience"
				class="absolute p-4 m-2 bottom-0 animate-bounce dark:invert dark:opacity-80"
			>
				<img src="/chevron-double-down.svg" alt="Ver más" />
			</a>
		</div>
	</Animate>
</section>
