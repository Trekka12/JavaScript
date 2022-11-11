/**
 * Test function to test our function and see console output for whats happening in it
 * - To run it select this test func in Apps Script and press "Run" and watch the console outputs (if you added any, like we did below in our func)
 */
function testHybridMultiAndSingleRowInputAndReturnFunc() {
	let simulatedGSheetMultiDimArrayInput = [["first row value"], // Note the two-dimensional layout for rows and cols that gsheet uses where first array is col and second nested array is the row
											 ["second row value"]];
	
	hybridMultiAndSingleRowInputAndReturnFunc(simulatedGSheetMultiDimArrayInput);
}

/**
 * A hybrid function which can process both single-row and multi-row input data in gsheet
 * - customfunction below is added to activate "documentation comments in gsheet for users to aid in function call
 * @param gsheetMultiDimArrayInput - our input values
 * 
 * @return returnArray - our one dim array to be returned with processed/unprocessed values
 * @customfunction
 */
function hybridMutliAndSingleRowInputAndReturnFunc(gsheetMultiDimArrayInput) {
	let returnArray = [];
	
	let iterations = (Array.isArray(gsheetMultiDimArrayInput) ? gsheetMultiDimArrayInput.length : 1);
	
	let singleRowInputValue;
	
	for(let i = 0; i < iterations; i++) {
		singleRowInputValue = (Array.isArray(gsheetMultiDimArrayInput) ? gsheetMultiDimArrayInput[i][0] : gsheetMultiDimArrayInput;
		console.log("singleRowInputValue: " + singleRowInputValue); // comment this out for production (apparently drains gsheet performance like crazy.. :/ )
		
		// ... Here we can do whatever we want with singleRowInputValue
		
		// Once we're done, we add it to the returnArray to be returned back to user in gsheet who is calling on the function
		returnArray[i] = singleRowInputValue;
	}
	return returnArray;
}