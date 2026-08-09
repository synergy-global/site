import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// Looks for 'npm run build' natively without process.env bugs
			base: typeof process !== 'undefined' && process.env.NODE_ENV === 'production'
				? '/site'
				: (import.meta.env?.PROD ? '/site' : '')
		}

	}
};

export default config;
