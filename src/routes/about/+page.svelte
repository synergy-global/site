<script>
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>About - Synergy DSP</title>
	<meta name="description" content="Learn about Synergy DSP's mission to revolutionize audio production with cutting-edge AI-powered DSP plugins and innovative audio technology." />
</svelte:head>

<div class="about-page" class:mounted>
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<h1>About Synergy DSP</h1>
			<p class="hero-subtitle">Pioneering the future of audio production with AI-powered DSP technology</p>
		</div>
	</section>

	<!-- Mission Section -->
	<section class="mission">
		<div class="container">
			<div class="content-grid">
				<div class="text-content">
					<h2>Our Mission</h2>
					<p>
						At Synergy DSP, we believe that technology should enhance creativity, not complicate it. 
						Our mission is to develop cutting-edge audio processing tools that empower musicians, 
						producers, and engineers to achieve their artistic vision with unprecedented ease and quality.
					</p>
					<p>
						We combine decades of audio engineering expertise with the latest advances in artificial 
						intelligence to create plugins that don't just process audio—they understand it.
					</p>
				</div>
				<div class="visual-element">
					<div class="waveform-visual">
						<svg viewBox="0 0 400 200" class="waveform">
							<path d="M0,100 Q100,50 200,100 T400,100" stroke="url(#gradient)" stroke-width="3" fill="none" />
							<path d="M0,100 Q100,150 200,100 T400,100" stroke="url(#gradient)" stroke-width="2" fill="none" opacity="0.6" />
							<defs>
								<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
									<stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
								</linearGradient>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Story Section -->
	<section class="story">
		<div class="container">
			<h2>Our Story</h2>
			<div class="story-content">
				<div class="story-text">
					<h3>Synergy DSP: Innovating Audio with Statistical Machine Learning</h3>
					<p>
						Founded in 2020 by Leon Starr, Synergy DSP is at the forefront of audio machine learning, 
						developing unique unsupervised models for real-time VST plugins. Our journey began with the 
						creation of exceptional, non-AI audio plugins, providing us with a deep understanding of audio 
						processing and user needs.
					</p>
					<p>
						Now, we leverage that expertise to craft advanced statistical AI models, meticulously designed 
						for the intricacies of audio. Our team of engineers, programmers, designers, and marketing 
						professionals is dedicated to rigorous research and development, ensuring our plugins deliver 
						unparalleled performance and empower audio engineers.
					</p>
					<p>
						We are committed to setting new technological standards, providing industry-leading insights 
						and tools through our exclusive distribution partnership with MuseHub. Synergy DSP: <strong>Crafted by engineers, for engineers.</strong>
					</p>
				</div>
				<div class="timeline">
					<div class="timeline-item">
						<div class="year">2020</div>
						<div class="content">
							<h4>The Foundation</h4>
							<p>Leon Starr establishes Synergy DSP, beginning with exceptional non-AI audio plugins to understand processing and user needs.</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">2022</div>
						<div class="content">
							<h4>AI Evolution</h4>
							<p>Transition to statistical machine learning, developing unique unsupervised models for real-time audio processing.</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">2024</div>
						<div class="content">
							<h4>MuseHub Exclusivity</h4>
							<p>Synergy DSP establishes an exclusivity partnership with MuseHub, the premier platform for innovative audio software.</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">2025</div>
						<div class="content">
							<h4>Millennium V2</h4>
							<p>Released Millennium V2, a vintage tube console VST featuring ML-powered opto-compression and an upgraded UI.</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">2026</div>
						<div class="content">
							<h4>ANAVERB V2</h4>
							<p>Launched ANAVERB V2, the first ChromaFlow Neural Network enabled VST, bringing context to real-time audio.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Values Section -->
	<section class="values">
		<div class="container">
			<h2>Our Values</h2>
			<div class="values-grid">
				<div class="value-card">
					<div class="icon">🎵</div>
					<h3>Music First</h3>
					<p>Every decision we make is guided by what serves the music and the artist's creative vision.</p>
				</div>
				<div class="value-card">
					<div class="icon">🔬</div>
					<h3>Innovation</h3>
					<p>We constantly push the boundaries of what's possible in audio technology and AI.</p>
				</div>
				<div class="value-card">
					<div class="icon">🤝</div>
					<h3>Community</h3>
					<p>We listen to our users and build tools that solve real problems in the studio.</p>
				</div>
				<div class="value-card">
					<div class="icon">⚡</div>
					<h3>Performance</h3>
					<p>Our plugins are optimized for professional workflows without compromising on quality.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<section class="team">
		<div class="container">
			<h2>Our Team</h2>
			<div class="team-grid">
				<div class="team-member">
					<div class="member-info">
						<h3>Leon Starr</h3>
						<div class="role">Founder/CTO, Distinguished Engineer</div>
						<div class="specialty">Lead for DSP, AI & Innovation</div>
						<p>
							Currently pursuing a PhD, Leon's work at Synergy centers around DSP and developing 
							AI methods for use in real-time VSTs. His vision drives the company's innovative 
							approach to statistical machine learning in audio processing.
						</p>
					</div>
				</div>
				<div class="team-member">
					<div class="member-info">
						<h3>James</h3>
						<div class="role">CEO, Lead for GUI</div>
						<div class="specialty">User Interface Design</div>
						<p>
							James leads the GUI development, ensuring that Synergy DSP's powerful audio 
							processing capabilities are presented through intuitive and professional 
							user interfaces that enhance the creative workflow.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact CTA -->
	<!-- Remove the Contact CTA section -->
	<!-- <section class="contact-cta">
		<div class="container">
			<h2>Ready to Transform Your Sound?</h2>
			<p>Join thousands of producers and engineers who trust Synergy DSP for their most important projects.</p>
			<div class="cta-buttons">
				<a href="/" class="btn-primary">Explore Our Plugins</a>
				<a href="mailto:contact@synergydsp.com" class="btn-secondary">Get in Touch</a>
			</div>
		</div>
	</section> -->
