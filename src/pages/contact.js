import React from 'react';
import classNames from "classnames";
import { graphql } from "gatsby";


// Components
import Layout from "../components/Layout";
import Landing from "../components/Landing.js";

// Styles, Images, Fonts
import styles from "../styles/pages/contact.module.scss";

export default function Contact({ data }) {

    // Slider Text
    const slidesText = [<h1> Looking for a <span>strategy company</span> to drive your african ventures?</h1>]

    let containerClass = classNames(
        "container",
        styles.container
    );


    return (
        <Layout
            pageMeta={{
                title: "Contact",
                description: "Get in touch with us to learn more.",
                canonical: "/"
            }}

        >

            <Landing image={data.slide} name="contact" slidesText={slidesText} short="Contact Us" multiple={true} />

            <section>
                <div className={containerClass}>
                    <div className={styles.grid}>
                        <div className={styles.details}>
                            <header className={styles.header}>
                                <h1>Contact Us</h1>
                                <div></div>
                                <p>At Hundredfold, we are focused on developing relationships that will benefit our internal teams, clients, partners and communities. We would love to hear from you, to discover how we could work together. </p>
                            </header>
                            <div className={styles.group}>
                                <h5>Call Us</h5>
                                <div>
                                    <a href="tel:+27 (0)10 005 2019">
                                        +27 (0)10 005 2019
                                    </a>
                                    <i className="icon-circle"></i>
                                </div>
                            </div>
                            <div className={styles.group}>
                                <h5>Email Us</h5>
                                <div>
                                    <a href="mailto:clientsservice@hundredfold.co.za">
                                        clientsservice@hundredfold.co.za
                                    </a>
                                    <i className="icon-circle"></i>
                                </div>
                            </div>
                            <div className={styles.group}>
                                <h5>Find Us</h5>
                                <div>
                                    <a href="https://g.page/Atrium-on-5th-4721?share" target="blank">
                                        Atrium on 5th, 9th Floor, 5th Street <br />
                                        Sandton, Johannesburg, 2196, South Africa
                                    </a>
                                    <i className="icon-circle"></i>
                                </div>

                            </div>
                            {/* <div className={styles.group}>
                                <h5>Follow Us</h5>
                                <div className={styles.social}>
                                    <a href="https://facebook.com/">
                                        <i className="icon-facebook"></i>
                                    </a>
                                    <a href="https://linkedin.com/">
                                        <i className="icon-linkedin"></i>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        <div className={styles.form}>
                            <div className={styles.header}>
                                <h3>Send us a message</h3>
                                <p>Please contact us for further information and enquiries.</p>
                            </div>
                            <form name="contact" method="post" data-netlify="true">
                                <input type="hidden" name="form-name" value="contact" />
                                <div className={styles.group}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" required placeholder="Your Name" />
                                </div>
                                <div className={styles.group}>
                                    <label htmlFor="name">Email</label>
                                    <input type="email" name="email" required placeholder="Your Email" />
                                </div>
                                <div className={`${styles.group} ${styles.textarea}`}>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" placeholder="Start typing here..." required></textarea>
                                </div>
                                <button type="submit">send message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.map}>
                    <iframe title="map" src="https://snazzymaps.com/embed/269673"></iframe>
                </div>






            </section>
        </Layout>
    )
}

export const query = graphql`
  query ContactSlideImages{
    slide: file(relativePath: { eq: "slides/contact/slide1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`