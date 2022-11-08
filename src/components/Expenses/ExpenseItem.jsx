import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ amount, date, title }) {
  const [tit, setTit] = useState(title);
  const clickHandler = () => {
    setTit("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{tit}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
