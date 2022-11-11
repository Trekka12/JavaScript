// Below is inspired from:
// https://stackoverflow.com/questions/1279957/how-to-move-an-element-into-another-element/answer-33724397
// https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment

let elem = document.getElementById("your-elem-id-here");
let targetToMoveTo = document.getElementById("your-target-to-move-to-elem");

if(typeof(elem) != 'undefined' && elem != null && typeof(targetToMoveTo) != 'undefined' && targetToMoveTo != null) { // First check existence of our element before we work with them

	// Declare a document fragment:
	let fragment = document.createDocumentFragment();

	// Append desired element to the fragment:
	fragment.appendChild(elem);

	// Append fragment to desired element:
	targetToMoveTo.appendChild(fragment);
}