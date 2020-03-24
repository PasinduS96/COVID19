import React from "react";
import sick from "../../img/sick.png";

import { Tab, Row, Col, Nav, Button } from "react-bootstrap";
import What from "./what";
import Which from "./which";
import How from "./how";

const Index = props => {
  return (
    <div
      style={{
        width: "80rem",
        margin: "0 auto",
        marginTop: "150px"
      }}
    >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">
                  <h3>මොකක්ද මේ කොරෝනා?</h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  <h3>මටත් කොරෝනා හැදිලද?</h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  <h3>කොහොමද අපි පරිස්සම් වෙන්නේ?</h3>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <What />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Which />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <How />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Index;
