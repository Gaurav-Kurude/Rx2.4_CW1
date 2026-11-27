import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Income from "./pages/Income.jsx";
import Expense from "./pages/Expense.jsx";
import Savings from "./pages/Savings";
import IncomeExpenseForm from "./pages/IncomeExpenseForm.jsx";
function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/income">Income</Link>
              </li>
              <li>
                <Link to="/expenses">Expense</Link>
              </li>
              <li>
                <Link to="/savings">Savings</Link>
              </li>
              <li>
                <Link to="/">New Entries</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expense />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/" element={<IncomeExpenseForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
