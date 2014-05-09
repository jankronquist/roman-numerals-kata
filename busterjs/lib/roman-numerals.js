function decimalToRomanDigit(value, one, five, ten) {
	switch(value) {
	case 0:
		return "";
	case 1:
		return one;
	case 2:
		return one + one;
	case 3:
		return one + one + one;
	case 4:
		return one + five;
	case 5:
		return five;
	case 6:
		return five + one;
	case 7:
		return five + one + one;
	case 8:
		return five + one + one + one;
	case 9:
		return one + ten;
	case 10:
		return ten;
	default:
		return "ERROR";
	}
	return "NOOOO";
}

function decimalToRoman(number) {
	return decimalToRomanDigit( Math.floor((number % 10000)/1000), "M", "D", "M") 
		 	+ decimalToRomanDigit( Math.floor((number % 1000)/100), "C", "D", "M") 
	 		+ decimalToRomanDigit( Math.floor((number % 100)/10), "X", "L", "C") 
			+ decimalToRomanDigit(number % 10, "I", "V", "X");
}

module.exports = decimalToRoman;
