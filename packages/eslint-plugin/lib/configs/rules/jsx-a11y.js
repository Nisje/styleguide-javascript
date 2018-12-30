// https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules

module.exports = {
	// Ensure emoji are accessible
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
	'jsx-a11y/accessible-emoji': 'error',

	// Enforce that all elements that require alternative text have meaningful information
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
	'jsx-a11y/alt-text': [ 'error', {
		elements: [ 'img', 'object', 'area', 'input[type="image"]' ],
		img: [],
		object: [],
		area: [],
		'input[type="image"]': [],
	} ],

	// Enforce that anchors have content
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
	'jsx-a11y/anchor-has-content': [ 'error', {
		components: [],
	} ],

	// Enforce all anchors are valid, navigable elements.
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
	'jsx-a11y/anchor-is-valid': [ 'error', {
		components: [ 'Link' ],
		specialLink: [ 'to' ],
		aspects: [ 'noHref', 'invalidHref', 'preferButton' ],
	} ],

	// Elements with aria-activedescendant must be tabbable
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
	'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

	// Enforce all aria-* props are valid.
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
	'jsx-a11y/aria-props': 'error',

	// Enforce ARIA state and property values are valid.
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
	'jsx-a11y/aria-proptypes': 'error',

	// Require ARIA roles to be valid and non-abstract
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
	'jsx-a11y/aria-role': [ 'error', { ignoreNonDom: false } ],

	// Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
	'jsx-a11y/aria-unsupported-elements': 'error',

	// Ensure <hX> tags have content and are not aria-hidden
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
	'jsx-a11y/heading-has-content': 'error',

	// Ensure iframe elements have a unique title
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
	'jsx-a11y/iframe-has-title': 'error',

	// Prevent img alt text from containing redundant words like "image", "picture", or "photo"
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
	'jsx-a11y/img-redundant-alt': 'error',

	// Prevent use of `accessKey`
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
	'jsx-a11y/no-access-key': 'error',

	// Prevent distracting elements, like <marquee> and <blink>
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
	'jsx-a11y/no-distracting-elements': [ 'error', {
		elements: [ 'marquee', 'blink' ],
	} ],

	// Ensure HTML elements do not specify redundant ARIA roles
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
	'jsx-a11y/no-redundant-roles': 'error',

	// Enforce that elements with ARIA roles must have all required attributes for that role.
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
	'jsx-a11y/role-has-required-aria-props': 'error',

	// Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
	'jsx-a11y/role-supports-aria-props': 'error',

	// Only allow <th> to have the "scope" attr
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
	'jsx-a11y/scope': 'error',
};
