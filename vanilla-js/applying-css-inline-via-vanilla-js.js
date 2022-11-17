// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

let elem = document.getElementById("you-elem-id-goes-here");

if(elem) { // precaution to check that elem exist before we start assuming its available to work on
	
	elem.style.display = "block"; // sets the inline CSS style property for display to block like so: <elem style="display: block;"></elem>
}