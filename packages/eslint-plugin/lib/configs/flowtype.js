/**
 * External dependencies
 */
const merge = require( 'merge' );

module.exports = {
	plugins: [ 'flowtype' ],
	rules: merge(
		require( './rules/flowtype' ),
	),
};
