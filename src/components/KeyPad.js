import React from "react";

const KeyPad = ({ onClick }) => {
  const onButtonClick = (e) => {
    onClick(e.target.name);
  };
  return (
    <div className="button">
      <button name="(" onClick={onButtonClick}>
        (
      </button>
      <button name="CE" onClick={onButtonClick}>
        CE
      </button>
      <button name=")" onClick={onButtonClick}>
        )
      </button>
      <button name="C" onClick={onButtonClick}>
        C
      </button>
      <br />

      <button name="1" onClick={onButtonClick}>
        1
      </button>
      <button name="2" onClick={onButtonClick}>
        2
      </button>
      <button name="3" onClick={onButtonClick}>
        3
      </button>
      <button name="+" onClick={onButtonClick}>
        +
      </button>
      <br />

      <button name="4" onClick={onButtonClick}>
        4
      </button>
      <button name="5" onClick={onButtonClick}>
        5
      </button>
      <button name="6" onClick={onButtonClick}>
        6
      </button>
      <button name="-" onClick={onButtonClick}>
        -
      </button>
      <br />

      <button name="7" onClick={onButtonClick}>
        7
      </button>
      <button name="8" onClick={onButtonClick}>
        8
      </button>
      <button name="9" onClick={onButtonClick}>
        9
      </button>
      <button name="*" onClick={onButtonClick}>
        x
      </button>
      <br />

      <button name="." onClick={onButtonClick}>
        .
      </button>
      <button name="0" onClick={onButtonClick}>
        0
      </button>
      <button name="=" onClick={onButtonClick}>
        =
      </button>
      <button name="/" onClick={onButtonClick}>
        ÷
      </button>
      <br />
    </div>
  );
};

export default KeyPad;
