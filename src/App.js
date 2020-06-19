import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div>
      <h1 align="center"> Sezzle calculator </h1>
      <div className="calculator-body">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
