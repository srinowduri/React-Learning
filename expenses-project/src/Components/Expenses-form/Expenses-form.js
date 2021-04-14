import React from 'react';
import '../Add Expense/Add-expense.css';

const ExpensesForm = (props) => {
    return(
        <div>
            <form onSubmit={props.submit}>
                <div>
                    <label>Store:</label>
                    <input type="text" name="date" onChange={props.change} defaultValue={props.data.date} />
                </div>
                <div>
                    <label>Date:</label>
                    <input type="text" name="store" onChange={props.change}  defaultValue={props.data.store} />
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" name="price" onChange={props.change}  defaultValue={props.data.price} />
                </div>
                <div>
                    <label>Comments:</label>
                    <input type="text" name="comments" onChange={props.change} defaultValue={props.data.comments} />
                </div>
                <div>
                    <button type="submit" className="submit-button">Submit</button>
                    <button type="button" className="cancel-button" onClick={props.cancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default ExpensesForm;