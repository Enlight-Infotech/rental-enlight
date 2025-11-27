import { useEffect } from "react";

const AboutUs = () => {
    useEffect(() => {
        document.title = `Enlight Rentals || About Us`;
    }, []); 
    return <>
        About Us
    </>
}

export default AboutUs