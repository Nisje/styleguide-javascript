// https://eslint.org/docs/rules/#variables

module.exports = {
	// Disallow deleting variables
	// https://eslint.org/docs/rules/no-delete-var
	'no-delete-var': 'error',

	// Disallow the use of undeclared variables unless mentioned in /*global */ comments
	// https://eslint.org/docs/rules/no-undef
	'no-undef': 'error',

	// Disallow unused variables
	// https://eslint.org/docs/rules/no-unused-vars
	'no-unused-vars': [ 'error', {
		vars: 'all',
		args: 'after-used',
		ignoreRestSiblings: true,
	} ],
};
