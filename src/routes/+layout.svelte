<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Header -->
<header class="header">
	<div class="header-container">
		<div class="logo">
			<img src="/logo.png" alt="Synergy DSP" class="logo-img" />
			<span class="logo-text">Synergy DSP</span>
		</div>
		<nav class="nav">
			<a href="/" class="nav-link">Home</a>
			<a href="/about" class="nav-link">About</a>
			<a href="/support" class="nav-link">Support</a>
		</nav>
		<div class="store-buttons">
			<a href="https://store.synergy-dsp.com/" target="_blank" class="store-btn gumroad-btn">Gumroad Store</a>
			<a href="https://www.musehub.com/partner/synergy-dsp" target="_blank" class="store-btn musehub-btn">Musehub Store</a>
		</div>
	</div>
</header>

<main>
	{@render children?.()}
</main>

<style>
	:global(html) {
		lang: en;
	}

	:global(body) {
		margin: 0;
		font-family: 'Inter', sans-serif;
		background: #0f0f23;
		color: white;
	}

	/* Header Styles */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(15, 15, 35, 0.9);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding: 1rem 0;
	}

	.header-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.logo-img {
		height: 40px;
		width: auto;
	}

	.logo-text {
		font-size: 1.5rem;
		font-weight: 700;
		background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.nav-dropdown {
		position: relative;
		display: inline-block;
	}

	.nav-dropdown {
		position: relative;
	}

	.nav-link {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
		position: relative;
		display: block;
	}

	.nav-link:hover {
		color: white;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(135deg, #6366f1, #8b5cf6);
		transition: width 0.3s ease;
	}

	.nav-link:hover::after {
		width: 100%;
	}

	.dropdown-menu {
		position: absolute;
		top: 100%;
		left: 0;
		margin-top: 0.5rem;
		background: rgba(15, 15, 35, 0.95);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 8px;
		padding: 0.5rem 0;
		min-width: 200px;
		white-space: nowrap;
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
		z-index: 1001;
	}

	.dropdown-link {
		display: block;
		padding: 0.75rem 1rem;
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
		border-radius: 4px;
		margin: 0 0.25rem;
	}

	.dropdown-link:hover {
		color: white;
		background: rgba(99, 102, 241, 0.2);
	}

	.dropdown-trigger {
		cursor: pointer;
		user-select: none;
	}

	.dropdown-trigger:hover {
		color: white;
	}

	.dropdown-divider {
		height: 1px;
		background: rgba(255, 255, 255, 0.1);
		margin: 0.5rem 0;
	}

	.store-link {
		color: rgba(102, 126, 234, 0.9) !important;
		font-weight: 600;
	}

	.store-link:hover {
		color: #667eea !important;
		background: rgba(102, 126, 234, 0.15);
	}

	.store-buttons {
		display: flex;
		gap: 0.75rem;
	}

	.store-btn {
		padding: 0.75rem 1.25rem;
		color: white;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
		font-size: 0.9rem;
	}

	.gumroad-btn {
		background: linear-gradient(135deg, #6366f1, #8b5cf6);
		box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
	}

	.gumroad-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
	}

	.musehub-btn {
		background: linear-gradient(135deg, #10b981, #059669);
		box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
	}

	.musehub-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.header-container {
			padding: 0 1rem;
		}

		.nav {
			display: none;
		}

		.logo-text {
			font-size: 1.2rem;
		}
	}
</style>
