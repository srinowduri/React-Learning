import React, { Component } from 'react';
import Numbers from '../Numbers/Numbers';
import { getNumbers } from '../redux/numberSelectors';
import { connect } from 'react-redux';

class NumbersData extends Component {
    state = {
        number: 0,
        message: ''
    }
    handleNumber = (event) => {
        this.setState({
            number: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        let note = `The number ${this.state.number} is not in the store`;
        this.props.numbers.forEach(num => {
            if(num == this.state.number) {
                note = `The number ${this.state.number} is in the store`;
            }
        });
        this.setState({
            message: note
        });
    }
    render() {
        return(
            <div>
                <Numbers num={this.state.number}
                        change={this.handleNumber}
                        click={this.onSubmit}></Numbers>
                <span>{this.state.message}</span>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const numbers = getNumbers(state);

    return {numbers};
}

export default connect(mapStateToProps)(NumbersData);