import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Thacker Broadcasting',
			social: {
				github: 'https://github.com/thackerbroadcasting',
				linkedin: 'https://linkedin.com/company/thacker-broadcasting',
			},
			sidebar: [
				{
					label: 'Legal',
					autogenerate: { directory: 'legal' },
				},
				{
					label: 'FAQs',
					collapsed: true,
					autogenerate: { directory: 'faqs' },
				}
			],
			customCss: [
				// Relative path to the custom file
				'@fontsource/archivo/900.css', //Archivo Black
				'@fontsource/archivo/400.css', //Archivo Regular
				'./src/styles/custom.css',
			],
			editLink: {
				baseUrl: 'https://github.com/thackerbroadcasting/docs/edit/master/'
			},
			logo: {
				light: './src/assets/light-logo.png',
				dark: './src/assets/dark-logo.png',
				replacesTitle: true
			}
		}),
	],
});
