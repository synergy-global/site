<script lang="ts">
	import { onMount } from 'svelte';

	const post = {
		title: 'State of Synergy 2026',
		subtitle: 'Building an AI Audio Platform within the Muse Group Ecosystem via Muse Hub',
		author: 'Leon Starr',
		authorTitle: 'Founder & Principal Architect, Synergy DSP',
		date: '2026-03-22',
		category: 'Update',
		readTime: '6 min read',
		image: '/mhcs.png'
	};

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>{post.title} - Synergy DSP Blog</title>
	<meta name="description" content="Synergy DSP is evolving from isolated plugins into a connected, AI-native audio platform built within the Muse Group ecosystem via Muse Hub." />
	<meta property="og:title" content="{post.title}" />
	<meta property="og:description" content="Synergy DSP is evolving from isolated plugins into a connected, AI-native audio platform built within the Muse Group ecosystem via Muse Hub." />
	<meta property="og:type" content="article" />
</svelte:head>

<main class="blog-main" class:mounted>
	<nav class="breadcrumb-nav">
		<div class="container">
			<div class="breadcrumb">
				<a href="/">Home</a>
				<span>/</span>
				<a href="/blog">Blog</a>
				<span>/</span>
				<span>{post.title}</span>
			</div>
		</div>
	</nav>

	<header class="article-header">
		<div class="container">
			<div class="header-content">
				<div class="category-tag">{post.category}</div>
				<h1 class="article-title">{post.title}</h1>
				<p class="subtitle-text">{post.subtitle}</p>
				<div class="author-info">
					<div class="author-details">
						<div class="author-avatar">
							<span>LS</span>
						</div>
						<div class="author-text">
							<div class="author-name">{post.author}</div>
							<div class="author-title">{post.authorTitle}</div>
						</div>
					</div>
					<div class="article-meta">
						<span>{post.date}</span>
						<span>•</span>
						<span>{post.readTime}</span>
					</div>
				</div>
			</div>
		</div>
	</header>

	<section class="featured-image">
		<div class="container">
			<div class="image-container">
				<div class="image-content">
					<img class="featured-img" src={post.image} alt={post.title} />
				</div>
			</div>
		</div>
	</section>

	<article class="article-content">
		<div class="container">
			<div class="content-wrapper">
				<p class="intro-text">
					<strong>2026</strong> marks a turning point for Synergy DSP.
				</p>

				<p class="body-text">
					What began as a collection of experimental DSP tools is evolving into something far more cohesive: a unified, AI-native audio platform designed to operate within a larger ecosystem.
				</p>

				<p class="highlight-text">
					That ecosystem is being shaped in collaboration with Muse Group, with <strong class="accent-text">Muse Hub</strong> as the central distribution and integration layer.
				</p>

				<p class="body-text">
					This is not just a change in where our tools are available. It is a shift in how they are built, connected, and experienced.
				</p>

				<h2 class="section-heading">From Plugins to Platform</h2>

				<p class="body-text">
					Traditional audio plugins are isolated, stateless, and unaware of context beyond their input signal.
				</p>

				<p class="body-text">
					Synergy is moving in a different direction. Each product in the lineup is designed as part of a broader system:
				</p>

				<div class="feature-box">
					<ol class="feature-list">
						<li><strong class="accent-text">Synergy Creative FX:</strong> expressive, adaptive effects</li>
						<li><strong class="accent-text">Millennium V2:</strong> intelligent channel processing</li>
						<li><strong class="accent-text">Synergy Mix:</strong> multi-track awareness and balance</li>
						<li><strong class="accent-text">Synergy Master:</strong> target-driven mastering intelligence</li>
						<li><strong class="accent-text">Synergy Restore:</strong> global signal reconstruction</li>
					</ol>
				</div>

				<p class="body-text">
					Individually, these are tools. Together, they form a connected, context-aware processing environment.
				</p>

				<h2 class="section-heading">The Role of Muse Hub</h2>

				<p class="body-text">
					Muse Hub is more than a storefront for Synergy DSP. It provides a unified distribution channel, a consistent update and deployment pipeline, and a foundation for deeper ecosystem integration.
				</p>

				<p class="body-text">
					By focusing our distribution exclusively through Muse Hub, we are able to deliver a more cohesive product experience, align updates and releases across the entire suite, and explore tighter integration between tools over time.
				</p>

				<p class="highlight-text">
					This enables a platform-level experience, not just individual installs.
				</p>

				<h2 class="section-heading">Context-Aware DSP: The Core Philosophy</h2>

				<p class="body-text">
					At the center of Synergy is a simple idea: audio tools should understand the context they operate in.
				</p>

				<p class="body-text">
					This is being realised through real-time signal analysis, temporal modelling, and adaptive processing systems.
				</p>

				<p class="body-text">
					Early examples of this approach can be seen in tools like <strong class="accent-text">AnaVerb V2</strong>, where spatial processing evolves based on the incoming signal rather than remaining static.
				</p>

				<h2 class="section-heading">Building Within an Ecosystem</h2>

				<p class="body-text">
					Working within the Muse Group ecosystem allows Synergy to focus on advancing DSP and AI integration, building coherent systems rather than isolated tools, and delivering features that benefit from shared context.
				</p>

				<p class="body-text">
					At the same time, it creates opportunities for tighter workflows with tools like Audacity, improved accessibility for users entering the ecosystem, and a more unified experience across creation, mixing, and mastering.
				</p>

				<h2 class="section-heading">What Comes Next</h2>

				<p class="body-text">
					Over the next phases of development, the focus is on:
				</p>

				<div class="feature-box">
					<ol class="feature-list">
						<li><strong class="accent-text">Unifying architecture:</strong> a shared Synergy foundation across products</li>
						<li><strong class="accent-text">Expanding context:</strong> from single tracks to full sessions</li>
						<li><strong class="accent-text">Refining real-time performance:</strong> production-ready responsiveness</li>
						<li><strong class="accent-text">Seamless updates:</strong> predictable delivery through Muse Hub</li>
					</ol>
				</div>

				<p class="body-text">
					The goal is not to release more plugins. The goal is to build a system that makes audio production more intelligent, adaptive, and intuitive.
				</p>

				<h2 class="section-heading">Closing</h2>

				<p class="body-text">
					Synergy DSP is entering a new phase. Not as a collection of tools, but as a platform-native layer within a growing ecosystem.
				</p>

				<p class="body-text">
					By aligning with Muse Group and focusing on delivery through Muse Hub, we are laying the groundwork for a different kind of audio experience—one where tools collaborate, adapt, and evolve alongside the user.
				</p>

				<p class="highlight-text">
					This is the direction for 2026 and beyond.
				</p>
			</div>
		</div>
	</article>
