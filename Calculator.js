// Three buttons
function closeWindow () {
    window.close();
}
function maximizeWindow () {
    let el = document.documentElement;
    let rfs =
        el.requestFullScreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullScreen;
            if(typeof rfs!="undefined" && rfs){
                rfs.call(el);
            } else if(typeof window.ActiveXObject!="undefined"){
            }
}
function minimizeWindow(){
    alert("You can't minimize your browser with JS :)");
}
// Day / Night mode
function dayNight() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "calculator-day.css") {
        theme.href = "calculator-night.css";
    } else {
        theme.href = "calculator-day.css";
    }
}

// Keyboard functions
function percent () {
let percent = document.getElementById("calculate");
let percent1 = percent.textContent;
let percent2 = percent1.split("");
let l = percent2.length;

if(percent2[l-1] != "%" && percent2[l-1] != "/" && percent2[l-1] != "*" && percent2[l-1] != "-" && percent2[l-1] != "+" && percent2[l-1] != ".") {
    percent.textContent += "%";
}
console.log(percent.textContent);
}
function division () {
let division = document.getElementById("calculate");
let division1 = division.textContent;
let division2 = division1.split("");
let l = division2.length;

if(division2[l-1] != "%" && division2[l-1] != "/" && division2[l-1] != "*" && division2[l-1] != "-" && division2[l-1] != "+" && division2[l-1] != ".") {
    division.textContent += "/";
}
console.log(division.textContent);
}
function multiply () {
let multiply = document.getElementById("calculate");
let multiply1 = multiply.textContent;
let multiply2 = multiply1.split("");
let l = multiply2.length;

if(multiply2[l-1] != "%" && multiply2[l-1] != "/" && multiply2[l-1] != "*" && multiply2[l-1] != "-" && multiply2[l-1] != "+" && multiply2[l-1] != ".") {
    multiply.textContent += "*";
}
console.log(multiply.textContent);
}
function equal () {

    let equal = document.getElementById("calculate");
    let equalCont = equal.textContent;
    let resultNumber = eval(equalCont);

    if(resultNumber == Infinity || resultNumber == NaN || resultNumber == undefined){
        let result = document.getElementById("result");
        let innerResult = result.innerHTML = "ERROR";
    }else{
        let equalSplit = equalCont.split("");
        let lEqual = equalSplit.length;
        if (lEqual > 10) {
            let result = document.getElementById("result");
            let innerResult = result.innerHTML = "Too much.";
        } else {
            let result = document.getElementById("result");
            let innerResult = result.innerHTML = resultNumber.toFixed(2);
        }
    }
    console.log(result.textContent);
}
function dot () {
    let dot = document.getElementById("calculate");
    let dot1 = dot.textContent;
    let dot2 = dot1.split("");
    let l = dot2.length;

    if(dot2[l-1] != ".") {
        dot.textContent += ".";
    }
    console.log(dot.textContent);
}
function plus () {
    let plus = document.getElementById("calculate");
    let plus1 = plus.textContent;
    let plus2 = plus1.split("");
    let l = plus2.length;

    if(plus2[l-1] != "%" && plus2[l-1] != "/" && plus2[l-1] != "*" && plus2[l-1] != "-" && plus2[l-1] != "+" && plus2[l-1] != ".") {
        plus.textContent += "+";
    }
    console.log(plus.textContent);
}
function rest () {
    let rest = document.getElementById("calculate");
    let rest1 = rest.textContent;
    let rest2 = rest1.split("");
    let l = rest2.length;

    if(rest2[l-1] != "-" && rest2[l-1] != ".") {
        rest.textContent += "-";
    }
    console.log(rest.textContent);
}
function erase () {
    let erase = document.getElementById("calculate");
    erase.innerHTML = "";
    let eraseResult = document.getElementById("result");
    eraseResult.innerHTML = 0;
    console.log("Calculator cleared!");
}
function plusminum () {
    let plusminum  = document.getElementById("result");
    let result = plusminum.textContent;
    plusminum.textContent = "";
    if (result > 0) {
        plusminum.textContent = `-${result}`;
    } else {
        plusminum.textContent = `${-(result)}`;
    }
}

// Keyboard number_of_sessions
function one () {
    let one = document.getElementById("calculate");
    one.textContent += 1;
    console.log(one.textContent);
}
function two () {
    let two = document.getElementById("calculate");
    two.textContent += 2;
    console.log(two.textContent);
}
function three () {
    let three = document.getElementById("calculate");
    three.textContent += 3;
    console.log(three.textContent);
}
function four () {
    let four = document.getElementById("calculate");
    four.textContent += 4;
    console.log(four.textContent);
}
function five () {
    let five = document.getElementById("calculate");
    five.textContent += 5;
    console.log(five.textContent);
}
function six () {
    let six = document.getElementById("calculate");
    six.textContent += 6;
    console.log(six.textContent);
}
function seven () {
    let seven = document.getElementById("calculate");
    seven.textContent += 7;
    console.log(seven.textContent);
}
function eight () {
    let eight = document.getElementById("calculate");
    eight.textContent += 8;
    console.log(eight.textContent);
}
// function nine () {
//     let nine = document.getElementById("calculate");
//     nine.textContent += 9;
//     console.log(nine.textContent);
// }
function zero () {
    let zero = document.getElementById("calculate");
    zero.textContent += 0;
    console.log(zero.textContent);
}

//Limit caracter

// TODO: Too much longer, but work. 
function nine () {
    let nine = document.getElementById("calculate");
    let cNine = nine.textContent;
    let sNine = cNine.split("");
    let lNine = sNine.length;
    if (lNine < 20) {
        nine.textContent += 9;
        console.log(nine.textContent);
    } else {
        alert("Max length is 20 characters.")
    }
}
