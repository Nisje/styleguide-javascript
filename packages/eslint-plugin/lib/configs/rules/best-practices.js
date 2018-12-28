// https://eslint.org/docs/rules/#best-practices

module.exports = {
	// Enforce `return` statements in callbacks of array methods
	// https://eslint.org/docs/rules/array-callback-return
	'array-callback-return': [ 'error', {
		allowImplicit: true,
	} ],

	// Disallow lexical declarations in case clauses
	// https://eslint.org/docs/rules/no-case-declarations
	'no-case-declarations': 'error',

	// Disallow empty destructuring patterns
	// https://eslint.org/docs/rules/no-empty-pattern
	'no-empty-pattern': 'error',

	// Disallow the use of eval()
	// https://eslint.org/docs/rules/no-eval
	'no-eval': 'error',

	// Disallow extending native types
	// https://eslint.org/docs/rules/no-extend-native
	'no-extend-native': 'error',

	// Disallow fallthrough of `case` statements
	// https://eslint.org/docs/rules/no-fallthrough
	'no-fallthrough': 'error',

	// Disallow leading or trailing decimal points in numeric literals
	// https://eslint.org/docs/rules/no-floating-decimal
	'no-floating-decimal': 'error',

	// Disallow assignments to native objects or read-only global variables
	// https://eslint.org/docs/rules/no-global-assign
	'no-global-assign': [ 'error', {
		exceptions: [],
	} ],

	// Disallow multiple spaces
	// https://eslint.org/docs/rules/no-multi-spaces
	'no-multi-spaces': [ 'error', {
		ignoreEOLComments: false,
	} ],

	// Disallow octal literals
	// https://eslint.org/docs/rules/no-octal
	'no-octal': 'error',

	// Disallow variable redeclaration
	// https://eslint.org/docs/rules/no-redeclare
	'no-redeclare': 'error',

	// Disallow assignments where both sides are exactly the same
	// https://eslint.org/docs/rules/no-self-assign
	'no-self-assign': [ 'error', {
		props: true,
	} ],

	// Disallow unused labels
	// https://eslint.org/docs/rules/no-unused-labels
	'no-unused-labels': 'error',

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
