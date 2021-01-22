import React, { Component } from 'react';
import Number from './number';
class Practice extends Component {
    state = {
        students: [
            { name: 'jack', id: 101, value: 2},
            { name: 'ben', id: 102,  value: 0},
            { name: 'mica', id: 103, value: 0}
        ]
    }

    handleDelete = personId => {
        console.log("This is handleDelete function");
        const students = this.state.students.filter(person =>  person.id !== personId);
        this.setState({students});
    }
    render() { 
        return (
            <React.Fragment>
                { this.state.students.map(person => 
                    <Number key={person.id} onDelete={this.handleDelete} person={person}>   
                    </Number>
                )}
            </React.Fragment>
        );
    }
}
 
export default Practice;