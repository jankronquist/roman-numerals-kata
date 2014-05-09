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
    'returns XL for 40': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(40), 'XL');
    },
    'returns XXXIV for 34': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(34), 'XXXIV');
    },
    'returns XC for 90': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(90), 'XC');
    },
    'returns CXI for 111': function () {
        assert.equals(decimalToRoman.roman_numerals.decimal_to_roman(111), 'CXI');
    },
});
