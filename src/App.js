import React from "react";
import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import { CalculatorProvider } from "./context/CalculatorContext";
import DisplayCalculations from "./components/Result/DisplayCalculations";
import Styled from "styled-components";

const DisplayContainer = Styled.div`
    margin-top: 20px;
`;

function App() {
  return (
    <CalculatorProvider>
      <h1 align="center"> Sezzle calculator </h1>
      <div className="calculator-body">
        <Calculator />
      </div>
      <DisplayContainer>
        <DisplayCalculations />
      </DisplayContainer>
    </CalculatorProvider>
  );
}

export default App;
