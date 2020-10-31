import React, { useState } from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import background from "../background.svg";
import { CheckBox } from "../components/CheckBox";
import { Header2, SmalText } from "../styles";
import { useHttp } from "../hooks/http.hook";

export const AuthPage = () => {
  const { request } = useHttp();

  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };
  const loginHandler = async () => {
    try {
      const data = await request("/users", "POST", { ...form });
      console.log("DATA", data);
      // auth.login(data.token, data.userId,form.email);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <Box>
      <Header />
      <Header2>Вход в систему</Header2>
      <Label>Логин</Label>
      <Input
        onChange={changeHandler}
        name="login"
        placeholder={"Ваш логин"}
      ></Input>
      <Label>Пароль</Label>

      <Input
        onChange={changeHandler}
        name="password"
        type="password"
        placeholder={"Введите пароль"}
      ></Input>

      <CheckBox onClick={()=>console.log("!!!!")}> Оставаться в системе</CheckBox>
      <Button onClick={loginHandler}>Войти в систему</Button>
    </Box>
  );
};
const Box = styled.div`
  background-image: url(${background});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 55px;
`;

const Input = styled.input`
  display: block;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  width: 350px;
  height: 48px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #fff;

  outline: none;
  &:focus {
    border: 1px solid #0078e7;
    // box-sizing: border-box;
    // box-shadow: 0px 1px 1px rgba(51, 154, 240, 0.1);
  }
`;
const Label = SmalText;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 251px;
  height: 46px;
  color: white;
  background: #0078e7;
  border-radius: 8px;
  cursor: pointer;
`;