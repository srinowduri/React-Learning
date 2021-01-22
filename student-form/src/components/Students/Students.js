import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import StudentForm from '../Add-Student/StudentForm';
import './Students.css';
class Students extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
            students: [],
            studentInfo: {},
            toggleStudentForm: false
        }
     }
     componentDidMount() {
        axios.get('http://localhost:2000/api/students')
            .then(responce =>{
                const studentsFromDatabase = responce.data;
                this.setState({
                    students: studentsFromDatabase
                });
            })
     }

    renderTableData() {
        return this.state.students.map((student) => {
           const {id, name, level, emailId, phoneNum} = student 
           return (
              <tr key={id}>
                 <td>{name}</td>
                 <td>{level}</td>
                 <td>{emailId}</td>
                 <td>{phoneNum}</td>
                 <td>
                     <button className="tableButton" 
                            type="submit" 
                            onClick={this.toggleEditStudentForm.bind(this, student.id)}> Edit </button>   /

                     <button className="tableButton" type="submit">Delete</button>
                 </td>
              </tr>
           )
        })
     }

    switchStudentForm = () => {
        this.setState({
            toggleStudentForm: !this.state.toggleStudentForm,
        })
        
    }

    toggleEditStudentForm = (id, event) => {
        event.preventDefault();
        axios.get('http://localhost:2000/api/students/' + id)
         .then(response => {
            const selectedStudent = response.data;
             this.setState({
                studentInfo : selectedStudent,
                toggleStudentForm: !this.state.toggleStudentForm
             })
         })
    }
   display = isShow => {
    this.setState({ 
        toggleStudentForm: isShow
    })
   }

    render() {
 
        return (
            <div>{!this.state.toggleStudentForm ? null : <StudentForm std={this.state.studentInfo}></StudentForm>}
                
                <h1>Student List: </h1>
                <table className="student_Table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Level</td>
                            <td>Email-Id</td>
                            <td>Phone</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
                <button className="Add" type="submit" onClick={this.switchStudentForm}>Add</button>
            </div>
        )
    }
}

export default withRouter(Students);