import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "ride") return { money: state.money + 10 };
  if (action.type === "fuel") return { money: state.money - 30 };
  return new Error();
};

function Wallet() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Wallet Balance: {state.money} </h2>
      <div>
        <button onClick={() => dispatch({ type: "ride" })}>New Ride !</button>
        <button onClick={() => dispatch({ type: "fuel" })}>Refill Tank</button>
      </div>
    </div>
  );
}

export default Wallet;
