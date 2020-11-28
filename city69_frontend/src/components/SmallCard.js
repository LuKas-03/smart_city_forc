import React from 'react';
import styled from 'styled-components';
import { CircleProgress } from './CircleProgress';
import { Header4 } from '../styles';

export const SmallCard = (props) => {
    const { title, value, type } = props;
    let typeValue = 0;
    switch(type) {
        case 'common':
            typeValue = `${value || 0}`;
            break;
        case 'amount':
            typeValue = `${value || 0}%`;
            break;
        case 'binary':
            typeValue = 'binary';
    }


    return (
        <Container>
            <Box>
                <Header4>
                    {title}
                </Header4>
                <Left>
                    <Value>
                        {type === 'binary' ?
                        value !== 0 ? 
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 0C20.6971 0 26.6667 5.96954 26.6667 13.3333C26.6667 20.6971 20.6971 26.6667 13.3333 26.6667C5.96954 26.6667 0 20.6971 0 13.3333C0 5.96954 5.96954 0 13.3333 0ZM13.3333 2C7.07411 2 2 7.07411 2 13.3333C2 19.5926 7.07411 24.6667 13.3333 24.6667C19.5926 24.6667 24.6667 19.5926 24.6667 13.3333C24.6667 7.07411 19.5926 2 13.3333 2Z" fill="#27AE60"/>
                        <path d="M8.61727 10.2796C8.2473 9.90682 7.64746 9.90682 7.27749 10.2796C6.90752 10.6524 6.90752 11.2568 7.27749 11.6295L12.3301 16.7204C12.7001 17.0932 13.2999 17.0932 13.6699 16.7204L18.7225 11.6295C19.0925 11.2568 19.0925 10.6524 18.7225 10.2796C18.3526 9.90682 17.7527 9.90682 17.3828 10.2796L13 14.6955L8.61727 10.2796Z" fill="#27AE60"/>
                        </svg> :
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10L14.335 14.335M14.335 14.335L18.67 18.67M14.335 14.335L10 18.67M14.335 14.335L18.67 10M27.67 14.335C27.67 21.6997 21.6997 27.67 14.335 27.67C6.97028 27.67 1 21.6997 1 14.335C1 6.97028 6.97028 1 14.335 1C21.6997 1 27.67 6.97028 27.67 14.335Z" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        :
                        <TextValue>
                            {typeValue}
                        </TextValue>
                    }
                    </Value>
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
    padding: 15px 25px;
`;

const TextValue = styled.div`
    color: #00A2FF;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 150%;
    text-align: right;
`;

const Value = styled.div`
    padding-left: 20px;
`;

const Left = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
