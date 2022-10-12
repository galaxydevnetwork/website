import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import DrawerAppBar from "./components/Nav.jsx";

export default function App() {
  return (
    <>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
