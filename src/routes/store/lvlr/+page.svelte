<script>
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>LVLR - Synergy DSP</title>
    <meta name="description" content="LVLR is an advanced AI-powered dynamics processor that adapts to your audio in real-time with adaptive compression and transparent dynamics control." />
</svelte:head>

<main class="product-page" class:mounted>
	<!-- Breadcrumb Navigation -->
	<nav class="breadcrumb-nav">
		<div class="container">
			<div class="breadcrumb">
				<a href="/">Home</a>
				<span>/</span>
				<a href="/store">Store</a>
				<span>/</span>
				<span>LVLR</span>
			</div>
		</div>
	</nav>

	<!-- Product Hero -->
	<section class="product-hero">
		<div class="container">
			<div class="product-grid">
				<div class="product-image">
					<img src="/lvlr.png" alt="LVLR Plugin Interface" />
				</div>
				<div class="product-info">
					<h1>LVLR</h1>
					<p class="product-tagline">Advanced AI-powered dynamics processor</p>
					<div class="product-price">£79.99</div>
					<div class="product-actions">
						<a class="gumroad-button" href="https://synergydsp.gumroad.com/l/Lvlr" data-gumroad-overlay-checkout="true">Buy on</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Product Description -->
	<section class="product-description">
		<div class="container">
			<div class="description-content">
				<h2>About LVLR</h2>
				<p>
					LVLR is a revolutionary dynamics processor that leverages our Generative DSP technology to provide intelligent, adaptive audio processing. Unlike traditional compressors and limiters, LVLR analyzes your audio in real-time and automatically adjusts its parameters for optimal results.
				</p>
				<p>
					Whether you're mixing vocals, drums, or full mixes, LVLR delivers transparent dynamics control with minimal effort. Its AI-driven engine understands the nuances of your audio, providing consistent levels without the pumping and artifacts common in conventional processors.
				</p>
			</div>
		</div>
	</section>

	<!-- Key Features -->
	<section class="key-features">
		<div class="container">
			<h2>Key Features</h2>
			<div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🧠</div>
                    <h3>Program-Dependent Response</h3>
                    <p>Adaptive behavior that reacts musically to source material, maintaining transparency while controlling dynamics.</p>
                </div>
				<div class="feature-card">
					<div class="feature-icon">🔄</div>
					<h3>Adaptive Compression</h3>
					<p>The AI-driven compression engine adapts to your audio in real-time, providing transparent dynamics control that respects the natural character of your sound.</p>
				</div>
				<div class="feature-card">
					<div class="feature-icon">⚡</div>
					<h3>Responsive Performance</h3>
					<p>Designed for modern workflows, ensuring smooth operation across typical production scenarios.</p>
				</div>

				<div class="feature-card">
					<div class="feature-icon">🎛️</div>
					<h3>Intuitive Interface</h3>
					<p>The clean, modern interface provides visual feedback and simple controls that make complex dynamics processing accessible to everyone.</p>
				</div>
                <div class="feature-card">
                    <div class="feature-icon">🎚️</div>
                    <h3>Mix-Ready Presets</h3>
                    <p>Useful starting points for common tasks to speed up workflow without complex setup.</p>
                </div>
			</div>
		</div>
	</section>

	<!-- Technical Specifications -->
	<section class="tech-specs">
		<div class="container">
			<h2>Technical Specifications</h2>
			<div class="specs-grid">
				<div class="spec-item">
					<h3>Formats</h3>
					<p>VST3, AU (macOS only)</p>
				</div>
				<div class="spec-item">
					<h3>System Requirements</h3>
					<p>macOS 10.14 or higher, 64-bit processor, 8GB RAM minimum (16GB recommended)</p>
				</div>

			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="cta">
		<div class="container">
			<div class="cta-content">
				<h2>Ready to Transform Your Mixes?</h2>
				<p>Join thousands of producers and engineers who trust LVLR for their most important projects.</p>
				<div class="cta-buttons">
					<a class="gumroad-button" href="https://synergydsp.gumroad.com/l/Lvlr" data-gumroad-overlay-checkout="true">Buy on</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Related Products -->
	<section class="related-products">
		<div class="container">
			<h2>You May Also Like</h2>
			<div class="related-grid">
				<div class="related-card">
					<div class="related-image">
						<img src="/millenium v2.avif" alt="Millennium V2" />
					</div>
					<div class="related-content">
						<h3>Millennium V2</h3>
						<p>Next-generation reverb plugin with AI-driven space modeling and advanced controls.</p>
						<a href="/store/millennium" class="btn-view">View Details</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.product-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
		color: white;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.product-page.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Breadcrumb Navigation */
	.breadcrumb-nav {
		padding: 2rem 0;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
	}

	.breadcrumb a {
		color: rgba(139, 92, 246, 0.8);
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.breadcrumb a:hover {
		color: rgba(139, 92, 246, 1);
	}

	/* Product Hero */
	.product-hero {
		padding: 2rem 0 4rem;
	}

	.product-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.product-image {
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
	}

	.product-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.product-info {
		padding: 2rem;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
	}

	.product-info h1 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.product-tagline {
		font-size: 1.5rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 2rem;
	}

	.product-price {
		font-size: 2.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 2rem;
	}

	.product-actions {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.btn-buy {
		display: inline-block;
		padding: 1rem 1.5rem;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		text-align: center;
		transition: all 0.3s ease;
	}

	.btn-buy.gumroad {
		background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
		color: white;
	}

	.btn-buy.musehub {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: white;
	}

	.btn-buy:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	}

	/* Product Description */
	.product-description {
		padding: 4rem 0;
		background: rgba(255, 255, 255, 0.02);
	}

	.description-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.description-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 2rem;
		color: white;
	}

	.description-content p {
		font-size: 1.2rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 1.5rem;
	}

	/* Key Features */
	.key-features {
		padding: 4rem 0;
	}

	.key-features h2 {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 3rem;
		color: white;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.feature-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 2rem;
		transition: transform 0.3s ease;
	}

	.feature-card:hover {
		transform: translateY(-5px);
	}

	.feature-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.feature-card h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: rgba(139, 92, 246, 1);
	}

	.feature-card p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
	}

	/* Technical Specifications */
	.tech-specs {
		padding: 4rem 0;
		background: rgba(255, 255, 255, 0.02);
	}

	.tech-specs h2 {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 3rem;
		color: white;
	}

	.specs-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.spec-item {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 2rem;
	}

	.spec-item h3 {
		font-size: 1.3rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: rgba(139, 92, 246, 1);
	}

	.spec-item p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
	}

	/* Call to Action */
	.cta {
		padding: 6rem 0;
		background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
	}

	.cta-content {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.cta-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: white;
	}

	.cta-content p {
		font-size: 1.2rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 2rem;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
	}

	.btn-primary {
		display: inline-block;
		padding: 1rem 2rem;
		background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.btn-secondary {
		display: inline-block;
		padding: 1rem 2rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.btn-primary:hover,
	.btn-secondary:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	}

	/* Related Products */
	.related-products {
		padding: 4rem 0;
	}

	.related-products h2 {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 3rem;
		color: white;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.related-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		overflow: hidden;
		transition: transform 0.3s ease;
	}

	.related-card:hover {
		transform: translateY(-5px);
	}

	.related-image {
		width: 100%;
		height: 200px;
		overflow: hidden;
	}

	.related-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.related-card:hover .related-image img {
		transform: scale(1.05);
	}

	.related-content {
		padding: 1.5rem;
	}

	.related-content h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: white;
	}

	.related-content p {
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 1.5rem;
	}

	.btn-view {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: rgba(139, 92, 246, 0.1);
		border: 1px solid rgba(139, 92, 246, 0.3);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		text-align: center;
		transition: all 0.3s ease;
	}

	.btn-view:hover {
		background: rgba(139, 92, 246, 0.2);
		border-color: rgba(139, 92, 246, 0.5);
	}

	/* Responsive Design */
	@media (max-width: 992px) {
		.features-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.product-grid {
			grid-template-columns: 1fr;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}

		.specs-grid {
			grid-template-columns: 1fr;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.product-actions {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.container {
			padding: 0 1rem;
		}

		.product-info h1 {
			font-size: 2rem;
		}

		.product-tagline {
			font-size: 1.2rem;
		}

		.product-price {
			font-size: 2rem;
		}

		.cta-content h2 {
			font-size: 2rem;
		}
	}
</style>