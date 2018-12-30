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

	// Require parentheses when invoking a constructor with no arguments
	// https://eslint.org/docs/rules/new-parens
	'new-parens': 'error',

	// Disallow `Array` constructors
	// https://eslint.org/docs/rules/no-array-constructor
	'no-array-constructor': 'error',

	// Disallow mixed binary operators
	// https://eslint.org/docs/rules/no-mixed-operators
	'no-mixed-operators': [ 'error', {
		groups: [
			[ '%', '**' ],
			[ '%', '+' ],
			[ '%', '-' ],
			[ '%', '*' ],
			[ '%', '/' ],
			[ '**', '+' ],
			[ '**', '-' ],
			[ '**', '*' ],
			[ '**', '/' ],
			[ '&', '|', '^', '~', '<<', '>>', '>>>' ],
			[ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
			[ '&&', '||' ],
			[ 'in', 'instanceof' ]
		],
		allowSamePrecedence: false,
	} ],

	// Disallow mixed spaces and tabs for indentation
	// https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
	'no-mixed-spaces-and-tabs': 'error',

	// Disallow `Object` constructors
	// https://eslint.org/docs/rules/no-new-object
	'no-new-object': 'error',

	// Disallow specified syntax
	// https://eslint.org/docs/rules/no-restricted-syntax
	'no-restricted-syntax': [ 'error', {
			selector: 'ForInStatement',
			message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
		}, {
			selector: 'LabeledStatement',
			message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
		}, {
			selector: 'WithStatement',
			message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
		}
	],

	// Disallow whitespace before properties
	// https://eslint.org/docs/rules/no-whitespace-before-property
	'no-whitespace-before-property': 'error',

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

	// Require or disallow Unicode byte order mark (BOM)
	// https://eslint.org/docs/rules/unicode-bom
	'unicode-bom': [ 'error', 'never' ],
};
