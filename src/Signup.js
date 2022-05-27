import React from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
export const Signup = () => {
  return (
    <div>
      <Precss/>
      {/* navbar */}
      <Navbar />

      {/* first load login page */}
      <div className="app-content">

        {/* section 1 */}
        <SectionLinks nextLink="Signup" />

        <div className="u-s-p-b-60">
          {/*====== Section Intro ======*/}
          <div className="section__intro u-s-m-b-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 className="section__heading u-c-secondary">CREATE AN ACCOUNT</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Intro ======*/}
          {/*====== Section Content ======*/}
          <div className="section__content">
            <div className="container">
              <div className="row row--center">
                <div className="col-lg-6 col-md-8 u-s-m-b-30">
                  <div className="l-f-o">
                    <div className="l-f-o__pad-box">
                      <h1 className="gl-h1">PERSONAL INFORMATION</h1>
                      <form className="l-f-o__form">
                        <div className="gl-s-api">
                          <div className="u-s-m-b-15">
                            <button className="gl-s-api__btn gl-s-api__btn--fb" type="button"><i className="fab fa-facebook-f" />
                              <span>Signup with Facebook</span></button></div>
                          <div className="u-s-m-b-30">
                            <button className="gl-s-api__btn gl-s-api__btn--gplus" type="button"><i className="fab fa-google" />
                              <span>Signup with Google</span></button></div>
                        </div>
                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-fname">FIRST NAME *</label>
                          <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="First Name" /></div>
                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-lname">LAST NAME *</label>
                          <input className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Last Name" /></div>
                        <div className="gl-inline">
                          <div className="u-s-m-b-30">
                            {/*====== Date of Birth Select-Box ======*/}
                            <span className="gl-label">BIRTHDAY</span>
                            <div className="gl-dob">
                              <input type="date"  className='select-box select-box--primary-style'/>
                            </div>
                            {/*====== End - Date of Birth Select-Box ======*/}
                          </div>
                          <div className="u-s-m-b-30">
                            <label className="gl-label" htmlFor="gender">GENDER</label><select className="select-box select-box--primary-style u-w-100" id="gender">
                              <option selected>Select</option>
                              <option value="male">Male</option>
                              <option value="male">Female</option>
                            </select></div>
                        </div>
                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-email">E-MAIL *</label>
                          <input className="input-text input-text--primary-style" type="text" id="reg-email" placeholder="Enter E-mail" /></div>
                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-password">PASSWORD *</label>
                          <input className="input-text input-text--primary-style" type="text" id="reg-password" placeholder="Enter Password" /></div>
                        <div className="u-s-m-b-15">
                          <button className="btn btn--e-transparent-brand-b-2" type="submit">CREATE</button></div>
                        <a className="gl-link" href="#">Return to Store</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== End - Section Content ======*/}
        </div>

      </div>

      {/* footer */}
      <Footer />

      <Prejs/>
    </div>
  )
}
