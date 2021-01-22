import React, { Component } from 'react';
import './Edit_Student.css';
const initialState = {
    name: '',
    level: '',
    email: '',
    phoneNumber: '',
    nameError: '',
    emailError: '',
    levelError: ''  
}
class EditStudent extends Component {
    state = initialState;
    render() {
        return (
            <div>
                <div>
                <form className="form">
                {/* <h4>Edit Student Details</h4> */}
                    <div>
                        <label className="lable">Name: </label>
                        <input className="input" type="text" value={this.state.name} readOnly />
                    </div>
                </form>
            </div>
            </div>
            
        )
    }
}

export default EditStudent;