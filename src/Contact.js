import React from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { useFormik } from 'formik'
import { Experimental_CssVarsProvider } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Contact = () => {

    const initialValues = {
        email:'',
        name:'',
        subject:'',
        msg:''
    }
    const navigate = useNavigate()
    const onSubmit = async(values)=>{
        console.log(values)
        await axios.post("https://cartbuddy-api.herokuapp.com/contact",values).then((e)=>{
            console.log("e"+e.data)
            if(e.data.status === 200 ){
                console.log(e)
                navigate("/getcontact")
            }else{
                console.log("Contact Exists")
            }
        })
    }

    const validate = (values)=>{
        let errors = {}
        if(!values.name){
            errors.name = "Name Required"
        }
        if(!values.email){
            errors.email = "Email Required"
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "Email id must be in xxx@xx.xx";
        }
        if(!values.subject){
            errors.subject = "Subject Required"
        }
        return errors;
    }

    const formik = useFormik({
        initialValues:initialValues,
        onSubmit:onSubmit,
        validate:validate
    })

    return (
        <div>
            <Precss/>

            {/* navbar */}
            <Navbar />

            {/* first load login page */}
            <div className="app-content">

                {/* section 1 */}
                <SectionLinks nextLink="Contact" />

                <div>
                    
                    {/*====== End - Section 2 ======*/}
                    {/*====== Section 3 ======*/}
                    <div className="u-s-p-b-60">
                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                        <div className="contact-o u-h-100">
                                            <div className="contact-o__wrap">
                                                <div className="contact-o__icon"><i className="fas fa-phone-volume" /></div>
                                                <span className="contact-o__info-text-1">LET'S HAVE A CALL</span>
                                                <span className="contact-o__info-text-2">(+0) 900 901 904</span>
                                                <span className="contact-o__info-text-2">(+0) 900 901 902</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                        <div className="contact-o u-h-100">
                                            <div className="contact-o__wrap">
                                                <div className="contact-o__icon"><i className="fas fa-map-marker-alt" /></div>
                                                <span className="contact-o__info-text-1">OUR LOCATION</span>
                                                <span className="contact-o__info-text-2">4247 Ashford Drive VA-20006</span>
                                                <span className="contact-o__info-text-2">Virginia US</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                        <div className="contact-o u-h-100">
                                            <div className="contact-o__wrap">
                                                <div className="contact-o__icon"><i className="far fa-clock" /></div>
                                                <span className="contact-o__info-text-1">WORK TIME</span>
                                                <span className="contact-o__info-text-2">5 Days a Week</span>
                                                <span className="contact-o__info-text-2">From 9 AM to 7 PM</span>
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
                    <div className="u-s-p-b-60">
                        {/*====== Section Content ======*/}
                        <div className="section__content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="contact-area u-h-100">
                                            <div className="contact-area__heading">
                                                <h2>Get In Touch</h2>
                                            </div>
                                            <form className="contact-f" onSubmit={formik.handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 u-h-100">
                                                        <div className="u-s-m-b-30">
                                                            <label htmlFor="name" />
                                                            <input className="input-text input-text--border-radius input-text--primary-style" type="text" id="name" placeholder="Name " onChange={formik.handleChange} value={formik.values.name} /></div>
                                                            {formik.errors.name  ?<label className="gl-label" style={{ color: "red" }} > {formik.errors.name} </label> : ""}
                                                        <div className="u-s-m-b-30">
                                                            <label htmlFor="email" />
                                                            <input className="input-text input-text--border-radius input-text--primary-style" type="text" id="email" placeholder="Email " onChange={formik.handleChange} value={formik.values.email} /></div>
                                                            {formik.errors.email  ?<label className="gl-label" style={{ color: "red" }} > {formik.errors.email} </label> : ""}
                                                        <div className="u-s-m-b-30">
                                                            <label htmlFor="subject" />
                                                            <input className="input-text input-text--border-radius input-text--primary-style" type="text" id="subject" placeholder="Subject " onChange={formik.handleChange} value={formik.values.subject} /></div>
                                                            {formik.errors.subject  ?<label className="gl-label" style={{ color: "red" }} > {formik.errors.subject} </label> : ""}
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 u-h-100">
                                                        <div className="u-s-m-b-30">
                                                            <label htmlFor="msg" />
                                                            <textarea className="text-area text-area--border-radius text-area--primary-style" id="msg" placeholder="Compose a Message (Optional)" onChange={formik.handleChange} value={formik.values.msg}/>
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button className="btn btn--e-brand-b-2"  >Send Message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*====== End - Section Content ======*/}
                    </div>
                    {/*====== End - Section 4 ======*/}
                </div>

            </div>
            {/* load footer */}
            <Footer/>
            <Prejs/>
        </div>
    )
}
