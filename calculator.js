let displayValue = '0'
let initalValue = 0;
let secondValue = 0;
let firstOperator;
let secOperator;

const calcDis = document.getElementById('display')
const btns = document.querySelectorAll('button')

function updateDisplay() {
    calcDis.textContent = displayValue
}
updateDisplay();

function clickBtn() {
    btns.forEach(function(btn){
        btn.addEventListener('click', function(){
            if(btn.classList.contains('operand')){
                initalValue = btn.value
                numberInput()
            } else if(btn.classList.contains('operator')) {
                console.log(btn.value)
            } else if(btn.classList.contains('clear')) {
                clearDisplay()
            } else if(btn.classList.contains('delete')){
                console.log(btn.value)
            } else if(btn.classList.contains('sign')){
                console.log(btn.value)
            } else if(btn.classList.contains('percent')){
                console.log(btn.value)
            } else if(btn.classList.contains('decimal')){
                console.log(btn.value)
            } else if(btn.classList.contains('equals')){
                console.log(btn.value)
            }
        })
    })
}
clickBtn()

function numberInput(operand){
    if(displayValue === '0' && initalValue !== 0){
        displayValue = initalValue
    } else if(initalValue !== 0 && secondValue === 0) {
        displayValue += initalValue
    }
    updateDisplay()
}

function clearDisplay() {
    displayValue = '0';
    initalValue = 0;
    secondValue = 0;
    updateDisplay()
}