import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Adicione casos de ação conforme necessário
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.load > 0) return state;
      return { ...state, load: action.payload };
    case "account/payLoan":
      return {
        ...state,
        load: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch({ type: "account/deposit", payload: 500 });

console.log("redux");
