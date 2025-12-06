<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import 'bulma/css/bulma.css'

	import { showNotification } from '$lib/notifications';

	let { children } = $props();

	let burgerActive = $state(false);

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="manifest" href="/manifest.webmanifest" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Real World Economy</title>
</svelte:head>

<section class="section">
	<div class="container">
		<h1 class="title">
			Real World Economy
		</h1>
		<nav class="navbar" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="/">Real World Economy</a>

				<a role="button" class={["navbar-burger", burgerActive && 'is-active']} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
					onclick={() => burgerActive = !burgerActive}
					href="#top"
					>
					<span aria-hidden="true"></span>
    				<span aria-hidden="true"></span>
      				<span aria-hidden="true"></span>
      				<span aria-hidden="true"></span>
    			</a>
			</div>

			<div class={["navbar-menu", burgerActive && 'is-active']}>
				<div class="navbar-start">
					<a class="navbar-item" href="/car">
						Cars
					</a>

					<a class="navbar-item" href="/model">
						Models
					</a>

					<div class="navbar-item has-dropdown is-hoverable">
        				<a class="navbar-link" href="#top">
							Calculators
        				</a>

						<div class="navbar-dropdown">
							<div class="navbar-item has-dropdown is-hoverable">
          						<div class="navbar-item">
            						Unit Conversions
								</div>

								<a class="navbar-item" href="/calculators/units/economy">
									Fuel Economy
								</a>

								<hr class="navbar-divider" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="navbar-end">
					<a class="navbar-item" href="/about">
						About
					</a> 
			</div>
		</nav>

		<div id="notificationContainer"></div>

		{@render children()}
	</div>
</section>
