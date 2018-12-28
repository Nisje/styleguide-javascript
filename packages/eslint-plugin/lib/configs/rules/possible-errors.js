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

	// Disallow assignment operators in conditional expressions
	// https://eslint.org/docs/rules/no-cond-assign
	'no-cond-assign': [ 'error', 'always' ],

	// Disallow the use of `console`
	// https://eslint.org/docs/rules/no-console
	'no-console': 'warn',

	// Disallow constant expressions in conditions
	// https://eslint.org/docs/rules/no-constant-condition
	'no-constant-condition': 'warn',

	// Disallow control characters in regular expressions
	// https://eslint.org/docs/rules/no-control-regex
	'no-control-regex': 'error',

	// Disallow the use of `debugger`
	// https://eslint.org/docs/rules/no-debugger
	'no-debugger': 'error',

	// Disallow duplicate arguments in `function` definitions
	// https://eslint.org/docs/rules/no-dupe-args
	'no-dupe-args': 'error',

	// Disallow duplicate keys in object literals
	// https://eslint.org/docs/rules/no-dupe-keys
	'no-dupe-keys': 'error',

	// Disallow duplicate case labels
	// https://eslint.org/docs/rules/no-duplicate-case
	'no-duplicate-case': 'error',

	// Disallow empty block statements
	// https://eslint.org/docs/rules/no-empty
	'no-empty': 'error',

	// Disallow empty character classes in regular expressions
	// https://eslint.org/docs/rules/no-empty-character-class
	'no-empty-character-class': 'error',

	// Disallow reassigning exceptions in `catch` clauses
	// https://eslint.org/docs/rules/no-ex-assign
	'no-ex-assign': 'error',

	// Disallow unnecessary boolean casts
	// https://eslint.org/docs/rules/no-extra-boolean-cast
	'no-extra-boolean-cast': 'error',

	// Disallow unnecessary semicolons
	// https://eslint.org/docs/rules/no-extra-semi
	'no-extra-semi': 'error',

	// Disallow calling some `Object.prototype` methods directly on objects
	// https://eslint.org/docs/rules/no-prototype-builtins
	'no-prototype-builtins': 'error',
};
