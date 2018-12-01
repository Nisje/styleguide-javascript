// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules

module.exports = {
	// Specify whether double or single quotes should be used in JSX attributes
	// https://eslint.org/docs/rules/jsx-quotes
	'jsx-quotes': [ 'error', 'prefer-double' ],
	
	// Forbid "button" element without an explicit "type" attribute
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
	'react/button-has-type': 'error',

	// Enforce boolean attributes notation in JSX
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
	'react/jsx-boolean-value': [ 'error', 'never', { always: [] } ],

	// Validate closing bracket location in JSX
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
	'react/jsx-closing-bracket-location': [ 'error', 'line-aligned' ],

	// Validate closing tag location in JSX
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
	'react/jsx-closing-tag-location': 'error',
	
	// Validate JSX indentation
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
	'react/jsx-indent': [ 'error', 'tab' ],

	// Prevent usage of .bind() in JSX props
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
	'react/jsx-no-bind': [ 'error', {
		ignoreRefs: true,
		allowArrowFunctions: true,
		allowFunctions: false,
		allowBind: false,
		ignoreDOMComponents: true,
	} ],
	
	// Prevent duplicate properties in JSX
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
	'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

	// Disallow multiple spaces between inline JSX props
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
	'react/jsx-props-no-multi-spaces': 'error',

	// Validate whitespace in and around the JSX opening and closing brackets
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
	'react/jsx-tag-spacing': [ 'error', {
		closingSlash: 'never',
		beforeSelfClosing: 'always',
		afterOpening: 'never',
		beforeClosing: 'never',
	} ],

	// Prevent missing parentheses around multilines JSX
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
	'react/jsx-wrap-multilines': [ 'error', {
		declaration: 'parens-new-line',
		assignment: 'parens-new-line',
		return: 'parens-new-line',
		arrow: 'parens-new-line',
		condition: 'parens-new-line',
		logical: 'parens-new-line',
		prop: 'parens-new-line',
	} ],

	// Prevent usage of Array index in keys
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
	'react/no-array-index-key': 'error',

	// Prevent multiple component definition per file
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
	'react/no-multi-comp': [ 'error', { ignoreStateless: true } ],

	// Require ES6 class declarations over React.createClass
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
	'react/prefer-es6-class': [ 'error', 'always' ],

	// Require stateless functions when not using lifecycle methods, setState or ref
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
	'react/prefer-stateless-function': [ 'error', { ignorePureComponents: true } ],

	// Require render() methods to return something
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
	'react/require-render-return': 'error',

	// Prevent extra closing tags for components without children
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
	'react/self-closing-comp': 'error',
};
