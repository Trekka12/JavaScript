// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

const textString = "This is a random text string";

const searchWord = "random";

if(textString.includes(searchWord)) {
	// if our textString contained our searchWord we can now do things
	console.log("The word: " + searchWord + " exist in the textString: '" + textString + "'");
}