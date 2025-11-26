import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/home";
import Products from "./components/products/product";
import AboutUs from "./components/about-us/aboutUs";
import ContactUs from "./components/contact-us/contactUs";
import NavBar from "./components/navbar";
import { productData } from "./data/productData";
import MapSection from "./components/contact-us/map/map";

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
          path="/products/:type"
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
