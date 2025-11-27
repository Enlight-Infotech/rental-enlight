import ContactUs from "../contact-us/contactUs"
import MapSection from "../contact-us/map/map"
import Products from "../categories/categories"
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = `Enlight Rentals || Home`; // Set the document title
    }, []); 
    return <>
        <MapSection />
    </>
}

export default Home