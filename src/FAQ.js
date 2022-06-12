import React from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
export const FAQ = () => {
    return (
        <div>

            <Precss />


            {/* navbar */}
            <Navbar />

            {/* first load login page */}
            <div className="app-content">

                {/* section 1 */}
                <SectionLinks nextLink="Login" />
                <div>
                    {/*====== Section 2 ======*/}
                    <div className="u-s-p-b-60">
                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="faq">
                                            <h3 className="faq__heading">FREQUENTLY QUESTIONS</h3>
                                            <h3 className="faq__heading">Below are frequently asked questions, you may find the answer for yourself.</h3>
                                            <p className="faq__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
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
                                    <div className="col-lg-12">
                                        <div id="faq-accordion-group">
                                            <div className="faq__list">
                                                <a className="faq__question collapsed" href="#faq-1" data-toggle="collapse">How can I get discount coupon ?</a>
                                                <div className="faq__answer collapse" id="faq-1" data-parent="#faq-accordion-group">
                                                    <p className="faq__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                            <div className="faq__list">
                                                <a className="faq__question collapsed" href="#faq-2" data-toggle="collapse">Do I need to create account for buy products ?</a>
                                                <div className="faq__answer collapse" id="faq-2" data-parent="#faq-accordion-group">
                                                    <p className="faq__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                            <div className="faq__list">
                                                <a className="faq__question collapsed" href="#faq-3" data-toggle="collapse">How can I track my order ?</a>
                                                <div className="faq__answer collapse" id="faq-3" data-parent="#faq-accordion-group">
                                                    <p className="faq__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                            <div className="faq__list">
                                                <a className="faq__question collapsed" href="#faq-4" data-toggle="collapse">What is the payment security system ?</a>
                                                <div className="faq__answer collapse" id="faq-4" data-parent="#faq-accordion-group">
                                                    <p className="faq__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                            <div className="faq__list">
                                                <a className="faq__question collapsed" href="#faq-5" data-toggle="collapse">What policy do you have for product sell ?</a>
                                                <div className="faq__answer collapse" id="faq-5" data-parent="#faq-accordion-group">
                                                    <p className="faq__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                            <div className="faq__list">
                                                <a className="faq__question collapsed" href="#faq-6" data-toggle="collapse">How I Return back my product ?</a>
                                                <div className="faq__answer collapse" id="faq-6" data-parent="#faq-accordion-group">
                                                    <p className="faq__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                            <div className="faq__list">
                                                <a className="faq__question collapsed" href="#faq-7" data-toggle="collapse">What Payment Methods are Available ?</a>
                                                <div className="faq__answer collapse" id="faq-7" data-parent="#faq-accordion-group">
                                                    <p className="faq__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                            <div className="faq__list">
                                                <a className="faq__question collapsed" href="#faq-8" data-toggle="collapse">What Shipping Methods are Available ?</a>
                                                <div className="faq__answer collapse" id="faq-8" data-parent="#faq-accordion-group">
                                                    <p className="faq__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 3 ======*/}
                </div>
            </div>
            <Footer/>
            <Prejs/>
        </div>
    )
}
