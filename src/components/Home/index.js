import React from "react";
import CardTop from "../CardDeckTop";
import Maps from "../Map";
import Hospitals from "../Hospital";

import Chart from "../Charts";
import Emergency from "../Emergency";

import "../style.css";

export default function Index(props) {
  return (
    <diV>
      <div className="rowC">
        <div
          className="divC"
          style={{ marginLeft: "5rem", marginRight: "5rem" }}
        >
          <CardTop />
        </div>
        <div
          style={{
            marginLeft: "2rem",
            marginTop: "140px",
            marginRight: "2rem"
          }}
        >
          <Chart />
        </div>
      </div>

      <div className="rowC">
        <div style={{ marginLeft: "8rem", marginRight: "5rem" }}>
          <Maps />
          <Emergency />
        </div>

        <div
          style={{
            marginLeft: "4rem",
            marginBottom: "5rem",
            marginTop: "100px",
            marginRight: "20px"
          }}
        >
          <Hospitals />
        </div>
      </div>
    </diV>
  );
}
