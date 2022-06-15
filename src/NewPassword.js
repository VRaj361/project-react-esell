import React, { useState } from 'react'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export const NewPassword = () => {
    let ischeck = false;
    let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const [password, setpassword] = useState("")
    let obj={};
    const navigate = useNavigate()
    const changeNewPassword = async (e) => {
        e.preventDefault()
        await axios.get("http://localhost:9999/user").then((res) => {
            res.data.map((e) => {
                if (e.userid === JSON.parse(sessionStorage.getItem("data")).userid) {
                    console.log("e", e)
                    obj=e
                }
            })
        })
        console.log(obj)
        let objData = { "userid": obj.userid, "firstname": obj.firstname, "lastname": obj.lastname, "createdate": obj.createdate, "gender": obj.gender, "email": obj.email, "password": password, "phonenum": obj.phonenum };
        console.log("obj ", obj)
        console.log("objdata ", objData)
        await axios.put("http://localhost:9999/user", objData).then((res) => {
            console.log("success")
            console.log(res)
            navigate("/myaccount")
            // sessionStorage.setItem("data",JSON.stringify(objData))
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
                <SectionLinks nextLink="Password Reset" />

                {/*====== Section Content ======*/}
                <div className="section__content">
                    <div className="container">
                        <div className="row row--center">
                            <div className="col-lg-6 col-md-8 u-s-m-b-30">
                                <div className="l-f-o">
                                    <div className="l-f-o__pad-box">
                                        <h1 className="gl-h1">NEW PASSWORD</h1>
                                        <span className="gl-text u-s-m-b-30">Enter New Password.</span>
                                        <form className="l-f-o__form" onSubmit={changeNewPassword}>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reset-email">NEW PASSWORD *</label>
                                                <input className="input-text input-text--primary-style" type="password" id="reset-email" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} /></div>
                                            <label className="gl-label" style={{ color: "red" }} >{password === "" ? `Please Enter Password ${ischeck ? ischeck = false : ""}` : regexPassword.test(password) === true ? ischeck = true : `Password should contain Uppercase, Lowercase, Special Symbol and Length should be greater 8 ${ischeck ? ischeck = false : ""}`}</label>
                                            <div className="u-s-m-b-30">
                                                <button className="btn btn--e-transparent-brand-b-2" type="submit">SUBMIT</button></div>
                                            <div className="u-s-m-b-30">
                                                <Link className="gl-link" to={"/login"}>Back to Login</Link></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
            <Prejs />

        </div>
    )
}
