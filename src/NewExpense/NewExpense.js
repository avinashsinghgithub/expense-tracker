import React from 'react';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = React.useState(false);
    const saveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onExpenseAddition(expenseData);
        setShowExpenseForm(false);
    };
   // const addExpenseButtonShown = true;
   const addExpenseFormhandler = () => {
    setShowExpenseForm(true);
};
    const addExpenseButton =<div className="new-expense">
        <button  onClick={addExpenseFormhandler}>add Expense</button>
    </div>;
    
    const cancelHandler = ()=>{
        setShowExpenseForm(false);
    };
    if(!showExpenseForm){
        return addExpenseButton;
    }
    return (<div className="new-expense">

        <ExpenseForm onCancel={cancelHandler} onSaveExpenseData={saveExpenseDatahandler}/>
    </div>);
};

export default NewExpense;