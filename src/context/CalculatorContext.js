import React from "react";
import io from "socket.io-client";
import { SOCKET_ENDPOINT_PROD } from "../config";

const { createContext, useState, useEffect } = React;

const CalculatorContext = createContext();

let socket;

const localData = localStorage.getItem("calculations");
const initialState = localData ? JSON.parse(localData) : [];

const CalculatorProvider = (props) => {
  // initially load previous calculations from localstorage
  const [calculations, setCalculations] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("calculations", JSON.stringify(calculations));
  }, [calculations]);

  useEffect(() => {
    socket = io(SOCKET_ENDPOINT_PROD);
    socket.on("chat", function (msg) {
      setCalculations((prevState) => {
        return [msg, ...prevState];
      });
    });
  }, []);

  const sendChat = (msg) => {
    socket.emit("chat", msg);
  };

  return (
    <CalculatorContext.Provider
      value={{
        calculations,
        sendChat,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

export { CalculatorContext, CalculatorProvider };
