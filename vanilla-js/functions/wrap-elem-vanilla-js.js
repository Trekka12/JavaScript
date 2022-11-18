// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

/**
 * A function to wrap an HTML element with another HTML element
 * @param toWrap - the HTML element to wrap
 * @param wrapper - the HTML element wrapper
 */
function wrap(toWrap, wrapper) {
	toWrap.parentNode.insertBefore(wrapper, toWrap);
	return wrapper.appendChild(toWrap);
};