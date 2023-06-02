let display = document.querySelector('.display');

const userInput = document.querySelectorAll('button')
    userInput.forEach((digitPressed) => {
        digitPressed.addEventListener('click', () => {
            if (digitPressed.value == '') {
                doOperator(display.textContent)
            }
            display.textContent = display.textContent + digitPressed.value;
        })
    })

function doOperator (equation) {
    let displayResult = '';
    const [x, y] = equation.split(/[+,-,x,÷]/)
    console.log(x, y)
    const operation = equation.match(/[^0-9]/)[0]
    switch (operation) {
        case '+':
            displayResult = +x + +y;
            break;
        case '-':
            displayResult = x - y;
            break;
        case 'x':
            displayResult = x * y;
            break;
        case '÷':
            displayResult = x / y;
        default:
            displayResult = 'ERROR';
    }
    display.textContent = displayResult;
}