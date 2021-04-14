import React, { Component } from 'react';
import axios from 'axios';
import './StudentForm.css';
const initialState = {
    name: '',
    level: '',
    emailId: '',
    phoneNum: ''
}

class AddStudent extends Component {
    state = {
        initialState, 
        nameError: '',
        emailError: '',
        levelError: ''
    };
    
    handleName = (event) => {
        this.setState ({
            name: event.target.value,
        });
    }

    handleLevel = (event) => {
        this.setState ({
            level: event.target.value
        });
    }

    handleEmail = (event) => {
        this.setState ({
            emailId: event.target.value
        });
    }

    handlePhone = (event) => {
        this.setState ({
            phoneNum: event.target.value
        });
    }

    componentDidMount() {
        if(this.props.std) {
            this.setState({
                id: this.props.std._id,
                name: this.props.std.name,
                level: this.props.std.level,
                emailId: this.props.std.emailId,
                phoneNum: this.props.std.phoneNum
            })
        }
    }

    validate = () => {
        let nameErrorMessage= '';
        let emailErrorMessage= '';

        if(!this.state.name){
            nameErrorMessage = "Please enter your Name";
        }
        else {
            nameErrorMessage = null ;
        }

        if(!this.state.email.includes("@")) {
            emailErrorMessage = "Please enter valid Email-id";
        }

        if(nameErrorMessage === null || emailErrorMessage === null){
            this.setState({
                nameError: null,
                emailError: null
            })
        }
        if(nameErrorMessage || emailErrorMessage) {
            this.setState({ 
                emailError: emailErrorMessage,
                nameError: nameErrorMessage 
            });
            return false;
        }
        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // const isValid = this.validate();
        // if( isValid ) {
        //     this.setState({initialState});
        // }  

        const studentData = {
            name: this.state.name,
            level: this.state.level,
            emailId: this.state.emailId,
            phoneNum: this.state.phoneNum
        }
        axios.post('http://localhost:1000/api/students', studentData)
            .then(response => {
                console.log(JSON.stringify(response));
            });
   
        const studentEditedData = {
              _id: this.state.id,
            name: this.state.name,
            level: this.state.level,
            emailId: this.state.emailId,
            phoneNum: this.state.phoneNum
        }

        if(this.props.std){
            console.log('student edited data: ' + JSON.stringify(studentEditedData));
            axios.put('http://localhost:1000/api/students', studentEditedData)
                .then(response => {
                    console.log(response.data);
                })
        }
    }
    
    render(){
        return (
            <div>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input className="input" type="text" value={this.state.name || ""} onChange={this.handleName}></input>
                        {/* {this.state.nameError ? (
                             <span style={{ color: "red"}}>{ this.state.nameError }</span>
                        ) : null} */}
                       
                    </div>
                    <div>
                        <label htmlFor="level">Level:</label>
                        <input className="input" type="text" value={this.state.level || ""} onChange={this.handleLevel}></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email-Id:</label>
                        <input className="input" type="text" value={this.state.emailId || ""} onChange={this.handleEmail}></input>
                            {/* {this.state.emailError ? (
                                <span style={{ color: "red"}}>{this.state.emailError}</span>
                            ) : null} */}
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input className="input" type="text" value={this.state.phoneNum || ""} onChange={this.handlePhone}></input>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
            </div>
        )
    }
}
export default AddStudent;