import React,{useState} from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export const ChangePassword = () => {
    let obj=sessionStorage.getItem("data")
    const [password, setpassword] = useState("")
    const navigate=useNavigate()
    const checkOldPassword=async(e)=>{
        e.preventDefault();
        await axios.get("http://localhost:9999/user").then((data) => {
            data.data.map((e)=>{
                if(e.userid===JSON.parse(sessionStorage.getItem("data")).userid && password===e.password){
                    console.log("done")
                    
                    // sessionStorage.setItem("data",JSON.stringify({'email':e.email,'firstname':e.firstname,"lastname":e.lastname,'userid':e.userid}));
                    navigate("/newpassword")
                }
            })
        })
        // if(JSON.parse(sessionStorage.getItem("data")).password===password){
        //     navigate("/newpassword")
        // }else{
        //     console.log("password no match")
        // }
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
                                        <h1 className="gl-h1">CHANGE NEW PASSWORD</h1>
                                        <span className="gl-text u-s-m-b-30">Enter your previous password to check correct or not and after enter new password.</span>
                                        <form className="l-f-o__form" onSubmit={checkOldPassword}>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reset-email">OLD PASSWORD *</label>
                                                <input className="input-text input-text--primary-style" type="password" id="reset-email" placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)}/></div>
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
