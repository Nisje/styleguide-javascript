// https://eslint.org/docs/rules/#best-practices

module.exports = {
	// Disallow the use of eval()
	// https://eslint.org/docs/rules/no-eval
	'no-eval': 'error',

	// Disallow extending native types
	// https://eslint.org/docs/rules/no-extend-native
	'no-extend-native': 'error',

	// Disallow multiple spaces
	// https://eslint.org/docs/rules/no-multi-spaces
	'no-multi-spaces': [ 'error', {
		ignoreEOLComments: false,
	} ],

	// Disallow unnecessary concatenation of literals or template literals
	// https://eslint.org/docs/rules/no-useless-concat
	'no-useless-concat': 'error',

	// Disallow unnecessary escape characters
	// https://eslint.org/docs/rules/no-useless-escape
	'no-useless-escape': 'error',

	// Disallow redundant return statements
	// https://eslint.org/docs/rules/no-useless-return
	'no-useless-return': 'error',

	// Disallow `void` operators
	// https://eslint.org/docs/rules/no-void
	'no-void': 'error',

	// Enforce the consistent use of the radix argument when using parseInt()
	// https://eslint.org/docs/rules/radix
	radix: 'error',
};
