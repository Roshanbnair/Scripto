import react, { useEffect } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Dupe from "./pages/Dupe";


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ position: "relative",width:"100%" }} className="lexend-fontFamily">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<Dupe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
