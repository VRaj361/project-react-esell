import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { SectionLinks } from './components/SectionLinks'
import axios from 'axios'
import { useNavigate ,Link} from 'react-router-dom'
export const OrderConfirm = () => {
    //const [products1, setproducts1] = useState()
    //const [isloading1, setisloading1] = useState(true)
    
    let token ="";
    if(sessionStorage.getItem("data")!==null){
         token=JSON.parse(sessionStorage.getItem("data")).authtoken
    }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await axios.get('https://cartbuddy-api.herokuapp.com/order',{headers:{"authtoken":token,"orderid":parseInt(sessionStorage.getItem("orderid"))}}).then((e)=>{
    //             console.log('fetchdata--->'+e.data)
    //             if(e.data.data!==null){
    //                 setproducts1(e.data)
    //                 setisloading1(false)
    //             }
    //         })
    //     };
    //     fetchData()
    // }, [])
    return (
        <div>
            <Precss />
            <Navbar />
            <SectionLinks nextLink="Show Bill" />
            <div class="section__content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 u-s-m-b-30">
                            <div class="empty">
                                <div class="empty__wrap">

                                    <span class="empty__big-text">Order Placed</span>

                                    <span class="empty__text-1">Check for more Details in My Order.</span>

                                    <Link class="empty__redirect-link btn--e-brand" to={'/'} >Back to Home</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="o-summary__section u-s-m-b-30">
                <div className="o-summary__box">
                <div class="empty__wrap">
                <span class="empty__text-1">Order Summary</span>
                </div>
                    {products1!==undefined&&isloading1===false?<table className="o-summary__table">
                        <tbody>

                            <tr>
                                <td>SUBTOTAL</td>
                                <td>Rs. {products1.data.billamount}</td>
                            </tr>
                            <tr>
                                <td>Delivery Charge</td>
                                <td>{products1.data.billtax===0?"Free Delivery":products1.data.billtax}</td>
                            </tr>
                            <tr>
                                <td>GRAND TOTAL</td>
                                <td>Rs. {products1.data.billamount+products1.data.billtax}</td>
                            </tr>

                        </tbody>
                    </table>:""}
                </div>
            </div> */}


            <Footer />
            <Prejs />
        </div>
    )
}
