
class MathFunctions {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    Sum() {
        return this.number1 + this.number2;
    }

    Subtraction() {
        return this.number1 - this.number2;
    }

    Division() {
        return this.number1 / this.number2;
    }

    Multiplication() {
        return this.number1 * this.number2;
    }

}

export default MathFunctions;