import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { SectionLinks } from './components/SectionLinks'
import useDrivePicker from 'react-google-drive-picker/dist'

// https://github.com/samirvithlani/spring-boot-fileuploading

import { useSendFiles } from './Hooks/useQuery/useQueryFiles'
import { type } from '@testing-library/user-event/dist/type'

export const AddProduct = () => {

    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const [location, setlocation] = useState("")
    const [title, settitle] = useState("")
    const [rating, setrating] = useState()//out of five
    const [photo, setphoto] = useState([])
    var ischeck = false;
    //notify message on your register phone number



    const setFile = async (e) => {
        var arr = []
        var i = 0;
        const think = setInterval(() => {
            if (i === e.target.files.length) {
                clearInterval(think)
            }
            if (i < e.target.files.length) {

                const formData = new FormData()
                // console.log(filedata)
                formData.append('file', e.target.files[i])
                // formData.append('name','this is name')
                console.log(formData)


                axios.post("http://localhost:9999/upload", formData).then((res) => {

                    console.log(res.data)
                    arr.push(res.data)
                    i++;

                })
            }

        }, 3000);
    }

    const addProduct = async (e) => {
        e.preventDefault()
        // if (ischeck === true) {
        const objData = {
            "productname": name,
            "price": price,
            "description": description,
            "location": location,
            "title": title,
            "rating": rating,


            // "photo":formData,
            // "photo":JSON.stringify(arr),


            "userid": parseInt(JSON.parse(sessionStorage.getItem("data")).userid)
        }
        //add photo also
        console.log(objData)
        // }

        // await axios.post("http://localhost:9999/product", objData).then((res) => {
        //   console.log("success")
        //   console.log(res)
        // //   sessionStorage.setItem("data", JSON.stringify(objData));
        // //   navigate("/")
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

                                                {name !== "" ? ischeck = true : ischeck = false}
                                                <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Product Name ` : ""}</label>

                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-lname">Product Title *</label>
                                                    <input disabled={ischeck ? false : true} className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Product Title" onChange={(e) => settitle(e.target.value)} /></div>

                                                {title !== "" ? ischeck = true : ischeck = false}
                                                <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Title ` : ""}</label>

                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-lname">Product Description *</label>
                                                    <input disabled={ischeck ? false : true} className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Product Description" onChange={(e) => setdescription(e.target.value)} /></div>
                                                {description !== "" ? ischeck = true : ischeck = false}
                                                <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Description ` : ""}</label>

                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-lname">Rating (out of 5) *</label>
                                                    <input disabled={ischeck ? false : true} className="input-text input-text--primary-style" type="number" id="reg-lname" placeholder="Product Description" onChange={(e) => setrating(e.target.value)} /></div>
                                                {rating !== undefined && rating <= 5 && rating > 0 ? ischeck = true : ischeck = false}
                                                <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Rating ` : ""}</label>


                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-email">price *</label>
                                                    <input disabled={ischeck ? false : true} className="input-text input-text--primary-style" type="text" id="reg-email" placeholder="Enter Sell-Value" onChange={(e) => setprice(e.target.value)} /></div>

                                                {price !== "" ? ischeck = true : ischeck = false}
                                                <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Price ` : ""}</label>
                                                {/* {email} */}
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-password">Location *</label>
                                                    <input disabled={ischeck ? false : true} className="input-text input-text--primary-style" type="text" id="reg-password" placeholder="Enter location" onChange={(e) => setlocation(e.target.value)} /></div>
                                                {location !== "" ? ischeck = true : ischeck = false}
                                                <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Location ` : ""}</label>
                                                {/* {password} */}
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-phonenumber">Select file *</label>
                                                    <input disabled={ischeck ? false : true} type="file" accept="application/png" id="reg-phonenum" onChange={(e) => setFile(e)} multiple />
                                                    {/* <input type="submit" value="Upload" onClick={() => submitData()} /> */}

                                                    {/* <input disabled={ischeck ? false : true} type="text"  id="reg-phonenum"  onChange={(e) => setfilename(e.target.value)}  /> */}
                                                </div>
                                                {/* {photo !== "" ? ischeck = true : ischeck = false} */}
                                                {/* <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === true ? `Please Select the Submit button ` : ""}</label> */}

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
