class Calculator {
    constructor(currentNumText) {
        this.currentNumText = currentNumText;
        this.previousNumText = '';
        this.clearAll();
    }

    clearAll() {
        this.currentNum = '';
        this.previousNum = '';
        this.operator = undefined;
    }

    updateDisplay() {
        console.log(this.currentNum)
        this.currentNumText.textContent = this.currentNum;
    }

    backspace() {
        if (this.currentNum == '' || typeof this.currentNum == 'number') {return};
        if (this.currenNum == 'Error') {this.clearAll()}
        this.currentNum = this.currentNum.slice(0,-1);
    }

    chooseOperation(operator) {
        if (this.currentNum == '') {return};
        if (this.previousNum != '') {
            this.compute();
            this.updateDisplay()
        };
        this.operator = operator;
        this.previousNum = this.currentNum;
        this.currentNum = '';
    }

    appendDigit(number) {
        if (number == '.' && this.currentNum.includes('.')) {return};
        if (typeof this.currentNum == 'number' ||
                   this.currentNum == 'Error')
                  {this.currentNum = ''};
        this.currentNum += number;
    }

    getDecimalFloat() {
        const xFloat = `${this.previousNum}`.includes('.') ? `${this.previousNum}`.split('.')[1] : 0;
        const yFloat = `${this.currentNum}`.includes('.') ? `${this.currentNum}`.split('.')[1] : 0;
        return Math.max(xFloat, yFloat);
    }

    compute() {
        let computeResult;
        let decimalFloat = this.getDecimalFloat()
        const x = +this.previousNum
        const y = +this.currentNum
        console.log (x, this.operator, y)

        if (isNaN(x) || isNaN(y)) {return}

        switch (this.operator) {
            case '+':
                computeResult = x + y
                break;
            case '-':
                computeResult = x - y
                break;
            case 'x':
                computeResult = x * y
                break;
            case '÷':
                computeResult = (y == 0) ? 'Error' : x / y
                break;
            default:
                computeResult = 'Error'
        }
        if (typeof computeResult == 'number') {
            this.currentNum = +(computeResult.toFixed(decimalFloat))
        } else {this.currentNum = computeResult}
        this.operator = undefined;
        this.previousNum = '';
    }

    useKeyboard(event) {
        const operators = ['÷', 'x', '-', '+'];
        if (operators.includes(event.key)) {
            calculator.chooseOperation(event.key)
            return;
        }
        if (event.key == '=' || event.key == 'Enter') {
            calculator.compute();
        }
        if (/\d/.test(event.key) || event.key == '.') {
            calculator.appendDigit(event.key)
        }
        if (event.key == 'Backspace') {
            calculator.backspace();
        }
        if (event.key == 'Escape') {
            calculator.clearAll();
        }
        calculator.updateDisplay();
    }
}

// calculator variables in order of appearance from top to bottom

const currentNumText = document.querySelector('[data-num]');
const clearAllBtn = document.querySelector('[data-clear]');
const backspaceBtn = document.querySelector('[data-backspace]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const digitsBtns = document.querySelectorAll('[data-digit]');
const equalsBtn = document.querySelector('[data-equals]');

let calculator = new Calculator(currentNumText);

digitsBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendDigit(button.textContent);
        calculator.updateDisplay();
    });
});

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent);
    });
});

equalsBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

clearAllBtn.addEventListener('click', button => {
    calculator.clearAll();
    calculator.updateDisplay();
});

backspaceBtn.addEventListener('click', button => {
    calculator.backspace();
    calculator.updateDisplay();
});

window.addEventListener('keydown', calculator.useKeyboard)


