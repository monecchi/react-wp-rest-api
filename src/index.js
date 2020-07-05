import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Atomize requires Styletron 
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// Create a client engine instance for Styletron
const engine = new Styletron();

// App
import App from "./App";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";
//import registerServiceWorker from './registerServiceWorker';

// Index styles
//import "./index.scss";

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
  <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/sobre" component={Sobre} />
        <Route path="*" component={NotFound} />
      </Switch>
  </BrowserRouter>
  </StyletronProvider>,
  document.getElementById("root")
);