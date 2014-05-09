/*
 * Documentation:
 * http://docs.busterjs.org/en/latest/
 */
var buster = require('buster');
var decimalToRoman = require('../lib/roman-numerals');

/* Shortcut to avoid typing "buster." at every assert. */
var assert = buster.assert

/*
If you want to use spec style syntax:
describe("My thing", function () {
    it("has the foo and bar", function () {
        expect("foo").toEqual("bar");
    });

it can be enabled with
buster.spec.expose();
*/

buster.testCase('decimalToRoman', {
    'returns I for 1': function () {
        assert.equals(decimalToRoman(1), 'I');
    },
    'returns II for 2': function () {
        assert.equals(decimalToRoman(2), 'II');
    },
    'returns IV for 4': function () {
        assert.equals(decimalToRoman(4), 'IV');
    },
    'returns V for 5': function () {
        assert.equals(decimalToRoman(5), 'V');
    },
    'returns XXXIV for 34': function () {
        assert.equals(decimalToRoman(34), 'XXXIV');
    },
    'returns XL for 40': function () {
        assert.equals(decimalToRoman(40), 'XL');
    },
    'returns XLIX for 49': function () {
        assert.equals(decimalToRoman(49), 'XLIX');
    },
    'returns XC for 90': function () {
        assert.equals(decimalToRoman(90), 'XC');
    },
    'returns XCIX for 99': function () {
        assert.equals(decimalToRoman(99), 'XCIX');
    },
    'returns CXI for 111': function () {
        assert.equals(decimalToRoman(111), 'CXI');
    },
    'returns MMMCMXCIV for 3994': function () {
        assert.equals(decimalToRoman(3994), 'MMMCMXCIV');
    }
});
