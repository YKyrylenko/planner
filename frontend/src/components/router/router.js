import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../header";
import Calendar from "../calendar";
import Login from "../login";
import Signup from "../signup";
import TasksOfDay from "../tasks-of-day";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/calendar" component={Calendar} />
      <Route exact path="/tasks/:year?/:month?/:day?" component={TasksOfDay} />
    </Switch>
  </BrowserRouter>
);

export default Router;
