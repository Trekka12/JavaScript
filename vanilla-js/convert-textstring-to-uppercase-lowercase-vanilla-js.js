// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

let textString = "This textString Should Be converted to either lowerCase or UpperCase";

// textString = textString.toUpperCase(); <- This here only to demonstrate how we could update textString value to uppercase for permanent change

console.log("textString converted to UpperCase: \n" + textString.toUpperCase()); // the \n character makes newLine in string formatting

console.log("textString converted to lowerCase: \n" + textString.toLowerCase());

let otherString = "TeXt";

// A practical example of how we usually use .toLowerCase() and .toUpperCase() in everyday worklife from time to time below
if(otherString.toLowerCase() == "text") {
	
	// this can be useful to check case-insensitive matching when want to avoid too much permanent value manipulation and just check something
}

// or...

if(otherString.toUpperCase() == "TEXT") {
	
	// same as above, just using upperCase instead :)
}