
let firstNumber = '';
let secondNumber = '';
let operator = null;
let operatorDisplay;

const operate = function (a, b, operator) {
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

const add = function(a, b) {
	return a + b;
};
const subtract = function(a, b) {
	return a - b;
};
const multiply = function(a, b) {
    return a * b;
};
const divide = function (a, b) {
    return a / b;
}
const power = function(a, b) {
	return Math.pow(a, b);
};

const body = document.querySelector("body");
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
			displayBox.textContent = '';
			break;
		case 'zeroBtn':
			if (operator === null) { 
				firstNumber +='0'; 
			}else{
				secondNumber +='0'
			}
			displayBox.textContent += '0';
			break;
		case 'oneBtn':
			if (operator === null) { 
				firstNumber +='1'; 
			}else{
				secondNumber +='1'
			}
			displayBox.textContent += '1';
			break;
		case 'twoBtn':
			if (operator === null) { 
				firstNumber +='2'; 
			}else{
				secondNumber +='2'
			}
			displayBox.textContent += '2';
			break;
		case 'threeBtn':
			if (operator === null) { 
				firstNumber +='3'; 
			}else{
				secondNumber +='3'
			}
			displayBox.textContent += '3';
			break;
		case 'fourBtn':
			if (operator === null) { 
				firstNumber +='4'; 
			}else{
				secondNumber +='4'
			}
			displayBox.textContent += '4';
			break;
		case 'fiveBtn':
			if (operator === null) { 
				firstNumber +='5'; 
			}else{
				secondNumber +='5'
			}
			displayBox.textContent += '5';
			break;
		case 'sixBtn':
			if (operator === null) { 
				firstNumber +='6'; 
			}else{
				secondNumber +='6'
			}
			displayBox.textContent += '6';
			break;
		case 'sevenBtn':
			if (operator === null) { 
				firstNumber +='7'; 
			}else{
				secondNumber +='7'
			}
			displayBox.textContent += '7';
			break;
		case 'eightBtn':
			if (operator === null) { 
				firstNumber +='8'; 
			}else{
				secondNumber +='8'
			}
			displayBox.textContent += '8';
			break;
		case 'nineBtn':
			if (operator === null) { 
				firstNumber +='9'; 
			}else{
				secondNumber +='9'
			}
			displayBox.textContent += '9';
			break;
		case 'negNumBtn':
			if (operator === null) { 
				firstNumber = +firstNumber * -1;
				displayBox.textContent = `${firstNumber}`;
				console.log(firstNumber);
			}else{
				secondNumber = +secondNumber * -1;
				displayBox.textContent = `${firstNumber}${operatorDisplay}${secondNumber}`;
			}
			break;
		case 'powerBtn':
			displayBox.textContent += '^';
			operator = power;
			operatorDisplay = '^';
			break;
		case 'divideBtn':
			displayBox.textContent += '/';
			operator = divide;
			operatorDisplay = '/';
			break;
		case 'multiplyBtn':
			displayBox.textContent += 'x';
			operator = multiply;
			operatorDisplay = 'x';
			break;
		case 'addBtn':
			displayBox.textContent += '+';
			operator = add;
			operatorDisplay = '+';
			break;
		case 'subtractBtn':
			displayBox.textContent += '-';
			operator = subtract;
			operatorDisplay = '-';
		case 'decimalBtn':
	
			if (operator === null && firstNumber != firstNumber.includes('.')) { 
				firstNumber +='.'; 
				displayBox.textContent += '.';
			}else if(secondNumber != secondNumber.includes('.')){
				secondNumber +='.'
				displayBox.textContent += '.';
			}
			break;
		case 'equalBtn':
			const a = parseFloat(firstNumber);
			const b = parseFloat(secondNumber);
			const result = operate(a, b, operator);
			displayBox.textContent = result;
	//find a way to use the result as the next first number to continue calculations
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

const clearBtn = document.createElement("button");
	clearBtn.textContent = "AC";
	clearBtn.setAttribute("ID", "clearBtn");
const negNumBtn = document.createElement("button");
	negNumBtn.textContent = "+/-";
	negNumBtn.setAttribute("ID", "negNumBtn");
const powerBtn = document.createElement("button");
	powerBtn.textContent = "x^";
	powerBtn.setAttribute("ID", "powerBtn");
const divideBtn = document.createElement("button");
	divideBtn.textContent = "/";
	divideBtn.setAttribute("ID", "divideBtn");
rowOneButtons.append(clearBtn, negNumBtn, powerBtn, divideBtn);

const sevenBtn = document.createElement("button");
	sevenBtn.textContent = "7";
	sevenBtn.setAttribute("ID", "sevenBtn");
const eightBtn = document.createElement("button");
	eightBtn.textContent = "8";
	eightBtn.setAttribute("ID", "eightBtn");
const nineBtn = document.createElement("button");
	nineBtn.textContent = "9";
	nineBtn.setAttribute("ID", "nineBtn");
const multiplyBtn = document.createElement("button");
	multiplyBtn.textContent = "X";
	multiplyBtn.setAttribute("ID", "multiplyBtn");
rowTwoButtons.append(sevenBtn,eightBtn, nineBtn, multiplyBtn);

const fourBtn = document.createElement("button");
	fourBtn.textContent = "4";
	fourBtn.setAttribute("ID", "fourBtn");
const fiveBtn = document.createElement("button");
	fiveBtn.textContent = "5";
	fiveBtn.setAttribute("ID", "fiveBtn");
const sixBtn = document.createElement("button");
	sixBtn.textContent = "6";
	sixBtn.setAttribute("ID", "sixBtn");
const subtractBtn = document.createElement("button");
	subtractBtn.textContent = "-";
	subtractBtn.setAttribute("ID", "subtractBtn");
rowThreeButtons.append(fourBtn, fiveBtn, sixBtn, subtractBtn)

const oneBtn = document.createElement("button");
	oneBtn.textContent= "1";
	oneBtn.setAttribute("ID", "oneBtn");
const twoBtn = document.createElement("button");
	twoBtn.textContent = "2";
	twoBtn.setAttribute("ID", "twoBtn");
const threeBtn = document.createElement("button");
	threeBtn.textContent = "3";
	threeBtn.setAttribute("ID", "threeBtn");
const addBtn = document.createElement("button");
	addBtn.textContent = "+";
	addBtn.setAttribute("ID", "addBtn");
rowFourButtons.append(oneBtn, twoBtn, threeBtn, addBtn);

const zeroBtn = document.createElement("button");
	zeroBtn.textContent = "0";
	zeroBtn.setAttribute("ID", "zeroBtn");
const decimalBtn = document.createElement("button");
	decimalBtn.textContent = ".";
	decimalBtn.setAttribute("ID", "decimalBtn");
const equalBtn = document.createElement("button");
	equalBtn.textContent = "=";
	equalBtn.setAttribute("ID", "equalBtn");
rowFiveButtons.append(zeroBtn, decimalBtn, equalBtn);
