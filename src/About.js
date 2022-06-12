import React from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Helmet } from 'react-helmet'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
export const About = () => {
    return (
        <div>
            <Precss/>

            {/* navbar */}
            <Navbar />
            <div className="app-content">
                <SectionLinks nextLink="About"/>
                {/*====== Section 2 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="about">
                                        <div className="about__container">
                                            <div className="about__info">
                                                <h2 className="about__h2">Welcome to Reshop Store!</h2>
                                                <div className="about__p-wrap">
                                                    <p className="about__p">Lorem Ipsum is simply dummy text of the printing and
                                                        typesetting industry. Lorem Ipsum has been the industry's standard
                                                        dummy text ever since the 1500s, when an unknown printer took a
                                                        galley of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged. It was popularised in
                                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop publishing software like
                                                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                                                </div>
                                                <a className="about__link btn--e-secondary" href="index.html" target="_blank">Shop Now</a>
                                            </div>
                                        </div>
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
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-46">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">Our Team Members</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                    <div className="team-member u-h-100">
                                        <div className="team-member__wrap">
                                            <div className="aspect aspect--bg-grey-fb aspect--square">
                                                <img className="aspect__img team-member__img" src="images/about/member-1.jpg" alt="" />
                                            </div>
                                            <div className="team-member__social-wrap">
                                                <ul className="team-member__social-list">
                                                    <li>
                                                        <a className="s-tw--bgcolor-hover" href="#"><i className="fab fa-twitter" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-fb--bgcolor-hover" href="#"><i className="fab fa-facebook-f" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-insta--bgcolor-hover" href="#"><i className="fab fa-instagram" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-linked--bgcolor-hover" href="#"><i className="fab fa-linkedin" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-member__info">
                                            <span className="team-member__name">Ahnan Bashri</span>
                                            <span className="team-member__job-title">Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                    <div className="team-member u-h-100">
                                        <div className="team-member__wrap">
                                            <div className="aspect aspect--bg-grey-fb aspect--square">
                                                <img className="aspect__img team-member__img" src="images/about/member-2.jpg" alt="" />
                                            </div>
                                            <div className="team-member__social-wrap">
                                                <ul className="team-member__social-list">
                                                    <li>
                                                        <a className="s-tw--bgcolor-hover" href="#"><i className="fab fa-twitter" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-fb--bgcolor-hover" href="#"><i className="fab fa-facebook-f" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-insta--bgcolor-hover" href="#"><i className="fab fa-instagram" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-linked--bgcolor-hover" href="#"><i className="fab fa-linkedin" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-member__info">
                                            <span className="team-member__name">Joseph Min</span>
                                            <span className="team-member__job-title">UI, Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                    <div className="team-member u-h-100">
                                        <div className="team-member__wrap">
                                            <div className="aspect aspect--bg-grey-fb aspect--square">
                                                <img className="aspect__img team-member__img" src="images/about/member-3.jpg" alt="" />
                                            </div>
                                            <div className="team-member__social-wrap">
                                                <ul className="team-member__social-list">
                                                    <li>
                                                        <a className="s-tw--bgcolor-hover" href="#"><i className="fab fa-twitter" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-fb--bgcolor-hover" href="#"><i className="fab fa-facebook-f" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-insta--bgcolor-hover" href="#"><i className="fab fa-instagram" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-linked--bgcolor-hover" href="#"><i className="fab fa-linkedin" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-member__info">
                                            <span className="team-member__name">Mike Pipe</span>
                                            <span className="team-member__job-title">App, Architect</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 u-s-m-b-30">
                                    <div className="team-member u-h-100">
                                        <div className="team-member__wrap">
                                            <div className="aspect aspect--bg-grey-fb aspect--square">
                                                <img className="aspect__img team-member__img" src="images/about/member-4.jpg" alt="" />
                                            </div>
                                            <div className="team-member__social-wrap">
                                                <ul className="team-member__social-list">
                                                    <li>
                                                        <a className="s-tw--bgcolor-hover" href="#"><i className="fab fa-twitter" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-fb--bgcolor-hover" href="#"><i className="fab fa-facebook-f" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-insta--bgcolor-hover" href="#"><i className="fab fa-instagram" /></a>
                                                    </li>
                                                    <li>
                                                        <a className="s-linked--bgcolor-hover" href="#"><i className="fab fa-linkedin" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-member__info">
                                            <span className="team-member__name">Klronr Jim</span>
                                            <span className="team-member__job-title">Team Leader</span>
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
                <div className="u-s-p-b-90 u-s-m-b-30">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-46">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary u-s-m-b-12">CLIENTS FEEDBACK</h1>
                                        <span className="section__span u-c-silver">WHAT OUR CLIENTS SAY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            {/*====== Testimonial Slider ======*/}
                            <div className="slider-fouc">
                                <div className="owl-carousel" id="testimonial-slider">
                                    <div className="testimonial">
                                        <div className="testimonial__img-wrap">
                                            <img className="testimonial__img" src="images/about/test-1.jpg" alt="" />
                                        </div>
                                        <div className="testimonial__content-wrap">
                                            <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
                                            <blockquote className="testimonial__block-quote">
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia
                                                    and Consonantia, there live the blind texts. Separated they live in
                                                    Bookmarksgrove right at the coast of the Semantics, a large language
                                                    ocean."</p>
                                            </blockquote>
                                            <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial__img-wrap">
                                            <img className="testimonial__img" src="images/about/test-2.jpg" alt="" />
                                        </div>
                                        <div className="testimonial__content-wrap">
                                            <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
                                            <blockquote className="testimonial__block-quote">
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia
                                                    and Consonantia, there live the blind texts. Separated they live in
                                                    Bookmarksgrove right at the coast of the Semantics, a large language
                                                    ocean."</p>
                                            </blockquote>
                                            <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial__img-wrap">
                                            <img className="testimonial__img" src="images/about/test-3.jpg" alt="" />
                                        </div>
                                        <div className="testimonial__content-wrap">
                                            <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
                                            <blockquote className="testimonial__block-quote">
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia
                                                    and Consonantia, there live the blind texts. Separated they live in
                                                    Bookmarksgrove right at the coast of the Semantics, a large language
                                                    ocean."</p>
                                            </blockquote>
                                            <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial__img-wrap">
                                            <img className="testimonial__img" src="images/about/test-4.jpg" alt="" />
                                        </div>
                                        <div className="testimonial__content-wrap">
                                            <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
                                            <blockquote className="testimonial__block-quote">
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia
                                                    and Consonantia, there live the blind texts. Separated they live in
                                                    Bookmarksgrove right at the coast of the Semantics, a large language
                                                    ocean."</p>
                                            </blockquote>
                                            <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*====== End - Testimonial Slider ======*/}
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 4 ======*/}
            </div>
            {/* footer load*/}
            <Footer />
            <Prejs/>
        </div>
    )
}
