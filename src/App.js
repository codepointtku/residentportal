import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Foot from "./components/layout/Foot";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import "./App.scss";
//Pages
import Home from "./components/pages/Home";
import Residentalportal from "./components/pages/Residentportal";
import About from "./components/pages/About";

class App extends Component {
  render( ) {
    return (
     
      <Router>
        <Navbar/>
        <div className="App">
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Residentalportal" component={Residentalportal} />
            <Route exact path="/About" component={About} />
          </Switch>
          <Foot className="footer"></Foot>
        </div>
      </Router>
    );
  }
}

export default App;
