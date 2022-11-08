import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ onAddExpenseData }) {
  const submitExpenseDataHandler = (submitExpenseData) => {
    const ExpenseData = {
      ...submitExpenseData,
      id: Math.random().toString(),
    };
    onAddExpenseData(ExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
