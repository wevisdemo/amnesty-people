const pension_act = {
	primary: '#76A2DE',
	'primary-focus': '#9CC3F9',
	secondary: '#1D478D',
	'secondary-focus': '#2B63C1',
	accent: '#FFC524',
	'accent-focus': '#FFDE83',
	neutral: '#000000',
	'base-100': '#FFFFFF',
	'base-200': '#F2F2F2',
	'base-300': '#E5E6E6',
	info: '#FFA8B4',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: pension_act,
		fontFamily: {
			sans: 'IBM Plex Sans Thai, sans-serif',
			looped: 'IBM Plex Sans Thai Looped, sans-serif',
			minimal: 'FC Minimal, serif',
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				pension_act,
			},
		],
	},
};
