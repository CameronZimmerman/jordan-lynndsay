import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import Gallery from "./Gallery/Gallery.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}
