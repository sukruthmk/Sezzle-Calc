import React from "react";
import Result from "./Result";
import KeyPad from "./KeyPad";
import { CalculatorContext } from "../../context/CalculatorContext";

const { useContext, useState } = React;

const Calculator = () => {
  const { sendChat } = useContext(CalculatorContext);
  const [result, setResult] = useState("");

  // function to calculate the result and
  // also broadcast it to other users connected through socket
  const calculate = () => {
    var checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }
    try {
      // eslint-disable-next-line no-eval
      const output = (eval(checkResult) || "") + "";
      const calculation = result;
      const calculationString = `${calculation} = ${output}`;
      setResult(output);
      sendChat(calculationString);
    } catch (e) {
      setResult("error");
    }
  };

  // function to reset the calculator result to empty
  const reset = () => {
    setResult("");
  };

  // function to remove last character
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  // function to perfrom actions for different buttons in calculator
  const onClick = (button) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(result + button);
    }
  };

  return (
    <div>
      <Result result={result} />
      <KeyPad onClick={onClick} />
    </div>
  );
};

export default Calculator;
