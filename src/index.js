import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/index.css";
import Store from "./Store/Store";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider formStore={new Store()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
