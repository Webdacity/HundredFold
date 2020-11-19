import React from 'react';
import Slider from "react-slick";
import Img from 'gatsby-image';
import { Link } from "gatsby";
import classNames from "classnames";


// Styles, Images, Fonts
import styles from "../styles/components/landing.module.scss";

// Vendors
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Landing(props) {

    const wrapperStyles = {
        height: '100%',
    }

    const image = props.image;

    const Slide = (props) => {
        const slideClass = classNames(
            styles.slide,
            styles[props.align],
        )

        return (
            <div className={slideClass} >
                <div className={styles.overlay}>
                    <div className={styles.content}>
                        <div className={styles.inner}>
                            <h6>
                                {props.short}
                            </h6>
                            {props.text}
                            {props.linkTo ?
                                <button className={styles.button}>
                                    <Link to={props.linkTo}>
                                        {props.linkText}
                                    </Link>
                                </button>
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    class LandingSlider extends React.Component {

        render() {
            var settings = {
                dots: false,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 6000,
                draggable: true,
                cssEase: "linear",
                swipeToSlide: true
            };
            return (
                <Slider {...settings} className="slider">
                    {
                        props.slidesText.map((text, index) => {
                            return (
                                <div key={index}>
                                    <Slide
                                        {...props}
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
            <div className={styles.image}>
                <Img fluid={image.childImageSharp.fluid} style={wrapperStyles} />
            </div>
            <LandingSlider />
        </header>
    )
}


