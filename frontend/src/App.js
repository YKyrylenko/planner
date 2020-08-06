import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import Router from "./components/router";

import "./App.css";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
