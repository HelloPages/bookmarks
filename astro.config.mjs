// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config  ### 
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});

export const profile = {
	fullName: 'Read',
	title: 'Reading',
	institute: 'MicroBlog',
	author_name: 'NetWork', // Author name to be highlighted in the papers section
	research_areas: ['Read', 'Reading', '每日一读', '心灵鸡汤', '情感世界', '格局', '修心',
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' 描述},
	],
}

}

export const template = {
	website_url: 'https://hbw.me', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 10, // 200字
	postPerPage: 5,
    base: '/itsteddydev' // Repository name starting with /
}

export const seo = {
	default_title: 'Read',
	default_description: 'Reading.',
	default_image: '/images/astro-academia.png',
}
