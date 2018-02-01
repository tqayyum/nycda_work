console.log('Loaded');

function sumSquareDifference(limit) {
	var sumOfSq = 0;
	let sum = 0;	

	for (var i = 1; i <= limit; i++) {
		sumOfSq += Math.pow(i, 2);
		sum += i;		
	}
	return Math.pow(sum,2) - sumOfSq;
}
