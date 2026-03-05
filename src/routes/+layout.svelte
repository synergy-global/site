<script lang="ts">
    // Remove the favicon import and use the logo directly
    import CookieConsent from '$lib/components/CookieConsent.svelte';

    let { children } = $props();
    let mobileMenuOpen = $state(false);

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
    }
</script>

<svelte:head>
	<link rel="icon" href="/logo.png" />
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
			<a href="/blog" class="nav-link">Blog</a>
			<a href="/store" class="nav-link">Store</a>
			<a href="/open-source" class="nav-link">Open Source</a>
			<a href="/support" class="nav-link">Support</a>
		</nav>
		
		<div class="header-actions">
			
			<!-- Mobile Menu Button -->
			<button class="mobile-menu-btn" class:menu-open={mobileMenuOpen} onclick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
				<span class="hamburger" class:open={mobileMenuOpen}></span>
			</button>
			<!-- Remove debug span -->
		</div>
	</div>
	
	<!-- Mobile Menu moved below header -->
		<div class="mobile-menu" class:open={mobileMenuOpen}>
			<nav class="mobile-nav">
				<a href="/" class="mobile-nav-link" onclick={closeMobileMenu}>Home</a>
				<a href="/about" class="mobile-nav-link" onclick={closeMobileMenu}>About</a>
				<a href="/blog" class="mobile-nav-link" onclick={closeMobileMenu}>Blog</a>
				<a href="/store" class="mobile-nav-link" onclick={closeMobileMenu}>Store</a>
				<a href="/support" class="mobile-nav-link" onclick={closeMobileMenu}>Support</a>
			</nav>
		</div>
</header>

<!-- Mobile Menu (outside header to avoid stacking issues) -->
	<div class="mobile-menu" class:open={mobileMenuOpen} aria-hidden={!mobileMenuOpen}
		style:transform={`translateX(${mobileMenuOpen ? '0' : '-100%'})`}
		style:opacity={mobileMenuOpen ? 1 : 0}
		style:visibility={mobileMenuOpen ? 'visible' : 'hidden'}>
		<nav class="mobile-nav">
			<a href="/" onclick={closeMobileMenu}>Home</a>
			<a href="/about" onclick={closeMobileMenu}>About</a>
			<a href="/blog" onclick={closeMobileMenu}>Blog</a>
			<a href="/open-source" onclick={closeMobileMenu}>Open Source</a>
			<a href="/support" onclick={closeMobileMenu}>Support</a>
		</nav>
	</div>

<main>
    {@render children?.()}
</main>

<!-- Cookie Consent Banner -->
<CookieConsent />

