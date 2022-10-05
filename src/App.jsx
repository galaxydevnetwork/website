import React from 'react';
import './index.css';
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import PageError from "./Pages/404";
import Navbar from "./Nav";
import Footer from './Footer';
import About from './Pages/About.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageError />} />
      </Routes>
      <Footer />
    </>
    )
}

export default App;
