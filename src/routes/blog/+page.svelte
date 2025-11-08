<script lang="ts">
	import { onMount } from 'svelte';

	// Blog posts data - in a real app, this would come from a CMS or API
	const blogPosts = [
		{
			id: 1,
			title: "The End of the GPU Tax: Why Generative DSP is the Future of Real-Time Audio",
			excerpt: "For decades, the audio industry has relied on Classical DSP and Convolution Reverb. We believe that assumption is fundamentally broken. At Synergy DSP, we didn't just optimize an old process; we created a new paradigm: Generative DSP.",
			date: "2024-01-20",
			author: "Leon Starr",
			category: "Innovation",
			readTime: "8 min read",
			image: "/api/placeholder/600/300",
			slug: "end-of-gpu-tax-generative-dsp"
		}
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { 
			year: 'numeric', 
			month: 'long', 
			day: 'numeric' 
		});
	}
</script>

<svelte:head>
	<title>Blog - Synergy DSP</title>
	<meta name="description" content="Insights, tutorials, and updates from the Synergy DSP team. Learn about audio processing, AI, and plugin development." />
</svelte:head>

<div class="blog-page" class:mounted>
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<h1>Blog</h1>
			<p>Insights, tutorials, and updates from the Synergy DSP team</p>
		</div>
	</section>

	<!-- Featured Post -->
	<section class="featured-post">
		<div class="container">
			<div class="featured-card">
				<div class="featured-content">
					<div class="featured-badge">Featured</div>
					<h2>{blogPosts[0].title}</h2>
					<p>{blogPosts[0].excerpt}</p>
					<div class="post-meta">
						<span class="author">By {blogPosts[0].author}</span>
						<span class="date">{formatDate(blogPosts[0].date)}</span>
						<span class="read-time">{blogPosts[0].readTime}</span>
					</div>
					<a href="/blog/{blogPosts[0].slug}" class="btn-primary">Read More</a>
				</div>
				<div class="featured-image">
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
		</div>
	</section>

	<!-- Blog Posts Grid -->
	<section class="blog-posts">
		<div class="container">
			<h2>Latest Posts</h2>
			<div class="posts-grid">
				{#each blogPosts.slice(1) as post}
					<article class="post-card">
						<div class="post-image">
							<div class="image-placeholder">
								<div class="category-tag">{post.category}</div>
							</div>
						</div>
						<div class="post-content">
							<h3><a href="/blog/{post.slug}">{post.title}</a></h3>
							<p>{post.excerpt}</p>
							<div class="post-meta">
								<span class="author">By {post.author}</span>
								<span class="date">{formatDate(post.date)}</span>
								<span class="read-time">{post.readTime}</span>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Newsletter Signup -->
	<section class="newsletter">
		<div class="container">
			<div class="newsletter-content">
				<h2>Stay Updated</h2>
				<p>Get the latest insights on audio processing, AI, and plugin development delivered to your inbox.</p>
				<form class="newsletter-form">
					<input type="email" placeholder="Enter your email" required>
					<button type="submit" class="btn-primary">Subscribe</button>
				</form>
			</div>
		</div>
	</section>
</div>

<style>
	.blog-page {
		min-height: 100vh;
		background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
		color: white;
		padding-top: 80px;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease;
	}

	.blog-page.mounted {
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
		background: linear-gradient(135deg, #667eea, #764ba2);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero p {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.8);
		max-width: 600px;
		margin: 0 auto;
	}

	/* Featured Post */
	.featured-post {
		padding: 4rem 0;
	}

	.featured-card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		background: rgba(15, 15, 35, 0.5);
		border-radius: 20px;
		padding: 3rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
	}

	.featured-badge {
		display: inline-block;
		background: linear-gradient(135deg, #667eea, #764ba2);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.featured-content h2 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	.featured-content p {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.featured-image {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-placeholder {
		width: 100%;
		height: 250px;
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
		width: 80%;
		height: 80%;
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

	/* Blog Posts Grid */
	.blog-posts {
		padding: 4rem 0;
	}

	.blog-posts h2 {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 3rem;
		text-align: center;
		color: #667eea;
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.post-card {
		background: rgba(15, 15, 35, 0.5);
		border-radius: 16px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		backdrop-filter: blur(10px);
	}

	.post-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
	}

	.post-image {
		height: 200px;
		position: relative;
	}

	.post-image .image-placeholder {
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

	.post-content {
		padding: 1.5rem;
	}

	.post-content h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		line-height: 1.3;
	}

	.post-content h3 a {
		color: white;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.post-content h3 a:hover {
		color: #667eea;
	}

	.post-content p {
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.post-meta {
		display: flex;
		gap: 1rem;
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.6);
		flex-wrap: wrap;
	}

	.post-meta span {
		display: flex;
		align-items: center;
	}

	/* Newsletter Section */
	.newsletter {
		padding: 4rem 0;
		background: radial-gradient(circle at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%);
	}

	.newsletter-content {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.newsletter h2 {
		font-size: 2.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: #ec4899;
	}

	.newsletter p {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 2rem;
	}

	.newsletter-form {
		display: flex;
		gap: 1rem;
		max-width: 400px;
		margin: 0 auto;
	}

	.newsletter-form input {
		flex: 1;
		padding: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 50px;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		font-size: 1rem;
		backdrop-filter: blur(10px);
	}

	.newsletter-form input::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}

	.newsletter-form input:focus {
		outline: none;
		border-color: #667eea;
		box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
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
		white-space: nowrap;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2.5rem;
		}

		.featured-card {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding: 2rem;
		}

		.featured-content h2 {
			font-size: 2rem;
		}

		.posts-grid {
			grid-template-columns: 1fr;
		}

		.newsletter-form {
			flex-direction: column;
			gap: 1rem;
		}

		.newsletter-form input,
		.btn-primary {
			width: 100%;
		}
	}
</style>