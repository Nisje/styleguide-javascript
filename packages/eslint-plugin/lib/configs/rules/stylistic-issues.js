// https://eslint.org/docs/rules/#stylistic-issues

module.exports = {
	// Enforce consistent spacing inside array brackets
	// https://eslint.org/docs/rules/array-bracket-spacing
	'array-bracket-spacing': [ 'error', 'always' ],

	// Enforce consistent brace style for blocks
	// https://eslint.org/docs/rules/brace-style
	'brace-style': [ 'error', '1tbs' ],

	// Enforce camelcase naming convention
	// https://eslint.org/docs/rules/camelcase
	camelcase: [ 'error', {
		properties: 'never',
	} ],

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

	// Enforce consistent spacing inside computed property brackets
	// https://eslint.org/docs/rules/computed-property-spacing
	'computed-property-spacing': [ 'error', 'always' ],

	// Require or disallow newline at the end of files
	// https://eslint.org/docs/rules/eol-last
	'eol-last': [ 'error', 'always' ],

	// Require or disallow spacing between function identifiers and their invocations
	// https://eslint.org/docs/rules/func-call-spacing
	'func-call-spacing': [ 'error', 'never' ],

	// Enforce consistent indentation
	// https://eslint.org/docs/rules/indent
	indent: [ 'error', 'tab', {
		SwitchCase: 1,
	} ],

	// Specify whether double or single quotes should be used in JSX attributes
	// https://eslint.org/docs/rules/jsx-quotes
	'jsx-quotes': [ 'error', 'prefer-double' ],

	// Enforce consistent spacing between keys and values in object literal properties
	// https://eslint.org/docs/rules/key-spacing
	'key-spacing': [ 'error', {
		beforeColon: false,
		afterColon: true,
	} ],

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

	'max-len': [ 'error', 100, 2, {
		ignoreUrls: true,
		ignoreComments: false,
		ignoreRegExpLiterals: true,
		ignoreStrings: true,
		ignoreTemplateLiterals: true,
	} ],

	// Require constructor names to begin with a capital letter
	// https://eslint.org/docs/rules/new-cap
	'new-cap': [ 'error', {
		newIsCap: true,
		newIsCapExceptions: [],
		capIsNew: false,
		capIsNewExceptions: [
			'Immutable.Map',
			'Immutable.Set',
			'Immutable.List',
		],
	} ],

	// Require parentheses when invoking a constructor with no arguments
	// https://eslint.org/docs/rules/new-parens
	'new-parens': 'error',

	// Disallow `Array` constructors
	// https://eslint.org/docs/rules/no-array-constructor
	'no-array-constructor': 'error',

	// Disallow if statements as the only statement in else blocks
	// https://eslint.org/docs/rules/no-lonely-if
	'no-lonely-if': 'error',

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

	// Disallow multiple empty lines
	// https://eslint.org/docs/rules/no-multiple-empty-lines
	'no-multiple-empty-lines': [ 'error', {
		max: 1,
	} ],

	// Disallow nested ternary expressions
	// https://eslint.org/docs/rules/no-nested-ternary
	'no-nested-ternary': 'error',

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

	// Disallow trailing whitespace at the end of lines
	// https://eslint.org/docs/rules/no-trailing-spaces
	'no-trailing-spaces': [ 'error', {
		skipBlankLines: false,
		ignoreComments: false,
	} ],

	// Disallow whitespace before properties
	// https://eslint.org/docs/rules/no-whitespace-before-property
	'no-whitespace-before-property': 'error',

	// Enforce consistent spacing inside braces
	// https://eslint.org/docs/rules/object-curly-spacing
	'object-curly-spacing': [ 'error', 'always' ],

	// Enforce consistent linebreak style for operators
	// https://eslint.org/docs/rules/operator-linebreak
	'operator-linebreak': [ 'error', 'after', {
		overrides: {
			'?': 'before',
			':': 'before'
		},
	} ],

	// Require or disallow padding within blocks
	// https://eslint.org/docs/rules/padded-blocks
	'padded-blocks': [ 'error', {
		blocks: 'never',
		classes: 'never',
		switches: 'never',
	} ],

	// Require quotes around object literal property names
	// https://eslint.org/docs/rules/quote-props
	'quote-props': [ 'error', 'as-needed', {
		keywords: false,
		unnecessary: true,
		numbers: false,
	} ],

	// Enforce the consistent use of either backticks, double, or single quotes
	// https://eslint.org/docs/rules/quotes
	quotes: [ 'error', 'single', {
		avoidEscape: true,
	} ],

	// Require or disallow semicolons instead of ASI
	// https://eslint.org/docs/rules/semi
	semi: [ 'error', 'always' ],

	// Enforce consistent spacing before and after semicolons
	// https://eslint.org/docs/rules/semi-spacing
	'semi-spacing': [ 'error', {
		before: false,
		after: true,
	} ],

	// Enforce location of semicolons
	// https://eslint.org/docs/rules/semi-style
	'semi-style': [ 'error', 'last' ],

	// Enforce consistent spacing before blocks
	// https://eslint.org/docs/rules/space-before-blocks
	'space-before-blocks': 'error',

	// Enforce consistent spacing before function definition opening parenthesis
	// https://eslint.org/docs/rules/space-before-function-paren
	'space-before-function-paren': [ 'error', {
		anonymous: 'never',
		asyncArrow: 'always',
		named: 'never',
	} ],

	// Enforce consistent spacing inside parentheses
	// https://eslint.org/docs/rules/space-in-parens
	'space-in-parens': [ 'error', 'always' ],

	// Require spacing around infix operators
	// https://eslint.org/docs/rules/space-infix-ops
	'space-infix-ops': 'error',

	// Enforce consistent spacing before or after unary operators
	// https://eslint.org/docs/rules/space-unary-ops
	'space-unary-ops': [ 'error', {
		overrides: {
			'!': true
		}
	} ],

	// Require or disallow Unicode byte order mark (BOM)
	// https://eslint.org/docs/rules/unicode-bom
	'unicode-bom': [ 'error', 'never' ],
};
