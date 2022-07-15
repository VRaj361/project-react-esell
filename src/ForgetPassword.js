import React,{useState} from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { Link, useNavigate } from 'react-router-dom'
import  Cookies  from 'universal-cookie'
import axios from 'axios'

export const ForgetPassword = () => {
    const navigate=useNavigate()
    const [email, setemail] = useState("")
    //const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])
    const checkEmail=async(e)=>{
        e.preventDefault();
        
        await axios.get("http://localhost:9999/user").then((data) => {
            data.data.map((e)=>{
                if(email===e.email){
                    console.log("done")
                    axios.post("http://localhost:9999/sendemail",{"email":email}).then((data)=>{
                        console.log(data)
                        if(data.data!=="-1"){ 
                            console.log("in") 
                            const cookies = new Cookies();
                            let d = new Date();
                            d.setTime(d.getTime() + 70*1000);
                           // const arr=data.data.split(" ")
                           
 //                           console.log(arr[0]+" "+arr[1])
                            cookies.set('otpResetEmail', data.data, { path: '/',expires:d });
                            console.log(cookies.get('otpResetEmail'));
                            navigate("/otpresetpass")
                        }else{
                            console.log("problem with otp in backend")
                        }
                    })
                }
            })
        })
    }
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
                                        <form className="l-f-o__form" onSubmit={checkEmail}>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reset-email">E-MAIL *</label>
                                                <input className="input-text input-text--primary-style" type="text" id="reset-email" placeholder="Enter E-mail" onChange={(e)=>setemail(e.target.value)}/></div>
                                            <div className="u-s-m-b-30">
                                                <button className="btn btn--e-transparent-brand-b-2" type="SUBMIT">SUBMIT</button></div>
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
            <Footer/>
            <Prejs/>

        </div>
    )
}
