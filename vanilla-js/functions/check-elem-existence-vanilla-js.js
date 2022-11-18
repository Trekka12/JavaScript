// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

/**
 * A function to check for element existence
 * @param elem - The element to check if it exists
 * 
 * @return bool - true if exist, false if it doesn't
 */
function checkExistence(elem) {
	if(typeof(elem) != 'undefined' && elem != null) {
		return true;
	}else {
		return false;
	}
}