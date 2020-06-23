<script>
  import { fade } from 'svelte/transition';
	import Header from './layout/Header.svelte';
	import Stats from './views/Stats.svelte';

	const components = [
		{
			id: "stats",
			label: 'Stats',
			name: Stats,
		},
	];
	let activeItem = components[0];

</script>

<Header />
<main>
	<!-- Handle future site navigation -->
	<svelte:component this={activeItem.name} />
</main>

<style>
	main {
		box-sizing: border-box;
		height: 100%;
		border: 0;
		max-height: calc(100% - 43px);
	}
</style>