// Below is inspired from- and uses the following references:
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary#answer-18358056
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

/**
 * Rounding to two decimal func borrowed from:
 * - https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary#answer-18358056
 * @param num - the number to round
 * 
 * @return the rounded number
 */
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}