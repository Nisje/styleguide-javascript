/**
 * External dependencies
 */
const merge = require( 'merge' );

module.exports = {
	plugins: [ 'import' ],
	rules: merge(
		require( './rules/best-practices' ),
		require( './rules/esnext' ),
		require( './rules/import' ),
		require( './rules/possible-errors' ),
		require( './rules/strict' ),
		require( './rules/stylistic-issues' ),
		require( './rules/variables' ),
	),
};
