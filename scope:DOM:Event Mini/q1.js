console.log('File Load');
console.log($);

/*Create an HTML page with two buttons that argue with each other. 
When one button is clicked, the text "I'm right" should be placed next to it. 
When the other button is clicked, the text is replaced with, "No, I'm right!"*/

function buttonsArguing1() {
	let clickingOnB1 = document.getElementById('container');
	let enteringTextForb1 = document.createElement('section');
	enteringTextForb1.innerHTML = "I'm right";
	clickingOnB1.appendChild(enteringTextForb1);
}

function buttonsArguing2() {
	let clickingOnB2 = document.getElementById('container');
	let enteringTextForb2 = document.createElement('section');
	enteringTextForb2.innerHTML = "No, I'm right!";
	clickingOnB2.appendChild(enteringTextForb2);
}

/*2)Create an HTML page with a large element on the page that says 
"Don't hover over me" inside of it. When you hover over the element, 
send an alert to the user that says, 
"Hey, I told you not to hover over me!"*/

function onHover() {
	let hoveringOverText = document.getElementById('b3');
	let changingTextOnHover = document.createElement('section');
	changingTextOnHover.innerHTML = alert("Hey, I told you not to hover over me!");
	hoveringOverText.appendChild(changingTextOnHover);
}

/*Create an HTML page with javascript that listens for a keypress.
When the user presses that key, the text of the H1 should show the value of the key they have pressed.
Example: If the user presses "J", the text inside the H1 should be "J".*/

function oneKey(event) {
	
	let displayTextHere = document.getElementById('displayTextHere');
	let displayingTextH1 = document.createElement('h1');
	displayingTextH1.innerText = event.key;
	displayTextHere.appendChild(displayingTextH1);
}

/*
Create an HTML page with a form. 
The form should include inputs for a username, email, and password as well as a submit button.
In a Javascript file, write code that does the following things:
checks that the password is 12345678
checks that the username contains at least one number
if anything is wrong, send an alert message saying "incorrect"
Your page should also include an H1 tag.
If the information in the form is correct, have Javascript change the text in the h1*/

function clickingOnTheSubmitButton(event) {
	event.preventDefault();
	let belowTheSubmitButton = document.getElementById('q5');
	let username = document.getElementById('input1').value;
	let password = document.getElementById('input2').value;
	let addingAH1 = document.createElement('h1');
	belowTheSubmitButton.appendChild(addingAH1);

	for (var i = 0; i < username.length; i++) {
			if (
				parseFloat(username.length) && 
				parseInt(password) === 12345678
			) {
			addingAH1.innerHTML = 'Correct';
		} else {
			addingAH1.innerHTML = 'Incorrect';
		}
	}
}

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', buttonsArguing1);
  document.querySelector('#b2').addEventListener('click', buttonsArguing2);
  document.querySelector('#b3').addEventListener('mouseover', onHover);
  document.querySelector('#enterTextHere').addEventListener('keypress',function(event) {
  	oneKey(event)
  });
  
};