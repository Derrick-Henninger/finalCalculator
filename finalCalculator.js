
let firstNumber = ('').substring(0, 8);
let secondNumber = ('').substring(0, 8);

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
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='0'; 
				displayBox.textContent += '0';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='0';
				displayBox.textContent += '0';
			}
			break;
		case 'oneBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='1'; 
				displayBox.textContent += '1';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='1';
				displayBox.textContent += '1';
			}
			break;
		case 'twoBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='2'; 
				displayBox.textContent += '2';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='2';
				displayBox.textContent += '2';
			}
			break;
		case 'threeBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='3'; 
				displayBox.textContent += '3';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='3';
				displayBox.textContent += '3';
			}
			break;
		case 'fourBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='4'; 
				displayBox.textContent += '4';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='4';
				displayBox.textContent += '4';
			}
			break;
		case 'fiveBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='5'; 
				displayBox.textContent += '5';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='5';
				displayBox.textContent += '5';
			}
			break;
		case 'sixBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='6'; 
				displayBox.textContent += '6';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='6';
				displayBox.textContent += '6';
			}
			break;
		case 'sevenBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='7'; 
				displayBox.textContent += '7';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='7';
				displayBox.textContent += '7';
			}
			break;
		case 'eightBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='8'; 
				displayBox.textContent += '8';
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='8';
				displayBox.textContent += '8';
			}
			break;
		case 'nineBtn':
			if (operator === null && displayBox.textContent.length < 8) { 
				firstNumber +='9'; 
				displayBox.textContent += '9';
				console.log(firstNumber, firstNumber.length);
			}else if (operator !== null && secondNumber.length < 8){
				secondNumber +='9'
				displayBox.textContent += '9';
				console.log(secondNumber, secondNumber.length);
			}
			console.log(displayBox.textContent);
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
			if (operator === null){
			displayBox.textContent += ' ^ ';
			operator = power;
			operatorDisplay = '^';
			}
			break;
		case 'divideBtn':
			if (operator === null){
			displayBox.textContent += ' / ';
			operator = divide;
			operatorDisplay = '/';
			}
			break;
		case 'multiplyBtn':
			if (operator === null){
			displayBox.textContent += ' x ';
			operator = multiply;
			operatorDisplay = 'x';
			}
			break;
		case 'addBtn':
			if (operator === null){
			displayBox.textContent += ' + ';
			operator = add;
			operatorDisplay = '+';
			}
			break;
		case 'subtractBtn':
			if (operator === null){
			displayBox.textContent += ' - ';
			operator = subtract;
			operatorDisplay = '-';
			}
			break;
		case 'decimalBtn':
			if (operator === null ) { 
				if(!firstNumber.includes('.')){
				firstNumber +='.'; 
				displayBox.textContent += '.';
				}
			}else if(!secondNumber.includes('.')){
				secondNumber +='.'
				displayBox.textContent += '.';
			}
			break;
		
		case 'equalBtn':
			const a = parseFloat(firstNumber);
			const b = parseFloat(secondNumber);
			const result = operate(a, b, operator).toString().substring(0, 15);
			console.log(result);
			operator = null;
			displayBox.textContent = result;
			firstNumber= result;
			secondNumber = '';
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
