import React from "react";
import sick from "../../img/sick.png";

import { Tabs, Tab, Row, Col, Nav, Button } from "react-bootstrap";
import What from "./what";
import Which from "./which";
import How from "./how";

const Index = props => {
  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        marginTop: "150px",
        float: "center"
      }}
    >
      <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        <Tab eventKey="home" title="මොකක්ද මේ කොරෝනා?">
          <What />
        </Tab>
        <Tab eventKey="profile" title="අදුන ගමු">
          <Which />
        </Tab>
        <Tab eventKey="contact" title="අපි පරිස්සම් වෙමු!">
          <How />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Index;
