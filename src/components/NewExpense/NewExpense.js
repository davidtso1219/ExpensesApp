import './NewExpense.css';

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const addNewExpenseHandler = newExpense => {
    props.onAddNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={addNewExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
