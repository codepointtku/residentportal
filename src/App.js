import React from "react";
import Navbar from "./components/layout/Navbar";
import Boxes from "./components/layout/Boxes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Boxes></Boxes>
    </div>
  );
}
export default App;
