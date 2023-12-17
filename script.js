
let button1 = document.querySelector(".section1")
let button2 = document.querySelector(".section2")
let button3 = document.querySelector(".section3")
let button4 = document.querySelector(".section4")
let button5 = document.querySelector(".section5")
let button6 = document.querySelector(".section6")
let button7 = document.querySelector(".section7")
let button8 = document.querySelector(".section8")
let button9 = document.querySelector(".section9")
const buttons =[button1,button2,button3,button4,button5,button6,button7,button8,button9]
var counter = 1;
let symbol;
function Click(){
    if(this.innerHTML !== ""){
        return;
    }
    symbol = counter % 2 ? "X":"0"
    this.innerHTML = symbol
    counter++

    if(Check(symbol)){
        alert("Поздраляем " + symbol)
        Reset();
    }
    if(counter === 10){
        alert("Ничья")
        Reset();
    }
}

function Check(player){
    return(button1.innerHTML === player && button2.innerHTML === player && button3.innerHTML === player)||
            (button4.innerHTML === player && button5.innerHTML === player && button6.innerHTML === player)||
            (button7.innerHTML === player && button8.innerHTML === player && button9.innerHTML === player)||
            (button7.innerHTML === player && button5.innerHTML === player && button3.innerHTML === player)||
            (button1.innerHTML === player && button5.innerHTML === player && button9.innerHTML === player)|| 
            (button1.innerHTML === player && button4.innerHTML === player && button7.innerHTML === player)||
            (button2.innerHTML === player && button5.innerHTML === player && button8.innerHTML === player)||
            (button3.innerHTML === player && button6.innerHTML === player && button9.innerHTML === player)
}

function Reset(){
    buttons.forEach(function(button){
        button.innerHTML = ""
    });
    counter = 1;
}

buttons.forEach(function(button){
    button.addEventListener("click",Click)
});


