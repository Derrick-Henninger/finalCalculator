
const firstNumber = a;
const secondNumber = b;
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

const clearBtn = document.createElement("button");
const negNumBtn = document.createElement("button");
const powerBtn = document.createElement("button");
const divideBtn = document.createElement("button");

const sevenBtn = document.createElement("button");
const eightBtn = document.createElement("button");
const nineBtn = document.createElement("button");
const multiplyBtn = document.createElement("button");

const fourBtn = document.createElement("button");
const fiveBtn = document.createElement("button");
const sixBtn = document.createElement("button");
const subtractBtn = document.createElement("button");

const oneBtn = document.createElement("button");
const twoBtn = document.createElement("button");
const threeBtn = document.createElement("button");
const addBtn = document.createElement("button");

const zeroBtn = document.createElement("button");
const decimalBtn = document.createElement("button");
const equalBtn = document.createElement("button");
//Make equal button twice the width of other buttons

