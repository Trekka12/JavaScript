// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment

// https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode

// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

/**
 * A function to unwrap a wrapped HTML element (can come in handy sometimes)
 * @param wrapper - the wrapper to remove
 */
function unwrap(wrapper) {
	// place childNodes in document fragment
	let docFrag = document.createDocumentFragment();
	
	while (wrapper.firstChild) {
		let child = wrapper.removeChild(wrapper.firstChild);
		docFrag.appendChild(child); // basically building our document fragment with whats within the wrapper
	}

	// replace wrapper with document fragment
	wrapper.parentNode.replaceChild(docFrag, wrapper);
}