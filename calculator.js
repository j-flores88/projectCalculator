let currentOperand;
let previousOperand;
let operator;



const currentDisplay = document.querySelector('[data-current-operand]')
const previousDisplay = document.querySelector('[data-previous-operand]')
const buttons = document.querySelectorAll('button')

function updateDisplay() {
    currentDisplay.innerText = displayNumber(currentOperand);
    if(operator !== undefined) {
        previousDisplay.innerText = `${displayNumber(previousOperand)} ${operator}`
    } else {
        previousDisplay.innerText = displayNumber(previousOperand);
    }

}

function clickBtn() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operand')){
                numberInput(button.innerText);             
            } else if(button.classList.contains('operator')) {
                operationInput(button.innerText)
                operator = button.innerText
            } else if(button.classList.contains('all-clear')) {
                clearDisplay()
            } else if(button.classList.contains('delete')){
                deleteBtn()
            } else if(button.classList.contains('equals')){
                compute()
            }
        })
    })
}


function numberInput(operand){
    if(operand === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + operand.toString();
    updateDisplay();
}

function operationInput(operator) {
    if(currentOperand === '') return;
    if(previousOperand !== '') {
        compute();
    }
    previousOperand = currentOperand;
    currentOperand = ''
    compute()
}

function compute(){
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(prev) || isNaN(current)) return;

    switch(operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return
    }
    currentOperand = computation;
    operator = undefined;
    previousOperand = '';
    updateDisplay()
}

function displayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;

    if(isNaN(integerDigits)) {
        integerDisplay = ''
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if(decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay
    }
}

function deleteBtn() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay()
}

function clearDisplay() {
    currentOperand = ''
    previousOperand = ''
    operator = undefined;
    updateDisplay()
}

clearDisplay();
clickBtn()