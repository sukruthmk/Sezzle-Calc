import React from "react";
import io from "socket.io-client";
//  use SOCKET_ENDPOINT_DEV if you want to use local server
import { SOCKET_ENDPOINT_PROD } from "../config";

const { createContext, useState, useEffect } = React;

const CalculatorContext = createContext();

let socket;

// load calculations from local storage
const localData = localStorage.getItem("calculations");
const initialState = localData ? JSON.parse(localData) : [];

const CalculatorProvider = (props) => {
  // initially load previous calculations from localstorage
  const [calculations, setCalculations] = useState(initialState);

  // store calculations in local storage whenever there is an update
  useEffect(() => {
    localStorage.setItem("calculations", JSON.stringify(calculations));
  }, [calculations]);

  useEffect(() => {
    // change the endpoint to dev SOCKET_ENDPOINT_DEV if you want to use local server
    socket = io(SOCKET_ENDPOINT_PROD);
    // listen to chat API for new calculations
    socket.on("chat", function (msg) {
      setCalculations((prevState) => {
        return [msg, ...prevState];
      });
    });
  }, []);

  // broadcast current calculation to other users through socket
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
