import React, { Component } from 'react';

class Number extends Component {
    state = { 
        number: 0,
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
    render() { 
        let classes = "badge m-2 badge-";
        classes += this.state.number === 0 ? 'warning' : 'primary';
        return ( 
            <React.Fragment>
                <span style = {this.styles} className={classes}>{this.countNumber()}</span>
                <button className="btn btn-secondary btn-sm">Click here</button> 
                <p>{this.add()}</p>
                <ul>
                    { this.state.persons.map(p => <li key={p}>{ p }</li> ) }
                    
                    {/* { this.state.students.forEach(std => <li> {std.name} </li>)} */}
                </ul>
                {/* <p>{this.displayStudents()}</p> */}
               
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