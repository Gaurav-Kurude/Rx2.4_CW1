import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry, addExpense } from "../actions";

function IncomeExpenseForm() {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [entryType, setEntryType] = useState("income");

  const handleAddEntry = (e) => {
    e.preventDefault();

    if (!description.trim() || !amount || Number(amount) <= 0) {
      alert("Please enter valid description and amount");
      return;
    }

    const entry = {
      description,
      amount: Number(amount),
      entryType,
    };

    if (entryType === "income") {
      dispatch(addEntry(entry));
    } else {
      dispatch(addExpense(entry));
    }

    setDescription("");
    setAmount("");
    setEntryType("income");
  };

  return (
    <>
      <h1>New Entry Page</h1>

      <form onSubmit={handleAddEntry}>
        <div>
          <label>Description</label>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Amount</label>
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Entry Type</label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <br />

        <button type="submit">Add Entry</button>
      </form>
    </>
  );
}

export default IncomeExpenseForm;
