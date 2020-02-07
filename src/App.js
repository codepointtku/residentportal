import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NavbarDark from "./components/navbar/navbarDark/NavbarDark";
import Foot from "./components/footer/Foot";
import "./components/styles/main.scss";
//Pages
import Home from "./components/home/Home";
import Residentalportal from "./components/residentportal/Residentportal";
import About from "./components/about/About";
import Aspa from "./components/pages/Aspa";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Foot />
          </Route>
        </Switch>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route path="/aspa">
            <NavbarDark />
            <Aspa />
            <Foot />
          </Route>
        </Switch>
        <Switch>
          <Route path="/about">
            <About />
            <Foot />
          </Route>
        </Switch>
        <Switch>
          <Route path="/residentportal">
            <NavbarDark />
            <Residentalportal />
            <Foot />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
