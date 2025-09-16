<script>
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Open Source - Synergy DSP</title>
	<meta name="description" content="Explore Synergy DSP's open source contributions and projects. We believe in giving back to the audio development community." />
</svelte:head>

<div class="opensource-page" class:mounted>
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<h1>Open Source at Synergy DSP</h1>
			<p class="hero-subtitle">Contributing to the audio development community</p>
		</div>
	</section>

	<!-- Philosophy Section -->
	<section class="philosophy">
		<div class="container">
			<div class="content-grid philosophy-content">
				<div class="text-content full-width">
					<h2>Our Open Source Philosophy</h2>
					<p>
						At Synergy DSP, we believe that innovation thrives in open environments. While our commercial 
						products represent our cutting-edge proprietary technology, we're committed to giving back to 
the audio development community through open source contributions.
</p>
<p>
By sharing utilities, tools, and educational resources, we aim to foster collaboration and 
advance the state of audio technology for everyone. Our open source initiatives reflect our 
commitment to transparency and community support.
</p>
</div>
</div>
</div>
</section>

<!-- Projects Section -->
<section class="projects">
<div class="container">
<h2>Our Open Source Projects</h2>
<div class="projects-grid">
<div class="project-card">
<div class="project-header">
<h3>ChromaFlow (coming soon)</h3>
<div class="project-links">
<a href="https://github.com/synergydsp/chromaflow" target="_blank" class="github-link">GitHub</a>
</div>
</div>
<p class="project-description">
A real-time unsupervised neural network framework for audio processing. ChromaFlow enables adaptive audio transformations using cutting-edge machine learning techniques without requiring labeled training data.
</p>
<div class="project-tags">
<span class="tag">Neural Networks</span>
<span class="tag">Unsupervised Learning</span>
<span class="tag">Real-time</span>
<span class="tag">C++</span>
</div>
</div>
</div>
</div>
</section>

<!-- Contribution Section -->
<section class="contribute">
<div class="container">
<h2>How to Contribute</h2>
<div class="contribute-content">
<p>
We welcome contributions from the community! Whether you're fixing bugs, improving documentation, 
					or adding new features, your help is appreciated. Here's how to get started:
</p>
<ol class="contribute-steps">
<li>
<h4>Fork the Repository</h4>
<p>Start by forking the repository you want to contribute to on GitHub.</p>
</li>
<li>
<h4>Create a Branch</h4>
<p>Create a branch for your changes with a descriptive name.</p>
</li>
<li>
<h4>Make Your Changes</h4>
<p>Implement your changes, following the project's coding standards.</p>
					</li>
					<li>
						<h4>Submit a Pull Request</h4>
						<p>Submit your changes for review, and we'll work with you to get them merged.</p>
</li>
</ol>
<div class="github-cta">
<a href="https://github.com/synergy-global" target="_blank" class="btn-primary">Visit Our GitHub</a>
</div>
</div>
</div>
</section>
</div>

<style>
.opensource-page {
min-height: 100vh;
background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
color: white;
/* No padding-top needed as it's in the layout */
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.opensource-page.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.hero {
		padding: 6rem 0 4rem;
		text-align: center;
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

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		max-width: 800px;
		margin: 0 auto;
		color: rgba(255, 255, 255, 0.8);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.philosophy, .projects, .contribute {
		padding: 5rem 0;
	}

	h2 {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 3rem;
		color: #ec4899;
		text-align: center;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.text-content p {
		font-size: 1.1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.full-width {
		grid-column: 1 / -1;
		max-width: 800px;
		margin: 0 auto;
	}

	.philosophy-content {
		grid-template-columns: 1fr;
	}

	.code-visual {
		background: rgba(15, 15, 35, 0.7);
		border-radius: 12px;
		padding: 1.5rem;
		border: 1px solid rgba(99, 102, 241, 0.3);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
		overflow: hidden;
	}

	.code-text {
		font-family: 'Fira Code', monospace;
		color: #a5b4fc;
		padding: 1.5rem;
		font-size: 1.2rem;
		text-align: center;
	}

	/* Remove unused CSS selectors */
	/*
	.code-placeholder {
		font-family: 'Fira Code', monospace;
		color: #a5b4fc;
		padding: 1.5rem;
		line-height: 1.5;
		white-space: pre;
	}

	.code-comment {
		color: #6b7280;
	}

	.code-keyword {
		color: #ec4899;
		font-weight: 600;
	}

	.code-class {
		color: #60a5fa;
		font-weight: 600;
	}

	.code-function {
		color: #34d399;
	}
	*/

	/* Remove unused code selector */
	/* code {
		font-family: 'Fira Code', monospace;
		color: #a5b4fc;
		display: block;
		line-height: 1.5;
		overflow-x: auto;
	} */

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
	}

	.project-card {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 12px;
		padding: 2rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.project-header h3 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #6366f1;
	}

	.github-link {
		background: rgba(99, 102, 241, 0.2);
		color: #a5b4fc;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.9rem;
		text-decoration: none;
		transition: background 0.3s ease;
	}

	.github-link:hover {
		background: rgba(99, 102, 241, 0.4);
	}

	.project-description {
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		background: rgba(139, 92, 246, 0.2);
		color: #c4b5fd;
		padding: 0.3rem 0.8rem;
		border-radius: 50px;
		font-size: 0.8rem;
	}

	.contribute-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.contribute-content p {
		font-size: 1.1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 2rem;
		text-align: center;
	}

	.contribute-steps {
		list-style: none;
		padding: 0;
		margin: 0 0 3rem;
		counter-reset: step-counter;
	}

	.contribute-steps li {
		position: relative;
		padding-left: 3rem;
		margin-bottom: 2rem;
		counter-increment: step-counter;
	}

	.contribute-steps li::before {
		content: counter(step-counter);
		position: absolute;
		left: 0;
		top: 0;
		width: 2rem;
		height: 2rem;
		background: linear-gradient(135deg, #6366f1, #8b5cf6);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
	}

	.contribute-steps h4 {
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: #a5b4fc;
	}

	.contribute-steps p {
		font-size: 1rem;
		text-align: left;
		margin-bottom: 0;
	}

	.github-cta {
		text-align: center;
	}

	.btn-primary {
		display: inline-block;
		background: linear-gradient(135deg, #6366f1, #8b5cf6);
		color: white;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		.content-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
