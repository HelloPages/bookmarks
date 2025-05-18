/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', // Esto permite usar 'dark:' en clases
	theme: {
		extend: {
			//      ### Fonts
			fontFamily: {
				// #### Headings, Call- to - actions, Header Navigation
				"sans": ['"SF Pro Display"', 'sans-serif'], // Usando la fuente personalizada
				// #### Body
				// "serif": ['"Open Sans"', "serif"], // Otra fuente para el cuerpo
			},

			fontSize: {

				// #### Body Copy
				"body": "14px",

			},
			colors: {
				'hub-background': '#FFFFFF',       // #FFFFFF
				'hub-border': '#EDEDED',           // #EDEDED 边界
				'hub-title': '#0000ff',            // #121020 标题
				'hub-subtitle': '#121020',         // #888888 字幕
				'hub-background-nav': '#FAFAFA',   // #fafafa   背景导航
				'hub-inactive': '#B0B0B0',         // #B0B0B0 不活跃的
				'hub-text': '#FFFFFF',             // #FFFFFF
				'icons': '#6E6E6E',                // #6E6E6E 
				
				// dark
				'hub-background-dark': '#101419',      // #101419
				'hub-border-dark': '#052B2E',          // #052B2E
				'hub-title-dark': '#8a2be2',           // #FFFFFF 标题
				'hub-subtitle-dark': '#999999',        // #999999
				'hub-background-nav-dark': '#080C11',  // #080C11


			},
			backgroundImage: {
				'btn-gradient': 'linear-gradient(to right, #825BDD, #5327BA)', // Gradiente para botones
			},
		},

	},
	plugins: [require('tailwindcss-animate')],

}
