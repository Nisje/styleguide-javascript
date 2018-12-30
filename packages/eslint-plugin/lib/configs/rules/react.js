// https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules

module.exports = {
	// Specify whether double or single quotes should be used in JSX attributes
	// https://eslint.org/docs/rules/jsx-quotes
	'jsx-quotes': [ 'error', 'prefer-double' ],

	// Forbid "button" element without an explicit "type" attribute
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
	'react/button-has-type': 'error',

	// Forbid foreign propTypes
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
	'react/forbid-foreign-prop-types': [ 'warn', {
		allowInPropTypes: true,
	} ],

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

	// Prevent comments from being inserted as text nodes
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
	'react/jsx-no-comment-textnodes': 'error',

	// Prevent duplicate properties in JSX
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
	'react/jsx-no-duplicate-props': ['error', {
		ignoreCase: true,
	} ],

	// Prevent usage of unsafe target='_blank'
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
	'react/jsx-no-target-blank': [ 'error', {
		enforceDynamicLinks: 'always',
	} ],

	// Disallow undeclared variables in JSX
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
	'react/jsx-no-undef': 'error',

	// Enforce PascalCase for user-defined JSX components
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
	'react/jsx-pascal-case': [ 'error', {
		allowAllCaps: true,
		ignore: [],
	} ],

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

	// Prevent React to be incorrectly marked as unused
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
	'react/jsx-uses-react': 'error',

	// Prevent variables used in JSX to be incorrectly marked as unused
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
	'react/jsx-uses-vars': 'error',

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

	// Prevent problem with children and props.dangerouslySetInnerHTML
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
	'react/no-danger-with-children': 'error',

	// Prevent direct mutation of this.state
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
	'react/no-direct-mutation-state': 'error',

	// Prevent usage of isMounted
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
	'react/no-is-mounted': 'error',

	// Prevent multiple component definition per file
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
	'react/no-multi-comp': [ 'error', {
		ignoreStateless: true,
	} ],

	// Require ES6 class declarations over React.createClass
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
	'react/prefer-es6-class': [ 'error', 'always' ],

	// Require stateless functions when not using lifecycle methods, setState or ref
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
	'react/prefer-stateless-function': [ 'error', {
		ignorePureComponents: true,
	} ],

	// Prevent missing React when using JSX
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
	'react/react-in-jsx-scope': 'error',

	// Require render() methods to return something
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
	'react/require-render-return': 'error',

	// Prevent extra closing tags for components without children
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
	'react/self-closing-comp': 'error',

	// Require style prop value be an object or var
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
	'react/style-prop-object': 'error',
};
