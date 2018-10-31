/**
 * External dependencies
 */
const merge = require( 'merge' );

module.exports = {
	rules: merge(
		require( './rules/best-practices' ),
		require( './rules/esnext' ),
		require( './rules/possible-errors' ),
		require( './rules/stylistic-issues' ),
		require( './rules/variables' ),
	),
};
