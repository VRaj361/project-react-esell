import React, { useState,useEffect } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { Link,useNavigate } from 'react-router-dom'
import {SetToast} from '../src/components/SetToast'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'

export const AddAuction = (props) => {
  const navigate=useNavigate()
  let ischeck = false;
  let ischeck1= false;
  const [firstName, setfirstName] = useState("")
  
  const [isLoading, setisLoading] = useState(false)

  const [bidValue, setbidValue] = useState("")
  const [rangelowbid, setrangelowbid] = useState("")
  const [rangehighbid, setrangehighbid] = useState("")
  const [productname, setproductname] = useState("")
  const [category, setcategory] = useState("")
  const [description, setdescription] = useState("")
  const [ageproduct, setageproduct] = useState("")
  const [time, settime] = useState("")
  var i=0;
  let token ="";
    // let resdata=false;
  if(sessionStorage.getItem("data")!==null){
      token=JSON.parse(sessionStorage.getItem("data")).authtoken
  }
  const [resdata, setresdata] = useState(false)
  const [photo, setphoto] = useState("")
  const setFile = async (e) => {
    // var arr = []
    const ans=  setInterval(() => {
          if (i < e.target.files.length) {
              const formData = new FormData()
              formData.append('file', e.target.files[i])
              console.log(e.target.files[i])
              axios.post("http://localhost:9999/uploadimage", formData,{headers:{'authtoken':token}}).then((res) => {

                  // console.log("res->Data--->"+res.data)
                  // arr.push(res.data)
                  props.toastClick("File Upload Successfully Kindly Please Click Again for Add Product,1")
                  console.log("file length--->"+e.target.files.length);
                  console.log("dfafdsa--->"+resdata)
                  i++;
                  if(e.target.files.length==i){
                      setresdata(true)
                      console.log("in")
                      clearInterval(ans)
                      
                  }
                  
                  setphoto(res.data)               
              })
          }

      }, 3000);
      console.log(resdata)
      
  }

  // useEffect(() => {
  //   if(sessionStorage.getItem("data")!==null){
  //       navigate("/alreadyloggedin")
  //   }
  // })
  //after
  const formDataSignup = async (e) => {
    e.preventDefault();
    // const objData = { "firstname": firstName, "lastname": lastName, "createdate": createDate, "gender": gender, "email": email, "password": password, "phonenum": phonenum,"address":""}
    // await axios.post("http://localhost:9999/signupcus",objData).then((e)=>{
    //   setisLoading(false);
    //   if(e.data.data!==null && e.data.status === 200){
    //     props.toastClick(`${e.data.msg},1`)
    //     navigate("/login")
    //   }else if(e.data.status === 400){
    //     props.toastClick(`${e.data.msg},3`)
    //   }else{
    //     props.toastClick(`${e.data.msg},3`)
    //   }
    // })
    const objData = {"username":firstName,"bid":bidValue,"rangelowbid":rangelowbid,"rangehighbid":rangehighbid,"productname":productname,"category":category,"description":description,"ageproduct":ageproduct,"time":time,"photo":photo};
    console.log(objData);
    resdata && await axios.post("http://localhost:9999/addauction", objData).then((res) => {
            console.log("success")
            console.log(res)
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
        <SectionLinks nextLink="Add Auction Product" />

        <div className="u-s-p-b-60">
          {/*====== Section Intro ======*/}
          <div className="section__intro u-s-m-b-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 className="section__heading u-c-secondary">CREATE AN AUCTION PRODUCT</h1>
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
                      <h1 className="gl-h1">SOME INFORMATION</h1>
                      <form className="l-f-o__form" onSubmit={formDataSignup}>
                        
                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-fname">NICKNAME *</label>
                          <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="First Name" onChange={(e) => setfirstName(e.target.value)} />
                        {/* <label className="gl-label" style={{ color: "red" }} htmlFor="reg-fname">{firstName !== "" ? ischeck = true : `Please Enter First Name ${ischeck ? ischeck = false : ""}`}</label> */}
                        {firstName !== "" ? ischeck = true : ischeck = false}
                        <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Nick Name ` : ""}</label>
                        </div>
                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-lname">CURRENT BID *</label>
                          <input disabled={ischeck ? false : true} className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Current BID Amount" onChange={(e) => setbidValue(e.target.value)} />
                        {/* <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{lastName !== "" ? ischeck = true : `Please Enter Last Name ${ischeck ? ischeck = false : ""}`}</label> */}
                        {bidValue !== "" ? ischeck = true : ischeck = false}
                        <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Bid Value` : ""}</label>
                        </div>
                        {/* {lastName} */}
                        <div className="gl-inline">
                          <div className="u-s-m-b-30">
                            {/*====== Date of Birth Select-Box ======*/}
                            <span className="gl-label">LOW BID *</span>
                            <div className="gl-dob">
                              <input disabled={ischeck ? false : true} type="text" className='select-box select-box--primary-style' placeholder='Low BID Value' onChange={(e) => setrangelowbid(e.target.value)} />

                              {/* {createDate} */}
                            </div>
                            {/* <label className="gl-label" style={{ color: "red" }} >{createDate !== "" ? ischeck = true : `Please Select Birth Date ${ischeck ? ischeck = false : ""}`}</label> */}
                            {rangelowbid !== "" ? ischeck = true : ischeck = false}
                            <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Low BID Value ` : ""}</label>
                            {parseInt(rangelowbid) < parseInt(bidValue) ?ischeck1=true :ischeck1 =false}
                            <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck1 === false ? `Low BID Value must be less than BID Value ` : ""}</label>
                            {/*====== End - Date of Birth Select-Box ======*/}
                          </div>
                          <div className="u-s-m-b-30">
                            <span className="gl-label">HIGH BID *</span>
                            <div className="gl-dob">
                              <input disabled={ischeck ? false : true} type="text" className='select-box select-box--primary-style' placeholder='High BID Value' onChange={(e) => setrangehighbid(e.target.value)} />

                              {/* {createDate} */}
                            </div>
                            {/* <label className="gl-label" style={{ color: "red" }} >{gender !== "" ? ischeck = true : `Please Select Gender ${ischeck ? ischeck = false : ""}`}</label> */}
                            {rangehighbid !== "" ? ischeck = true : ischeck = false}
                            <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter High BID Value ` : ""}</label>
                            {parseInt(rangehighbid) > parseInt(bidValue) ?ischeck1=true :ischeck1 =false}
                            <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck1 === false ? `High BID Value must be Greater than BID Value ` : ""}</label>
                          </div>
                          {/* {gender} */}
                        </div>

                        <div className="gl-inline">
                          <div className="u-s-m-b-30">
                            {/*====== Date of Birth Select-Box ======*/}
                            <span className="gl-label">PRODUCT NAME *</span>
                            <div className="gl-dob">
                              <input disabled={ischeck ? false : true} type="text" className='select-box select-box--primary-style' placeholder='Product Name' onChange={(e) => setproductname(e.target.value)} />

                              {/* {createDate} */}
                            </div>
                            {/* <label className="gl-label" style={{ color: "red" }} >{createDate !== "" ? ischeck = true : `Please Select Birth Date ${ischeck ? ischeck = false : ""}`}</label> */}
                            {productname !== "" ? ischeck = true : ischeck = false}
                            <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Product Name ` : ""}</label>
                            {/*====== End - Date of Birth Select-Box ======*/}
                          </div>
                          <div className="u-s-m-b-30">
                            <label className="gl-label" htmlFor="gender">CATEGORY *</label><select disabled={ischeck ? false : true} className="select-box select-box--primary-style u-w-100" id="gender" onChange={(e) => setcategory(e.target.value)}>
                              <option selected>Select</option>
                              <option value="Currancy">Currancy</option>
                              <option value="Painting">Painting</option>
                              <option value="Sports Items">Sports Items</option>
                            </select>
                            {/* <label className="gl-label" style={{ color: "red" }} >{gender !== "" ? ischeck = true : `Please Select Gender ${ischeck ? ischeck = false : ""}`}</label> */}
                            {category !== "" ? ischeck = true : ischeck = false}
                            <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Select Category ` : ""}</label>
                          </div>
                          {/* {gender} */}
                        </div>

                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-lname">DESCRIPTION *</label>
                          <input disabled={ischeck ? false : true} className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Description" onChange={(e) => setdescription(e.target.value)} />
                        {/* <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{lastName !== "" ? ischeck = true : `Please Enter Last Name ${ischeck ? ischeck = false : ""}`}</label> */}
                        {description !== "" ? ischeck = true : ischeck = false}
                        <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Description` : ""}</label>
                        </div>
                        
                        <div className="gl-inline">
                          <div className="u-s-m-b-30">
                            {/*====== Date of Birth Select-Box ======*/}
                            <span className="gl-label">AGE OF THE PRODUCT *</span>
                            <div className="gl-dob">
                              <input disabled={ischeck ? false : true} type="text" className='select-box select-box--primary-style' placeholder='Age of The Product' onChange={(e) => setageproduct(e.target.value)} />

                              {/* {createDate} */}
                            </div>
                            {/* <label className="gl-label" style={{ color: "red" }} >{createDate !== "" ? ischeck = true : `Please Select Birth Date ${ischeck ? ischeck = false : ""}`}</label> */}
                            {ageproduct !== "" ? ischeck = true : ischeck = false}
                            <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Age of Product ` : ""}</label>
                            {/*====== End - Date of Birth Select-Box ======*/}
                          </div>
                          <div className="u-s-m-b-30">
                            <span className="gl-label">TIME FOR AUCTION *</span>
                            <div className="gl-dob">
                              <input disabled={ischeck ? false : true} type="date" className='select-box select-box--primary-style' placeholder='Time for Auction on Plateform' onChange={(e) => settime(e.target.value)} />

                              {/* {createDate} */}
                            </div>
                            {/* <label className="gl-label" style={{ color: "red" }} >{gender !== "" ? ischeck = true : `Please Select Gender ${ischeck ? ischeck = false : ""}`}</label> */}
                            {time !== "" ? ischeck = true : ischeck = false}
                            <label className="gl-label" style={{ color: "red" }} htmlFor="reg-lname">{ischeck === false ? `Please Enter Time` : ""}</label>
                          </div>
                          {/* {gender} */}
                        </div>

                        <div className="u-s-m-b-30">
                          <label className="gl-label" htmlFor="reg-phonenumber">Select file *</label>
                          <input  type="file" accept="application/png" id="reg-phonenum" onChange={(e) => setFile(e)} multiple />
                          {/* <input type="submit" value="Upload" onClick={() => submitData()} /> */}

                          {/* <input disabled={ischeck ? false : true} type="text"  id="reg-phonenum"  onChange={(e) => setfilename(e.target.value)}  /> */}
                        </div>

                        <div className="u-s-m-b-15">
                          {isLoading ?  <PulseLoader color='#FF4500'/>:<button disabled={ischeck && resdata? false : true} className="btn btn--e-transparent-brand-b-2" type="submit">CREATE</button>}
                        </div>
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
