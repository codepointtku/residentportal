import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Foot from "./components/layout/Foot";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
     
      <Foot className="footer"></Foot>
      <div></div>
    </div>
  );
}
export default App;
