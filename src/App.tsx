import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";

import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navigation />
      <div style={{}}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
