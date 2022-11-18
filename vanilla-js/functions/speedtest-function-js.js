// Below uses the following references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Here you can find a function template to use for when you wish to speed test your code :)

// The func passed to our speedTest function as well as its parameters can look like follow:
/**
 * A dummy function to run in our speedTest
 * @param iterations - how many times the for-loop within this dummy func should run
 * 
 * @return void - returns nothing, just prints to console.log
 */
function func(iterations) {
	for(let i = 0; i < iterations; i++) { // Using a loop-function since it can put some load on the system that shows
		console.log("test");
	}
}

// This is not a dynamic solution to fit any function and any amount of input parameters, which is a bit of a shame, 
// but so for simplicity sake here we hardcore what function and what parameters to speedTest - perhaps improvements for more dynamic speedTest can be made in the future.

/**
 * A generalized speedTest function
 * @param iterations - the amount of iterations to run our loop in function to speedTest
 *
 * @return void - this function returns nothing, but prints to console time it took to run the function
 */
function speedTest(iterations) {
	let startTime = Date.now();
	
	func(iterations); // notice this code assumes existence of 'func' function in Global Scope within same JS document
			  // also notice how we pass the input param of speedTest on to our func to speedTest
	
	let endTime = Date.now();
	
	let timeDiff = endTime - startTime; // time diff in millisecs
	
	let mins = 0, secs = 0;
	
	// Defining some semantic constants to help us avoid 'magic numbers' in the code
	const SEC_IN_MILLISEC = 1000;
	const SEC_IN_MIN = 60;
	const MIN_IN_MILLISEC = SEC_IN_MIN * SEC_IN_MILLISEC; // 60 secs for a min, 1000 millisec for a second

	if(timeDiff > MIN_IN_MILLISEC) {
		
		mins = timeDiff / MIN_IN_MILLISEC;
		secs = timeDiff % MIN_IN_MILLISEC; // modulus (%) gives us the rest of the division
		
	}else { // if timeDiff is not larger than 60'000 there are no minutes, only seconds (if even that - if below 1000 only millisecs exist)

		secs = timeDiff / SEC_IN_MILLISEC;
	}
	
	console.log("time diff in millisecs: " + timeDiff + " for running testFunction computation, which is in mins and secs: " + mins + " minutes, " + secs + " seconds.");
}

// And now for the finale - lets run a speedTest:
speedTest(500);