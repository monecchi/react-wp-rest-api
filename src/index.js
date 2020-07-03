import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Atomize
//import { StyleReset } from "atomize";

// App
import App from "./App";
//import * as serviceWorker from './serviceWorker';
import Sobre from "./src/pages/Sobre";
import NotFound from "./src/pages/NotFound";
//import registerServiceWorker from './registerServiceWorker';

// App Main Styles
//import "./App.scss";

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
