import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AverageReport from "./AverageReport";
import Dashboard from "./Dashboard";

const App = () => (
  <Router>
    <Switch>
      <Route path="/average">
        <AverageReport />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  </Router>
);

export default App;
