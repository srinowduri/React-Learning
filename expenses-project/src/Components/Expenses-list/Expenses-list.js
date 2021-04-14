import React, { useEffect, useState } from 'react';
import './Expenses-list.css';
import AddExpense from '../Add Expense/Add-expense';
import EditExpense from '../Edit Expense/Edit-expense';
import { deleteExpense, getExpenses } from '../../Service/Expense-Service';


const ExpensesList = () => {

    const[expenses, setExpenses] = useState([]);
    const[toggleAddExpForm, setToggleAddForm] = useState(false);
    const[toggleEditExpForm, setToggleEditForm] = useState(false);
    const[expenseId, setExpenseId] = useState('');
    const[message, setMessage] = useState('');

    /* Getting data when compoent loaded -----------*/
    useEffect(() =>{
        getExpenses()
            .then(res => {
                const expenseObj = res;
                setExpenses(expenseObj);
                console.log(expenseObj);
            });
    }, []);
    //--------------------------------------------

    /* Handle Add and Edit forms ----------------*/
    const handleAddExpense = () => {
        getExpenses()
            .then(res => {
                const expenseObj = res;
                setExpenses(expenseObj);
                setMessage('New Expense is added');
            });
        handleAddForm();
    }

    const handleEditedExpense = () => {
        getExpenses()
            .then(res => {
                const expenseObj = res;
                setExpenses(expenseObj);
                setToggleEditForm(false);
            });
    }
    // --------------------------------------------

    /* Toggle Add and Edit forms -------------------*/

    const handleAddForm = () => {
        setToggleAddForm(!toggleAddExpForm);
    }

    const handleEditForm = (id) => {
        setExpenseId(id);
        setToggleEditForm(!toggleEditExpForm);
    }

    //----------------------------------------------

    /* Rendering table data --------------------------*/

    const renderTableData = () => {
        return expenses.map(expense => {
            const { id, date, store, price, comments } = expense
            return (
                <tr key={id + 1}>
                    <td>{date}</td>
                    <td>{store}</td>
                    <td>{price}</td>
                    <td>{comments}</td>
                    <td>
                        <button className="edit-button" onClick={() => handleEditForm(expense.id)}>Edit</button> /
                        <button className="delete-button" onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }    
    //-----------------------------------------------------------------


    /* Delete the Expense -------------------------*/
    const handleDeleteExpense = (id) => {
        deleteExpense(id).then(res => {
            getExpenses()
            .then(res => {
                const expenseObj = res;
                setExpenses(expenseObj);
            });
        })
    }
    //--------------------------------------------------------


    const handleForm = (event) => {
        event.preventDefault();
        handleAddForm();
    }
    return(
       
        <div>
            <button className="add" onClick={handleForm}>+</button>
            { !toggleAddExpForm ? null : <AddExpense onAddNew={handleAddExpense}></AddExpense>}
            <span>{message}</span>
            { !toggleEditExpForm ? null :  <EditExpense id={expenseId}
                                                     onEditExp={handleEditedExpense}></EditExpense>}
            <table className="expenses-table">
                <thead>
                    <tr>
                        <td>Store</td>
                        <td>Date</td>
                        <td>Price</td>
                        <td>Comments</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {renderTableData()}
                </tbody>
            </table>

            
        </div>
    );
}

export default ExpensesList;