import React from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
export const ForgetPassword = () => {
    return (
        <div>
            <Precss/>
            {/* navbar */}
            <Navbar />

            {/* first load login page */}
            <div className="app-content">

                {/* section 1 */}
                <SectionLinks nextLink="Password Reset" />

                {/*====== Section Content ======*/}
                <div className="section__content">
                    <div className="container">
                        <div className="row row--center">
                            <div className="col-lg-6 col-md-8 u-s-m-b-30">
                                <div className="l-f-o">
                                    <div className="l-f-o__pad-box">
                                        <h1 className="gl-h1">PASSWORD RESET</h1>
                                        <span className="gl-text u-s-m-b-30">Enter your email or username below and we will send you a link to reset your password.</span>
                                        <form className="l-f-o__form">
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reset-email">E-MAIL *</label>
                                                <input className="input-text input-text--primary-style" type="text" id="reset-email" placeholder="Enter E-mail" /></div>
                                            <div className="u-s-m-b-30">
                                                <button className="btn btn--e-transparent-brand-b-2" type="submit">SUBMIT</button></div>
                                            <div className="u-s-m-b-30">
                                                <a className="gl-link" href="signin.html">Back to Login</a></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
            <Prejs/>

        </div>
    )
}
