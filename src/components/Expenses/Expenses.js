import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {
    // var filteredItems;
    // const [items, setItems] = useState(props.items);
    const [selectedYear, setSelectedYear] = useState('2020');
    const filterHandler = (filteredYear) => {
        setSelectedYear(filteredYear);
        // props.onFilterByYear(filteredYear);  
    };
    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === selectedYear);
    let expensesContent = <p>No expenses found.</p>;
    if(filteredExpenses.length >0) {
        expensesContent = filteredExpenses.map(expense => 
            (<ExpenseItem 
            key={expense.id} 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} />));
    }
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onYearFilter={filterHandler} />
                {expensesContent}
            </Card>
        </div>

    );
};

export default Expenses;