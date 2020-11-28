import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import AuthPage from "./pages/AuthPage";
import { SelectCityPage } from "./pages/SelectCityPage";
import ParametrOfCityPage from "./pages/ParametrOfCityPage";
import CityPage from './pages/CityPage';
import { AdminPage } from "./pages/AdminPage";

export const useRoutes = ({isAuth}) => {
  console.log('isAuth');
  if (!isAuth) {
    return (
      <Switch>
        <Route exact path="/selectCity" component = {SelectCityPage}>
        </Route>
        <Route exact path="/city/:id" component = {CityPage}>
        </Route>
        <Route path="/city/:id/parametrs" component = {ParametrOfCityPage}>
        </Route>
        <Route path="/admin" component = {AdminPage}>
        </Route>
        <Redirect exact to="/selectCity" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
      <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

const mapStateToProps = ({user}) => ({
  isAuth: user.isAuth,
})

export default connect(mapStateToProps)(useRoutes);