import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { Link } from 'react-router-dom'
import { SetToast } from '../src/components/SetToast'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'

export const AddReview = (props) => {
    const [name, setname] = useState("")
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [isLoading, setisLoading] = useState(false)
    const [keywords, setkeywords] = useState("")
    const [date, setdate] = useState("")
    const [authtoken, setauthtoken] = useState()
    const navigate = useNavigate()
    let ischeck = false;
    useEffect(() => {
        if(sessionStorage.getItem("data")!==null && JSON.parse(sessionStorage.getItem("data")).authtoken!==null){
            setauthtoken(JSON.parse(sessionStorage.getItem("data")).authtoken);
        }else{
            navigate("/review")
        }
    })
    
      

    const addReview = async(e)=>{
        e.preventDefault();
        const objData = { "name": name, "title": title, "description": desc, "keywords": keywords, "date": date, "authtoken": authtoken}
        console.log(objData)
        await axios.post("http://localhost:9999/addreview",objData).then((e)=>{
        setisLoading(false);
            if(e.data.data!==null && e.data.status === 200){
                props.toastClick(`${e.data.msg},1`)
                navigate("/review")
            }else if(e.data.status === 400){
                props.toastClick(`${e.data.msg},3`)
            }else{
                props.toastClick(`${e.data.msg},3`)
            }
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
                <SectionLinks nextLink="Add Review" />

                {/*====== Section 2 ======*/}
                <div className="u-s-p-b-60">

                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row row--center">
                                <div className="col-lg-6 col-md-8 u-s-m-b-30">
                                    <div className="l-f-o">
                                        <div className="l-f-o__pad-box">

                                            <form className="l-f-o__form" onSubmit={addReview}>

                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="login-email">NAME *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="login-email" placeholder="Enter Name" onChange={(e) => setname(e.target.value)} />
                                                    {name !== "" ? ischeck = true : ischeck = false}
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Name ` : ""}</label>
                                                </div>
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="login-email">TITLE *</label>
                                                    <input disabled={ischeck?false:true} className="input-text input-text--primary-style" type="text" id="login-email" placeholder="Enter Title" onChange={(e) => settitle(e.target.value)} />
                                                    {title !== "" ? ischeck = true : ischeck = false}
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Title ` : ""}</label>
                                                </div>
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="login-email">DESCRIPTION *</label>
                                                    <input disabled={ischeck?false:true} className="input-text input-text--primary-style" type="text" id="login-email" placeholder="Enter Description" onChange={(e) => setdesc(e.target.value)} />
                                                    {desc !== "" ? ischeck = true : ischeck = false}
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Description ` : ""}</label>
                                                </div>
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="login-password">KEYWORDS (SPACE SEPRATED) *</label>
                                                    <input disabled={ischeck?false:true} className="input-text input-text--primary-style" type="text" id="login-password" placeholder="Enter Keywords" onChange={(e) => setkeywords(e.target.value)} />
                                                    {keywords !== "" ? ischeck = true : ischeck = false}
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Keywords ` : ""}</label>
                                                </div>
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="login-password">DATE *</label>
                                                    <input disabled={ischeck?false:true} type="date" className='input-text input-text--primary-style' onChange={(e) => setdate(e.target.value)} />
                                                    
                                                    {/* <label className="gl-label" style={{ color: "red" }} >{createDate !== "" ? ischeck = true : `Please Select Birth Date ${ischeck ? ischeck = false : ""}`}</label> */}
                                                    {date !== "" ? ischeck = true : ischeck = false}
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Select  Date ` : ""}</label>
                                                </div>
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-30">
                                                        {isLoading ? <PulseLoader color='#FF4500' /> : <button disabled={ischeck ? false : true} className="btn btn--e-transparent-brand-b-2" type="submit">Add Review</button>}
                                                    </div>
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

            <Footer />

            <Prejs />
        </div>
    )
}
