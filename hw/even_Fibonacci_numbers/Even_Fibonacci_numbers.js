console.log("Loaded");

function fibonacci(limit) {
	const fibonacciArray = [1,2];
	let sumOfEvens = 2;

	for (var i = 0; i < limit.length; i++) {
		const fibArrayLength = fibonacciArray.length;
		const secondToLastNumber =  fibonacciArray[fibArrayLength - 2];
		const lastNumber = fibonacciArray[fibArrayLength - 1];

		fibonacciArray.push(currentNumber);
		
		if (currentNumber % 2 === 0) {
			sumOfEvens += currentNumber;
		}
	}
	
	return sumOfEvens;
}