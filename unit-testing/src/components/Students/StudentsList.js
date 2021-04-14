import React, { Component } from 'react';
// import AddStudentForm from '../../Practice';

class StudentsList extends Component {
        state = {
            isActive: false
        }
    
    showAndHide = () => {
        this.setState({
            isActive: !this.state.isActive
        });
        // console.log(this.state.isActive);
    }
    render () {
        return (
            <div>
                <button onClick={this.showAndHide}>          
                    {this.state.isActive ? "Register" : "Cancle"}
                </button>
                {/* {this.state.isActive ? null : <AddStudentForm />} */}
            </div>
        );
    }
}

export default StudentsList;