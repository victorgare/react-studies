import React, { Component } from 'react';

class OperatorButton extends Component {
    render() {
        return (
            <button value={this.props.value} type="button" className={"btn " + this.props.className} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}

export default OperatorButton;