/**
 * Super useful function to loop through an array to check vs RegEx if value of array slot match to regex (if array contains a string), if it is, return true, if not false, can also check string match, two-in-one combo
 * Searched Stackoverflow for something like this, but all the answers seemed way more complicated and convuluted - 23sept24.
 * @param arrOrStr  - array or str with value(s) to loop through for regex match
 * @param regex     - regex to match array slot values against
 * 
 * @return          - true or false depending if match or not
*/
function regExCheckArrayOrStrMatch(arrOrStr, regex) {

  if(Array.isArray(arrOrStr)) {
    //console.log("in array match value");
    for(var i = 0; i < arrOrStr.length; i++) {
      if(regex.test(arrOrStr[i])) {
        return true;
      }
    }
    return false;
  }else {
    //console.log("in string match value");
    return regex.test(arrOrStr);
  }
}
