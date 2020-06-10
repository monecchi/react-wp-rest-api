import React, { Component } from "react";
import { ReactDOM } from "react-dom";

// Bootstrap stuff
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

// Custom components import
import NavbarNav from "./components/navbar/Navbar.js"; // custom component uses Bootstrap navbar

// Importing the Bootstrap CSS
// Import Custom CSS
import "./App.scss";

class Sobre extends Component {
 render() {
 return (
    <div className="App">
      <NavbarNav />
      <p className="App-intro">
            Exemplo de Página Sobre :)
       </p>
    </div>
 );
 }
}
export default Sobre;