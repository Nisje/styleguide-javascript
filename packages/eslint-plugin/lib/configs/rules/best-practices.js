// https://eslint.org/docs/rules/#best-practices

module.exports = {
	// Disallow the use of eval()
	// https://eslint.org/docs/rules/no-eval
	'no-eval': 'error',
	
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

	// Enforce the consistent use of the radix argument when using parseInt()
	// https://eslint.org/docs/rules/radix
	radix: 'error',
};
