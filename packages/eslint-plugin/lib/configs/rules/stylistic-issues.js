// https://eslint.org/docs/rules/#stylistic-issues

module.exports = {
	// Require or disallow trailing commas
	// https://eslint.org/docs/rules/comma-dangle
	'comma-dangle': [ 'error', {
		arrays: 'always-multiline',
		objects: 'always-multiline',
		imports: 'always-multiline',
		exports: 'always-multiline',
		functions: 'always-multiline',
	} ],

	// Enforce consistent spacing before and after commas
	// https://eslint.org/docs/rules/comma-spacing
	'comma-spacing': [ 'error', {
		before: false,
		after: true,
	} ],

	// Enforce consistent comma style
	// https://eslint.org/docs/rules/comma-style
	'comma-style': [ 'error', 'last', {
		exceptions: {
			ArrayExpression: false,
			ArrayPattern: false,
			ArrowFunctionExpression: false,
			CallExpression: false,
			FunctionDeclaration: false,
			FunctionExpression: false,
			ImportDeclaration: false,
			ObjectExpression: false,
			ObjectPattern: false,
			VariableDeclaration: false,
			NewExpression: false,
		}
	} ],

	// Require or disallow newline at the end of files
	// https://eslint.org/docs/rules/eol-last
	'eol-last': [ 'error', 'always' ],

	// Enforce consistent indentation
	// https://eslint.org/docs/rules/indent
	indent: [ 'error', 'tab', { SwitchCase: 1 } ],

	// Specify whether double or single quotes should be used in JSX attributes
	// https://eslint.org/docs/rules/jsx-quotes
	'jsx-quotes': [ 'error', 'prefer-double' ],

	// Enforce consistent spacing before and after keywords
	// https://eslint.org/docs/rules/keyword-spacing
	'keyword-spacing': [ 'error', {
		before: true,
		after: true,
		overrides: {
			return: { after: true },
			throw: { after: true },
			case: { after: true }
		}
	} ],

	// Disallow `Array` constructors
	// https://eslint.org/docs/rules/no-array-constructor
	'no-array-constructor': 'error',

	// Disallow mixed spaces and tabs for indentation
	// https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
	'no-mixed-spaces-and-tabs': 'error',

	// Disallow `Object` constructors
	// https://eslint.org/docs/rules/no-new-object
	'no-new-object': 'error',

	// Require quotes around object literal property names
	// https://eslint.org/docs/rules/quote-props
	'quote-props': [ 'error', 'as-needed', {
		keywords: false,
		unnecessary: true,
		numbers: false,
	} ],

	// Enforce the consistent use of either backticks, double, or single quotes
	// https://eslint.org/docs/rules/quotes
	quotes: [ 'error', 'single', { avoidEscape: true } ],

	// Enforce consistent spacing before blocks
	// https://eslint.org/docs/rules/space-before-blocks
	'space-before-blocks': 'error',

	// Require spacing around infix operators
	// https://eslint.org/docs/rules/space-infix-ops
	'space-infix-ops': 'error',
};
