import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  return <Block>{props.children}</Block>;
};

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 251px;
  height: 46px;
  color: white;
  background: #0078e7;
  border-radius: 8px;
  cursor: pointer;
`;
