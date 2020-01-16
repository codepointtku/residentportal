import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Foot from "./components/layout/Foot";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Foot className="footer"></Foot>
        <div className="Container">
          <Switch>
            <Route exact path="/residentportal" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
