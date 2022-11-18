// Below is inspired from- and uses the following references:
// https://www.excelforum.com/excel-formulas-and-functions/1216086-how-to-always-round-up-to-nearest-9-a.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

/**
 * Round to nearest 9 formula
 * - inspired from: https://www.excelforum.com/excel-formulas-and-functions/1216086-how-to-always-round-up-to-nearest-9-a.html
 * @param nmbr - number to round
 * 
 * @return the rounded number
 */
function roundToNearestNine(nmbr) {

	// Below console.logs help reveal every step of the rounding process for additional understanding of this functions inner workings :)
	console.log("Rounding to nearest nine disection: ");
	console.log("nmbr / 10 = " + (nmbr/10));
	console.log("Math.round(nmbr/10) = " + Math.round(nmbr/10));
	console.log("* 10 = " + (Math.round(nmbr/10) * 10));
	console.log("-1 = " + ((Math.round(nmbr/10)*10)-1));

	return (Math.round(nmbr/10)*10)-1;
}