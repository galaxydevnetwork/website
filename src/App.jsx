import React from 'react';
import './index.css';
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import PageError from "./Pages/404.jsx";
import Navbar from "./Nav.jsx";
import Footer from './Footer.jsx';
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
