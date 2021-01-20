let currentOperand;
let previousOperand;
let operator;



const currentDisplay = document.querySelector('[data-current-operand]')
const buttons = document.querySelectorAll('button')

function updateDisplay() {
    currentDisplay.innerText = currentOperand
}

function clickBtn() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operand')){
                numberInput(button.innerText);             
            } else if(button.classList.contains('operator')) {
                console.log(button.value)
            } else if(button.classList.contains('all-clear')) {
                clearDisplay()
            } else if(button.classList.contains('delete')){
                console.log(button.value)
            } else if(button.classList.contains('sign')){
                console.log(button.value)
            } else if(button.classList.contains('percent')){
                console.log(button.value)
            } else if(button.classList.contains('equals')){
                console.log(button.value)
            }
        })
    })
}


function numberInput(operand){
    if(operand === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + operand.toString();
    updateDisplay();
}

function clearDisplay() {
    currentOperand = ''
    previousOperand = ''
    operator = undefined;
    updateDisplay()
}

clearDisplay();
clickBtn()