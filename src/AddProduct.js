import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { SectionLinks } from './components/SectionLinks'

export const AddProduct = () => {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [location, setlocation] = useState("")
    const [title, settitle] = useState("")
    const [photo, setphoto] = useState([])
    let ischeck = false;
    //notify message on your register phone number

    const addProduct = async (e) => {
        e.preventDefault()
        // const objData = { "firstname": firstName, "lastname": lastName, "createdate": createDate, "gender": gender, "email": email, "password": password, "phonenum": phonenum,"address":""}
        // console.log(objData)
        // await axios.post("http://localhost:9999/user", objData).then(() => {
        //   console.log("success")
        //   sessionStorage.setItem("data", JSON.stringify(objData));
        //   navigate("/")
        // })
    }

    return (
        <div>
            <Precss />
            {/* navbar */}
            <Navbar />
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
                                        <h1 className="section__heading u-c-secondary">Add Product for Sell</h1>
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
                                            <h1 className="gl-h1">Add Product</h1>
                                            <form className="l-f-o__form" onSubmit={addProduct}>
                                                
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-fname">Product Name *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="Product Name" onChange={(e) => setname(e.target.value)} /></div>
                                                <label className="gl-label" style={{ color: "red" }} htmlFor="reg-fname">{name !== "" ? ischeck = true : `Please Enter Product Name ${ischeck ? ischeck = false : ""}`}</label>

                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-lname">Product Title *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Product Title" onChange={(e) => settitle(e.target.value)} /></div>
                                                <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{title !== "" ? ischeck = true : `Please Enter Title ${ischeck ? ischeck = false : ""}`}</label>

                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-lname">Product Description *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Product Description" onChange={(e) => setdescription(e.target.value)} /></div>
                                                <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{description !== "" ? ischeck = true : `Please Enter Description ${ischeck ? ischeck = false : ""}`}</label>
                                                
                                                
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-email">price *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-email" placeholder="Enter Sell-Value" onChange={(e) => setprice(e.target.value)} /></div>
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{price !== "" ? ischeck = true : `Please Enter Price ${ischeck ? ischeck = false : ""}`}</label>
                                                {/* {email} */}
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-password">Location *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-password" placeholder="Enter location" onChange={(e) => setlocation(e.target.value)} /></div>
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{location !== "" ? ischeck = true : `Please Enter location ${ischeck ? ischeck = false : ""}`}</label>
                                                {/* {password} */}
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-phonenumber">Phone Number *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-phonenum" placeholder="Enter Photo Url" onChange={(e) => setphoto(e.target.value)} /></div>
                                                    <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{photo !== "" ? ischeck = true : `Please enter url Photo ${ischeck ? ischeck = false : ""}`}</label>
                                                {/* {phonenum} */}
                                                <div className="u-s-m-b-15">
                                                    <button disabled={ischeck ? false : true} className="btn btn--e-transparent-brand-b-2" type="submit">Add Product</button></div>
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
