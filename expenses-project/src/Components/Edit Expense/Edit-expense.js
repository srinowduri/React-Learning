import React, { useEffect, useState } from 'react';
import { editExpense, getExpenseById } from '../../Service/Expense-Service';
import ExpensesForm from '../Expenses-form/Expenses-form';

const EditExpense = (props) => {
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

    useEffect(() =>{
        console.log('Id from Edit Expense Component: ' + props.id);
        async function getExpenseObject() {
            const expense = await getExpenseById(props.id);
            setExpenseObj(expense);
        }
        getExpenseObject();
    }, [props.id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        editExpense(expenseObj).then(res => {
            props.onEditExp();
            return res.data;
        });
    }

    const handleCancel = () => {
        props.onEditExp();
    }
    return (
        <div>
            <fieldset className="form">
                    <legend>Edit the Expense: </legend>
                    <ExpensesForm data={expenseObj} 
                        change={handleInputChange}
                        submit={handleSubmit}
                        cancel={handleCancel}>
                    </ExpensesForm>
            </fieldset>
        </div>
    );
}

export default EditExpense;