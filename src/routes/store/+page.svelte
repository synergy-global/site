<script>
	import { onMount } from 'svelte';

	let mounted = false;

	// Product data
	const products = [
		{
			id: 'lvlr',
			name: 'LVLR',
			description: 'Advanced AI-powered dynamics processor for adaptive, transparent control.',
			price: '£79.99',
			image: '/lvlr.png',
			features: [
				'Program-dependent response',
				'Adaptive compression',
				'Real-time analysis'
			],
			gumroadLink: 'https://synergydsp.gumroad.com/l/Lvlr',
			musehubLink: 'https://www.musehub.com/brand/synergy-dsp'
		},
		{
			id: 'millennium',
			name: 'Millennium V2',
			description: 'Vintage tube console VST for analog warmth, clarity, and control.',
			price: '£49.99',
			image: '/millenium v2.avif',
			features: [
				'Enhanced preamp section',
				'4-band parametric EQ',
				'ML-powered opto compressor',
				'Upgraded UI',
				'Vintage tube coloration'
			],
			gumroadLink: 'https://synergydsp.gumroad.com/l/MilleniumV2',
			musehubLink: 'https://www.musehub.com/brand/synergy-dsp'
		}
	];

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Store - Synergy DSP</title>
	<meta name="description" content="Shop Synergy DSP's revolutionary audio plugins. Transform your productions with our AI-powered audio tools." />
</svelte:head>

<main class="store-page" class:mounted>
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<h1>Synergy DSP Store</h1>
			<p class="hero-subtitle">Revolutionary audio plugins powered by Generative DSP</p>
		</div>
	</section>

	<!-- Products Section -->
	<section class="products">
		<div class="container">
			<div class="products-grid">
				{#each products as product}
					<div class="product-card">
						<div class="product-image">
							<img src={product.image} alt={product.name} />
						</div>
						<div class="product-content">
							<h2 class="product-title">{product.name}</h2>
							<p class="product-description">{product.description}</p>
							<div class="product-features">
								<h3>Key Features</h3>
								<ul>
									{#each product.features as feature}
										<li>{feature}</li>
									{/each}
								</ul>
							</div>
					<div class="product-price">{product.price}</div>
					<div class="product-actions">
						<a href={`/store/${product.id}`} class="btn-details">View Details</a>
					</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	</section>

	<!-- Why Choose Us Section -->
	<section class="why-choose">
		<div class="container">
			<h2>Why Choose Synergy DSP</h2>
			<div class="benefits-grid">
				<div class="benefit-card">
					<div class="benefit-icon">🧠</div>
					<h3>AI-Powered Innovation</h3>
					<p>Our plugins leverage cutting-edge AI technology to deliver adaptive, intelligent audio processing.</p>
				</div>
				<div class="benefit-card">
					<div class="benefit-icon">⚡</div>
					<h3>Ultra-Efficient Performance</h3>
					<p>Enjoy professional-quality processing with smooth, responsive performance across sessions.</p>
				</div>
				<div class="benefit-card">
					<div class="benefit-icon">🎛️</div>
					<h3>Intuitive Interfaces</h3>
					<p>Beautifully designed controls that make complex processing simple and intuitive.</p>
				</div>
				<div class="benefit-card">
					<div class="benefit-icon">🔄</div>
					<h3>Free Updates</h3>
					<p>Regular updates with new features and improvements at no additional cost.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="faq">
		<div class="container">
			<h2>Frequently Asked Questions</h2>
			<div class="faq-grid">
				<div class="faq-item">
					<h3>What DAWs are supported?</h3>
					<p>Our plugins support all major DAWs including Logic Pro, Ableton Live, FL Studio, Cubase, Studio One, and more. We provide VST3 and AU formats.</p>
				</div>
				<div class="faq-item">
					<h3>Can I use the plugins on multiple computers?</h3>
					<p>Yes, your license allows installation on up to 3 computers for personal use. For commercial studios, please contact us for multi-seat licensing options.</p>
				</div>
				<div class="faq-item">
					<h3>How do I get updates?</h3>
					<p>Updates are free for all registered users. You'll receive email notifications when updates are available, or check your account dashboard for the latest versions.</p>
				</div>
				<div class="faq-item">
					<h3>What are the system requirements?</h3>
					<p>macOS 10.14+, 64-bit processor, 8GB RAM minimum (16GB recommended).</p>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	.store-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
		color: white;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.store-page.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Hero Section */
	.hero {
		padding: 6rem 0 4rem;
		text-align: center;
		background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		color: rgba(255, 255, 255, 0.8);
		max-width: 600px;
		margin: 0 auto;
	}

	/* Products Section */
	.products {
		padding: 4rem 0;
	}

	.products-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
	}

	.product-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.product-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.product-image {
		width: 100%;
		height: 300px;
		overflow: hidden;
		background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.product-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.product-card:hover .product-image img {
		transform: scale(1.05);
	}

	.product-content {
		padding: 2rem;
	}

	.product-title {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: white;
	}

	.product-description {
		font-size: 1.1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 1.5rem;
	}

	.product-features {
		margin-bottom: 1.5rem;
	}

	.product-features h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		color: rgba(139, 92, 246, 1);
	}

	.product-features ul {
		list-style: none;
		padding: 0;
	}

	.product-features li {
		position: relative;
		padding-left: 1.5rem;
		margin-bottom: 0.5rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.product-features li::before {
		content: "✓";
		position: absolute;
		left: 0;
		color: rgba(139, 92, 246, 1);
		font-weight: bold;
	}

	.product-price {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1.5rem;
	}

	.product-actions {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.btn-details {
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

	.btn-details:hover {
		background: rgba(139, 92, 246, 0.2);
		border-color: rgba(139, 92, 246, 0.5);
	}

	.store-buttons {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}

	.btn-buy {
		display: inline-block;
		padding: 0.75rem 1rem;
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

	/* Why Choose Us Section */
	.why-choose {
		padding: 4rem 0;
		background: rgba(255, 255, 255, 0.02);
	}

	.why-choose h2 {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 3rem;
		color: white;
	}

	.benefits-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	.benefit-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 2rem;
		transition: transform 0.3s ease;
	}

	.benefit-card:hover {
		transform: translateY(-5px);
	}

	.benefit-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.benefit-card h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: white;
	}

	.benefit-card p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
	}

	/* FAQ Section */
	.faq {
		padding: 4rem 0;
	}

	.faq h2 {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 3rem;
		color: white;
	}

	.faq-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	.faq-item {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 16px;
		padding: 2rem;
	}

	.faq-item h3 {
		font-size: 1.3rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: rgba(139, 92, 246, 1);
	}

	.faq-item p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
	}

	/* Responsive Design */
	@media (max-width: 992px) {
		.benefits-grid,
		.faq-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		.product-image {
			height: 200px;
		}

		.product-title {
			font-size: 1.5rem;
		}

		.store-buttons {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.container {
			padding: 0 1rem;
		}

		.hero h1 {
			font-size: 2rem;
		}

		.product-content {
			padding: 1.5rem;
		}
	}
</style>