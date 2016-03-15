'use strict';

// MODULES //

var tape = require( 'tape' );
var A = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof A, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is 1.2824271291006226 (float64)', function test( t ) {
	t.equal( A, 1.2824271291006226, 'returns 1.2824271291006226' );
	t.end();
});
