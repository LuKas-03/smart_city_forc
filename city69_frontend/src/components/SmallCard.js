import React from 'react';
import styled from 'styled-components';
import { CircleProgress } from './CircleProgress';
import { Header4 } from '../styles';

export const SmallCard = (props) => {
    const {title, progress} = props;
    let color = '#27AE60';
    color = progress < 60 ? '#F2C94C' : color;
    color = progress < 40 ? '#EB5757' : color;

    return (
        <Container>
            <Box>
                <Header4>
                    {title}
                </Header4>
                <Left>
                    <CircleProgress
                        radius = {51}
                        stroke = {10}
                        progress = {progress}
                        firstColor = { color }
                    />
                    <BoxArrow>
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 17L9 9L0.999999 1" stroke="#A7ACBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </BoxArrow>
                </Left>
            </Box>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    background: #FFFFFF;
    border-radius: 10px;
    width: 333px;
    flex: 1;
    margin-bottom: 10px;
`;

const Box = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 0 25px;
`;

const BoxArrow = styled.div`
    margin-left: 22px;
`;

const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
