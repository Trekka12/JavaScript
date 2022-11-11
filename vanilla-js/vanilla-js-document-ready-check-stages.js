// Below inspired from: 
// https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
// https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event

if(document) { // might be unecessary precaution because it is created Sooo fast but still...
	 
	document.addEventListener('readystatechange', function(e) {
				
		if(document.readyState == "interactive") { // This state represents when DOM is accessible (kind of like DOMContentLoaded)
			
			// This is where DOM finished loading but not yet all scripts, images, and other resources..
			
			
			// End of DOM accessible
		}else if(document.readyState == "complete") { // TThis state in turn represents when rest finished loading (kind of like window onLoad)
	
			// This is where Window finished loading and everything is ready
			
			
		} // End of window onLoad
	}); // End of Document readystatechange event
} // End of document exist check