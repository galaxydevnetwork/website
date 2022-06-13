import React from 'react';
import './index.css';
import Home from "./pages/Home";
import Servers from "./pages/Servers";
import PageError from "./pages/404"
import Navbar from "./Nav";
import { Routes, Route } from "react-router-dom";


function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servers" element={<Servers />} />
        <Route path="/*" element={<PageError />} />
      </Routes>
    </>
    )
}

export default App;