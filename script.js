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

    chooseOperator(operator) {
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
        if (typeof this.currentNum == 'number' || this.currentNum == 'Error' || this.previousNum == 'Error') {this.currentNum = ''};
        this.currentNum += number;
    }

    compute() {
        let computeResult;
        const x = +this.previousNum 
        const y = +this.currentNum;
        console.log(x, this.operator, y)
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
        this.currentNum = computeResult;
        this.operator = undefined;
        this.previousNum = '';
        console.log(computeResult)
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
        calculator.chooseOperator(button.textContent);
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
