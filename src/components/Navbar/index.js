import React, { useState } from "react";
import "../style.css";
import logo from "../../img/Logo.png";
import Button from "react-bootstrap/Button";
import Modal from "../Contacts";

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-light bg-light">
      <a class="navbar-brand" href="/">
        <img src={logo} className="link-logo" alt="" />
      </a>
      <div>
        <a href="/HealthAdvices" class="btn btn-outline-danger">
          <b>කොරෝනා ගැන දැනගන්න, ප්‍රවේශම් වන්න!</b>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
