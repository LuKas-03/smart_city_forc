import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { AddingCities } from "../components/SettingsMenu/AddingCities";
import { AddingItteration } from "../components/SettingsMenu/AddingItteration";
import { Users } from "../components/SettingsMenu/Users";
import { useHttp } from "../hooks/http.hook";
import { Header3, Header4 } from "../styles";

export const AdminPage = () => {
  const [state, setstate] = useState({
    selectOption: "addingCities",
  });

  const { request } = useHttp();

  const addCity = async () => {
    const data = await request("/cities/", "POST", {
      name: "Москва",
      size: "1202030",
      population: "1231234",
    });
    console.log("DATA", data);
  };
  return (
    <Box>
      <Header />
      <MainBlock>
        <OptionList>
          <Header4 style={{ textAlign: "center" }}> Администрирование</Header4>
          <SettingOption
            onClick={() => setstate({ ...state, selectOption: "addingCities" })}
          >
            Подключенные города
          </SettingOption>
          <SettingOption
            onClick={() =>
              setstate({ ...state, selectOption: "addingItteration" })
            }
          >
            Подключенные иттерации
          </SettingOption>
          <SettingOption
            onClick={() => setstate({ ...state, selectOption: "users" })}
          >
            Пользователи
          </SettingOption>
          <Header4 style={{ textAlign: "center" }}>
            Редактирование данных
          </Header4>
          <SettingOption
            onClick={() => setstate({ ...state, selectOption: "users" })}
          >
            Редактирование направлений
          </SettingOption>
          <SettingOption
            onClick={() => setstate({ ...state, selectOption: "users" })}
          >
            Редактирование индексов
          </SettingOption>
        </OptionList>
        <NameInput></NameInput>
        <BlueButton onClick={addCity}>Добавить</BlueButton>
        <SelectedOption>
          {state.selectOption === "addingCities" && <AddingCities />}
          {state.selectOption === "users" && <Users />}
          {state.selectOption === "addingItteration" && <AddingItteration />}
        </SelectedOption>
      </MainBlock>
    </Box>
  );
};
const NameInput = styled.input`
  display: inline-block;
  width:810px;
  height:60px;
`;
const BlueButton = styled.div`
  display: inline-block;
  width: 189px;
  height: 40px;
  background-color: #00a2ff;
  cursor: pointer;
  color: white;
`;

const SettingOption = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  &: hover {
    background-color: #f5f6fa;
    border-left: 5px solid blue;
  }
`;

const Box = styled.div`
  background-color: #f5f6fa;
  height: 100vh;
  padding: 20px 55px 0 55px;
`;

const MainBlock = styled.div``;
const OptionList = styled.div`
  display: inline-block;
  background-color: white;
  width: 336px;
  height: 587px;
  margin-right: 20px;
`;
const SelectedOption = styled.div`
  display: inline-block;
  width: 500px;
  height: 500px;
  background-color: white;
`;
