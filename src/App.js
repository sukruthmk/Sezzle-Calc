import React from "react";
import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import CalculatorProvider from "./context/CalculatorContext";
import DisplayCalculations from "./components/Result/DisplayCalculations";

function App() {
  return (
    <CalculatorProvider>
      <h1 align="center"> Sezzle calculator </h1>
      <div className="calculator-body">
        <Calculator />
      </div>
      <div>
        <DisplayCalculations />
      </div>
    </CalculatorProvider>
  );
}

export default App;
