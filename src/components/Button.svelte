<script lang="ts">
	export let type = 'default';
	export let onClick = () => {};

	const types = {
		default: 'bg-white'
	};

	// @ts-ignore
	const bgColor = types[type];
</script>

<button class={`${bgColor} text-black px-4 py-2 rounded`} on:click={onClick}>
	<slot />
</button>
