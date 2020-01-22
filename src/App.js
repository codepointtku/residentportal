import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import NavbarDark from "./components/pages/NavbarDark";
import Foot from "./components/pages/Foot";
import "./App.scss";
//Pages
import Home from "./components/pages/Home";
import Residentalportal from "./components/pages/Residentportal";
import About from "./components/pages/About";
import Aspa from "./components/pages/Aspa";

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
          <Route path="/aspa" component={NavbarDark} />
        </Switch>
        <Switch>
          <Route exact path="/aspa" component={Aspa} />
        </Switch>
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
        <Switch>
          <Route path="/residentportal" component={Residentalportal} />
        </Switch>
        <Foot />
      </div>
    </BrowserRouter>
  );
}

export default App;
