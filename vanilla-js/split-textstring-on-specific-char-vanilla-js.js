// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

// We are going to use window.location.href to get URL of a page in this example:
let url = window.location.href; // Assume this is done on split documentation page gives us: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split'

// For some quick crash course background into the string split command in JS, it returns an array where the indices hold values resulted from the split on the specified character.

// To get protocol of an URL 
let protocol = url.split(':')[0]; // we use [0] to access first index value post split, which in this case is: 'https', since it was the first thing before the split-character

// And to get the domain
let domain = url.split('.')[1]; // [1] acessor on split array return result for dot (.) accesses second split value, which is in this case: 'mozilla'