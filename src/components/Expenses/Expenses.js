import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  const visibleData = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onChangeYear={yearChangeHandler}
      />
      <ExpensesList expenses = {visibleData}/>
    </Card>
  );
};

export default Expenses;
