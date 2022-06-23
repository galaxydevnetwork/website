import React from 'react';
import './index.css';
import Home from "./Pages/Home";
import Servers from "./Pages/Servers";
import PageError from "./Pages/404";
import Navbar from "./Nav";
import Footer from './Footer';
import About from './Pages/About.jsx';
import Announcement from './Announcement';
import { Routes, Route } from "react-router-dom";

function App() {
  return(
    <>
      <Navbar />
      <Announcement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servers" element={<Servers />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<PageError />} />
      </Routes>
      <Footer />
    </>
    )
}

export default App;
