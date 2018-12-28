// https://eslint.org/docs/rules/#possible-errors

module.exports = {
	// Enforce “for” loop update clause moving the counter in the right direction.
	// https://eslint.org/docs/rules/for-direction
	'for-direction': 'error',

	// Enforce `return` statements in getters
	// https://eslint.org/docs/rules/getter-return
	'getter-return': [ 'error', {
		allowImplicit: true,
	} ],

	// Disallow comparing against -0
	// https://eslint.org/docs/rules/no-compare-neg-zero
	'no-compare-neg-zero': 'error',

	// Disallow calling some `Object.prototype` methods directly on objects
	// https://eslint.org/docs/rules/no-prototype-builtins
	'no-prototype-builtins': 'error',
};
