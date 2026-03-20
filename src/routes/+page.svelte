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

				</div>
				<div class="hero-visual">
					<div class="wave-box">
					<svg class="wave-line" viewBox="0 0 400 100">
						<path 
							d="M0,50 Q100,20 200,50 T400,50" 
							stroke="url(#waveGradient)" 
							stroke-width="3" 
							fill="none" 
							class="animated-wave"
						/>
						<defs>
							<linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
								<stop offset="0%" stop-color="#00d4ff" />
								<stop offset="25%" stop-color="#5b73ff" />
								<stop offset="50%" stop-color="#667eea" />
								<stop offset="75%" stop-color="#f093fb" />
								<stop offset="100%" stop-color="#f5576c" />
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
						<a href="/store/millennium" class="btn-plugin-primary">View Details</a>
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
			</ul>
		</div>
		<div class="footer-section">
			<h4>Products</h4>
			<ul class="footer-links">
				<li><a href="https://www.musehub.com/plugin/millennium-v2?utm_source=synergy-dsp&utm_medium=synergy-dsp-web&utm_campaign=millennium-v2" target="_blank">Millennium V2</a></li>
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
		/* Remove duplicate padding-top as it's already in the layout */
/* padding-top: 80px; */
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
background: #0f0f23;
border-radius: 12px;
overflow: hidden;
position: relative;
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
background: rgba(15, 15, 35, 0.5);
border-radius: 16px;
overflow: hidden;
transition: transform 0.3s ease, box-shadow 0.3s ease;
border: 1px solid rgba(255, 255, 255, 0.05);
}

