import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Atomize requires Styletron 
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "development" ? void 0 : new DebugEngine();

// Create a client engine instance for Styletron
const engine = new Styletron();

// Atomize theming
import {
  ThemeProvider,
  DefaultTheme,
  StyleReset
} from "atomize";

const theme = {
  fontFamily: {
    primary:
      '"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    secondary:
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    code: "'Fira Mono','Roboto Mono', monospace"
  },
  colCount: 12,
  grid: {
    containerWidth: {
      xs: "540px",
      sm: "720px",
      md: "960px",
      lg: "1200px",
      xl: "1366px"
    },
    containerMaxWidth: {
      xl: "1366px"
    },
    gutterWidth: "16px",
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992, // 992
      xl: 1440 // 1200
    }
  },
  textSize: {
    size: {
      display3: "48px"
    },
    height: {
      display3: "56px"
    }
  },
  colors: {
    brandgray: "#F7F5F4",
    white: "#ffffff",
    dark: "#141b24",
    brand: "#FC0E36",
    brandAlt: "#EF2840",
    brandHover: "#ea1d2c",
    success: "#1BC160",
    successDark: "#36b37e",
    danger: "#FC0E36",
    softDanger: "#FED9DB",
    softSuccess: "#D7f0E5",
    warning: "#FCC246",
    info: "#3366FF"
  },
  rounded: {
    brandRadius: "20px"
  },
  shadows: {
    sm: "0 0.75rem 1.5rem rgba(18,38,63,.03)",
    lg_hover: "0 1rem 3rem rgba(31,45,61,.125)"
  },
  transition: {
    all: "background-color .1s ease, color .1s ease, box-shadow .1s ease, transform .1s ease"
  },
};

// App
import App from "./App";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";
//import registerServiceWorker from './registerServiceWorker';

// Index styles
//import "./index.scss";

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
  <ThemeProvider theme={theme}>
  <StyleReset />
  <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/sobre" component={Sobre} />
        <Route path="*" component={NotFound} />
      </Switch>
  </BrowserRouter>
  </ThemeProvider>
  </StyletronProvider>,
  document.getElementById("root")
);