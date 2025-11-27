import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/home";
import Products from "./components/categories/categories";
import AboutUs from "./components/about-us/aboutUs";
import ContactUs from "./components/contact-us/contactUs";
import NavBar from "./components/navbar";
import MapSection from "./components/contact-us/map/map";
import { useEffect, useState } from "react";

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch product data from localStorage
  const storedData = localStorage.getItem("productData");
    if (storedData) {
      setProductData(JSON.parse(storedData));
    }
  }, []);

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
          element={<Products productData={productData} />}
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
