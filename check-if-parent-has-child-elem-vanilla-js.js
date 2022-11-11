// Below inspired from:
// https://gomakethings.com/how-to-check-if-an-element-contains-another-one-with-the-vanilla-js-node.contains-method/

let parentElem = document.getElementById("your-parent-elem-id-here");
let childElem = document.getElementById("your-child-elem-id-here");

if(parentElem.contains(childElem)) {
	// Do something if the parent elem contained the child elem :)
}