import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import App from "./App";
import Sobre from "./Sobre";
import NotFound from "./pages/NotFound";
//import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/sobre" component={Sobre} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
