// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains#:~:text=Node.-,contains(),node%20is%20contained%20inside%20itself.

/**
 * A function to check if a specific HTML element has a specific class
 * @param elem - The element to check for class existence
 * @param className - class to check if exist
 *
 * @return bool - true if exist, false if doesn't
 */
function checkClassExistence(elem, className) {
	return elem.classList.contains(className);
}