</main>

<style>
	.blog-main {
		min-height: 100vh;
		background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
		color: white;
		padding-top: 80px;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.blog-main.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

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

	.article-header {
		padding: 2rem 0 4rem;
	}

	.header-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.category-tag {
		display: inline-block;
		background: linear-gradient(135deg, #8b5cf6, #ec4899);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}

	.article-title {
		font-size: 3.5rem;
		font-weight: 700;
		line-height: 1.1;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #f9a8d4 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle-text {
		font-size: 1.4rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 2rem;
	}

	.author-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		gap: 2rem;
	}

	.author-details {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.author-avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: linear-gradient(135deg, #8b5cf6, #ec4899);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.2rem;
	}

	.author-name {
		font-weight: 600;
		font-size: 1.1rem;
		margin-bottom: 0.25rem;
	}

	.author-title {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
	}

	.article-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.9rem;
	}

	.featured-image {
		padding: 0 0 4rem;
	}

	.image-container {
		border-radius: 24px;
		overflow: hidden;
		background: rgba(15, 15, 35, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.image-content {
		height: 250px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.featured-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.article-content {
		padding: 0 0 6rem;
	}

	.content-wrapper {
		max-width: 800px;
		margin: 0 auto;
	}

	.intro-text {
		font-size: 1.4rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
		border-left: 4px solid rgba(139, 92, 246, 0.8);
	}

	.highlight-text {
		font-size: 1.25rem;
		line-height: 1.8;
		background: rgba(139, 92, 246, 0.1);
		border: 1px solid rgba(139, 92, 246, 0.2);
		padding: 1.5rem;
		border-radius: 16px;
		margin: 2rem 0;
		color: rgba(255, 255, 255, 0.9);
	}

	.body-text {
		font-size: 1.1rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 1.5rem;
	}

	.section-heading {
		font-size: 2.2rem;
		font-weight: 700;
		margin: 3.5rem 0 1.5rem;
		color: white;
		position: relative;
		padding-left: 1.5rem;
	}

	.section-heading::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.3rem;
		width: 6px;
		height: 2rem;
		background: linear-gradient(135deg, #8b5cf6, #ec4899);
		border-radius: 3px;
	}

	.feature-box {
		background: rgba(15, 15, 35, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		padding: 2rem;
		margin: 2.5rem 0;
		backdrop-filter: blur(10px);
	}

	.feature-list {
		list-style: none;
		padding: 0;
		margin: 0;
		counter-reset: feature-counter;
	}

	.feature-list li {
		position: relative;
		padding: 0 0 0 3.5rem;
		margin-bottom: 1.5rem;
		color: rgba(255, 255, 255, 0.85);
		line-height: 1.7;
		counter-increment: feature-counter;
	}

	.feature-list li:last-child {
		margin-bottom: 0;
	}

	.feature-list li:before {
		content: counter(feature-counter);
		position: absolute;
		left: 0;
		top: 0.1rem;
		width: 2.5rem;
		height: 2.5rem;
		background: linear-gradient(135deg, #8b5cf6, #ec4899);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		color: white;
	}

	.accent-text {
		color: rgba(139, 92, 246, 1);
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 1rem;
		}

		.article-title {
			font-size: 2.5rem;
		}

		.subtitle-text {
			font-size: 1.2rem;
		}

		.author-info {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.feature-box {
			padding: 1.5rem;
		}

		.feature-list li {
			padding-left: 3rem;
		}
	}
</style>
