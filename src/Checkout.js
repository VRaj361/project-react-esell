import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { SectionLinks } from './components/SectionLinks'
import { SetToast } from './components/SetToast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { cleanup } from '@testing-library/react'
export const Checkout = (props) => {
    
    const [products1, setproducts1] = useState()
    const [isloading1, setisloading1] = useState(true)
    const [isloading, setisloading] = useState(true)
    const [obj, setobj] = useState(undefined)
    const [objFi, setobjFi] = useState()
    let token ="";
    
    if(sessionStorage.getItem("data")!==null){
         token=JSON.parse(sessionStorage.getItem("data")).authtoken
    }
    
    useEffect(() => {
        axios.get("http://localhost:9999/getuserdata",{headers:{'authtoken':token}}).then((e)=>{
            if(e.data.data === null && e.data.status ===404){
                navigate("/error404")
            }else{
                setobj(e.data.data);
                console.log(e.data.data)
                if(e.data.data.address===""){    
                    props.toastClick("Please Enter Address First,2")
                    navigate("/myaccount/addressbook")
                }
            }
        })
    },[])


    useEffect(() => {
        const fetchData = async () => {
            
            if(obj!==undefined){
                try {
                    await axios.get("http://localhost:9999/productviewcart",{headers:{"userid":obj.userid,"authtoken":token}}).then((e)=>{
                        console.log("e",e)
                       
                        if (e.data.status===200 ) {
                            setproducts1(e.data.data);
                            console.log("address-->"+typeof(obj.address))
                            setobjFi(JSON.parse(obj.address))
                            setisloading1(false)

                            console.log("products1"+products1)
                        }
                    })   
                } catch (error) {
                    console.log("error=>",error)
                    props.toastClick("Something went Wrong,3")
                }
            }else{
                setproducts1("")
            }
   
        }
        fetchData()
  
    },[obj])


    const navigate = useNavigate()
    const deleteParticularProduct =  async(producid)=>{
        await axios.delete("http://localhost:9999/deleteproduct",{data:{"userid":obj.userid,"authtoken":token,"productid":producid}}).then((e)=>{
            if(e.data.data===true && e.data.status===200){
                window.location.reload()
                navigate('/newarrival')
            }
        })
       
    }
    const [billname, setbillname] = useState()
    const [ordernote, setordernote] = useState()
    const [address, setaddress] = useState()

    const [paymentMethod, setpaymentmethod] = useState()

    const [is_check, setis_check] = useState(false)
    const saveDetail = ()=>{
        props.toastClick("Clicked,1")
        setis_check(true)
    }



    const placeOrder = async()=>{
        // console.log(is_check)
        if(is_check===true){
            var ob={"billname":billname,"ordernote":ordernote,"billaddress":address,"payinfo":paymentMethod,"userid":obj.userid}
            await axios.post("http://localhost:9999/orderauth",ob,{headers:{"authtoken":token}}).then((res)=>{
                if(res!==undefined){
                    if(res.data.data===null && res.data.status===500){
                        // alert("Please do Order After One order can Dispatch")
                        props.toastClick("Internal server issues,2")
                        navigate("/viewcart")
                    }else if(res.data.data===null && res.data.status===401){
                        props.toastClick("Unauthorized User,3")
                        navigate("/viewcart")
                    }else{
                        props.toastClick("Order Placed,1")
                        console.log("checkout---->"+res.data.data)
                        sessionStorage.setItem("orderid",res.data.data.orderid)
                        navigate("/billconfirm")
                    }
             
                }
            })
        }else{
            props.toastClick("Please Enter Bill name and select the Address")
        }
    }


    return (
        <div>
            <Precss />
            <Navbar />
            <SectionLinks nextLink="Checkout" />
            <div>
                <div className="u-s-p-b-60">
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div id="checkout-msg-group">

                                        <div className="msg">
                                            <span className="msg__text">Have a coupon?
                                                <a className="gl-link" href="#have-coupon" data-toggle="collapse">Click Here to enter your code</a></span>
                                            <div className="collapse" id="have-coupon" data-parent="#checkout-msg-group">
                                                <div className="c-f u-s-m-b-16">
                                                    <span className="gl-text u-s-m-b-16">Enter your coupon code if you have one.</span>
                                                    <form className="c-f__form">
                                                        <div className="u-s-m-b-16">
                                                            <div className="u-s-m-b-15">
                                                                <label htmlFor="coupon" />
                                                                <input className="input-text input-text--primary-style" type="text" id="coupon" placeholder="Coupon Code" /></div>
                                                            <div className="u-s-m-b-15">
                                                                <button className="btn btn--e-transparent-brand-b-2" type="submit">APPLY</button></div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 2 ======*/}
                {/*====== Section 3 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="checkout-f">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h1 className="checkout-f__h1">DELIVERY INFORMATION</h1>
                                        <form className="checkout-f__delivery">
                                            <div className="u-s-m-b-30">

                                                {/*====== Name ======*/}
                                                <div className="gl-inline">
                                                    <div className="u-s-m-b-15">
                                                        <label className="gl-label" htmlFor="billing-lname">ENTER NAME FOR BILL *</label>
                                                        <input required className="input-text input-text--primary-style" type="text" id="billing-lname" onChange={(e)=>setbillname(e.target.value)} /></div>
                                                </div>
                                                {/*====== End - Name ======*/}

                                                {/*====== Order Note ======*/}
                                                <div className="u-s-m-b-10">
                                                    <label className="gl-label" htmlFor="order-note">ORDER NOTE</label><textarea className="text-area text-area--primary-style" id="order-note" onChange={(e)=>setordernote(e.target.value)}/>
                                                </div>

                                                {/* ====== Address ========= */}
                                                {products1!==undefined&&isloading1===false&&objFi!==null?
                                                    <div className="u-s-m-b-10">
                                                        <label className="gl-label" htmlFor="order-note">Choose Address</label>
                                                        {objFi.map((e) => {
                                                            return (
                                                                <div className="radio-box">
                                                                    <input type="radio" name="address" value={e.streetadd+' '+e.landmark+' '+' '+e.city+' '+e.state+' '+e.country+' '+e.postal} onChange={(a)=>setaddress(a.target.value)}/>
                                                                    <div className="radio-box__state radio-box__state--primary">
                                                                        <label className="radio-box__label" htmlFor="cash-on-delivery" >{e.streetadd + " " + e.landmark + " ," + e.postal}</label>
                                                                        <label className="radio-box__label" htmlFor="cash-on-delivery" >{e.state}</label>
                                                                        <label className="radio-box__label" htmlFor="cash-on-delivery" >{e.city}</label>
                                                                        <label className="radio-box__label" htmlFor="cash-on-delivery">{e.country}</label>

                                                                    </div>
                                                                </div>
                                                            )
                                                        })}

                                                    </div>

                                               :""}

                                                <div>
                                                    <button className="btn btn--e-transparent-brand-b-2" onClick={()=>saveDetail()} type="button" >SAVE</button></div>
                                                {/*====== End Order Note  ======*/}
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-6">
                                        <h1 className="checkout-f__h1">ORDER SUMMARY</h1>
                                        {/*====== Order Summary ======*/}
                                        <div className="o-summary">
                                            <div className="o-summary__section u-s-m-b-30">
                                                <div className="o-summary__item-wrap gl-scroll">
                                                    {isloading1 === false && products1 !== undefined  ?
                                                        products1.map((e) => {
                                                            return (
                                                                <div className="o-card">
                                                                    <div className="o-card__flex">
                                                                        <div className="o-card__img-wrap">
                                                                            <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
                                                                        <div className="o-card__info-wrap">
                                                                            <span className="o-card__name">
                                                                                <a>{e.productname}</a></span>
                                                                            {/* <span className="o-card__quantity">Quantity x 1</span> */}
                                                                            <span className="o-card__price">Rs. {e.price}</span></div>
                                                                    </div>
                                                                    {/* <a className="o-card__del far fa-trash-alt" /> */}
                                                                    <div className="table-p__del-wrap">
                                                                        <button className="far fa-trash-alt table-p__delete-link" onClick={() => deleteParticularProduct(e.productid)}></button></div>
                                                                </div>
                                                            )
                                                        }) : ""}




                                                </div>
                                            </div>

                                            
                                            <div className="o-summary__section u-s-m-b-30">
                                                <div className="o-summary__box">
                                                    <h1 className="checkout-f__h1">PAYMENT INFORMATION</h1>
                                                    <form className="checkout-f__payment">
                                                        <div className="u-s-m-b-10">
                                                            {/*====== Radio Box ======*/}
                                                            <div className="radio-box">
                                                                <input type="radio" value="cod" name="payment" onChange={(e)=>setpaymentmethod(e.target.value)} />
                                                                <div className="radio-box__state radio-box__state--primary">
                                                                    <label className="radio-box__label" htmlFor="cash-on-delivery">Cash on Delivery</label></div>
                                                            </div>
                                                            {/*====== End - Radio Box ======*/}
                                                            <span className="gl-text u-s-m-t-6">Pay Upon Cash on delivery. (This service is only available for some countries)</span>
                                                        </div>
                                                        

                                                        <div className="u-s-m-b-10">
                                                            {/*====== Radio Box ======*/}
                                                            <div className="radio-box">
                                                                <input type="radio" value="paywithcard" name="payment" onChange={(e)=>setpaymentmethod(e.target.value)}  />
                                                                <div className="radio-box__state radio-box__state--primary">
                                                                    <label className="radio-box__label" htmlFor="pay-with-card">Pay With Credit / Debit Card</label></div>
                                                            </div>
                                                            {/*====== End - Radio Box ======*/}
                                                            <span className="gl-text u-s-m-t-6">International Credit Cards must be eligible for use within the United States.</span>
                                                        </div>
                                                        <div className="u-s-m-b-10">
                                                            {/*====== Radio Box ======*/}
                                                            <div className="radio-box">
                                                                <input type="radio" value="paypal" name="payment" onChange={(e)=>setpaymentmethod(e.target.value)} />
                                                                <div className="radio-box__state radio-box__state--primary">
                                                                    <label className="radio-box__label" htmlFor="pay-pal">Pay Pal</label></div>
                                                            </div>
                                                            {/*====== End - Radio Box ======*/}
                                                            <span className="gl-text u-s-m-t-6">When you click "Place Order" below we'll take you to Paypal's site to set up your billing information.</span>
                                                        </div>
                                                       
                                                        <div>
                                                            <button className="btn btn--e-brand-b-2" type="button" onClick={()=>placeOrder()}>PLACE ORDER</button></div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/*====== End - Order Summary ======*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 3 ======*/}
                {/*====== End - App Content ======*/}
            </div>
            <Footer />
            <Prejs />
        </div>
    )
}
