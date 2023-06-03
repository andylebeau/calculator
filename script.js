class Calculator {
    constructor(currentNumText) {
        this.currentNumText = currentNumText
        this.previousNumText = ''
        this.clearAll()
    }

    clearAll() {
        this.currentNum = ''
        this.previousNum = ''
        this.operator = undefined
    }

    updateDisplay() {
        this.currentNumText.textContent = this.currentNum
    }

    backspace() {

    }

    chooseOperator(operation) {
        if (this.currentNum === '') {return}
        if (this.previousNum != '') {
            this.compute()
        }
        this.operator = operation
        this.previousNum = this.currentNum
        this.currentNum = ''

    }

    appendDigit(number) {
        if (number === '.' && this.currentNum.includes('.')) {return}
        this.currentNum += number
    }

    compute() {
        x = +this.previousNum
        y = +this.currentNum
        if (currentNum === '' || previousNum === '') {return}
    }
}

// calculator variables in order of appearance from top to bottom

const currentNumText = document.querySelector('[data-num]')
const clearAllBtn = document.querySelector('[data-clear]');
const backspaceBtn = document.querySelector('[data-backspace]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const digitsBtns = document.querySelectorAll('[data-digit]');
const equalsBtn = document.querySelector('[data-equals]');

const calculator = new Calculator(currentNumText)

digitsBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendDigit(button.textContent)
        calculator.updateDisplay()
    })
})

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.textContent)
        calculator.updateDisplay()
    })
})

equalsBtn.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
