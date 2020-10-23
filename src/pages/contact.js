import React from 'react';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";

// Styles, Images, Fonts
import styles from "../styles/pages/contact.module.scss";

export default function Contact() {
    return (
        <Layout
            pageMeta={{
                title: "Contact",
                description: "An Africa Focused Strategy Company",
                canonical: "/"
            }}
        >
            <section>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.details}>
                            <header className={styles.header}>
                                <h1>Contact Us</h1>
                                <div></div>
                                <p>At Hundredfold, we are focused on developing relationships that will benefit our internal teams, clients, partners and communities. We would love to hear from you, to discover how we could work together. </p>
                            </header>
                            <div className={styles.group}>
                                <h5>Call Us</h5>
                                <a href="tel:+27 79 549 1195">
                                    <span></span>
                                    +27 79 549 1195
                                    </a>
                            </div>
                            <div className={styles.group}>
                                <h5>Email Us</h5>
                                <a href="mailto:clientsservice@hundredfold.co.za">
                                    <span></span>
                                    clientsservice@hundredfold.co.za
                                    </a>
                            </div>
                            <div className={styles.group}>
                                <h5>Find Us</h5>
                                <a href="https://g.page/Atrium-on-5th-4721?share" target="blank">
                                    <span></span>
                                    Atrium on 5th, 9th Floor, 5th Street <br />
                                        Sandton, Johannesburg, 2196, South Africa
                                    </a>
                            </div>
                            <div className={styles.group}>
                                <h5>Follow Us</h5>
                                <div className={styles.social}>
                                    <a href="https://facebook.com/">
                                        <i className="icon-facebook"></i>
                                    </a>
                                    <a href="https://linkedin.com/">
                                        <i className="icon-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.header}>
                                <h3>Send us a Message</h3>
                                <p>Please contact us for further information and enquiries.</p>
                            </div>
                            <form name="contact" method="POST" data-netlify="true">
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
            </section>
        </Layout>
    )
}
