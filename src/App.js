import React from "react";
import Navbar from "./components/layout/Navbar";
import Boxes from "./Boxes";
import Foot from "./components/layout/Foot";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Boxes></Boxes>
      <Foot className="footer"></Foot>
      <div></div>
    </div>
  );
}

export default App;
