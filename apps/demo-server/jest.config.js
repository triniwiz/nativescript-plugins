module.exports = {
	name: 'demo-server',
	preset: '../../jest.config.js',
	globals: {
		'ts-jest': {
			tsConfig: '<rootDir>/tsconfig.spec.json',
		},
	},
	coverageDirectory: '../../coverage/apps/demo-server',
};
