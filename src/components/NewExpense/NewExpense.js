import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <form>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDateHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </form>
  );
};

export default NewExpense;
