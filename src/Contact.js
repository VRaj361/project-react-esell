import React from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Helmet } from 'react-helmet'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
export const Contact = () => {
    return (
        <div>
            <Precss/>

            {/* navbar */}
            <Navbar />

            {/* first load login page */}
            <div className="app-content">

                {/* section 1 */}
                <SectionLinks nextLink="Contact" />

                <div>
                    <div className="u-s-p-b-60">
                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="g-map">
                                            <div id="map" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 2 ======*/}
                    {/*====== Section 3 ======*/}
                    <div className="u-s-p-b-60">
                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                        <div className="contact-o u-h-100">
                                            <div className="contact-o__wrap">
                                                <div className="contact-o__icon"><i className="fas fa-phone-volume" /></div>
                                                <span className="contact-o__info-text-1">LET'S HAVE A CALL</span>
                                                <span className="contact-o__info-text-2">(+0) 900 901 904</span>
                                                <span className="contact-o__info-text-2">(+0) 900 901 902</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                        <div className="contact-o u-h-100">
                                            <div className="contact-o__wrap">
                                                <div className="contact-o__icon"><i className="fas fa-map-marker-alt" /></div>
                                                <span className="contact-o__info-text-1">OUR LOCATION</span>
                                                <span className="contact-o__info-text-2">4247 Ashford Drive VA-20006</span>
                                                <span className="contact-o__info-text-2">Virginia US</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                        <div className="contact-o u-h-100">
                                            <div className="contact-o__wrap">
                                                <div className="contact-o__icon"><i className="far fa-clock" /></div>
                                                <span className="contact-o__info-text-1">WORK TIME</span>
                                                <span className="contact-o__info-text-2">5 Days a Week</span>
                                                <span className="contact-o__info-text-2">From 9 AM to 7 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 3 ======*/}
                    {/*====== Section 4 ======*/}
                    <div className="u-s-p-b-60">
                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact-area u-h-100">
                                            <div className="contact-area__heading">
                                                <h2>Get In Touch</h2>
                                            </div>
                                            <form className="contact-f" method="post" action="index.html">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 u-h-100">
                                                        <div className="u-s-m-b-30">
                                                            <label htmlFor="c-name" />
                                                            <input className="input-text input-text--border-radius input-text--primary-style" type="text" id="c-name" placeholder="Name (Required)" required /></div>
                                                        <div className="u-s-m-b-30">
                                                            <label htmlFor="c-email" />
                                                            <input className="input-text input-text--border-radius input-text--primary-style" type="text" id="c-email" placeholder="Email (Required)" required /></div>
                                                        <div className="u-s-m-b-30">
                                                            <label htmlFor="c-subject" />
                                                            <input className="input-text input-text--border-radius input-text--primary-style" type="text" id="c-subject" placeholder="Subject (Required)" required /></div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 u-h-100">
                                                        <div className="u-s-m-b-30">
                                                            <label htmlFor="c-message" /><textarea className="text-area text-area--border-radius text-area--primary-style" id="c-message" placeholder="Compose a Message (Required)" required defaultValue={""} /></div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button className="btn btn--e-brand-b-2" type="submit">Send Message</button></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 4 ======*/}
                </div>

            </div>
            {/* load footer */}
            <Footer/>
            <Prejs/>
        </div>
    )
}