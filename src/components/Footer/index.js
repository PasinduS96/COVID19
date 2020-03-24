import React from "react";
import "../style.css";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "2px solid #E7E7E7",
  textAlign: "center",
  paddingTop: "10px",
  paddingLeft: "8px",
  paddingRight: "8px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%",
  paddingBottom: "10px"
};

var phantom = {
  display: "block",
  padding: "10px",
  height: "100px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}
        <div>
          <h6>
            Powered by Health Promotion Bureau & Department of Government
            Information - Sri Lanka
          </h6>
        </div>
        <div>
          <div class="footer-copyright text-center">
            © 2020 Copyright -
            <a
              href="https://www.linkedin.com/in/pasindu-senarathne-7b96a313a/"
              target="_blank"
            >
              {" "}
              Pasindu Senarathne
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
