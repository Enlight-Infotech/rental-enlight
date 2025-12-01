import { useEffect } from "react";
import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel";

export default function Testimonial() {
    useEffect(() => {
        $(document).ready(function () {
            $('.items').slick({
                infinite: true,
                speed: 800,
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }, []);

    const testimonials = [
        {
            id: 1,
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            name: "Jane Doe",
            role: "CEO, Example Company",
            img: "https://codingyaar.com/wp-content/uploads/square-headshot-1.png"
        },
        {
            id: 2,
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            name: "June Doe",
            role: "CTO, Example Company",
            img: "https://codingyaar.com/wp-content/uploads/square-headshot-2.png"
        },
        {
            id: 3,
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            name: "John Doe",
            role: "Founder, Example Company",
            img: "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
        },
        {
            id: 3,
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            name: "John Doe",
            role: "Founder, Example Company",
            img: "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
        },
        {
            id: 3,
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            name: "John Doe",
            role: "Founder, Example Company",
            img: "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
        },
        {
            id: 3,
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            name: "John Doe",
            role: "Founder, Example Company",
            img: "https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg"
        },

        
    ];

    return (
        <div style={{background: '#eff3f9', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '32px 0 32px 0'}} className="container-fluid">
            <div className="items">
                {testimonials.map((item) => {
                    return (
                        <div className="card-testimonial">
                            <div className="card-body-testimonial">
                                <h4 className="card-title"><img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" /></h4>

                                <div className="template-demo">
                                    <p>{item.text}</p>
                                </div>

                                <hr />

                                <div className="row">

                                    <div className="col-sm-2">
                                        <img className="profile-pic" src="https://img.icons8.com/bubbles/100/000000/edit-user.png" />
                                    </div>

                                    <div className="col-sm-10">
                                        <div className="profile">
                                            <h4 className="cust-name">{item.name}</h4>
                                            <p className="cust-profession">{item.role}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    );
}
