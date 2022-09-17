import { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const data = [
    {id: 1, title: 'Car Insurance', amount: 295.67, date: new Date(2020, 7, 14)},
    {id: 2, title: 'Foods', amount: 180.23, date: new Date(2020, 7, 12)},
    {id: 3, title: 'Utilities', amount: 10.2, date: new Date(2020, 7, 1)},
  ];

  const [expenses, setExpenses] = useState(data);

  const addNewExpenseHandler = (newExpense) => {
    const id = expenses[expenses.length - 1].id + 1;
    data.push({
      id,
      ...newExpense
    });
    setExpenses(data);
  }

  return (
    <div className="App">
      <NewExpense onAddNewExpense={addNewExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
