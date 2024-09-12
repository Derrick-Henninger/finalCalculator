
let firstNumber = '';
let secondNumber = '';
let operator = null;
let operatorDisplay;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => Math.pow(a, b);

const operate = (a, b, operator) => {
    if (operator == add) {
		return add(a,b);
	}else if(operator == subtract){
		return subtract(a,b);
	}else if(operator == divide){
		return divide(a,b);
	}else if(operator == multiply){
		return multiply(a,b);
	}else if(operator == power){
		return power(a,b);
	};
};
const equals = function () {
if(operator !== null && secondNumber !== ''){
	const a = parseFloat(firstNumber);
	const b = parseFloat(secondNumber);
	if ((a + b) >= 9999999999999){
		displayBoxContainer.innerHTML = '<img src="steamboat.gif" alt="TooManyNumbers" id="steamboat">';
		displayBoxLeft.innerHTML = 'Too<br>Many<br>Numbers';
		return;
	};
	const result = operate(a, b, operator).toString();
	displayBoxLeft.innerHTML += `<br>${a}${operatorDisplay}${b}=${result}`;
	console.log(displayBoxLeft.innerHTML);
	displayBoxRight.innerHTML = result;
	displayBoxCenter.innerHTML = '=';
	operator = null;
	firstNumber= result;
	secondNumber = '';
	}
};

const backSpace = function(str) {
	return str.substring(0, (str.length - 1));
};

const body = document.querySelector("body");
body.setAttribute("ID", "body");
const calcContainer = document.createElement("div");
calcContainer.setAttribute("ID", "calcContainer");
body.appendChild(calcContainer);

calcContainer.addEventListener('click', (event) => {
	let target = event.target;
	switch (target.id) {
		case 'clearBtn':
			firstNumber = '';
			secondNumber = '';
			operator = null;
			displayBoxRight.innerHTML = '';
			displayBoxLeft.innerHTML = '';
			displayBoxCenter.innerHTML = '';
			break;
		case 'zeroBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='0'; 
				displayBoxRight.innerHTML += '0';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='0';
				displayBoxRight.innerHTML += '0';
			}
			break;
		case 'oneBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='1'; 
				displayBoxRight.innerHTML += '1';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='1';
				displayBoxRight.innerHTML += '1';
			}
			break;
		case 'twoBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='2'; 
				displayBoxRight.innerHTML += '2';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='2';
				displayBoxRight.innerHTML += '2';
			}
			break;
		case 'threeBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='3'; 
				displayBoxRight.innerHTML += '3';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='3';
				displayBoxRight.innerHTML += '3';
			}
			break;
		case 'fourBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='4'; 
				displayBoxRight.innerHTML += '4';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='4';
				displayBoxRight.innerHTML += '4';
			}
			break;
		case 'fiveBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='5'; 
				displayBoxRight.innerHTML += '5';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='5';
				displayBoxRight.innerHTML += '5';
			}
			break;
		case 'sixBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='6'; 
				displayBoxRight.innerHTML += '6';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='6';
				displayBoxRight.innerHTML += '6';
			}
			break;
		case 'sevenBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='7'; 
				displayBoxRight.innerHTML += '7';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='7';
				displayBoxRight.innerHTML += '7';
			}
			break;
		case 'eightBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='8'; 
				displayBoxRight.innerHTML += '8';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='8';
				displayBoxRight.innerHTML += '8';
			}
			break;
		case 'nineBtn':
			if (operator === null && firstNumber.length < 8) { 
				firstNumber +='9'; 
				displayBoxRight.innerHTML += '9';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='9'
				displayBoxRight.innerHTML += '9';
			}
			console.log(displayBoxRight.textContent);
			break;
		case 'negNumBtn':
			if (operator === null) { 
				firstNumber = +firstNumber * -1;
				displayBoxRight.innerHTML = `${firstNumber}`;
				console.log(firstNumber);
			}else{
				secondNumber = +secondNumber * -1;
				displayBoxRight.innerHTML = `${firstNumber}<br>${secondNumber}`;
			}
			break;
		case 'divideBtn':
			if (operator !== null){
				equals();
			}
			displayBoxCenter.innerHTML = '/';
			displayBoxRight.innerHTML = `${firstNumber}<br>${secondNumber}`;
			operator = divide;
			operatorDisplay = '/';
			break;
		case 'multiplyBtn':
			if (operator !== null && secondNumber !== ''){
				equals();
			}
			displayBoxCenter.innerHTML = 'x';
			displayBoxRight.innerHTML = `${firstNumber}<br>${secondNumber}`;
			operator = multiply;
			operatorDisplay = 'x';
			break;
		case 'addBtn':
			if (operator !== null){
				equals();
			}
			displayBoxCenter.innerHTML = '+';
			displayBoxRight.innerHTML = `${firstNumber}<br>${secondNumber}`;
			operator = add;
			operatorDisplay = '+';
			break;
		case 'subtractBtn':
			if (operator !== null){
				equals();
			}
			displayBoxCenter.innerHTML = '-';
			displayBoxRight.innerHTML = `${firstNumber}<br>${secondNumber}`;
			operator = subtract;
			operatorDisplay = '-';
			break;
		case 'decimalBtn':
			if (operator === null ) { 
				if(!firstNumber.includes('.')){
				firstNumber +='.'; 
				displayBoxRight.innerHTML += '.';
				}
			}else if(!secondNumber.includes('.')){
				secondNumber +='.'
				displayBoxRight.innerHTML += '.';
			}
			break;
		
		case 'equalBtn':
			equals();
			break;
		case 'backspaceBtn':
			if(operator === null){
				firstNumber = backSpace(firstNumber);
				console.log(firstNumber);
			}else if(secondNumber === '' && operator !== null){
				operator = null;
				displayBoxCenter.innerHTML = '';
				console.log(operator);
			}else{
			secondNumber = backSpace(secondNumber);
			console.log(firstNumber, secondNumber);
			}	
			displayBoxRight.innerHTML = backSpace(displayBoxRight.innerHTML);
			break;
	}
});


