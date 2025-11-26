<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import 'bulma/css/bulma.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Real World Economy</title>
</svelte:head>

<section class="section">
	<div class="container">
		<h1 class="title">
			Real World Economy
		</h1>
		<aside class="menu">
			<a href="/">home</a>
			<a href="/car">cars</a>
			<a href="/model">models</a>
			<a href="/about">about</a>
		</aside>

		{@render children()}
	</div>
</section>
