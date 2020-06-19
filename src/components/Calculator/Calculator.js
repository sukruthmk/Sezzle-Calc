import React from "react";
import Result from "./Result";
import KeyPad from "./KeyPad";

const { useState } = React;

const Calculator = () => {
  const [result, setResult] = useState("");
  const calculate = () => {
    var checkResult = "";
    if (result.includes("--")) {
      checkResult = result.replace("--", "+");
    } else {
      checkResult = result;
    }
    try {
      // eslint-disable-next-line no-eval
      setResult((eval(checkResult) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };
  const reset = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
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
