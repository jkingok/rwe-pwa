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
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="/">Real World Economy</a>

				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
    				<span aria-hidden="true"></span>
      				<span aria-hidden="true"></span>
      				<span aria-hidden="true"></span>
    			</a>
			</div>

			<div class="navbar-menu">
				<div class="navbar-start">
					<a class="navbar-item" href="/car">
						Cars
					</a>

					<a class="navbar-item" href="/model">
						Models
					</a>
				</div>
			</div>

			<div class="navbar-end">
					<a class="navbar-item" href="/about">
						About
					</a> 
			</div>
		</nav>

		{@render children()}
	</div>
</section>
