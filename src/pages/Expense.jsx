import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../actions";
import { useEffect } from "react";

const Expense = () => {
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expenses || []);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const totalExpenses = expenses.reduce(
    (acc, curr) => acc + Number(curr.amount || 0),
    0,
  );

  return (
    <>
      <h1>Expense Page</h1>

      <ul>
        {expenses.map((expense, index) => (
          <li key={expense._id || index}>
            {expense.description}: ₹{expense.amount}
          </li>
        ))}
      </ul>

      <h2>Expense Total: ₹{totalExpenses}</h2>
    </>
  );
};

export default Expense;
