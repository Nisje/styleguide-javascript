/**
 * External dependencies
 */
const merge = require( 'merge' );

module.exports = {
	rules: merge(
		require( './rules/best-practices' ),
		require( './rules/esnext' ),
		require( './rules/stylistic-issues' ),
	),
};
