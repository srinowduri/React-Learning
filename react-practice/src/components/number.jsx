import React, { Component } from 'react';

class Number extends Component {
    state = { 
        number: this.props.person.value,
        a: 10,
        b: 57,
        persons: ["jack",'ben','mica'],
        students: [
            { name: 'jack', id: 101 },
            { name: 'ben', id: 102 },
            { name: 'mica', id: 103 }
        ]
     };

     
     styles = {
         fontSize: 20,
         fontWeight: "bold"
     }
     renderTags(){
        if(this.state.persons.length === 0) {
            return <p>There are no tags!!</p>
        } else {
            return <ul> { this.state.persons.map(person => <li key={person}>{ person }</li>) } </ul>
        }
    }

    handleIncrement = product => {
        this.setState({number: this.state.number + 1});
        console.log(product);
    }

    render() { 
        let classes = "badge m-2 badge-";
        classes += this.state.number === 0 ? 'warning' : 'primary';
        return ( 
            <React.Fragment> <br/>
                <span style = {this.styles} className={classes}>{this.countNumber()}</span>
                <button onClick={() => this.handleIncrement("product")} className="btn btn-secondary btn-sm">counter</button> 
                <button onClick={() => this.props.onDelete(this.props.person.id)} className="btn btn-danger btn-sm m-2">Danger</button>
            </React.Fragment>
         );
    }
    
    countNumber() {
        const { number } = this.state;
        return number === null ? 'Null' : number;
    }
    add() {
        let sum = this.state.a + this.state.b;
        // console.log(sum);
        // console.log(typeof(sum) === 'number');
        if(typeof(sum) === 'number'){
            return sum;
        } else {
            return 'It is not a number';
        }
    }
    displayStudents = () => {
        this.state.students.forEach(s => {
            console.log(s.name);
            return s.name;
        })
    }
    
}
 
export default Number;