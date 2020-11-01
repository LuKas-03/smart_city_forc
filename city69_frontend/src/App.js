import React from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from './hooks/auth.hook';
import { Provider } from 'react-redux';
import store from './configureStore'

export const App = () => {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token



  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        login,
        logout,
        isAuthenticated,
      }}
    >
      <Provider store = { store }>
        <Box>
          <Router><Routes/></Router>
        </Box>
      </Provider>
    </AuthContext.Provider>
  );
};

const Box = styled.div`
  // padding:20px 55px ;
`;
