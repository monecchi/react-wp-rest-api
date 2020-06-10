import React, { Component } from "react";
import { Link } from "react-router-dom";

// Custom components import
import NavbarNav from "../components/navbar/Navbar.js"; // custom component uses Bootstrap navbar

class NotFound extends Component {
  constructor() {
    super();
    this.state = {
      title: "Não Encontrado"
    };
  }

  render() {
    return (
      <View>
       <NavbarNav />
        <Container>
          <Row>
            <Col sm={12}>
              <p className="my-3">Não foi possível encontrar o conteúdo ou página</p>
            </Col>
          </Row>
        </Container>
        </View>
    );
  }
}

export default NotFound;
