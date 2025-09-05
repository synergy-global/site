<script>
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Synergy DSP - In pursuit of audio innovation</title>
	<meta name="description" content="Transform your audio production with cutting-edge AI-powered DSP plugins. Professional-grade tools for the modern music producer." />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="homepage" class:mounted>
		<!-- Hero Section -->
		<section class="hero">
			<div class="container">
				<div class="hero-content">
					<h1 class="hero-title">
						Synergy DSP
						<span class="gradient-text">Audio Intelligence</span>
					</h1>
					<p class="hero-subtitle">
						Revolutionary AI-powered audio plugins that adapt to your sound in real-time
					</p>
					<div class="hero-actions">
						<a href="https://store.synergy-dsp.com/" target="_blank" class="btn-primary">Buy on Gumroad</a>
						<a href="https://www.musehub.com/partner/synergy-dsp" target="_blank" class="btn-secondary">Buy on Musehub</a>
					</div>
				</div>
				<div class="hero-visual">
					<div class="waveform-container">
						<svg class="waveform" viewBox="0 0 400 100">
							{#each Array(40) as _, i}
								<rect 
									x={i * 10} 
									y={50 - Math.sin(i * 0.3) * 20 - Math.random() * 15} 
									width="6" 
									height={Math.sin(i * 0.3) * 40 + Math.random() * 30 + 10}
									fill="url(#waveGradient)"
									class="wave-bar"
									style="--delay: {i * 0.05}s"
								/>
							{/each}
							<defs>
								<linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
									<stop offset="0%" stop-color="#00ff88" />
									<stop offset="50%" stop-color="#667eea" />
									<stop offset="100%" stop-color="#764ba2" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</section>

	<!-- VST Plugins Showcase -->
	<section class="plugins">
		<div class="container">
			<h2 class="section-title">Professional VST Plugin Suite</h2>
			<p class="section-subtitle">AI-powered audio processing tools for modern producers</p>
			
			<div class="plugins-grid">
				<!-- LVLR - AI Opto Compressor -->
				<div class="plugin-card featured">
					<div class="plugin-image">
						<img src="/lvlr.png" alt="LVLR AI Opto Compressor" class="vst-image" />
					</div>
					<div class="plugin-info">
						<h3>LVLR</h3>
						<p class="plugin-category">AI-Powered Opto Compressor</p>
						<p class="plugin-description">Revolutionary optical compressor with differential AI technology for intelligent attack and release timing that adapts to your audio in real-time.</p>
						<div class="plugin-features">
							<span class="feature-tag ai">Differential AI</span>
							<span class="feature-tag">Optical Circuit</span>
							<span class="feature-tag">Zero Latency</span>
						</div>
						<div class="plugin-actions">
							<a href="https://synergydsp.gumroad.com/l/Lvlr" target="_blank" class="btn-plugin-primary">Buy on Gumroad</a>
						</div>
					</div>
				</div>

				<!-- Millennium V2 - Tube Console -->
				<div class="plugin-card featured">
					<div class="plugin-image">
						<img src="/millenium v2.avif" alt="Millennium V2 Tube Console" class="vst-image" />
					</div>
					<div class="plugin-info">
						<h3>Millennium V2</h3>
						<p class="plugin-category">Vintage Tube Console</p>
						<p class="plugin-description">Authentic vintage console channel strip with 4-band EQ, ML-powered optical compressor, and tube saturation for that classic analog warmth.</p>
						<div class="plugin-features">
							<span class="feature-tag vintage">4-Band EQ</span>
							<span class="feature-tag vintage">ML Opto Comp</span>
							<span class="feature-tag vintage">Tube Saturation</span>
						</div>
						<div class="plugin-actions">
							<a href="https://synergydsp.gumroad.com/l/MilleniumV2" target="_blank" class="btn-plugin-primary">Buy on Gumroad</a>
							<a href="https://www.musehub.com/plugin/millennium-v2" target="_blank" class="btn-plugin-secondary">Buy on Musehub</a>
						</div>
					</div>
				</div>
		</div>
	</section>


</main>

<footer class="site-footer">
	<div class="footer-content">
		<div class="footer-section">
			<h4>Sitemap</h4>
			<ul class="footer-links">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/support">Support</a></li>
				<li><a href="https://synergydsp.gumroad.com" target="_blank">Gumroad Store</a></li>
				<li><a href="https://www.musehub.com/brand/synergy-dsp" target="_blank">Musehub Store</a></li>
			</ul>
		</div>
		<div class="footer-section">
			<h4>Products</h4>
			<ul class="footer-links">
				<li><a href="https://synergydsp.gumroad.com/l/Lvlr" target="_blank">LVLR</a></li>
				<li><a href="https://synergydsp.gumroad.com/l/MilleniumV2" target="_blank">Millennium V2</a></li>
			</ul>
		</div>
	</div>
	<div class="footer-bottom">
		<p>&copy; 2024 Synergy DSP. All rights reserved.</p>
	</div>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: #0a0a0a;
		color: #ffffff;
		overflow-x: hidden;
	}



	.vst-image {
		width: 100%;
		height: auto;
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}

	.vst-image:hover {
		transform: scale(1.02);
	}

	.homepage {
		min-height: 100vh;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
		padding-top: 80px; /* Account for fixed header */
	}

	.homepage.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
		position: relative;
		overflow: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
					radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%);
		pointer-events: none;
	}

	.hero-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		position: relative;
		z-index: 1;
	}

	.hero-title {
		font-size: 4rem;
		font-weight: 700;
		line-height: 1.1;
		margin: 0 0 1.5rem 0;
		letter-spacing: -0.02em;
	}

	.gradient-text {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		line-height: 1.6;
		color: #a0a0a0;
		margin: 0 0 2rem 0;
		max-width: 500px;
	}

	.hero-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn-primary, .btn-secondary {
		padding: 1rem 2rem;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
		display: inline-block;
		text-align: center;
	}

	.btn-primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
	}

	.btn-secondary {
		background: transparent;
		color: #ffffff;
		border: 2px solid #333;
	}

	.btn-secondary:hover {
		background: #333;
		transform: translateY(-2px);
	}

	.btn-primary.large {
		padding: 1.25rem 3rem;
		font-size: 1.125rem;
	}

	.audio-visualizer {
		width: 100%;
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.waveform {
		display: flex;
		align-items: end;
		gap: 4px;
		height: 150px;
	}

	.bar {
		width: 8px;
		height: var(--height);
		background: linear-gradient(to top, #667eea, #764ba2);
		border-radius: 4px;
		animation: pulse 2s ease-in-out infinite;
		animation-delay: var(--delay);
	}

	@keyframes pulse {
		0%, 100% { height: var(--height); }
		50% { height: calc(var(--height) * 0.3); }
	}

	.plugins {
		padding: 8rem 0;
		background: #0f0f0f;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.section-title {
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		margin: 0 0 1rem 0;
		color: #ffffff;
	}

	.section-subtitle {
		font-size: 1.25rem;
		color: #a0a0a0;
		text-align: center;
		margin: 0 0 4rem 0;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 4rem;
	}

	.plugins-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.plugin-card {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(10px);
		transition: all 0.4s ease;
		overflow: hidden;
	}

	.plugin-card.featured {
		grid-column: span 2;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0;
	}

	.plugin-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
		border-color: rgba(102, 126, 234, 0.2);
	}

	.plugin-image {
		padding: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
	}

	.plugin-interface {
		width: 100%;
		max-width: 280px;
		height: 200px;
		background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
		border-radius: 12px;
		border: 2px solid #333;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.5);
	}

	.knobs-row {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
	}

	.knob {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
		border: 2px solid #444;
		position: relative;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	.knob.small {
		width: 30px;
		height: 30px;
	}

	.large-knob {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
		border: 3px solid #555;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
	}

	.knob::after {
		content: '';
		position: absolute;
		top: 4px;
		left: 50%;
		transform: translateX(-50%);
		width: 2px;
		height: 12px;
		background: #667eea;
		border-radius: 1px;
	}

	.display {
		flex: 1;
		background: #000;
		border-radius: 8px;
		border: 1px solid #333;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.spectrum-analyzer {
		display: flex;
		align-items: end;
		gap: 3px;
		height: 60px;
	}

	.freq-bar {
		width: 6px;
		height: var(--height);
		background: linear-gradient(to top, #667eea, #764ba2);
		border-radius: 2px;
		animation: frequency 1.5s ease-in-out infinite;
		animation-delay: var(--delay);
	}

	@keyframes frequency {
		0%, 100% { height: var(--height); }
		50% { height: calc(var(--height) * 0.4); }
	}

	.meter-section {
		display: flex;
		gap: 0.5rem;
	}

	.vu-meter {
		width: 20px;
		height: 120px;
		background: #000;
		border-radius: 4px;
		border: 1px solid #333;
		position: relative;
		overflow: hidden;
	}

	.meter-bar {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: var(--level);
		background: linear-gradient(to top, #00ff00 0%, #ffff00 70%, #ff0000 100%);
		transition: height 0.1s ease;
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.small-knobs {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.reverb-display {
		flex: 1;
		background: #000;
		border-radius: 8px;
		border: 1px solid #333;
		padding: 1rem;
		display: flex;
		align-items: end;
		justify-content: center;
	}

	.impulse-wave {
		display: flex;
		align-items: end;
		gap: 4px;
		height: 60px;
	}

	.impulse-bar {
		width: 8px;
		height: var(--height);
		background: linear-gradient(to top, #667eea, #764ba2);
		border-radius: 2px;
		animation: impulse 2s ease-out infinite;
		animation-delay: var(--delay);
	}

	@keyframes impulse {
		0% { height: var(--height); }
		100% { height: 10%; }
	}

	.reverb-controls {
		display: flex;
		gap: 1rem;
	}

	.wave-display {
		flex: 1;
		background: #000;
		border-radius: 8px;
		border: 1px solid #333;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.wave-svg {
		width: 100%;
		height: 40px;
	}

	.sat-controls {
		display: flex;
		gap: 1rem;
	}

	.plugin-info {
		padding: 2rem;
	}

	.plugin-info h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: #ffffff;
	}

	.plugin-category {
		font-size: 0.9rem;
		color: #667eea;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin: 0 0 1rem 0;
	}

	.plugin-description {
		color: #a0a0a0;
		line-height: 1.6;
		margin: 0 0 1.5rem 0;
		font-size: 0.95rem;
	}

	.plugin-features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 0 0 1.5rem 0;
	}

	.feature-tag {
		padding: 0.25rem 0.75rem;
		background: rgba(102, 126, 234, 0.1);
		border: 1px solid rgba(102, 126, 234, 0.3);
		border-radius: 20px;
		font-size: 0.8rem;
		color: #667eea;
		font-weight: 500;
	}

	.plugin-actions {
		display: flex;
		gap: 0.75rem;
	}

	.btn-plugin-primary, .btn-plugin-secondary {
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
		display: inline-block;
		text-align: center;
	}

	.btn-plugin-primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
	}

	.btn-plugin-primary:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
	}

	.btn-plugin-secondary {
		background: transparent;
		color: #a0a0a0;
		border: 1px solid #333;
	}

	.btn-plugin-secondary:hover {
		background: #333;
		color: #ffffff;
		transform: translateY(-1px);
	}

	.bundle-section {
		margin-top: 4rem;
		display: flex;
		justify-content: center;
	}

	.bundle-card {
		background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
		border: 2px solid rgba(102, 126, 234, 0.3);
		border-radius: 20px;
		padding: 3rem;
		text-align: center;
		max-width: 400px;
		backdrop-filter: blur(10px);
	}

	.bundle-card h3 {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		color: #ffffff;
	}

	.bundle-card p {
		color: #a0a0a0;
		margin: 0 0 2rem 0;
		line-height: 1.6;
	}

	.bundle-price {
		margin: 0 0 2rem 0;
	}

	.price-original {
		font-size: 1.25rem;
		color: #666;
		text-decoration: line-through;
		margin-right: 1rem;
	}

	.price-current {
		font-size: 2rem;
		font-weight: 700;
		color: #667eea;
		margin-right: 1rem;
	}

	.price-save {
		background: #667eea;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
	}

	.btn-bundle {
		padding: 1rem 2.5rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
	}

	.btn-bundle:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
	}

	.cta {
		padding: 8rem 0;
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
		text-align: center;
	}

	.cta-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 1rem 0;
		color: #ffffff;
	}

	.cta-content p {
		font-size: 1.25rem;
		color: #a0a0a0;
		margin: 0 0 2rem 0;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	@media (max-width: 768px) {
		.hero-content {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 2rem;
		}

		.hero-title {
			font-size: 2.5rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.plugins-grid {
			grid-template-columns: 1fr;
		}

		.plugin-card.featured {
			grid-column: span 1;
			grid-template-columns: 1fr;
		}

		.plugin-interface {
			max-width: 250px;
			height: 180px;
			padding: 1rem;
		}

		.knob {
			width: 35px;
			height: 35px;
		}

		.large-knob {
			width: 50px;
			height: 50px;
		}

		.plugin-info {
			padding: 1.5rem;
		}

		.bundle-card {
			padding: 2rem;
			margin: 0 1rem;
		}

		.hero-buttons {
			justify-content: center;
		}
	}

	/* Footer Styles */
	.site-footer {
		background: #111;
		border-top: 1px solid #333;
		margin-top: 4rem;
		padding: 3rem 0 1rem;
		color: #ccc;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}

	.footer-section h4 {
		color: #fff;
		margin-bottom: 1rem;
		font-size: 1.1rem;
		font-weight: 600;
	}

	.footer-links {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-links li {
		margin-bottom: 0.5rem;
	}

	.footer-links a {
		color: #ccc;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.footer-links a:hover {
		color: #4a9eff;
	}

	.footer-bottom {
		max-width: 1200px;
		margin: 2rem auto 0;
		padding: 1rem 2rem 0;
		border-top: 1px solid #333;
		text-align: center;
	}

	.footer-bottom p {
		margin: 0;
		font-size: 0.9rem;
		color: #888;
	}
</style>
