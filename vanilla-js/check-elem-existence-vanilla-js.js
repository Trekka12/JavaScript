// Below code is inspired from StackOverflow:
// https://stackoverflow.com/questions/5629684/how-can-i-check-if-an-element-exists-in-the-visible-dom#answer-5629761
// https://stackoverflow.com/questions/4186906/check-if-object-exists-in-javascript

let elem = document.getElementById("your-elem-id-here");

if(typeof(elem) != 'undefined' && elem != null) { // Vanilla JS to check elem existence
	
	// Safe to work with your element here post-elem-existence-check :)
	
}