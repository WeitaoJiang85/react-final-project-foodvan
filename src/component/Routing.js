import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Errorpage from "../pages/Errorpage";
import Gallery from "../pages/Gallery";
import Thankyoupage from "../pages/Thankyoupage";
import Cart from "../pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Routing() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Errorpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thanks" element={<Thankyoupage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
