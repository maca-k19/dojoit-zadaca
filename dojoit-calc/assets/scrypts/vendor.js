const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

let result = 0;
let previousResult = result;

// function outputResult(result, text) {
//   currentResultOutput.textContent = result;
//   currentCalculationOutput.textContent = text;
// }

// () => {}
// function() {}

function updateResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
  console.log(result);
}

let znak = "";

function subtract(){
  let broj = userInput.value; 
  znak = result + " - " + broj;
  result -= parseInt(userInput.value);
  updateResult(result, znak);
}

function add(){
  let broj = userInput.value; 
  znak = result + " + " + broj;
  result += parseInt(userInput.value);
  updateResult(result, znak);
}

function multiply(){
  let broj = userInput.value; 
  znak =  result + " * " + broj;
  result *= parseInt(userInput.value);
  updateResult(result, znak);
}

function divide(){
  let broj = userInput.value; 
  znak = result +  " / "  + broj;
  result /= parseInt(userInput.value);
  updateResult(result, znak);
}

// prosli rezultat + znak + trenutno unosimo

addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click",multiply);
divideBtn.addEventListener("click",divide);

//<p id="text">proslibroj+" znak "+uneseni broj</p>