import { useSelector, useDispatch } from "react-redux";
import { fetchIncome } from "../actions";
import { useEffect } from "react";

const Income = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income || []);
  console.log("Income from Redux:", income);
  const totalIncome = income.reduce(
    (acc, curr) => Number(curr.amount) + acc,
    0,
  );
  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);
  return (
    <>
      <h1>Income Page</h1>
      <ul>
        {income.map((salary, index) => (
          <li key={index}>
            {salary.description}: ${salary.amount}
          </li>
        ))}
      </ul>
      <h2>Income total: {totalIncome}</h2>
    </>
  );
};

export default Income;
