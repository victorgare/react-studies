import React, { Component } from 'react';

class OperatorButton extends Component {
    render() {
        return (
            <button type="button" className={this.props.className} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}

export default OperatorButton;