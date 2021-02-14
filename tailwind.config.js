module.exports = {
	purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
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
