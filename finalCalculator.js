
let firstNumber;
let secondNumber;
let operator;
let equals = 0;

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
}

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

console.log(divide(6, 3));

const body = document.querySelector("body");
const calcContainer = document.createElement("div");
body.appendChild(calcContainer);

const displayBox = document.createElement("div");
//this needs to be width of entire calculator, or four buttons
const rowOneButtons = document.createElement("div");
const rowTwoButtons = document.createElement("div");
const rowThreeButtons = document.createElement("div");
const rowFourButtons = document.createElement("div");
const rowFiveButtons = document.createElement("div");
calcContainer.append(displayBox, rowOneButtons, rowTwoButtons, rowThreeButtons, rowThreeButtons, rowFourButtons, rowFiveButtons);

const clearBtn = document.createElement("button");
	clearBtn.textContent = "AC";
const negNumBtn = document.createElement("button");
	negNumBtn.textContent = "+/-";
const powerBtn = document.createElement("button");
	powerBtn.textContent = "xY";
const divideBtn = document.createElement("button");
	divideBtn.textContent = "/";
rowOneButtons.append(clearBtn, negNumBtn, powerBtn, divideBtn);

const sevenBtn = document.createElement("button");
	sevenBtn.textContent = "7";
const eightBtn = document.createElement("button");
	eightBtn.textContent = "8";
const nineBtn = document.createElement("button");
	nineBtn.textContent = "9";
const multiplyBtn = document.createElement("button");
	multiplyBtn.textContent = "X";
rowTwoButtons.append(sevenBtn,eightBtn, nineBtn, multiplyBtn);

const fourBtn = document.createElement("button");
	fourBtn.textContent = "4";
const fiveBtn = document.createElement("button");
	fiveBtn.textContent = "5";
const sixBtn = document.createElement("button");
	sixBtn.textContent = "6";
const subtractBtn = document.createElement("button");
	subtractBtn.textContent = "-";
rowThreeButtons.append(fourBtn, fiveBtn, sixBtn, subtractBtn)

const oneBtn = document.createElement("button");
	oneBtn.textContent= "1";
const twoBtn = document.createElement("button");
	twoBtn.textContent = "2";
const threeBtn = document.createElement("button");
	threeBtn.textContent = "3";
const addBtn = document.createElement("button");
	addBtn.textContent = "+";
rowFourButtons.append(oneBtn, twoBtn, threeBtn, addBtn);

const zeroBtn = document.createElement("button");
	zeroBtn.textContent = "0";
const decimalBtn = document.createElement("button");
	decimalBtn.textContent = ".";
const equalBtn = document.createElement("button");
	equalBtn.textContent = "=";
rowFiveButtons.append(zeroBtn, decimalBtn, equalBtn);
//Make equal button twice the width of other buttons

