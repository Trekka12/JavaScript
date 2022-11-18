// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains#:~:text=Node.-,contains(),node%20is%20contained%20inside%20itself.

/**
 * A function to check whether a specific child exist within a parent element
 * @param parentElem - the parent element
 * @param childElem - the child element
 * 
 * @return bool - true if child exist within parent, false if it doesn't
 */
function checkChildInParent(parentElem, childElem) {
	return parentElem.contains(childElem);
}