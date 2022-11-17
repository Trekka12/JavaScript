// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
// https://regexr.com/

// In this example we will aim to remove any excess + characters and - characters from a textstring using the power or regex pattern matching
// this example is inspired by a real life work scenario we have encountered
const regex = /[+-]+$/i; 

/* A quick intro to the RegEx syntax to help explain our above RegEx pattern to use for pattern matching in this example:
   According to regex syntax:
  - The [] creaters a "character set" to match a string to anything within it, 
  - The + outside of the "character set" ([]) matches 1 or more of the preceeding token (in this case whats kept within our "character set"), 
  - The $ matches the end of a textstring, 
  - The forward-slashes (/) around our regex defines a regex literal in JavaScript, 
  - The + and - characters within our defined "character set" ([]) are simple characters we wish to match in our textstring
  - And the i outside our // regex literal definition is a "flag" for case insensitive matching (basically ignore whether lower/upper case characters when matching
*/

let textString 	= "Excess+++";
let textString2 = "Excess---";

// if/when .match() func finds matches it returns an array which is interpreted as true in JavaScript, if no matches null is returned instead which is equivalent to false
if(textString.match(regex) || textString2.match(regex)) { // our regex is kind of a two-in-one special pattern to match in this case :)
	
	// So if the pattern of our regex variable was found within textString, we can do stuff here :) if we wish to clear the pattern from the textstring, we can use .replaceAll() function for example
	textString = textString.replace(regex, '');
	textString2 = textString2.replace(regex, '');
	
	console.log("textString post processing: " + textString + ", textString2 post processing: " + textString2);
}