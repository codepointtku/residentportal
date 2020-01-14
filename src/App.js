import React from "react";
import Navbar from "./components/layout/Navbar";
import Boxes from "./Boxes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Boxes></Boxes>
      <div></div>
    </div>
  );
}

export default App;
