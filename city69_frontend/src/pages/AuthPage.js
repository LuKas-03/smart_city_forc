import React, { useState, useContext } from "react";
import { Header } from "../components/Header";
import styled from "styled-components";
import background from "../background.svg";
import { CheckBox } from "../components/CheckBox";
import { Header2, SmalText } from "../styles";
import { connect } from 'react-redux';
import actions from '../actions';

const AuthPage = (props) => {

  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const loginHandler = async () => {
    const { auth } = props;
    console.log('AUTH', form)
    auth(form);
  };

  return (
    <Box>
      <Header2 style={{margin:"40px 0"}}>Вход в систему</Header2>
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

      <CheckBox onClick={() => console.log("!!!!")}>
        {" "}
        Оставаться в системе
      </CheckBox>
      <Button onClick={loginHandler}>Войти в систему</Button>
    </Box>
  );
};

const mapDispatchToProps = dispatch => ({
  auth: (payload) => {
    dispatch(actions.userAuthenticate(payload));
  }
})

export default connect(null, mapDispatchToProps)(AuthPage);

const Box = styled.div`
  background-image: url(${background});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 55px;
`;

const Input = styled.input`
  margin-bottom: 23px;
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
  margin-top: 40px;
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
