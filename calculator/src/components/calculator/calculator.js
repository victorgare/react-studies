import React, { Component } from 'react';
import OperatorButton from '../operator-buttons/operator-button';
import MathFunctions from '../../app/math-functions/math-functions';

class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            actualNumber: "",
            lastNumber: "",
            operator: ""
        }
    }

    setValue(number) {
        var actualNumber = this.state.actualNumber;
        number = number.toString();

        if (number === "." && !actualNumber.includes(".")) {
            actualNumber += number;
        }

        if (number !== ".") {
            actualNumber += number;
        }

        this.setState({
            actualNumber: actualNumber
        });
    }

    prepareCalc(operator) {
        const actualNumber = this.state.actualNumber;

        this.setState({
            actualNumber: "",
            lastNumber: actualNumber,
            operator: operator
        });
    }

    cleanNumber() {
        this.setState({
            actualNumber: "",
            lastNumber: "",
            operator: ""
        });
    }

    apagar() {
        let actualNumber = this.state.actualNumber;
        actualNumber = actualNumber.substring(0, actualNumber.length - 1);

        this.setState({
            actualNumber: actualNumber
        });
    }

    calculate() {
        let number1 = Number(this.state.lastNumber);
        let number2 = Number(this.state.actualNumber);
        let operator = this.state.operator;

        var mathCalculator = new MathFunctions(number1, number2);
        var retorno = 0.0;
        switch (operator) {
            case "+":
                retorno = mathCalculator.sum();
                break;

            case "-":
                retorno = mathCalculator.subtraction();
                break;

            case "x":
                retorno = mathCalculator.multiplication();
                break;

            case "/":
                retorno = mathCalculator.division();
                break;

            default:
                retorno = 0.0;
                break;
        }

        this.setState({
            actualNumber: retorno,
            lastNumber: "",
            operator: ""
        });

    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <hr className="invisible" />
                                <div className="btn-group d-flex" role="group" aria-label="Math">
                                    <OperatorButton onClick={() => this.cleanNumber()} value="Limpar" className="btn-danger w-100" />
                                    <OperatorButton onClick={() => this.apagar()} value="Apagar" className="btn-warning w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <input value={this.state.actualNumber} type="text" className="form-control" readOnly />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="btn-group d-flex" role="group" aria-label="Math">
                                    <OperatorButton onClick={() => this.setValue(1)} value="1" className="w-100" />
                                    <OperatorButton onClick={() => this.setValue(2)} value="2" className="w-100" />
                                    <OperatorButton onClick={() => this.setValue(3)} value="3" className="w-100" />
                                    <OperatorButton onClick={() => this.prepareCalc("x")} value="x" className=" btn-info w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="btn-group d-flex" role="group" aria-label="Math">
                                    <OperatorButton onClick={() => this.setValue(4)} value="4" className="w-100" />
                                    <OperatorButton onClick={() => this.setValue(5)} value="5" className="w-100" />
                                    <OperatorButton onClick={() => this.setValue(6)} value="6" className="w-100" />
                                    <OperatorButton onClick={() => this.prepareCalc("-")} value="-" className="btn btn-info w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="btn-group d-flex" role="group" aria-label="Math">
                                    <OperatorButton onClick={() => this.setValue(7)} value="7" className="w-100" />
                                    <OperatorButton onClick={() => this.setValue(8)} value="8" className="w-100" />
                                    <OperatorButton onClick={() => this.setValue(9)} value="9" className="w-100" />
                                    <OperatorButton onClick={() => this.prepareCalc("+")} value="+" className="btn btn-info w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="btn-group d-flex" role="group" aria-label="Math">
                                    <OperatorButton onClick={() => this.setValue(".")} value="." className="w-100 btn-secondary" />
                                    <OperatorButton onClick={() => this.setValue(0)} value="0" className=" w-100" />
                                    <OperatorButton onClick={() => this.calculate()} value="=" className="w-100 btn-secondary" />
                                    <OperatorButton onClick={() => this.prepareCalc("/")} value="/" className="btn-info w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
