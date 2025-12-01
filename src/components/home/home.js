import MapSection from "../contact-us/map/map"
import { useEffect } from "react";
import StatsSection from "./stats";
import AboutUs from "../about-us/aboutUs";
import Testimonial from "./testimonial";

const Home = () => {
    useEffect(() => {
        document.title = `Enlight Rentals || Home`; // Set the document title
    }, []);
    return <>
        <StatsSection />
        <AboutUs />
        <Testimonial />
        <MapSection />
    </>
}

export default Home