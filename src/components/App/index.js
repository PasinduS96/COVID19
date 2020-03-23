import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hospital from "../Hospital";
import Home from "../Home";

import Navbar from "../Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hospitals" component={Hospital} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
