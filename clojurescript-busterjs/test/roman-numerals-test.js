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
    }
});
