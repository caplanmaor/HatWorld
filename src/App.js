import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  let navi = useNavigate();
  function handleClick() {
    navi("http://localhost:3000/admin");
  }
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
