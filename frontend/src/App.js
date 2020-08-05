import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import { rootSaga } from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

import Header from "./components/header/header";
import Calendar from "./components/calendar/calendar";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import TasksOfDay from "./components/tasks-of-day";

import "./App.css";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/calendar" component={Calendar} />
            <Route
              exact
              path="/tasks/:year?/:month?/:day?"
              component={TasksOfDay}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
