<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// Blog posts data - in a real app, this would come from a CMS or API
	const blogPosts = [
		{
			id: 1,
			title: "The End of the GPU Tax: Why Generative DSP is the Future of Real-Time Audio",
			excerpt: "For decades, the audio industry has relied on Classical DSP and Convolution Reverb. We believe that assumption is fundamentally broken. At Synergy DSP, we didn't just optimize an old process; we created a new paradigm: Generative DSP.",
			content: `
				<p>For decades, the audio industry has relied on two pillars: Classical DSP (Digital Signal Processing) and Convolution Reverb. While robust, these methods are static. If you wanted adaptive, intelligent sound, the answer used to be a massive Neural Network running on a cloud GPU—a solution too slow, too expensive, and too latent for real-time audio.</p>
				
				<p>We believe that assumption is fundamentally broken. At Synergy DSP, we didn't just optimize an old process; we created a new paradigm: Generative DSP.</p>
				
				<h2>What is Generative DSP?</h2>
				<p>Generative DSP is our proprietary philosophy that merges the computational power of modern AI with the raw, deterministic speed of DSP primitives.</p>
				
				<h2>Performance Optimization</h2>
				<p>This shift is not theoretical—it's a disruptive leap in real-time performance. Our architecture is designed for efficient real-time operation.</p>
				
				<h2>Beyond the Studio: A Safety-Critical Future</h2>
				<p>The implications of Generative DSP extend far beyond the DAW, providing foundations for automotive safety platforms and accessibility solutions.</p>
			`,
			date: "2024-01-20",
			author: "Leon Starr",
			category: "Innovation",
			readTime: "8 min read",
			image: "/api/placeholder/800/400",
			slug: "end-of-gpu-tax-generative-dsp"
		}
	];

	let mounted = false;
	let currentPost: typeof blogPosts[0] | null = null;

	onMount(() => {
		mounted = true;
		const slug = $page.params.slug;
		currentPost = blogPosts.find(post => post.slug === slug) || null;
	});

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric' 
		});
	}

	function getRelatedPosts(currentSlug: string) {
		return blogPosts.filter(post => post.slug !== currentSlug).slice(0, 3);
	}
</script>

