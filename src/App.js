import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";
function App() {
  const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  //const [filteredyearExpenses, setFilteredYearExpenses] = useState(INITIAL_EXPENSES);
 // let filteredyearExpenses;
  const addExpenseHandler = expense =>{
    console.log(expense );
    setExpenses(preExpenses => {
      return [expense, ...preExpenses];
    } );
  };

  // const yearFilterHandler = (filteredyear) =>{
  //   setFilteredYearExpenses(() => {
  //     const filteredItems = expenses.filter(e => e.date.getFullYear()==filteredyear);
  //     return [ ...filteredItems];
  //   } );
  // };
  return (
    <div>
      <NewExpense onExpenseAddition={addExpenseHandler}/>
      <Expenses 
        // onFilterByYear={yearFilterHandler} 
        items={expenses}>
       </Expenses>
    </div>
  );
}

export default App;
