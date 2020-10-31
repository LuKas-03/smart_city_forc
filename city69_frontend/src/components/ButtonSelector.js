import React from "react";
import styled from "styled-components";

export const ButtonSelector = (props) => {
  return <Block {...props}>{props.children}</Block>;
};

const Block = styled.div`
  display: inline-block;
  padding: 7px 17px 9px 17px;
  color: ${props => props.color ? props.color : 'white'};
  background: ${props => props.background ? props.background : '#0078e7'};
  border-radius: 8px;
  cursor: pointer;
`;

