/*
 * Documentation:
 * http://docs.busterjs.org/en/latest/
 */
var buster = require('buster');
var decimalToRoman = require('../lib/roman-numerals');

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
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(1), 'I');
    },
    'returns II for 2': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(2), 'II');
    },
    'returns IV for 4': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(4), 'IV');
    },
    'returns V for 5': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(5), 'V');
    },
    'returns XXXIV for 34': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(34), 'XXXIV');
    },
    'returns XL for 40': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(40), 'XL');
    },
    'returns XLIX for 49': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(49), 'XLIX');
    },
    'returns XC for 90': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(90), 'XC');
    },
    'returns XCIX for 99': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(99), 'XCIX');
    },
    'returns CXI for 111': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(111), 'CXI');
    },
    'returns MMMCMXCIV for 3994': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(3994), 'MMMCMXCIV');
    },
    'returns 1 for I': function () {
        assert.equals(decimalToRoman.roman_numerals.roman_to_decimal('I'), 1);
    }
	
});
