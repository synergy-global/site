<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Add any support page specific functionality here
	});
</script>

<svelte:head>
	<title>Support - Synergy DSP</title>
	<meta name="description" content="Get support for Synergy DSP plugins. Find documentation, tutorials, and contact information for technical assistance." />
</svelte:head>

<main>
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<h1 style="color: white;">Support Center</h1>
			<p style="color: white;">Get the help you need to make the most of your Synergy DSP plugins</p>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="faq">
		<div class="container"> 
			<h2 style="color: white;">Frequently Asked Questions</h2>
			<div class="faq-list">
				<div class="faq-item">
					<h3>What DAWs are supported?</h3>
					<p>Our plugins support all major DAWs including Logic Pro, Ableton Live, FL Studio, Cubase, Studio One, and more. We provide VST3 and AU formats.</p>
				</div>
				<div class="faq-item">
					<h3>Why Mac only?</h3>
					<p>We currently focus exclusively on macOS to ensure the highest quality and performance for our plugins. This allows us to optimize our DSP algorithms specifically for Apple's hardware and audio frameworks, delivering superior real-time processing and stability. We're considering Windows support for future releases based on user demand.</p>
				</div>
				<div class="faq-item">
					<h3>How do I get updates?</h3>
					<p>Updates are free for all registered users. You'll receive email notifications when updates are available, or check your account dashboard for the latest versions.</p>
				</div>
				<div class="faq-item">
					<h3>What are the system requirements?</h3>
					<p>macOS 10.14+, 64-bit processor, 8GB RAM minimum (1GB recommended).</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="contact" id="contact">
		<div class="container">
			<h2>Get in Touch</h2>
			<div class="contact-info">
				<h3>Technical Support</h3>
				<p>For technical issues, installation problems, or plugin-specific questions:</p>
				<a href="mailto:support@synergydsp.com" class="contact-link">support@synergy-dsp.com</a>
				<p class="response-time">Response time: 24-48 hours</p>
			</div>
		</div>
	</section>
</main>

<style>
	/* Hero Section */
	.hero {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 8rem 0 6rem;
		text-align: center;
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	}

	.hero p {
		font-size: 1.25rem;
		opacity: 0.9;
		max-width: 600px;
		margin: 0 auto;
	}

	/* FAQ Section */
	.faq {
		padding: 6rem 0;
	}

	.faq h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: #2d3748;
	}

	.faq-list {
		max-width: 800px;
		margin: 0 auto;
	}

	.faq-item {
		background: white;
		padding: 2rem;
		margin-bottom: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		border-left: 4px solid #667eea;
	}

	.faq-item h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: #2d3748;
	}

	.faq-item p {
		color: #718096;
		line-height: 1.6;
	}

	/* Contact Section */
	.contact {
		padding: 6rem 0;
		background: #f8fafc;
	}

	.contact h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: #2d3748;
	}

	.contact-info {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
	}

	.contact-info h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: #2d3748;
	}

	.contact-info p {
		color: #718096;
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.contact-link {
		color: #667eea;
		text-decoration: none;
		font-weight: 600;
		font-size: 1.1rem;
	}

	.contact-link:hover {
		text-decoration: underline;
	}

	.response-time {
		font-size: 0.9rem;
		color: #a0aec0;
		margin-top: 0.5rem;
	}

	/* Button Styles */
	.btn-primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 1rem 2rem;
		border: none;
		border-radius: 6px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		width: 100%;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
	}

	.btn-secondary {
		background: transparent;
		color: #667eea;
		padding: 0.75rem 1.5rem;
		border: 2px solid #667eea;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.btn-secondary:hover {
		background: #667eea;
		color: white;
		transform: translateY(-2px);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.container {
			padding: 0 1rem;
		}

		.hero {
			padding: 4rem 0 3rem;
		}

		.hero h1 {
			font-size: 2rem;
			line-height: 1.2;
		}

		.hero p {
			font-size: 1rem;
			line-height: 1.5;
		}

		.faq {
			padding: 3rem 0;
		}

		.faq h2 {
			font-size: 1.8rem;
			margin-bottom: 2rem;
		}

		.faq-item {
			padding: 1.5rem;
			margin-bottom: 1rem;
		}

		.faq-item h3 {
			font-size: 1.1rem;
			line-height: 1.3;
			margin-bottom: 0.75rem;
		}

		.faq-item p {
			font-size: 0.9rem;
			line-height: 1.5;
		}

		.contact {
			padding: 3rem 0;
		}

		.contact h2 {
			font-size: 1.8rem;
		}

		.contact h3 {
			font-size: 1.2rem;
		}

		.contact p {
			font-size: 0.9rem;
			line-height: 1.5;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
			max-width: 280px;
			padding: 1rem 1.5rem;
			font-size: 1rem;
			text-align: center;
			display: block;
			margin: 0.5rem auto;
		}
	}

	@media (max-width: 480px) {
		.hero h1 {
			font-size: 1.8rem;
		}

		.faq h2,
		.contact h2 {
			font-size: 1.5rem;
		}

		.faq-item {
			padding: 1rem;
		}

		.btn-primary,
		.btn-secondary {
			padding: 0.9rem 1.2rem;
			font-size: 0.9rem;
		}
	}
</style>