let num1 = ""
let num2 = ""
let symbol
function getComponent(button) {
        const buttonPress = button.innerText
        const resultInp = document.getElementById("screen")
        if (isNaN(buttonPress)) {
                if (buttonPress == "Reset") {
                        num1 = ""
                        num2 = ""
                        symbol = ""
                        symbol = undefined
                        resultInp.value = ""
                        return
                }
                if (buttonPress == "=") {
                        const result = caculate(num1, num2, symbol)
                        resultInp.value = result
                        symbol = undefined
                }
                else {
                        symbol = buttonPress
                }
        }
        else {
                if (symbol) {
                        num2 += buttonPress
                        resultInp.value = num2
                }
                else {
                        num1 += buttonPress
                        resultInp.value = num1
                }
        }
}
function caculate(num1, num2, symbol) {
        num1 = Number(num1)
        num2 = Number(num2)
        switch (symbol) {
                case '+':
                        return num1 + num2
                        break;
                case '-':
                        return num1 - num2
                        break;
                case '*':
                        return num1 * num2
                        break;
                case '/':
                        return num1 / num2
                        break;
        }
}