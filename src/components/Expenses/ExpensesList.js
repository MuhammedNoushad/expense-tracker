import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  if (!props.items.length) {
    return <h2 className="expenses-list__fallback">No Expense Found!.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
