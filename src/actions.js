export const addEntry = (entry) => async (dispatch) => {
  try {
    console.log("Income data being sent:", entry);
    console.log("ADD INCOME CALLED");
    console.log("Entry received:", entry);

    const response = await fetch(
      "https://finance-app-backend-Student-neoG.replit.app/add-income",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      },
    );

    const data = await response.json();

    console.log("Income status:", response.status);
    console.log("Income API response:", data);

    if (response.ok && data.success === true) {
      dispatch({
        type: "ADD_ENTRY_SUCCESS",
        payload: data.data,
      });
    }
  } catch (error) {
    console.log("Error adding income:", error);
  }
};

export const addExpense = (entry) => async (dispatch) => {
  try {
    console.log("Expense data being sent:", entry);

    const response = await fetch(
      "https://finance-app-backend-Student-neoG.replit.app/add-expense",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      },
    );

    const data = await response.json();

    console.log("Response status:", response.status);
    console.log("Expense API response:", data);

    if (response.ok && data.success === true) {
      dispatch({
        type: "ADD_EXPENSE_SUCCESS",
        payload: data.data,
      });
    } else {
      console.log("Expense failed:", data);
    }
  } catch (error) {
    console.log("Error adding expense:", error);
  }
};

export const fetchIncome = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://finance-app-backend-Student-neoG.replit.app/income",
    );

    const data = await response.json();

    console.log("Income API response:", data);

    if (response.ok && data.success === true) {
      dispatch({
        type: "FETCH_INCOME_SUCCESS",
        payload: data.data,
      });
    }
  } catch (error) {
    console.error("Error fetching income:", error);
  }
};

export const fetchExpenses = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://finance-app-backend-Student-neoG.replit.app/expenses",
    );

    const data = await response.json();

    console.log("Fetch Expenses Response:", data);

    if (response.ok && data.success === true) {
      dispatch({
        type: "FETCH_EXPENSES_SUCCESS",
        payload: data.data,
      });
    }
  } catch (error) {
    console.error("Error fetching expenses:", error);
  }
};
