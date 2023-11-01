import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) =>{
   // var filteredItems;
    const [items, setItems] = useState(props.items);
    const [selectedYear, setSelectedYear] = useState('2020');
    const filterHandler =(filteredYear) => {
        console.log(filteredYear);
        setSelectedYear(filteredYear);
        const filteredItems = props.items.filter( e => e.date.getFullYear() == filteredYear);
        setItems(filteredItems);    
    };
    return (
    <div>
        
        <Card className="expenses">
        <ExpensesFilter  selected={selectedYear} onYearFilter={filterHandler}/>
            {/* <ExpenseItem 
            title={props.items[0].title} 
            amount={props.items[0].amount} 
            date={props.items[0].date} />
            <ExpenseItem 
            title={props.items[1].title} 
            amount={props.items[1].amount} 
            date={props.items[1].date} />
            <ExpenseItem 
            title={props.items[2].title} 
            amount={props.items[2].amount} 
            date={props.items[2].date} />
            <ExpenseItem 
            title={props.items[3].title} 
            amount={props.items[3].amount} 
            date={props.items[3].date} /> */}

            {items?.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/> )}
        </Card>
    </div>
        
    );
}; 

export default Expenses;