</div>

<style>
	.about-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
		color: white;
		padding-top: 80px;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.about-page.mounted {
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
		padding: 4rem 0;
		text-align: center;
		background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.8);
		max-width: 600px;
		margin: 0 auto;
	}

	/* Mission Section */
	.mission {
		padding: 5rem 0;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.text-content h2 {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 2rem;
		color: #6366f1;
	}

	.text-content p {
		font-size: 1.1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 1.5rem;
	}

	.waveform-visual {
		padding: 2rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.waveform {
		width: 100%;
		height: auto;
		animation: pulse 3s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 0.8; }
		50% { opacity: 1; }
	}

	/* Story Section */
	.story {
		padding: 5rem 0;
		background: rgba(255, 255, 255, 0.02);
	}

	.story h2 {
		font-size: 2.5rem;
		font-weight: 600;
		text-align: center;
		margin-bottom: 3rem;
		color: #8b5cf6;
	}

	.story-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
		max-width: 1200px;
		margin: 0 auto;
	}

	.story-text {
		padding: 2rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.story-text h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
		color: #6366f1;
		line-height: 1.3;
	}

	.story-text p {
		font-size: 1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 1.5rem;
	}

	.story-text strong {
		color: #ec4899;
		font-weight: 700;
	}

	.timeline {
		position: relative;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: -30px; /* Adjust to center with the year element */
		top: 0;
		bottom: 0;
		width: 2px;
		background: linear-gradient(to bottom, #6366f1, #8b5cf6);
	}

	.timeline-item {
		display: flex;
		align-items: center;
		margin-bottom: 2.5rem;
		position: relative;
		padding-left: 120px;
	}

	.year {
		font-size: 1.2rem;
		font-weight: 700;
		color: #6366f1;
		min-width: 80px;
		text-align: center;
		background: rgba(99, 102, 241, 0.1);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		border: 2px solid #6366f1;
		position: absolute;
		left: 0;
		z-index: 2;
	}

	.timeline-item .content {
		flex: 1;
		padding: 1.5rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 15px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.timeline-item .content h4 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: #8b5cf6;
	}

	.timeline-item .content p {
		font-size: 0.9rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
	}

	/* Values Section */
	.values {
		padding: 5rem 0;
	}

	.values h2 {
		font-size: 2.5rem;
		font-weight: 600;
		text-align: center;
		margin-bottom: 3rem;
		color: #ec4899;
	}

	.values-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}

	.value-card {
		padding: 2rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		text-align: center;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.value-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
	}

	.value-card .icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.value-card h3 {
		font-size: 1.3rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: #6366f1;
	}

	.value-card p {
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.6;
	}

	/* Team Section */
	.team {
		padding: 5rem 0;
		background: rgba(255, 255, 255, 0.02);
	}

	.team h2 {
		font-size: 2.5rem;
		font-weight: 600;
		text-align: center;
		margin-bottom: 3rem;
		color: #6366f1;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 3rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.team-member {
		padding: 2.5rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.team-member::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
	}

	.team-member:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
	}

	.member-info h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		color: white;
	}

	.role {
		font-size: 1.1rem;
		font-weight: 600;
		color: #6366f1;
		margin-bottom: 0.25rem;
	}

	.specialty {
		font-size: 0.95rem;
		font-weight: 500;
		color: #8b5cf6;
		margin-bottom: 1.5rem;
		font-style: italic;
	}

	.member-info p {
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
	}

	/* Contact CTA */
	.contact-cta {
		padding: 5rem 0;
		text-align: center;
		background: radial-gradient(circle at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%);
	}

	.contact-cta h2 {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: #ec4899;
	}

	.contact-cta p {
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-primary, .btn-secondary {
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.btn-primary {
		background: linear-gradient(135deg, #6366f1, #8b5cf6);
		color: white;
		box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid #8b5cf6;
	}

	.btn-secondary:hover {
		background: #8b5cf6;
		transform: translateY(-2px);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2.5rem;
		}

		.content-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.story-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.timeline::before {
			left: 30px;
		}

		.timeline-item {
			padding-left: 80px;
		}

		.year {
			left: -10px;
			min-width: 60px;
			font-size: 1rem;
			padding: 0.3rem 0.5rem;
		}

		.values-grid {
			grid-template-columns: 1fr;
		}

		.team-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.team-member {
			padding: 2rem;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
	}
</style>