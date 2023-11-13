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
    const filteredYearExpenses = props.items.filter(item => item.date.getFullYear().toString() === selectedYear);
    console.log(filteredYearExpenses);
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onYearFilter={filterHandler} />


                {filteredYearExpenses && filteredYearExpenses.map(item => 
                (<ExpenseItem 
                key={item.id} 
                title={item.title} 
                amount={item.amount} 
                date={item.date} />))}
            </Card>
        </div>

    );
};

export default Expenses;