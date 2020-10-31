import React from "react";
import styled from "styled-components";
import { Marks } from "./Marks";

export const CheckBox = (props) => {
  return (
    <Element>
      <Marks />
      <Text>{props.children}</Text>
    </Element>
  );
};

const Element = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  height: 100%;
  display: inline-block;
`;
