import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header1 = styled.div`
//   font-family: SF UI Display;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 120%;
`;

export const Header2 = styled.div`
//   font-family: SF UI Display;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 130%;
`;
export const Header3 = styled.div`
//   font-family: SF UI Display;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 130%;
`;

export const Header4 = styled.div`
//   font-family: SF UI Display;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
`;
export const Header5 = styled.div`
//   font-family: SF UI Display;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
export const Text = styled.div`
//   font-family: SF UI Display;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
`;

export const SmalText = styled.div`
//   font-family: SF UI Display;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: ${props => props.color ? props.color : '#212532'}
`;

export const BigText = styled.div`
//   font-family: SF UI Display;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #006ACC;
`;

export const DisplayRowSB = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;