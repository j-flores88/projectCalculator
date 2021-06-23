const buttons = document.querySelectorAll('button');
const currentDisplay = document.querySelector('.current-operand');
const prevDisplay = document.querySelector('.previous-operand');

let currentOperand;
let prevOperand;
let operator;


const clickBtn = () => {
    clearDisplay()
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operand')) {
                numberInput(button.innerText);
            } else if (button.classList.contains('operator')) {
                operationInput(button.innerText)
                operator = button.innerText
            } else if (button.classList.contains('all-clear')) {
                clearDisplay()
            } else if (button.classList.contains('delete')) {
                deleteBtn()
            } else if (button.classList.contains('equals')) {
                compute()
            }
        })
    })
}


window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (key.classList.contains('operand')) {
        numberInput(key.innerText)
    } else if (key.classList.contains('operator')) {
        operationInput(key.innerText)
        operator = key.innerText
    } else if (key.classList.contains('all-clear')) {
        clearDisplay()
    } else if (key.classList.contains('delete')) {
        deleteBtn()
    } else if (key.classList.contains('equals')) {
        compute()
    }
})

const numberInput = (operand) => {
    if (!operator) {
        currentOperand += operand
    } else if (operator && prevDisplay.innerHTML !== '') {
        currentOperand += operand
    }
    currentDisplay.innerHTML = currentOperand;
}

const operationInput = (operator) => {
    if (currentOperand === '') return;
    if (prevOperand !== '') {
        compute()
    }
    prevOperand = currentOperand;
    currentOperand = ''

    prevDisplay.innerHTML = `${prevOperand} ${operator}`
    currentDisplay.innerHTML = ''
    compute()
}

const compute = () => {
    let answer;
    let prev = Number(prevOperand);
    let current = Number(currentOperand);

    switch (operator) {
        case '+':
            answer = prev + current
            break;
        case '-':
            answer = prev - current
            break;
        case '*':
            answer = prev * current
            break;
        case '÷':
            answer = prev / current
            break;
        default:
            return
    }
    operator = ''
    prevOperand = ''
    currentOperand = answer;

    prevDisplay.innerHTML = ''
    currentDisplay.innerHTML = answer;
}

const clearDisplay = () => {
    currentOperand = '';
    prevOperand = '';
    operator = '';
    currentDisplay.innerHTML = ''
    prevDisplay.innerHTML = ''
}

const deleteBtn = () => {
    currentOperand = currentOperand.toString().slice(0, -1);
    currentDisplay.innerHTML = currentOperand
}

clickBtn()