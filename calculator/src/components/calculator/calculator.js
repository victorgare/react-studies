import React, { Component } from 'react';
import OperatorButton from '../operator-buttons/operator-button';

class Calculator extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <hr className="invisible" />
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="btn-group d-flex" role="group" aria-label="Math">
                                    <OperatorButton value="1" className="btn w-100" />
                                    <OperatorButton value="2" className="btn w-100" />
                                    <OperatorButton value="3" className="btn w-100" />
                                    <OperatorButton value="x" className="btn btn-info w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="btn-group d-flex" role="group" aria-label="Math">
                                    <OperatorButton value="4" className="btn w-100" />
                                    <OperatorButton value="5" className="btn w-100" />
                                    <OperatorButton value="6" className="btn w-100" />
                                    <OperatorButton value="-" className="btn btn-info w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="btn-group d-flex" role="group" aria-label="Math">
                                    <OperatorButton value="7" className="btn w-100" />
                                    <OperatorButton value="8" className="btn w-100" />
                                    <OperatorButton value="9" className="btn w-100" />
                                    <OperatorButton value="+" className="btn btn-info w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="btn-group d-flex" role="group" aria-label="Math">
                                    <OperatorButton value="." className="btn w-100 btn-secondary" />
                                    <OperatorButton value="0" className="btn w-100" />
                                    <OperatorButton value="=" className="btn w-100 btn-secondary" />
                                    <OperatorButton value="/" className="btn btn-info w-100" />
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
