import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./main/pages/Home";
import About from "./main/pages/About";
import GpsTrackerProduct from "./main/pages/GpsTrackerProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