.plugin-card:hover {
transform: translateY(-10px);
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.plugin-card.featured {
grid-column: span 2;
display: grid;
grid-template-columns: 1fr 1fr;
}

.plugin-image {
padding: 2rem;
background: rgba(10, 10, 20, 0.5);
display: flex;
align-items: center;
justify-content: center;
}

.plugin-info {
padding: 2rem;
}

.plugin-info h3 {
font-size: 2rem;
font-weight: 700;
margin: 0 0 0.5rem 0;
color: #ffffff;
}

.plugin-category {
font-size: 1rem;
color: #667eea;
margin: 0 0 1rem 0;
font-weight: 600;
}

.plugin-description {
font-size: 1rem;
line-height: 1.6;
color: #a0a0a0;
margin: 0 0 1.5rem 0;
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
border-radius: 8px;
font-size: 0.9rem;
font-weight: 600;
cursor: pointer;
transition: all 0.3s ease;
text-decoration: none;
display: inline-block;
}

.btn-plugin-primary {
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-plugin-primary:hover {
transform: translateY(-2px);
box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
}

.btn-plugin-secondary {
background: transparent;
color: #ffffff;
border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-plugin-secondary:hover {
background: rgba(255, 255, 255, 0.1);
transform: translateY(-2px);
}

.feature-tag.ai {
background: rgba(16, 185, 129, 0.1);
border: 1px solid rgba(16, 185, 129, 0.3);
color: #10b981;
}

.feature-tag.vintage {
background: rgba(236, 72, 153, 0.1);
border: 1px solid rgba(236, 72, 153, 0.3);
color: #ec4899;
}

.knob {
width: 40px;
height: 40px;
border-radius: 50%;
background: linear-gradient(145deg, #222, #111);
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
width: 2px;
height: 40%;
background: #fff;
transform: translateX(-50%);
border-radius: 2px;
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
background: linear-gradient(to top, #10b981, #059669);
border-radius: 4px;
animation: impulse 2s ease-out infinite;
animation-delay: var(--delay);
}

@keyframes impulse {
0% { height: var(--height); }
100% { height: 2px; }
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

.bundle-section {
margin-top: 4rem;
display: flex;
justify-content: center;
}

.bundle-card {
background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
border: 2px solid rgba(102, 126, 234, 0.3);
border-radius: 16px;
padding: 3rem;
text-align: center;
max-width: 600px;
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
color: #ffffff;
}

.price-save {
background: #667eea;
color: white;
padding: 0.25rem 0.75rem;
border-radius: 20px;
font-size: 0.8rem;
font-weight: 600;
margin-left: 1rem;
}

.btn-bundle {
padding: 1rem 2.5rem;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
border: none;
border-radius: 8px;
font-size: 1.1rem;
font-weight: 600;
cursor: pointer;
transition: all 0.3s ease;
text-decoration: none;
display: inline-block;
}

.btn-bundle:hover {
transform: translateY(-2px);
box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.cta {
padding: 8rem 0;
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.cta-content h2 {
font-size: 2.5rem;
font-weight: 700;
margin: 0 0 1.5rem 0;
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

/* Responsive Styles */
@media (max-width: 1200px) {
.hero-title {
font-size: 3.5rem;
}

.section-title {
font-size: 2.5rem;
}

.plugin-card.featured {
grid-column: span 1;
grid-template-columns: 1fr;
}
}

@media (max-width: 768px) {
.hero-content {
grid-template-columns: 1fr;
text-align: center;
gap: 2rem;
}

.hero-title {
font-size: 2.2rem;
line-height: 1.2;
}

.hero-subtitle {
font-size: 1rem;
line-height: 1.5;
}

.hero-actions {
flex-direction: column;
gap: 1rem;
align-items: center;
}

.btn-primary, .btn-secondary {
width: 100%;
max-width: 250px;
text-align: center;
}

.section-title {
font-size: 2rem;
}

.section-subtitle {
font-size: 1rem;
margin-bottom: 2rem;
}

.plugins-grid {
grid-template-columns: 1fr;
}

.plugin-card {
grid-template-columns: 1fr;
text-align: center;
}

.plugin-card.featured {
grid-column: span 1;
grid-template-columns: 1fr;
}

.plugin-image {
margin-bottom: 1rem;
}

.vst-image {
max-width: 280px;
height: auto;
}

.plugin-info {
padding: 1.5rem;
}

.plugin-info h3 {
font-size: 1.5rem;
}

.plugin-description {
font-size: 0.9rem;
line-height: 1.5;
}

.plugin-features {
justify-content: center;
flex-wrap: wrap;
}

.feature-tag {
font-size: 0.8rem;
padding: 0.4rem 0.8rem;
}

.plugin-actions {
flex-direction: column;
gap: 0.75rem;
align-items: center;
}

.btn-plugin-primary,
.btn-plugin-secondary {
width: 100%;
max-width: 200px;
padding: 0.8rem 1.2rem;
font-size: 0.9rem;
text-align: center;
}

.wave-box {
max-width: 350px;
margin: 0 auto;
padding: 20px;
border: 2px solid rgba(102, 126, 234, 0.3);
border-radius: 12px;
background: rgba(0, 0, 0, 0.1);
backdrop-filter: blur(10px);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.wave-line {
width: 100%;
height: 80px;
}

.animated-wave {
animation: waveFlow 3s ease-in-out infinite, waveGlow 2s ease-in-out infinite;
filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.5));
}

@keyframes waveFlow {
0% { d: path('M0,50 Q100,20 200,50 T400,50'); }
25% { d: path('M0,50 Q100,30 200,40 T400,60'); }
50% { d: path('M0,50 Q100,70 200,30 T400,50'); }
75% { d: path('M0,50 Q100,40 200,60 T400,40'); }
100% { d: path('M0,50 Q100,20 200,50 T400,50'); }
}

@keyframes waveGlow {
0%, 100% { filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.5)); }
50% { filter: drop-shadow(0 0 16px rgba(0, 212, 255, 0.8)) drop-shadow(0 0 8px rgba(245, 87, 108, 0.4)); }
}
}

@media (max-width: 480px) {
.hero-title {
font-size: 1.8rem;
}

.wave-box {
max-width: 280px;
padding: 15px;
}

.wave-line {
height: 60px;
}

.animated-wave {
filter: drop-shadow(0 0 6px rgba(0, 212, 255, 0.4));
}

@keyframes waveGlow {
0%, 100% { filter: drop-shadow(0 0 6px rgba(0, 212, 255, 0.4)); }
50% { filter: drop-shadow(0 0 12px rgba(0, 212, 255, 0.6)) drop-shadow(0 0 6px rgba(245, 87, 108, 0.3)); }
}

.section-title {
font-size: 1.5rem;
}

.plugin-info {
padding: 1rem;
}

.btn-primary,
.btn-secondary {
padding: 0.9rem 1.2rem;
font-size: 0.9rem;
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
font-size: 1.2rem;
margin-bottom: 1rem;
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
color: #667eea;
}

.footer-bottom {
text-align: center;
margin-top: 2rem;
padding-top: 1rem;
border-top: 1px solid #333;
font-size: 0.9rem;
}

@media (max-width: 600px) {
.footer-content {
grid-template-columns: 1fr;
}

.footer-section {
text-align: center;
}

.footer-section h4 {
font-size: 1rem;
margin-bottom: 0.75rem;
}

.footer-links {
display: flex;
flex-direction: column;
gap: 0.5rem;
}

.footer-links li {
margin-bottom: 0;
}

.footer-links a {
padding: 0.5rem;
border-radius: 4px;
display: block;
}
}
</style>
