// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

let textString = "This textString Should Be converted to either lowerCase or UpperCase";

// textString = textString.toUpperCase(); <- This here only to demonstrate how we could update textString value to uppercase for permanent change

console.log("textString converted to UpperCase: \n" + textString.toUpperCase()); // the \n character makes newLine in string formatting

console.log("textString converted to lowerCase: \n" + textString.toLowerCase());