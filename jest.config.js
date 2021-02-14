module.exports = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	transformIgnorePatterns: ['/node_modules/(?!(leaflet))'],
	watchPathIgnorePatterns: ['node_modules'],
	testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
}
