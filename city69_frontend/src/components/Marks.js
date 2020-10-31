import React, { useState } from "react";
import styled from "styled-components";

export const Marks = (props) => {
  const [pressed, setPressed] = useState(true);
  const onChange = () => {
    setPressed(!pressed);
  };

  return (
    <Square {...{ pressed }} onClick={onChange}>
      <Tick
        pressed={pressed}
        width="14"
        height="11"
        viewBox="0 0 14 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6.27778L5.04348 9L12 2"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Tick>
    </Square>
  );
};

const Square = styled.div`
  cursor: pointer;
  margin-right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.pressed ? "#00A2FF" : "white")};
  width: 24px;
  height: 24px;
  border: 1px solid #d3d6df;
  border-radius: 4px;
`;

const Tick = styled.svg`
  display: ${(props) => (props.pressed ? "block" : "none")};
`;
