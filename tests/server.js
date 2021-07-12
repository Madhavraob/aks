
/**
 * https://www.npmjs.com/package/tape
 * https://catonmat.net/writing-javascript-tests-with-tape
 * https://github.com/substack/tape
 */

var test = require('tape')

test('basic arithmetic', function (t) {
    t.plan(2);

    t.equal(2 + 3, 5);
    t.equal(7 * 8 + 9, 65);
});


test(function (t) {
    t.plan(2);

    t.equal(2 + 3, 5);
    t.equal(7 * 8 + 9, 65);
});


test('deep equality', function (t) {
    t.plan(2);

    t.deepEqual([ 3, 4, 5 ], [ 3, 4, 2+3 ]);
    t.deepEqual(
        { a: 7, b: [ 8, 9 ] },
        { a : 3+4, b: [ 4*2 ].concat(3*3) }
    );
});


test('deep equality', function (t) {
    t.plan(2);

    t.deepEqual([ 3, 4, 5 ], [ 3, 4, 2+3 ]);
    t.deepEqual(
        { a: 7, b: [ 8, 9 ] },
        { a : 3+4, b: [ 4*2 ].concat(3*3) }
    );
});

