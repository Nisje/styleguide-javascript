// https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules

module.exports = {
	// Enforce that all elements that require alternative text have meaningful information
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
	'jsx-a11y/alt-text': [ 'error', {
		elements: [ 'img', 'object', 'area', 'input[type="image"]' ],
		img: [],
		object: [],
		area: [],
		'input[type="image"]': [],
	} ],

	// Require ARIA roles to be valid and non-abstract
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
	'jsx-a11y/aria-role': [ 'error', { ignoreNonDom: false } ],

	// Prevent img alt text from containing redundant words like "image", "picture", or "photo"
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
	'jsx-a11y/img-redundant-alt': 'error',

	// Prevent use of `accessKey`
	// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
	'jsx-a11y/no-access-key': 'error',
};
