console.log('loaded') 
//1a. Create a script with two variables, each assigned to a number. Add them together and output the result to the console.

let num1 = 5;
let num2 = 10;

console.log(num1 + num2);

//1b. Now do the same with two strings.
let pharse1 = 'Hello';
let pharse2 = 'World';

console.log(pharse1 + ' ' + pharse2);

//2. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
let primitiveData = ['Apple', 'Banana','Pear',['Cats', 'Dogs'], 'Grapes'];

/*3. Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100.
If it is not alert the user of what the value was and that it was greater than 100.*/
function numChecker(val1){

	if (val1 < 100) {
		alert(val1 + ' is less to 100');
	} else if (val1 >  100) {
		alert(val1 + ' is greater than to 100');
	} else if (val1 ===  100) {
		alert(val1 + ' is equals 100');
	}  else if(isNaN(val1) === true) {
		alert('You need to pick number')
	}
}

//4. Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

function myName(name) {
	return name;
}

/*5. Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. 
After declaring the function, try running it with different options. There must be at least 3 doors.*/

function virtualDoor(pickADoor) {
	
	if (pickADoor === 1) {
		alert('You get a new car');
	} else if (pickADoor === 2) {
		alert('You get a million dollars');
	} else if (pickADoor === 3) {
		alert('You get a 1 dollars');
	} else if(isNaN(pickADoor) === true) {
		alert('This is not a valid door')
	} else if(pickADoor >= 4) {
		alert('This is not a valid door')
	}
}