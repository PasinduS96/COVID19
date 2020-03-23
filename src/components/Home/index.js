import React from "react";
import CardTop from "../CardDeckTop";
import Maps from "../Map";
import Hospitals from "../Hospital";
import Footer from "../Footer";

import "../style.css";

export default function index() {
  return (
    <div>
      <div className="divC">
        <CardTop />
      </div>
      <hr />
      <div align="center" className="form-inline">
        <Maps />
        <Hospitals />
      </div>
      <Footer />
    </div>
  );
}
