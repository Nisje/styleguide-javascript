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
		require( './rules/esnext' ),
		require( './rules/jsx-a11y' ),
		require( './rules/react' ),
		require( './rules/stylistic-issues' ),
	),
};
