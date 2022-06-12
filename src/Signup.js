import React, { useState } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { Link,useNavigate } from 'react-router-dom'
import {SetToast} from '../src/components/SetToast'
import axios from 'axios'
export const Signup = () => {

  let regexEmail = new RegExp('[a-z0-9]+@[a-z]{3,}\.(?=.[a-z]{2,3})');
  let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let regexPhnum = new RegExp("^[0-9]{10}$")
  let ischeck = false;

  const navigate=useNavigate()

  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [createDate, setcreateDate] = useState("")
  const [gender, setgender] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [phonenum, setphonenum] = useState("")
  // const [isCheck, setisCheck] = useState(false)


  const formDataSignup = async (e) => {
    e.preventDefault()
    const objData = { "firstname": firstName, "lastname": lastName, "createdate": createDate, "gender": gender, "email": email, "password": password, "phonenum": phonenum,"address":""}
    console.log(objData)
    await axios.post("http://localhost:9999/user", objData).then(() => {
      console.log("success")
      sessionStorage.setItem("data", JSON.stringify(objData));
      navigate("/")
    })
  }




  return (
    <div>
      <Precss />
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
                      <form className="l-f-o__form" onSubmit={formDataSignup}>
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
                          <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="First Name" onChange={(e) => setfirstName(e.target.value)} /></div>
                        <label className="gl-label" style={{ color: "red" }} htmlFor="reg-fname">{firstName !== "" ? ischeck = true : `Please Enter First Name ${ischeck ? ischeck = false : ""}`}</label>

                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-lname">LAST NAME *</label>
                          <input className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Last Name" onChange={(e) => setlastName(e.target.value)} /></div>
                        <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{lastName !== "" ? ischeck = true : `Please Enter Last Name ${ischeck ? ischeck = false : ""}`}</label>
                        {/* {lastName} */}
                        <div className="gl-inline">
                          <div className="u-s-m-b-30">
                            {/*====== Date of Birth Select-Box ======*/}
                            <span className="gl-label">BIRTHDAY</span>
                            <div className="gl-dob">
                              <input type="date" className='select-box select-box--primary-style' onChange={(e) => setcreateDate(e.target.value)} />

                              {/* {createDate} */}
                            </div>
                            <label className="gl-label" style={{ color: "red" }} >{createDate !== "" ? ischeck = true : `Please Select Birth Date ${ischeck ? ischeck = false : ""}`}</label>
                            {/*====== End - Date of Birth Select-Box ======*/}
                          </div>
                          <div className="u-s-m-b-30">
                            <label className="gl-label" htmlFor="gender">GENDER</label><select className="select-box select-box--primary-style u-w-100" id="gender" onChange={(e) => setgender(e.target.value)}>
                              <option selected>Select</option>
                              <option value="male">Male</option>
                              <option value="male">Female</option>
                            </select>
                            <label className="gl-label" style={{ color: "red" }} >{gender !== "" ? ischeck = true : `Please Select Gender ${ischeck ? ischeck = false : ""}`}</label>
                          </div>
                          {/* {gender} */}
                        </div>
                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-email">E-MAIL *</label>
                          <input className="input-text input-text--primary-style" type="text" id="reg-email" placeholder="Enter E-mail" onChange={(e) => setemail(e.target.value)} /></div>
                        <label className="gl-label" style={{ color: "red" }} >{email === "" ? `Please Enter Email ${ischeck ? ischeck = false : ""}` : regexEmail.test(email) === true ? ischeck = true : `Please Enter Email in XXX@gmail.XXX format ${ischeck ? ischeck = false : ""}`}</label>
                        {/* {email} */}
                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-password">PASSWORD *</label>
                          <input className="input-text input-text--primary-style" type="text" id="reg-password" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} /></div>
                        <label className="gl-label" style={{ color: "red" }} >{password === "" ? `Please Enter Password ${ischeck ? ischeck = false : ""}` : regexPassword.test(password) === true ? ischeck = true : `Password should contain Uppercase, Lowercase, Special Symbol and Length should be greater 8 ${ischeck ? ischeck = false : ""}`}</label>
                        {/* {password} */}
                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-phonenumber">Phone Number *</label>
                          <input className="input-text input-text--primary-style" type="text" id="reg-phonenum" placeholder="Enter Phone Number" onChange={(e) => setphonenum(e.target.value)} /></div>
                        <label className="gl-label" style={{ color: "red" }} >{password === "" ? `Please Enter Phonenumber ${ischeck ? ischeck = false : ""}` : regexPhnum.test(phonenum) === true ? ischeck = true : `Phonenumber Must should contain 10 digits ${ischeck ? ischeck = false : ""}`}</label>
                        {/* {phonenum} */}
                        <div className="u-s-m-b-15">
                          <button disabled={ischeck ? false : true} className="btn btn--e-transparent-brand-b-2" type="submit">CREATE</button></div>
                        <Link className="gl-link" to={"/"}>Return to Store</Link>
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

      <Prejs />
    </div>
  )
}
