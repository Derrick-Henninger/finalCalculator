
let firstNumber = ('').substring(0, 8);
let secondNumber = ('').substring(0, 8);
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
			displayBox.innerHTML = '';
			break;
		case 'zeroBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='0'; 
				displayBox.innerHTML += '0';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='0';
				displayBox.innerHTML += '0';
			}
			break;
		case 'oneBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='1'; 
				displayBox.innerHTML += '1';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='1';
				displayBox.innerHTML += '1';
			}
			break;
		case 'twoBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='2'; 
				displayBox.innerHTML += '2';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='2';
				displayBox.innerHTML += '2';
			}
			break;
		case 'threeBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='3'; 
				displayBox.innerHTML += '3';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='3';
				displayBox.innerHTML += '3';
			}
			break;
		case 'fourBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='4'; 
				displayBox.innerHTML += '4';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='4';
				displayBox.innerHTML += '4';
			}
			break;
		case 'fiveBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='5'; 
				displayBox.innerHTML += '5';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='5';
				displayBox.innerHTML += '5';
			}
			break;
		case 'sixBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='6'; 
				displayBox.innerHTML += '6';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='6';
				displayBox.innerHTML += '6';
			}
			break;
		case 'sevenBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='7'; 
				displayBox.innerHTML += '7';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='7';
				displayBox.innerHTML += '7';
			}
			break;
		case 'eightBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='8'; 
				displayBox.innerHTML += '8';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='8';
				displayBox.innerHTML += '8';
			}
			break;
		case 'nineBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='9'; 
				displayBox.innerHTML += '9';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='9'
				displayBox.innerHTML += '9';
			}
			console.log(displayBox.textContent);
			break;
		case 'negNumBtn':
			if (operator === null) { 
				firstNumber = +firstNumber * -1;
				displayBox.innerHTML = `${firstNumber}`;
				console.log(firstNumber);
			}else{
				secondNumber = +secondNumber * -1;
				displayBox.innerHTML = `${firstNumber}${operatorDisplay}${secondNumber}`;
			}
			break;
		case 'powerBtn':
			if (operator === null){
			displayBox.innerHTML += '<br> ^ ';
			operator = power;
			operatorDisplay = '^';
			}
			break;
		case 'divideBtn':
			if (operator === null){
			displayBox.innerHTML += '<br> / ';
			operator = divide;
			operatorDisplay = '/';
			}
			break;
		case 'multiplyBtn':
			if (operator === null){
			displayBox.innerHTML += '<br> x ';
			operator = multiply;
			operatorDisplay = 'x';
			}
			break;
		case 'addBtn':
			if (operator === null){
			displayBox.innerHTML += '<br> + ';
			operator = add;
			operatorDisplay = '+';
			}
			break;
		case 'subtractBtn':
			if (operator === null){
			displayBox.innerHTML += '<br> - ';
			operator = subtract;
			operatorDisplay = '-';
			}
			break;
		case 'decimalBtn':
			if (operator === null ) { 
				if(!firstNumber.includes('.')){
				firstNumber +='.'; 
				displayBox.innerHTML += '.';
				}
			}else if(!secondNumber.includes('.')){
				secondNumber +='.'
				displayBox.innerHTML += '.';
			}
			break;
		
		case 'equalBtn':
			if(operator !== null && secondNumber !== ''){
			const a = parseFloat(firstNumber);
			const b = parseFloat(secondNumber);
			const result = operate(a, b, operator).toString().substring(0, 15);
			displayBox.innerHTML = result;
			operator = null;
			firstNumber= result;
			secondNumber = '';
			}
			break;
	}
});

const displayBox = document.createElement("div");
displayBox.setAttribute("ID", "displayBox");
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
calcContainer.append(displayBox, rowOneButtons, rowTwoButtons,  
				rowThreeButtons, rowFourButtons, rowFiveButtons);

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
	{text: '+/-', row: rowOneButtons, id: 'negNumBtn'},
	{text: 'x^', row: rowOneButtons, id: 'powerBtn', class: 'operatorBtns'},
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