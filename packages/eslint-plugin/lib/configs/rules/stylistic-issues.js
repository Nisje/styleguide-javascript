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
	
	// Enforce consistent indentation
	// https://eslint.org/docs/rules/indent
	indent: [ 'error', 'tab', { SwitchCase: 1 } ],
	
	// Specify whether double or single quotes should be used in JSX attributes
	// https://eslint.org/docs/rules/jsx-quotes
	'jsx-quotes': [ 'error', 'prefer-double' ],
	
	// Enforce the consistent use of either backticks, double, or single quotes
	// https://eslint.org/docs/rules/quotes
	quotes: [ 'error', 'single', { avoidEscape: true } ],

	// Enforce consistent spacing before blocks
	// https://eslint.org/docs/rules/space-before-blocks
	'space-before-blocks': 'error',
};
