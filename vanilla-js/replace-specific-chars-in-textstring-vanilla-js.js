// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

let textString = "This is my textstring to parse";

textString = textString.replaceAll(" ", "-");

console.log("parsed textString result: " + textString);