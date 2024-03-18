function dis(result) {
    document.getElementById("div-print").value += result;

}

function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/') {
        document.getElementById("div-print").value += event.key;
    }

}


var cal = document.getElementById("div-print");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("div-print").value;
        console.log(x);
        solve();
    }
}

// Function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("div-print").value;
    let y = eval(x);
    document.getElementById("div-print").value = y;
}

// Function that clear the display 
function clr() {
    document.getElementById("div-print").value = "";
}
function uclr() {
    let res = document.getElementById("div-print").value;
    document.getElementById("div-print").value = res.substring(0, res.length - 1);
}