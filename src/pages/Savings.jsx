import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses, fetchIncome } from "../actions";
import { useEffect } from "react";

const Savings = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);

  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  const totalSavings = totalIncome - totalExpenses

  useEffect(() => {
    dispatch(fetchIncome());
  }, []);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);
  return (
    <>
      <h1>Savings Page</h1>

      <h2>Savings total: {totalSavings}</h2>
    </>
  );
};

export default Savings;
