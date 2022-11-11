// Below use following references:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute

let elem = document.getElementById("your-elem-id-here");

if(elem) { // check elem existence before making assumptions and working with it (since it might not yet exist or have finished loading)
	console.log(elem.getAttribute('class'));
}