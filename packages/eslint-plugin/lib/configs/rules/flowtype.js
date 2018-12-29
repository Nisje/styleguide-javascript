// https://github.com/gajus/eslint-plugin-flowtype

module.exports = {
	// Enforces a particular style for boolean type annotations
	// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
	'flowtype/boolean-style': 'error',

	// Enforces consistent use of trailing commas in Object and Tuple annotations
	// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-delimiter-dangle
	'flowtype/delimiter-dangle': [ 'error', 'always-multiline' ],

	// Checks for duplicate properties in Object annotations
	// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-dupe-keys
	'flowtype/no-dupe-keys': 'error',

	// Disallows Flow type imports, aliases, and annotations in files missing a valid Flow file declaration
	// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-types-missing-file-annotation
	'flowtype/no-types-missing-file-annotation': 'error',

	// Validate Flow file annotations
	// https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
	'flowtype/require-valid-file-annotation': [ 'error', 'never', {
		annotationStyle: 'line'
	} ],

	// Enforces consistent use of semicolons after type aliases
	// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-semi
	'flowtype/semi': 'error',

	// Enforces consistent spacing after the type annotation colon
	// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-after-type-colon
	'flowtype/space-after-type-colon': 'error',

	// Enforces consistent spacing before the opening < of generic type annotation parameters
	// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-generic-bracket
	'flowtype/space-before-generic-bracket': 'error',

	// Enforces consistent spacing before the type annotation colon
	// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-space-before-type-colon
	'flowtype/space-before-type-colon': [ 'error', 'never' ],

	// Enforces a particular style for type imports
	// https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-type-import-style
	'flowtype/type-import-style': [ 'error', 'declaration' ],
};
