import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { SelectCityPage } from "./pages/SelectCityPage";
import { CityInfoPage } from "./pages/CityInfoPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated = true) {
    return (
      <Switch>
        <Route path="/selectCity" exact>
          <SelectCityPage />
        </Route>
        <Route path="/cityInfo">
          <CityInfoPage />
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
