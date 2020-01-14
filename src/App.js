import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AverageReport from "./AverageReport";
import Dashboard from "./Dashboard";

const App = () => (
  <HashRouter basename="/parse-spike">
    <Switch>
      <Route path="/average">
        <AverageReport />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
