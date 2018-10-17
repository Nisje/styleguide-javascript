/**
 * External dependencies
 */
const merge = require( 'merge' );

module.exports = {
	plugins: [
		'jsx-a11y',
		'react',
	],
	rules: merge(
		require( './rules/best-practices' ),
		require( './rules/react' ),
	),
};
