// https://www.npmjs.com/package/eslint-config-moon
module.exports = {
	root: true,
	extends: [
		'moon',
		// Uncomment when targeting node
		// 'moon/node',
		'moon/browser',
		// Uncomment if using React
		'moon/react',
		// Uncomment if using Solid
		// 'moon/solid',
	],
};
