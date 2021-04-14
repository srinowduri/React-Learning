import React, { useState } from 'react';
import ExpensesForm from '../Expenses-form/Expenses-form';
import './Add-expense.css';
import { addNewExpense } from '../../Service/Expense-Service';


const AddExpense = (props) => {
    const[expenseObj, setExpenseObj] = useState({
        date: '',
        store: '',
        price: '',
        comments: ''
    });


    const handleInputChange = (event) => {
        setExpenseObj(prevValues => {
            return {
                ...prevValues,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(expenses);
        const expense = {
            date: expenseObj.date,
            store: expenseObj.store,
            price: expenseObj.price,
            comments: expenseObj.comments
        }

        addNewExpense(expense)
            .then(res => {
                props.onAddNew();
            })
    }
    
    const handleCancel = () => {
        props.onAddNew();
    }
    return(
        <div>
            <fieldset className="form">
                    <legend>Add a New Expense: </legend>
                    <ExpensesForm data={expenseObj} 
                        change={handleInputChange}
                        submit={handleSubmit}
                        cancel={handleCancel}>
                    </ExpensesForm>
            </fieldset>
            
        </div>
    );
}

export default AddExpense;