import React from 'react';
import Slider from "react-slick";
import Img from 'gatsby-image';
import { Link } from "gatsby";

// Styles, Images, Fonts
import styles from "../styles/components/landing.module.scss";

// Vendors
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Landing(props) {

    const wrapperStyles = {
        height: '100%',
    }

    const images = props.images;

    const Slide = (props) => {
        let slideNumber = `slide${props.number + 1}`;
        console.log(slideNumber)

        return (
            <div className={styles.slide} >
                <div className={styles.image}>
                    <Img fluid={images.slide1.childImageSharp.fluid} style={wrapperStyles} />
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.content}>
                    <h6>
                        {props.short}
                    </h6>
                    {props.text}
                    {/* <button className="button">
                        <Link to={props.linkTo}>
                            {props.linkText}
                        </Link>
                    </button> */}
                </div>
            </div>
        )
    }

    class LandingSlider extends React.Component {

        render() {
            var settings = {
                dots: false,
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
                    {
                        props.slidesText.map((text, index) => {
                            return (
                                <div key={index}>
                                    <Slide
                                        short={props.short}
                                        text={text}
                                        number={index}
                                    />
                                </div>
                            )
                        })
                    }
                </Slider >
            );
        }
    }

    return (
        <header className={styles.landing}>
            <LandingSlider />
        </header>
    )
}


