import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "../private-route";

import Header from "../header";
import Calendar from "../../pages/calendar";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import TasksOfDay from "../../pages/tasks-of-day";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/calendar" component={Calendar} />
      <PrivateRoute
        exact
        path="/tasks/:year?/:month?/:day?"
        component={TasksOfDay}
        redirectTo="/calendar"
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
