import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { SectionLinks } from './components/SectionLinks'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Checkout = () => {
    const [products1, setproducts1] = useState()
    const [isloading1, setisloading1] = useState(true)
    const [iserror1, setiserror1] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setiserror1(false);
            try {
                const response = await axios('http://localhost:9999/products/' + JSON.parse(sessionStorage.getItem("data")).userid);
                setproducts1(response);


                if (response !== undefined) {

                    setisloading1(false)

                }
            } catch (error) {
                setiserror1(true);
            }
        };
        fetchData()
    }, [])



    const [isloading, setisloading] = useState(true)
    const [iserror, setiserror] = useState(false)
    const [obj, setobj] = useState()



    const [objFi, setobjFi] = useState()
    useEffect(() => {
        const fetchData = async () => {
            setiserror(false);


            try {
                const response = await axios('http://localhost:9999/user');
                response.data.map((e) => {
                    if (e.userid === JSON.parse(sessionStorage.getItem("data")).userid) {
                        // setobj(e);
                        setobjFi(JSON.parse(e.address))
                    }
                })
                if (response !== undefined) {
                    setisloading(false)
                }
            } catch (error) {
                setiserror(true);
            }

        }; 
        fetchData()

    }, [products1])

    // console.log("objFi ",objFi)


    const navigate = useNavigate()
    const deleteParticularProduct = async (productid) => {
        await axios.get("http://localhost:9999/productdelete/" + productid + "/" + JSON.parse(sessionStorage.getItem("data")).userid).then(() => {
        })

        window.location.reload()
        navigate('/checkout')

    }

    //for form detail in bill
    const [billname, setbillname] = useState()
    const [ordernote, setordernote] = useState()
    const [address, setaddress] = useState()

    const [paymentMethod, setpaymentmethod] = useState()


    var is_check=false
    const saveDetail = ()=>{
    
        // console.log(billname)
        // console.log(ordernote)
        console.log(address)
        is_check=true
    }



    const placeOrder = async()=>{
        if(is_check===true){
            var obj={"billname":billname,"ordernote":ordernote,"address":address,"payinfo":paymentMethod,"userid":JSON.parse(sessionStorage.getItem("data")).userid}
            console.log(obj)
            await axios.post("http://localhost:9999/order",obj).then((res)=>{
                // console.log(res)
                if(res!==undefined){
                    navigate("/billconfirm")
                }
            })
        }else{
            alert("Please Enter Bill name and select the Address")
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
                                                {isloading===false&&objFi!==null?
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
                                                    {isloading1 === false && products1 !== undefined && products1 !== "" ?
                                                        products1.data.map((e) => {
                                                            return (
                                                                <div className="o-card">
                                                                    <div className="o-card__flex">
                                                                        <div className="o-card__img-wrap">
                                                                            <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
                                                                        <div className="o-card__info-wrap">
                                                                            <span className="o-card__name">
                                                                                <a href="product-detail.html">{e.productname}</a></span>
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

                                            {/* <div className="o-summary__section u-s-m-b-30">
                                                <div className="o-summary__box">
                                                    <table className="o-summary__table">
                                                        <tbody>
                                                            
                                                            <tr>
                                                                <td>SUBTOTAL</td>
                                                                <td>Rs. {finalAmount}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Delivery Charge</td>
                                                                <td> {sum<500?"Rs.50":""}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>GRAND TOTAL</td>
                                                                <td>Rs. {finalAmount}</td>
                                                            </tr>
                                                            <tr>
                                                                <td><button onClick={()=>setOnclickprice()}>dfklashkj</button></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div> 
                                                    </div>*/}
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
