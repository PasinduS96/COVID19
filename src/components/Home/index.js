import React from "react";
import CardTop from "../CardDeckTop";
import Maps from "../Map";
import Hospitals from "../Hospital";

import Chart from "../Charts";
import Emergency from "../Emergency";

import "../style.css";

export default function Index(props) {
  return (
    <div
      className="container"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <CardTop />
      <hr />
      <Chart />
      <hr />
      <Maps />
      <hr />
      <Emergency />
      <hr />
      <Hospitals />
    </div>
  );
}
