// https://github.com/benmosher/eslint-plugin-import

module.exports = {
	// Ensure consistent use of file extension within the import path
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
	'import/extensions': [ 'error', 'ignorePackages', {
		js: 'never',
		mjs: 'never',
		jsx: 'never',
	} ],

	// Disallow non-import statements appearing before import statements
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
	'import/first': 'error',

	// Require a newline after the last import/require in a group
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
	'import/newline-after-import': 'error',

	// Disallow AMD require/define
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
	'import/no-amd': 'error',

	// Report repeated import of the same module in multiple places
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
	'import/no-duplicates': 'error',

	// Ensures that there are no useless path segments
	// https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
	'import/no-useless-path-segments': 'error',

	// Forbid Webpack loader syntax in imports
	// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
	'import/no-webpack-loader-syntax': 'error',
};
