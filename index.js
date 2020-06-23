import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// App Stuff
import App from "./App";
import Sobre from "./Sobre";
import NotFound from "./pages/NotFound";
//import registerServiceWorker from './registerServiceWorker';

// App Main Styles
import "./App.scss";

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