<svelte:head>
	{#if currentPost}
		<title>{currentPost.title} - Synergy DSP Blog</title>
		<meta name="description" content={currentPost.excerpt} />
	{:else}
		<title>Post Not Found - Synergy DSP Blog</title>
	{/if}
</svelte:head>

<div class="blog-post-page" class:mounted>
	{#if currentPost}
		<!-- Hero Section -->
		<section class="post-hero">
			<div class="container">
				<div class="breadcrumb">
					<a href="/blog">Blog</a> / <span>{currentPost.category}</span>
				</div>
				<h1>{currentPost.title}</h1>
				<div class="post-meta">
					<span class="author">By {currentPost.author}</span>
					<span class="date">{formatDate(currentPost.date)}</span>
					<span class="read-time">{currentPost.readTime}</span>
					<span class="category">{currentPost.category}</span>
				</div>
			</div>
		</section>

		<!-- Featured Image -->
		<section class="featured-image">
			<div class="container">
				<div class="image-container">
					<div class="image-placeholder">
						<div class="wave-animation">
							<svg viewBox="0 0 400 100" class="wave-svg">
								<path d="M0,50 Q100,20 200,50 T400,50" stroke="url(#waveGradient)" stroke-width="3" fill="none" class="animated-wave"/>
								<defs>
									<linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
										<stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
										<stop offset="50%" style="stop-color:#764ba2;stop-opacity:1" />
										<stop offset="100%" style="stop-color:#667eea;stop-opacity:1" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Article Content -->
		<article class="post-content">
			<div class="container">
				<div class="content-wrapper">
					<div class="article-content">
						{@html currentPost.content}
					</div>
				</div>
			</div>
		</article>

		<!-- Related Posts -->
		<section class="related-posts">
			<div class="container">
				<h2>Related Posts</h2>
				<div class="related-grid">
					{#each getRelatedPosts(currentPost.slug) as post}
						<article class="related-card">
							<div class="related-image">
								<div class="image-placeholder">
									<div class="category-tag">{post.category}</div>
								</div>
							</div>
							<div class="related-content">
								<h3><a href="/blog/{post.slug}">{post.title}</a></h3>
								<p>{post.excerpt}</p>
								<div class="post-meta">
									<span class="author">By {post.author}</span>
									<span class="date">{formatDate(post.date)}</span>
								</div>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>
	{:else}
		<!-- 404 Section -->
		<section class="not-found">
			<div class="container">
				<h1>Post Not Found</h1>
				<p>The blog post you're looking for doesn't exist.</p>
				<a href="/blog" class="btn-primary">Back to Blog</a>
			</div>
		</section>
	{/if}
</div>

<style>
	.blog-post-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
		color: white;
		padding-top: 80px;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.blog-post-page.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Post Hero */
	.post-hero {
		padding: 3rem 0;
		text-align: center;
	}

	.breadcrumb {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 1rem;
	}

	.breadcrumb a {
		color: #667eea;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.post-hero h1 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		line-height: 1.2;
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.post-meta {
		display: flex;
		justify-content: center;
		gap: 2rem;
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.7);
		flex-wrap: wrap;
	}

	.post-meta .category {
		background: rgba(102, 126, 234, 0.2);
		padding: 0.25rem 0.75rem;
		border-radius: 15px;
		border: 1px solid rgba(102, 126, 234, 0.3);
	}

	/* Featured Image */
	.featured-image {
		padding: 2rem 0;
	}

	.image-container {
		max-width: 800px;
		margin: 0 auto;
	}

	.image-placeholder {
		width: 100%;
		height: 400px;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(255, 255, 255, 0.1);
		position: relative;
		overflow: hidden;
	}

	.wave-animation {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.wave-svg {
		width: 60%;
		height: 60%;
	}

	.animated-wave {
		animation: waveFlow 3s ease-in-out infinite;
		filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.5));
	}

	@keyframes waveFlow {
		0% { d: path('M0,50 Q100,20 200,50 T400,50'); }
		25% { d: path('M0,50 Q100,30 200,40 T400,60'); }
		50% { d: path('M0,50 Q100,70 200,30 T400,50'); }
		75% { d: path('M0,50 Q100,40 200,60 T400,40'); }
		100% { d: path('M0,50 Q100,20 200,50 T400,50'); }
	}

	/* Article Content */
	.post-content {
		padding: 3rem 0;
	}

	.content-wrapper {
		max-width: 800px;
		margin: 0 auto;
	}

	.article-content {
		font-size: 1.125rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
	}

	.article-content :global(h2) {
		font-size: 2rem;
		font-weight: 600;
		margin: 2.5rem 0 1rem 0;
		color: #667eea;
		line-height: 1.3;
	}

	.article-content :global(h3) {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 2rem 0 1rem 0;
		color: #8b5cf6;
		line-height: 1.3;
	}

	.article-content :global(p) {
		margin-bottom: 1.5rem;
		text-align: justify;
	}

	.article-content :global(ul),
	.article-content :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 2rem;
	}

	.article-content :global(li) {
		margin-bottom: 0.5rem;
	}

	.article-content :global(blockquote) {
		border-left: 4px solid #667eea;
		padding-left: 1.5rem;
		margin: 2rem 0;
		font-style: italic;
		color: rgba(255, 255, 255, 0.8);
	}

	.article-content :global(code) {
		background: rgba(102, 126, 234, 0.1);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-family: 'Fira Code', monospace;
		font-size: 0.9em;
		color: #a5b4fc;
	}

	.article-content :global(pre) {
		background: rgba(15, 15, 35, 0.7);
		padding: 1.5rem;
		border-radius: 8px;
		overflow-x: auto;
		margin: 1.5rem 0;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	/* Related Posts */
	.related-posts {
		padding: 4rem 0;
		background: rgba(15, 15, 35, 0.3);
	}

	.related-posts h2 {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 3rem;
		text-align: center;
		color: #667eea;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.related-card {
		background: rgba(15, 15, 35, 0.5);
		border-radius: 16px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		backdrop-filter: blur(10px);
	}

	.related-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
	}

	.related-image {
		height: 150px;
		position: relative;
	}

	.related-image .image-placeholder {
		height: 100%;
		margin: 0;
		border-radius: 0;
	}

	.category-tag {
		position: absolute;
		top: 1rem;
		left: 1rem;
		background: rgba(102, 126, 234, 0.9);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 600;
	}

	.related-content {
		padding: 1.5rem;
	}

	.related-content h3 {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		line-height: 1.3;
	}

	.related-content h3 a {
		color: white;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.related-content h3 a:hover {
		color: #667eea;
	}

	.related-content p {
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.6;
		margin-bottom: 1rem;
		font-size: 0.9rem;
	}

	.related-content .post-meta {
		justify-content: flex-start;
		gap: 1rem;
		font-size: 0.8rem;
	}

	/* Not Found */
	.not-found {
		padding: 6rem 0;
		text-align: center;
	}

	.not-found h1 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: #ec4899;
	}

	.not-found p {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 2rem;
	}

	.btn-primary {
		background: linear-gradient(135deg, #667eea, #764ba2);
		color: white;
		padding: 1rem 2rem;
		border: none;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
		display: inline-block;
		cursor: pointer;
		font-size: 1rem;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.post-hero h1 {
			font-size: 2rem;
		}

		.post-meta {
			gap: 1rem;
			flex-direction: column;
			align-items: center;
		}

		.image-placeholder {
			height: 250px;
		}

		.article-content {
			font-size: 1rem;
		}

		.article-content :global(h2) {
			font-size: 1.5rem;
		}

		.related-grid {
			grid-template-columns: 1fr;
		}
	}
</style>