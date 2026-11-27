import { createStore, applyMiddleware } from "redux";
import financeReducer from "./pages/reducers";
import { thunk } from "redux-thunk";

const store = createStore(financeReducer, applyMiddleware());
export default store;
