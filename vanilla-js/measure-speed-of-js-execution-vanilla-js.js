// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// For this demonstration we will place code inside of a JavaScript function that we will run and measure a timestamp before it runs and after and take the diff as the time it took to run the function :) Simple

// Lets start by defining our function with the code to run

/**
 * A testfunction to put some load on the system so we can test measure JS code execution speed
 * @param numberOne - a number to use for calculation
 * @param numberTwo - a second number to use for calculation
 * 
 * @return result - function returns a result of the computation 
 */
function testFunction(numberOne, numberTwo) {
	// Lets do some arithmetic computations maybe, and lets use loop to put some load on the system
	let result = 0;
	const LOOP_LIMIT = 1000;
	
	let incrementalCalculationFactor = 1;
	
	while(incrementalCalculationFactor < LOOP_LIMIT) {
		result += (numberOne * incrementalCalculationFactor) + (numberTwo * incrementalCalculationFactor);
		
		console.log("result: " + result); // console.log usually take some additional processing power - so we add for extra load in this example
		
		incrementalCalculationFactor += 3;
	}
	
	return result;
}

let computation = 0;

let startTime = Date.now(); // take the time before we start running our code

computation = testFunction(15, 25); // run code to measure time of

let endTime = Date.now(); // take time post finish running code

let timeDiff = endTime - startTime; // calculate the time diff (in milliseconds)

// Next we turn our time diff in millisecs into more human understandable/relateable minutes and seconds just for fun :)
const SEC_IN_MILLISEC = 1000; // these constants we define in this example to avoid "magic numbers" which can be ambigous in code
const SEC_IN_MIN = 60;
const MIN_IN_MILLISEC = SEC_IN_MIN * SEC_IN_MILLISEC; // 60 secs for a min, 1000 millisec for a second

let mins = 0;
let secs = 0;

if(timeDiff > MIN_IN_MILLISEC) {
	
	mins = timeDiff / MIN_IN_MILLISEC;
	secs = timeDiff % MIN_IN_MILLISEC; // modulus (%) gives us the rest of the division
	
}else { // if timeDiff is not larger than 60'000 there are no minutes, only seconds (if even that - if below 1000 only millisecs exist)

	mins = 0;
	secs = timeDiff / SEC_IN_MILLISEC;
}

console.log("time diff in millisecs: " + timeDiff + " for running testFunction computation, which is in mins and secs: " + mins + " minutes, " + secs + " seconds.");

