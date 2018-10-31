// https://eslint.org/docs/rules/#stylistic-issues

module.exports = {
	// Specify whether double or single quotes should be used in JSX attributes
	// https://eslint.org/docs/rules/jsx-quotes
	'jsx-quotes': [ 'error', 'prefer-double' ],
	
	// Enforce the consistent use of either backticks, double, or single quotes
	// https://eslint.org/docs/rules/quotes
	quotes: [ 'error', 'single', { avoidEscape: true } ],
};
