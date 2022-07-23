import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { Link } from 'react-router-dom'
import {SetToast} from '../src/components/SetToast'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'

export const Login = (props) => {

    // let regexEmail = new RegExp('[a-z0-9]+@[a-z]{3,}\.(?=.[a-z]{2,3})');
    // let regexPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [ischecke, setischecke] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const [authtoken, setauthtoken] = useState("")
    const navigate= useNavigate()
    let ischeck = false;
    //before
    // const formDataLogin = async (e) => {
    //     e.preventDefault()
    //     setischeck(false)
    //     await axios.get("http://localhost:9999/user").then((data) => {
    //         data.data.map((e)=>{
    //             if(e.email===email&&e.password===password){
    //                 console.log("done")
    //                 setischeck(true);
    //                 sessionStorage.setItem("data",JSON.stringify({'firstname':e.firstname,"lastname":e.lastname,'userid':e.userid}));
    //                 props.toastClick("Welcome! "+e.firstname+" "+e.lastname)
    //                 navigate("/")
    //             }
    //         })
    //     })
    // }

    //after
    const formDataLogin = async(e) => {
        e.preventDefault();
        if(email === null || password === null || email === ""|| password ===""){
            props.toastClick(`Please Enter Email or Password,3`)
        }else{
            setisLoading(true);
            await axios.get("http://localhost:9999/getAnyToken").then((e)=>{
                setauthtoken(e.data)
            });
        }

    }

    useEffect(() => {
        authtoken !== "" &&  axios.post("http://localhost:9999/logincus",{"email":email,"password":password,"authtoken":authtoken}).then((e)=>{
                setisLoading(false)
                if(e.data.data !== null && e.data.status === 200){
                    props.toastClick(`${e.data.msg},1`)
                    //save data in local storage
                    navigate("/home")
                }else if(e.data.status === 404){
                    props.toastClick(`${e.data.msg},3`)
                    setischecke(false)
                }else{
                    props.toastClick(`${e.data.msg},3`)
                }
        });

    }, [authtoken])
    
    return (
        <div>
            <Precss />
            {/* navbar */}
            <Navbar />
            {/* first load login page */}
            <div className="app-content">

                {/* section 1 */}
                <SectionLinks nextLink="Login" />

                {/*====== Section 2 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">ALREADY REGISTERED?</h1>
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
                                            <h1 className="gl-h1">I'M NEW CUSTOMER</h1>
                                            <span className="gl-text u-s-m-b-30">By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.</span>
                                            <div className="u-s-m-b-15">
                                                <Link className="l-f-o__create-link btn--e-transparent-brand-b-2" to={"/signup"}>CREATE AN ACCOUNT</Link></div>
                                            <h1 className="gl-h1">SIGNIN</h1>
                                            <span className="gl-text u-s-m-b-30">If you have an account with us, please log in.</span>
                                            <form className="l-f-o__form" onSubmit={formDataLogin}>
                                                <div className="gl-s-api">
                                                    <div className="u-s-m-b-15">
                                                        <button className="gl-s-api__btn gl-s-api__btn--fb" type="button"><i className="fab fa-facebook-f" />
                                                            <span>Signin with Facebook</span></button></div>
                                                    <div className="u-s-m-b-15">
                                                        <button className="gl-s-api__btn gl-s-api__btn--gplus" type="button"><i className="fab fa-google" />
                                                            <span>Signin with Google</span></button></div>
                                                </div>
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="login-email">E-MAIL *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="login-email" placeholder="Enter E-mail" onChange={(e) => setemail(e.target.value)} /></div>
                                                    {email !== "" ? ischeck = true : ischeck = false}
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Emai ` : ""}</label>
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="login-password">PASSWORD *</label>
                                                    <input className="input-text input-text--primary-style" type="password" id="login-password" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} />
                                                    {password !== "" ? ischeck = true : ischeck = false}
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Password ` : ""}</label>
                                                </div>
                                                <label className="gl-label" style={{ color: "red" }}>{ischecke || ischecke===""? "":"Wrong Email or Password"}</label>
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">
                                                        {isLoading?<PulseLoader color='#FF4500'/>:<button className="btn btn--e-transparent-brand-b-2" type="submit">LOGIN</button>}
                                                    </div>
                                                    <div className="u-s-m-b-30">
                                                        <Link className="gl-link" to={"/forgetpassword"}>Lost Your Password?</Link></div>
                                                </div>
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 2 ======*/}
            </div>
            {/*====== End - App Content ======*/}

            {/* footer */}
            <Footer />

            <Prejs />
        </div>
    )
}
