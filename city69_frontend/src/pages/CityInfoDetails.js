import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SmallCard } from '../components/SmallCard';
import { Line } from 'react-chartjs-2';
import { ButtonSelector } from '../components/ButtonSelector';
import { Header } from '../components/Header';
import { SmalText, LinkStyled, DisplayRowSB, Header2, Header4, Header3, Header5 } from '../styles';
import { connect } from 'react-redux';
import actions from "../actions";

let data = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.1,
        borderColor: '#00A2FF',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      }
    ]
  };

  const criteria = [
    {}, {}, {} ,{}, {}, {}
]

const CityInfoDetails = (props) => {
    const { subgroups, history, match, loadSubgroups, loadHistory } = props;

    const [labels, setLabels] = useState([]);
    const [indicators, setIndicators] = useState([]);

    useEffect(() => {
        loadSubgroups(match.params.id);
    }, [match.params.id])

    useEffect(() => {
        if(subgroups[0]) {
            loadHistory(subgroups[0]._id);
        }
    }, [subgroups.length])

    useEffect(() => {
        if(history.length) {
            const labels = history.map(elem => {
                let date = new Date(elem.date);
                return `${date.getMonth() + 1}.${date.getFullYear()}`;
            })
            setLabels(labels);

            console.log(labels);
            const data = history.map(elem => +elem.index);
            console.log(data.reverse())
            setIndicators(data);
        }
    }, [history.length])


  data.labels = labels;
  data.datasets[0].data = indicators;
  return (
    <Box>
        <Header />
        <MainContainer>
            <LinkStyled to = '/cityInfo'>
                <SmalText style = { {color: '#006ACC'} }>
                    <svg style = { { marginRight: '10px', transform: 'rotate(-180deg)' } } width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464466C23.9763 0.269204 23.6597 0.269204 23.4645 0.464466C23.2692 0.659728 23.2692 0.976311 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.7308 23.9763 7.7308 24.1716 7.53553L27.3536 4.35355ZM0 4.5H27V3.5H0L0 4.5Z" fill="#006ACC"/>
                    </svg>
                    {`Все пространства города`}
                </SmalText>
            </LinkStyled>
            <DisplayRowSB>
                <Header2>Жилье и прилегающие пространства</Header2>
                <DisplayRowSB>
                    <Header2 style = { { color: '#00A2FF' } }>47</Header2>
                    <Header4 style = { { marginBottom: '2px' } }>/ 100</Header4>
                </DisplayRowSB>
            </DisplayRowSB>

            <DisplayRowSB style = {{ margin: '10px 0 44px 0' }}>
                <Header5>ямало-ненецкий автономный округ</Header5>
                <Header5>рейтинг пространства</Header5>
            </DisplayRowSB>
            <ButtonSelector>
                Текущий момент
            </ButtonSelector>
            <ButtonSelector 
                color = '#13161F'
                background = 'rgba(211, 214, 223, 0.33)'
                style = {{ marginLeft: '25px' }}
            >
                Сравнить статистику
            </ButtonSelector>
            <StatsContainer>
                <Cards>
                    {
                        subgroups && subgroups.map(cr =>
                             <SmallCard
                                key= {cr._id}
                                progress = {cr.index}
                                title = {cr.name}
                             />
                        )
                    }
                </Cards>
                <Graph>
                    <Line data={data}
                       options = { {  maintainAspectRatio : false  } }
                    />
                </Graph>
            </StatsContainer>
        </MainContainer>
    </Box>
  );
};

const mapStateToProps = ({ city }) => ({
    subgroups: city.subgroups,
    history: city.history,
})

const mapDispatchToProps = dispatch => ({
    loadSubgroups: (payload) => {
        dispatch(actions.cityLoadSubgroups(payload));
    },
    loadHistory: (payload) => {
        dispatch(actions.cityLoadHistory(payload));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CityInfoDetails);

const Box = styled.div`
  background-color: #F5F6FA;
  height: 100vh;
  padding: 20px 55px 0 55px;
  overflow-y: hidden;
`;

const MainContainer = styled.div`
  padding: 22px 65px 134px 65px;
`;

const StatsContainer = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;

`;

const Cards = styled.div`
    overflow-y: auto;
    padding: 0 19px 0 0px;
    max-height: 60vh;
    width: 460px;
`;

const Graph = styled.div`
    margin-left: 43px;
    height: 60vh;
    width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
`;
