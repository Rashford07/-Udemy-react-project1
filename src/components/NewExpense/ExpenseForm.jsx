import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onSubmitExpenseData }) {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  // const [userInput, setUserInput] = useState({
  //   titleValue: "",
  //   amountValue: "",
  //   dateValue: "",
  // });

  const titleChangeHandler = (event) => {
    setTitleValue(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   titleValue: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, titleValue: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setAmountValue(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amountValue: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setDateValue(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   dateValue: event.target.value,
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: titleValue,
      amount: amountValue,
      date: new Date(dateValue),
    };
    setTitleValue("");
    setAmountValue("");
    setDateValue("");
    onSubmitExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleValue} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            value={amountValue}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateValue}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
