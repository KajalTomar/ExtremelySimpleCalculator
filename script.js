var num1 = document.getElementById('num1');
var num2 =  document.getElementById('num2'); 

// operations

const rbs = document.querySelectorAll('input[name="operation"]');
var operation;
var answer;

num2.addEventListener('keypress', whatKey);

// checks if the enter key has been pressed
// if it has then we need to calculate and show the answer
function whatKey(event){
	console.log("key pressed");
	if (event.keyCode === 13){
		showAnswer();
	}
}

//calculate and show answer
function showAnswer(){
	operation = whichOperation(); // first check which operation we need to perform
	num1 = parseInt(num1.value);
	num2 = parseInt(num2.value);
	try{
		switch(operation){
			case 'add': 
			answer = num1 + num2;
			break;
			case 'subtract':
			answer = num1 - num2;
			break;
			case 'multiply':
			answer = num1 * num2;
			break;
			case 'divide':
			answer = num1 / num2;
			break;
		}
		alert(answer);
		window.location.reload();
	} 
	catch (err) {
		alert("something went wrong. try again");
	}

}

// returns the value of radio button  that is checked
// so returns which operation to perform
function whichOperation(){
	for (const rb of rbs){
		if (rb.checked){
			return rb.value;			
		}
	}
}

