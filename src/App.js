import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Hospital from "./components/Hospital";
import Home from "./components/Home";
import Symptoms from "./components/Symptoms";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hospitals" component={Hospital} />
          <Route exact path="/HealthAdvices" component={Symptoms} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
