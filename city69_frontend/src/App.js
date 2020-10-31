import React from "react";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

export const App = () => {
  const routes = useRoutes(false);

  return (
    <Box>
      <Router>{routes}</Router>
    </Box>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));

const Box = styled.div`
  // padding:20px 55px ;
`;
