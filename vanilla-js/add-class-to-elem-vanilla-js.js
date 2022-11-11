// Below use following references:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add

let elem = document.getElementById("your-elem-id-here");

if(elem) { // Make sure the elem exist so we can work with it, if elem exist returns true
	elem.classList.add("classname-to-add");
}