import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NavbarDark from "./components/layout/NavbarDark";
import Home from "./components/pages/Home";
import Foot from "./components/layout/Foot";
import Residentportal from "./components/pages/Residentportal";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Navbar} />
        </Switch>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/residentportal" component={NavbarDark} />
        </Switch>
        <Switch>
          <Route path="/residentportal" component={Residentportal} />
        </Switch>
        <Foot />
      </div>
    </BrowserRouter>
  );
}
export default App;