const displayBoxContainer = document.createElement("div");
	displayBoxContainer.setAttribute("ID", "displayBoxContainer");
const displayBoxLeft = document.createElement("div");
	displayBoxLeft.setAttribute("ID", "displayBoxLeft");
const displayBoxCenter = document.createElement("div");
	displayBoxCenter.setAttribute("ID", "displayBoxCenter");
const displayBoxRight = document.createElement("div");
	displayBoxRight.setAttribute("ID", "displayBoxRight");
const rowOneButtons = document.createElement("div");
	rowOneButtons.setAttribute("class", "rows");
const rowTwoButtons = document.createElement("div");
	rowTwoButtons.setAttribute("class", "rows");
const rowThreeButtons = document.createElement("div");
	rowThreeButtons.setAttribute("class", "rows");
const rowFourButtons = document.createElement("div");
	rowFourButtons.setAttribute("class", "rows");
const rowFiveButtons = document.createElement("div");
	rowFiveButtons.setAttribute("class", "rows");
calcContainer.append(displayBoxContainer, rowOneButtons, rowTwoButtons,  
				rowThreeButtons, rowFourButtons, rowFiveButtons);
displayBoxContainer.append(displayBoxLeft, displayBoxCenter, displayBoxRight);


const buttonValues = [
	{text: '0', row: rowFiveButtons, id: 'zeroBtn', class: 'numberBtns'},
	{text: '1', row: rowFourButtons, id: 'oneBtn', class: 'numberBtns'},
	{text: '2', row: rowFourButtons, id: 'twoBtn', class: 'numberBtns'},
	{text: '3', row: rowFourButtons, id: 'threeBtn', class: 'numberBtns'},
	{text: '4', row: rowThreeButtons, id: 'fourBtn', class: 'numberBtns'},
	{text: '5', row: rowThreeButtons, id: 'fiveBtn', class: 'numberBtns'},
	{text: '6', row: rowThreeButtons, id: 'sixBtn', class: 'numberBtns'},
	{text: '7', row: rowTwoButtons, id: 'sevenBtn', class: 'numberBtns'},
	{text: '8', row: rowTwoButtons, id: 'eightBtn', class: 'numberBtns'},
	{text: '9', row: rowTwoButtons, id: 'nineBtn', class: 'numberBtns'},
	{text: '.', row: rowFiveButtons, id: 'decimalBtn', class: 'numberBtns'},
	{text: 'x', row: rowTwoButtons, id: 'multiplyBtn', class: 'operatorBtns'},
	{text: 'AC', row: rowOneButtons, id: 'clearBtn'},
	{text: 'BS', row: rowOneButtons, id: 'backspaceBtn'},
	{text: '+/-', row: rowOneButtons, id: 'negNumBtn'},
	{text: '/', row: rowOneButtons, id: 'divideBtn', class: 'operatorBtns'},
	{text: '+', row: rowFourButtons, id: 'addBtn', class: 'operatorBtns'},
	{text: '-', row: rowThreeButtons, id: 'subtractBtn', class: 'operatorBtns'},
	{text: '=', row: rowFiveButtons, id: 'equalBtn'},
];

buttonValues.forEach((btn) => {
	const button = document.createElement("button");
	button.textContent = btn.text;
	button.classList.add("allCalcBtns");
	button.setAttribute("ID", btn.id);
	button.setAttribute("class", btn.class);
	btn.row.appendChild(button);
});