<style>
	:root {
		--bg: #0b0b0d;
		--surface: #121214;
		--surface-2: #151518;
		--border: rgba(255, 255, 255, 0.08);
		--text: rgba(255, 255, 255, 0.92);
		--muted: rgba(255, 255, 255, 0.7);
		--brand-start: #6e7bf7;
		--brand-end: #a78bfa;
	}
	:global(html) {
		lang: en;
	}

	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Inter', sans-serif;
		background: var(--bg);
		color: var(--text);
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	/* Removed blue/green link and selection accents to revert theme */

	/* Header Styles */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(18, 18, 20, 0.7);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border);
		padding: 0.75rem 0;
	}

	.header-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
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
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--text);
	}

	.nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	/* Remove unused selectors */
	/* .nav-dropdown {
		position: relative;
		display: inline-block;
	}

	.nav-dropdown {
		position: relative;
	} */

	.nav-link {
		color: var(--muted);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;
		position: relative;
		display: block;
	}

	.nav-link:hover {
		color: white;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -6px;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(135deg, var(--brand-start), var(--brand-end));
		transition: width 0.2s ease;
	}

	.nav-link:hover::after {
		width: 100%;
	}

	/* Remove unused dropdown-menu selector */
	/* .dropdown-menu {
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
	} */





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
		background: linear-gradient(135deg, var(--brand-start), var(--brand-end));
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

	/* Mobile Menu Styles */
	.mobile-menu-btn {
		display: none; /* Hidden by default, shown in media query */
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		z-index: 1001;
		border-radius: 4px;
		transition: background-color 0.3s ease;
		flex-shrink: 0;
		position: relative;
		pointer-events: auto;
	}

	.mobile-menu-btn.menu-open {
		background: rgba(99, 102, 241, 0.2);
	}

	.hamburger {
		display: block;
		width: 25px;
		height: 3px;
		background: white;
		border-radius: 3px;
		transition: all 0.3s ease;
		position: relative;
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		width: 25px;
		height: 3px;
		background: white;
		border-radius: 3px;
		transition: all 0.3s ease;
	}

	.hamburger::before {
		top: -8px;
	}

	.hamburger::after {
		bottom: -8px;
	}

	.hamburger.open {
		background: transparent;
	}

	.hamburger.open::before {
		top: 0;
		transform: rotate(45deg);
	}

	.hamburger.open::after {
		bottom: 0;
		transform: rotate(-45deg);
	}

	/* Remove this class as it's no longer used */
	/* .menu-state-debug {
		margin-left: 0.5rem;
		font-size: 0.75rem;
		opacity: 0.6;
		font-family: monospace;
	} */

	.mobile-menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: rgba(15, 15, 17, 0.9);
		backdrop-filter: blur(12px);
		transform: translateX(-100%);
		transition: all 0.25s ease;
		z-index: 1002;
		display: block;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
	}

	.mobile-menu.open {
		transform: translateX(0);
		visibility: visible;
		opacity: 1;
		pointer-events: auto;
	}

	.mobile-nav {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.mobile-nav a {
		color: white;
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: 500;
		padding: 1rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		transition: color 0.3s ease;
	}

	.mobile-nav a:hover {
		color: var(--text);
	}

	.mobile-store-buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1rem;
	}

	.mobile-store-btn {
		padding: 1rem;
		text-align: center;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.mobile-store-btn.gumroad {
		background: linear-gradient(135deg, var(--brand-start), var(--brand-end));
		color: white;
	}


	.mobile-store-btn.musehub {
		background: linear-gradient(135deg, #10b981, #059669);
		color: white;
	}

	main {
		padding-top: 80px; /* Push content below fixed header */
	}

	/* Global buttons and surfaces */
	:global(.btn-primary),
	:global(.btn-plugin-primary) {
		background: linear-gradient(135deg, var(--brand-start), var(--brand-end));
		color: white;
		border: 1px solid var(--border);
		border-radius: 10px;
		padding: 0.75rem 1.25rem;
		font-weight: 600;
		text-decoration: none;
		transition: transform 0.15s ease, opacity 0.2s ease;
	}

	:global(.btn-primary:hover),
	:global(.btn-plugin-primary:hover) {
		transform: translateY(-1px);
		opacity: 0.95;
	}

	:global(.btn-secondary) {
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid var(--border);
		color: var(--text);
		border-radius: 10px;
		padding: 0.75rem 1.25rem;
		font-weight: 600;
		text-decoration: none;
		transition: transform 0.15s ease, opacity 0.2s ease;
	}

	:global(.btn-secondary:hover) {
		transform: translateY(-1px);
		opacity: 0.95;
	}

	:global(.btn-details),
	:global(.btn-buy) {
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid var(--border);
		color: var(--text);
		border-radius: 10px;
		padding: 0.65rem 1rem;
		font-weight: 600;
		text-decoration: none;
		transition: transform 0.15s ease, opacity 0.2s ease;
	}

	:global(.btn-details:hover),
	:global(.btn-buy:hover) {
		transform: translateY(-1px);
		opacity: 0.95;
	}

	:global(.product-card),
	:global(.plugin-card) {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: 16px;
		box-shadow: 0 10px 30px rgba(0,0,0,0.25);
	}

	:global(.product-content),
	:global(.plugin-info) {
		background: var(--surface-2);
		border: 1px solid var(--border);
		border-radius: 16px;
	}

	:global(.plugin-description),
	:global(.product-description),
	:global(.hero-subtitle) {
		color: var(--muted);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.header-container {
			padding: 0 1rem;
			gap: 0.5rem;
		}

		.nav {
			display: none;
		}

		.store-buttons {
			display: none;
		}

		.mobile-menu-btn {
			display: block;
			flex-shrink: 0;
		}

		.logo {
			flex-shrink: 0;
			min-width: 0;
		}

		.logo-text {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 480px) {
		.header-container {
			padding: 0 0.75rem;
		}

		.logo-text {
			font-size: 1rem;
		}

		.logo-img {
			height: 32px;
		}
	}
</style>
