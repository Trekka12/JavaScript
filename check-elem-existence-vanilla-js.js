// Below code is inspired from Stackoverflow:
// https://stackoverflow.com/questions/5629684/how-can-i-check-if-an-element-exists-in-the-visible-dom#answer-5629761

let elem = document.getElementById("your-elem-id-here");

if(typeof(elem) != 'undefined' && elem != null) { // Vanilla JS to check elem existence
	
	// Safe to work with your element here post-elem-existence-check :)
	
}