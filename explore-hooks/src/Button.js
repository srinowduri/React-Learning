import React, { Component } from 'react';

export class Button extends Component {
    constructor() {
        super()
        this.state = {buttonText: "Click me, please"};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(() => {
            return {buttonText: 'Thanks for clicked!!'};
        })
    }

    render() {
        const { buttonText } = this.state;
        return <button onClick={this.handleClick}>{buttonText}</button>
    }
}