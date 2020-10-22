import React from "react";
import Slider from "react-slick";

// Components
import Slide from "../components/Slide"

// Styles, Images, Fonts

// Vendors
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/slider.scss"


export default class SimpleSlider extends React.Component {
    render() {
        var settings = {
            customPaging: function (i) {
                return (
                    <span></span>
                );
            },
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            // autoplay: true,
            // autoplaySpeed: 5000,
            draggable: true,
            cssEase: "linear",
            pauseOnHover: true,
            swipeToSlide: true
        };
        return (
            <Slider {...settings} className="slider">
                <div>
                    <Slide
                        heading={<h1>Specialized Power &amp; <br /> Control Panel Building</h1>}
                        text="We manufacture a full range of electrical panels for almost any application."
                        linkTo="/services"
                        linkText="Our Services"
                        number="one"
                    />
                </div>
                <div>
                    <Slide
                        heading={<h1>Turnkey Control <br /> Panel Solutions</h1>}
                        text="We offer turney projects in all industries."
                        linkTo="/services"
                        linkText="Our Services"
                        number="two"
                    />
                </div>
                <div>
                    <Slide
                        heading={<h1>We Offer Consulting, Integration <br /> Consulting Services</h1>}
                        text="Looking for experienced engineers for your next control panel project?"
                        linkTo="/contact"
                        linkText="Contact Us"
                        number="three"
                    />
                </div>
            </Slider>
        );
    }
}