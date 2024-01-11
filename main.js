
let display = document.querySelector(".display"),
    numbers = document.querySelectorAll(".number"),
    Allsymbols = document.querySelectorAll(".symbol"),
    cBtn = document.querySelector(".c"),
    acBtn = document.querySelector(".ac"),
    equal = document.querySelector(".equal");


display.focus();
let result = '';
let firstValue = '';
let secondValue = '';
let Symbol = '';
let dot = false;

numbers.forEach((number)=>{
    number.addEventListener("click",(n)=>{
        if(n.target.innerText === '.' && !dot){
            dot = true;
        }else if(n.target.innerText === '.' && dot){
            return;
        }
        firstValue += n.target.innerText;
        display.value = firstValue;
    })
})

// symbols
Allsymbols.forEach((symbol)=>{
    symbol.addEventListener("click",(s)=>{
        if(!firstValue) return;
        dot = false;
        let symbolName = s.target.innerText;
        if(firstValue && secondValue && symbol){
            caluculation();
        }else{
            result = parseFloat(firstValue);
        }
        convertValues(symbolName);
        Symbol = symbolName;
    })
})

function convertValues(name = ""){
    secondValue += firstValue + "" + name + "";
    display.value = secondValue;
    firstValue = "";
}
function caluculation(){
    if(Symbol === "x"){
        result = parseFloat(result) * parseFloat(firstValue);
    }else if(Symbol === "+"){
        result = parseFloat(result) + parseFloat(firstValue);
    }else if(Symbol === "-"){
        result = parseFloat(result) - parseFloat(firstValue);
    }else if(Symbol === "/"){
        result = parseFloat(result) / parseFloat(firstValue);
    }else if(Symbol === "%"){
        result = parseFloat(result) % parseFloat(firstValue);
    }
}
acBtn.addEventListener("click", allClear);
cBtn.addEventListener("click",deleteValue);
function allClear(){
    display.value = "";
    window.location.reload();
}
function deleteValue(){
    display.value = '';
    firstValue = '';
    display.focus();
}

equal.addEventListener("click",()=>{
    if(!firstValue || !secondValue) return;
    dot = false;
    caluculation();
    display.value = result;
    firstValue = result;
    secondValue = '';
    display.focus();
    
})