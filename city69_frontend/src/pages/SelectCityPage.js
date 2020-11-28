import React,{useEffect} from "react";
import styled from "styled-components";
import { CityCard } from "../components/CityCard";
import { Header } from "../components/Header";
import mapimg from "../select-city-background.svg";
import ekb from "../Ekb.svg";
import msk from "../msk.svg";
import { useHttp } from "../hooks/http.hook";


export const SelectCityPage = () => {
   
  const {request}=useHttp()

  const fetchCities= async ()=>{
    const data=await request("/cities/","GET")
    console.log("DATA",data)
  }
  // fetchCities()

  useEffect(() => {
fetchCities()
  }, [])

  return (
    <Box>
      <Header />
      <MainBlock>
        <Select></Select>
        <HeaderText>Подключенные города</HeaderText>
        <Cities>
          <CityCard img={ekb}  cityId cityName={"Екатеринбург"} />
          <CityCard img={msk} cityId cityName={"Москва"} />
        </Cities>
      </MainBlock>
    </Box>
  );
};

const Box = styled.div`
  background-color: #f5f6fa;
  height: 100vh;
  padding: 20px 55px 0 55px;
`;
const MainBlock = styled.div`
  background-image: url(${mapimg});
  background-position: top left;
  background-repeat: no-repeat;
  margin: auto;
  width: 1320px;
  border-radius: 15px;
  height: 470px;
  margin-top: 32px;
  padding: 60px 30px;
`;
const Select = styled.input`
  width: 1200px;
  height: 60px;
  margin-bottom: 30px;
`;
const HeaderText = styled.div`
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 130%;
  margin-bottom: 44px;
`;
const Cities = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;
