let display = document.getElementById("display");

function input(num) {
    display.value += num;
}

function brackets() {

    let val = display.value;
    let open = (val.match(/\(/g) || []).length;
    let close = (val.match(/\)/g) || []).length;
    let lastchar = val.slice(-1);

    if (open>close) {
        display.value += ")";
    } else {
        if (/[0-9)]/.test(lastchar)) {
            display.value += "*(";
        } else {
            display.value += "(";
        }
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function empty() {
    display.value = "";
}

function result() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}