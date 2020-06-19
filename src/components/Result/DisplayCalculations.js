import React from "react";
import Styled from "styled-components";
import { CalculatorContext } from "../../context/CalculatorContext";

const { useContext } = React;

const MessageWrapper = Styled.div`
  overflow-x: hidden;
`;

const MessageDisplay = Styled.div`
  width: 100%;
  height: 50px;
  padding: 20px 0 0 20px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  border-top: 1px solid black;
  @media (max-width: 500px) {
    width: 100%;
    max-height: 200px;
  }
`;

const DisplayCalculations = () => {
  const { calculations } = useContext(CalculatorContext);
  return (
    <MessageWrapper>
      {calculations.slice(0, 10).map((data, i) => (
        <MessageDisplay value={data.msg} key={i}>
          {data.msg}
        </MessageDisplay>
      ))}
    </MessageWrapper>
  );
};

export default DisplayCalculations;
