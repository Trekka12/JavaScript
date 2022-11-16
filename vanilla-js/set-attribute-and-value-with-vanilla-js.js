// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

let elem = document.getElementById("your-elem-id-goes-here");

if(elem) { // precaution to make sure elem exists before we starting working with/on it
	elem.setAttribute("class", "className");
}