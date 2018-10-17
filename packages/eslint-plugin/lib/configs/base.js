/**
 * External dependencies
 */
const merge = require( 'merge' );

module.exports = {
	rules: merge(
		require( './rules/best-practices' ),
	),
};
