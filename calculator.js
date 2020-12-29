/*if($) {
    alert('Connected!')
}*/
let initVal = 0;
let secVal = 0;
let firstOperator;
let secOperator;

const calcDis = document.getElementById('display')
const btns = document.querySelectorAll('button')

calcDis.textContent = '0'

function clickBtn() {
    for(let i = 0; i <= btns.length; i++) {
        btns[i].addEventListener('click', function(){
            if(btns[i].classList.contains('operand')) {
                initVal = btns[i].value
                numInput(initVal)
                //calcDis.textContent = initVal
            } else if(btns[i].classList.contains('operator')) {
                console.log(btns[i].value)
                //operator functuion
            } else if(btns[i].classList.contains('sign')) {
                console.log(btns[i].value)
                //sign function
            } else if(btns[i].classList.contains('percent')) {
                console.log(btns[i].value)
                //percent function
            } else if(btns[i].classList.contains('decimal')) {
                console.log(btns[i].value)
                //decimal function
            } else if(btns[i].classList.contains('equals')) {
                console.log(btns[i].value)
                //equals function
            } else if(btns[i].classList.contains('clear')) {
                initVal = 0;
                secVal = 0
                calcDis.textContent = '0'
            }
        })
    }
}
clickBtn()

function numInput(operand) {
    if(initVal !== 0 && secVal === 0) {
        secVal = operand
        calcDis.textContent = initVal
    } else if (initVal !== 0 && secVal !== 0) {
        secVal += initVal
        calcDis.textContent = Number(secVal)
    }
}