import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2020');
    const filterHandler = (filteredYear) => {
        setSelectedYear(filteredYear);
    };
    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === selectedYear);
    
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onYearFilter={filterHandler} />
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div>

    );
};

export default Expenses;