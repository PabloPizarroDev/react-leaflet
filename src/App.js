import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import MapView from "./components/MapView";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/map">
          <MapView />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
