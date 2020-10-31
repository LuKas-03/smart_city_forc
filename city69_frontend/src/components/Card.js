import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircleProgress } from './CircleProgress';
import { Header4, SmalText, Text, LinkStyled } from '../styles';

export const Card = props => {
    let { title, lowСriterion, link, progress} = props;
    progress = +progress;

    progress = 70;

    let color = '#27AE60';
    color = progress < 60 ? '#F2C94C' : color;
    color = progress < 40 ? '#EB5757' : color;

    title = 'Жилье и прилегающие пространтсва'
    lowСriterion = 'Современность и актуальdghgfhdfghdfghdность'

    return (
        <Container>
            <Box>
                <Left>
                    <Header4>{ title }</Header4>
                    <SmalText>{ `Низкий балл «${lowСriterion}»` }</SmalText>
                    <LinkStyled to = {link}>
                        <Text>{`Критерии оценки`}
                            <svg style = { { marginLeft: '10px' } } width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464466C23.9763 0.269204 23.6597 0.269204 23.4645 0.464466C23.2692 0.659728 23.2692 0.976311 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.7308 23.9763 7.7308 24.1716 7.53553L27.3536 4.35355ZM0 4.5H27V3.5H0L0 4.5Z" fill="#006ACC"/>
                            </svg>
                        </Text>
                    </LinkStyled>
                </Left>
                <Right>
                    <CircleContainer>
                        <CircleProgress radius = { 75 } stroke = {14} progress = { progress } firstColor = { color } fontSize = {28}/>
                    </CircleContainer>
                </Right>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 10px 20px 10px;
    display: flex;
    flex: 1;
`;

const Box = styled.div`
    height: 190px;
    width: 100%;
    background-color: #fff;    
    border-radius: 10px;
    transition: box-shadow 0.2s ease-out;

    ${Container}:hover & {
        box-shadow: 2px 2px 20px rgba(33, 37, 50, 0.08);
    }
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0px 20px 25px;

`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
`;

const CircleContainer = styled.div`
    margin-right: -5px;
`;
