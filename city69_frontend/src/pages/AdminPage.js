import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { AddingCities } from "../components/SettingsMenu/AddingCities";
import { AddingItteration } from "../components/SettingsMenu/AddingItteration";
import { Users } from "../components/SettingsMenu/Users";
export const AdminPage = () => {
  const [state, setstate] = useState({
    selectOption: "addingCities",
  });
  return (
    <Box>
        <Header/>
        <MainBlock>
      <OptionList>
        <div>Администрирование</div>
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
        <div>Редактирование данных</div>
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
      

      <SelectedOption>
        {state.selectOption === "addingCities" && <AddingCities />}
        {state.selectOption === "users" && <Users />}
        {state.selectOption === "addingItteration" && <AddingItteration />}
      </SelectedOption>
      </MainBlock>
    </Box>
  );
};

const SettingOption = styled.div`
  cursor: pointer;
  display:flex;
  align-items:center;
  height:40px;
  padding-left:20px;
  &:    hover{
      background-color:#F5F6FA;
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
