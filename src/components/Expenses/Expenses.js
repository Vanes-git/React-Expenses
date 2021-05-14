import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
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
      <ExpensesChart expenses = {visibleData} />
      <ExpensesList expenses = {visibleData}/>
    </Card>
  );
};

export default Expenses;
