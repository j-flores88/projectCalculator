/*if($) {
    alert('Connected!')
}*/
let dispVal = '0'
let initVal = 0;
let secVal = 0;
let firstOperator;
let secOperator;

const calcDis = document.getElementById('display')
const btns = document.querySelectorAll('button')

function updateDisplay() {
    calcDis.textContent = dispVal
}
updateDisplay();

function clickBtn() {
    btns.forEach(function(btn){
        btn.addEventListener('click', function(){
            if(btn.classList.contains('operand')){
                initVal = btn.value
                dispVal = initVal
                updateDisplay()
            } else if(btn.classList.contains('operator')) {
                console.log(btn.value)
            } else if(btn.classList.contains('clear')) {
                console.log(btn.value)
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