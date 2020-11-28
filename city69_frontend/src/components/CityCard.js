import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CityCard = (props) => {
  return (
    <Block>
      <Img img={props.img} />
      <TitleMarks>
        <Title>{props.cityName}</Title>
        <Marks>
          55/100
          <br />
          Iq города
        </Marks>
      </TitleMarks>
      <LinkStyled to="/city/2">IQ города &#8594; </LinkStyled>
    </Block>
  );
};

const TitleMarks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Marks = styled.div``;

const Img = styled.div`
  width: 285px;
  height: 89px;
  background-image: url(${(props) => props.img});
  background-position: center;
  //   background-repeat: no-repeat;
  border-radius: 10px 10px 0 0;
`;
const Block = styled.div`
  width: 285px;
  height: 197px;
  background-color: white;
  border-radius: 10px;
`;
const Title = styled.div`
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #212532;
`;
const LinkStyled = styled(Link)`
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;
  color: #006acc;
`;

const Text = styled.div`
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #a7acbc;
`;
