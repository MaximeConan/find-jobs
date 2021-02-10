module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		container: {
			screens: {
				sm: '100%',
				md: '100%',
				lg: '800px',
				xl: '800px',
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
