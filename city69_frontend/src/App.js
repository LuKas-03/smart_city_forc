import React from "react";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from './hooks/auth.hook';

export const App = () => {
  const { token, login, logout, userId } = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated);



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
      <Box>
        <Router>{routes}</Router>
      </Box>
    </AuthContext.Provider>
  );
};

const Box = styled.div`
  // padding:20px 55px ;
`;
