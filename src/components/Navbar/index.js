import React from "react";
import "../style.css";

const Navbar = () => {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          COVID19 ව්‍යාප්තිය - ශ්‍රි ලංකාවේ නවතම තොරතුරු
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto" style={{ float: "right" }}>
            <a
              class="nav-item nav-link"
              href="https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd"
              target="_blank"
            >
              ලෝක සෞඛ්‍ය සංවිධානයේ තොරතුරු
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
