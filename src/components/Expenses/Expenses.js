import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  return (      
    <Card className="expenses">
      <ExpensesFilter 
        selectedYear={selectedYear}
        onChangeYear={yearChangeHandler}/>
      {props.expenses.map((expense) => (
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>
      ))}      
    </Card>
  );
}

export default Expenses;
