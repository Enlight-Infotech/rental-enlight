import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Products from "./components/products/products";
import AboutUs from "./components/about-us/aboutUs";
import ContactUs from "./components/contact-us/contactUs";
import NavBar from "./components/navbar";
import MapSection from "./components/contact-us/map/map";
import { useEffect, useState } from "react";
import Categories from "./components/categories/categories";

function App() {

  return (
    <div>
      {/* Navigation Menu */}
      <NavBar />

      {/* Page Routing */}
      <div className="p-2">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/categories/:type"
          element={<Categories />}
        />

        <Route
          path="/products"
          element={<Products />}
        />
        
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/map" element={<MapSection />} />

        
      </Routes>
      </div>
    </div>
  );
}

export default App;
