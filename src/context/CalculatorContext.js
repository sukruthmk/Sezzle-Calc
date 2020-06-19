import React, { useState, createContext, useEffect } from "react";
import io from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

export const CalculatorContext = createContext();

const initialState = [];

function reducer(state, action) {
  const { msg } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return [{ msg }, ...state];
    default:
      return state;
  }
}

let socket;

const sendChat = (msg) => {
  socket.emit("chat", msg);
};

const CalculatorProvider = (props) => {
  const [calculationString, setCalculationString] = useState("");

  // reducer checks for local storage
  const [calculations, dispatch] = React.useReducer(
    reducer,
    initialState,
    () => {
      const localData = localStorage.getItem("calculations");
      return localData ? JSON.parse(localData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("calculations", JSON.stringify(calculations));
  }, [calculations]);

  if (!socket) {
    socket = io(ENDPOINT);
    socket.on("chat", function (msg) {
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
    });
  }

  return (
    <CalculatorContext.Provider
      value={{
        calculations,
        calculationString,
        sendChat,
        setCalculationString,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
