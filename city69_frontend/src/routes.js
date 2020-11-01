import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import AuthPage from "./pages/AuthPage";
import { SelectCityPage } from "./pages/SelectCityPage";
import CityInfoPage from "./pages/CityInfoPage";
import CityInfoDetails from './pages/CityInfoDetails';

export const useRoutes = ({isAuth}) => {
  console.log('isAuth');
  if (isAuth) {
    return (
      <Switch>
        <Route exact path="/cityInfo" component = {CityInfoPage}>
        </Route>
        <Route path="/cityInfo/:id" component = {CityInfoDetails}>
        </Route>
        <Redirect exact to="/cityInfo" />
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