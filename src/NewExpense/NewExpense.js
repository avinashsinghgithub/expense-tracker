import React from 'react';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onExpenseAddition(expenseData);
    };
    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDatahandler}/>
    </div>);
};

export default NewExpense;