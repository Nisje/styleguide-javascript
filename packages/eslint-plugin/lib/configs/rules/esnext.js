// https://eslint.org/docs/rules/#ecmascript-6

module.exports = {
	// Require `super()` calls in constructors
	// https://eslint.org/docs/rules/constructor-super
	'constructor-super': 'error',

	// Disallow reassigning class members
	// https://eslint.org/docs/rules/no-class-assign
	'no-class-assign': 'error',

	// Disallow reassigning `const` variables
	// https://eslint.org/docs/rules/no-const-assign
	'no-const-assign': 'error',

	// Require `let` or `const` instead of `var`
	// https://eslint.org/docs/rules/no-var
	'no-var': 'error',

	// Require or disallow method and property shorthand syntax for object literals
	// https://eslint.org/docs/rules/object-shorthand
	'object-shorthand': [ 'error', 'always', {
		ignoreConstructors: false,
		avoidQuotes: true,
	} ],

	// Require `const` declarations for variables that are never reassigned after declared
	// https://eslint.org/docs/rules/prefer-const
	'prefer-const': [ 'error', {
		destructuring: 'any',
		ignoreReadBeforeAssign: true,
	} ],

	// Require template literals instead of string concatenation
	// https://eslint.org/docs/rules/prefer-template
	'prefer-template': 'error',

	// Require or disallow spacing around embedded expressions of template strings
	// https://eslint.org/docs/rules/template-curly-spacing
	'template-curly-spacing': [ 'error', 'always' ],
};
