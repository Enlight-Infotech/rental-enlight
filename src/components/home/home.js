import MapSection from "../contact-us/map/map"
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