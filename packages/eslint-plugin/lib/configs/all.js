/**
 * External dependencies
 */
const merge = require( 'merge' );

module.exports = {
	plugins: [
		'flowtype',
		'jsx-a11y',
		'react',
	],
	rules: merge(
		require( './rules/best-practices' ),
		require( './rules/esnext' ),
		require( './rules/flowtype' ),
		require( './rules/jsx-a11y' ),
		require( './rules/possible-errors' ),
		require( './rules/react' ),
		require( './rules/stylistic-issues' ),
		require( './rules/variables' ),
	),
};
