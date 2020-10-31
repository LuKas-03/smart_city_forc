import React from "react";
import styled from "styled-components";
import house from "../house.svg";
import account from "../account.svg"
import { Header4 } from "../styles";
export const Header = () => {
  return (
    <Box>
      <Title>
        <Symbol />
        <Header4>ГОРОД89</Header4>
      </Title>
      <Account>
        <Name></Name>
        <Photo></Photo>
      </Account>
    </Box>
  );
};

const Box = styled.div`
  //   color: blue;
  //   background-color: #f9fafc;
  display: flex;
  justify-content: space-between;
`;

const Symbol = styled.div`
  margin-right: 8px;
  display: inline-block;
  width: 22px;
  height: 20px;
  background-image: url(${house});
  background-position: center center;
  background-repeat: no-repeat;
`;
const Title = styled.div`
  display: flex;
`;
const Account = styled.div`
  display: flex;
`;
const Name = styled.div`
  display: flex;
`;
const Photo = styled.div`
  width:48px;
  height:48px;
  border-radius:50%;
  background-image: url(${account});
  background-position: center center;
  background-repeat: no-repeat;
`;



