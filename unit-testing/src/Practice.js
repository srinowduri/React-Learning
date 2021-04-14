import React, { Component }  from 'react';

class Practice extends Component{
    state = {
        number: 0
    }
    handleNumber = (event) => {
        this.setState({
            number: event.target.value
        });
    }
    render() {
        return (
            <div>
                <input type="number" onChange={this.handleNumber} />
            </div>
        );
    }
}

export default Practice;