function display(value) {
    document.getElementById("result").value += value;
}


function clearDisplay() {
    document.getElementById("result").value = "";
}

function calc() {
    const equation = document.getElementById("result").value;
    
    const numbers = equation.split(/[+\-*/]/);
    const operation = equation.match(/[+\-*/]/);

    const num1 = parseInt(numbers[0]);
    const num2 = parseInt(numbers[1]);

    switch (operation[0]) {
        case '+':
            document.getElementById("result").value = num1 + num2;
            num1 = document.getElementById("result").value;
            break;
        case '-':
            document.getElementById("result").value = num1 - num2;
            num1 = document.getElementById("result").value;
            break;
        case '*':
            document.getElementById("result").value = num1 * num2;
            num1 = document.getElementById("result").value;
            break;
        case '/':
            if (num2 == 0) {
                document.getElementById("result").value = "ERROR";
            }  
            else {  
                document.getElementById("result").value = num1 / num2;
                num1 = document.getElementById("result").value;
            }
            break;
        default:
            document.getElementById("result").value = "ERROR";
            break;
    }
}