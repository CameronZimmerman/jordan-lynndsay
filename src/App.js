import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <Crawl />
          </Route>
          <Route path="/users">
            <Gallery />
          </Route>
        </Switch>
    </Router>
  );
}