// Below inspired from:
// https://stackoverflow.com/questions/26104525/best-practices-for-where-to-add-event-listeners

document.body.addEventListener("click", function(event) { // This will attach event listener to body and JS event delegation will "bubble" events through the DOM parents from elem until it reaches body where our listener is attached - this way we can have 1 listener for click instead of multiple for example
	
	// if our elem we want to act on got a class:
	if(event.target.classList.contains("className")) {
		// Act on your elem event trigger here
	}
	
	// if our elem we want to act on got an id:
	if(event.target.id == "your-elem-id-here") {
		// Act on your elem event trigger here
	}

}, false);