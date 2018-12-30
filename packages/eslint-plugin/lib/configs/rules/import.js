// https://github.com/benmosher/eslint-plugin-import

module.exports = {
	// Disallow non-import statements appearing before import statements
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
	'import/first': 'error',

	// Disallow AMD require/define
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
	'import/no-amd': 'error',

	// Report repeated import of the same module in multiple places
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
	'import/no-duplicates': 'error',

	// Forbid Webpack loader syntax in imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
	'import/no-webpack-loader-syntax': 'error',
};
