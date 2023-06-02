// let display = document.querySelector('.display');
// let num1 = '';
// let num2 = '';
// let operator = '';

// const userInput = document.querySelectorAll('button')
//     userInput.forEach((digitPressed) => {
//         digitPressed.addEventListener('click', () => {
//             if (digitPressed.value == 'digit' && operator == '') {
//                 display.textContent = display.textContent + digitPressed.value;
//             }
//             if (digitPressed.value == 'operator') {
//                 num1 = display.textContent
//                 display.textContent = '';
//                 operator = digitPressed.value;
//             }
//             // if (digitPressed.value == 'digit' && operator != '') {
//             //     display.textContent = display.textContent + digitPressed.value;
//             // }
//             // if (digitPressed.value == 'operator' && num1 != '') {
//             //     num2 = display.textContent
//             //     num1 = doOperator(num1, operator, num2)
//             // }
//         })
//     })

// function doOperator (x, o, y) {
//     let displayResult = '';
//     switch (o) {
//         case '+':
//             displayResult = +x + +y;
//             break;
//         case '-':
//             displayResult = x - y;
//             break;
//         case 'x':
//             displayResult = x * y;
//             break;
//         case '÷':
//             displayResult = x / y;
//         default:
//             displayResult = 'ERROR';
//     }
//     return displayResult;
// }