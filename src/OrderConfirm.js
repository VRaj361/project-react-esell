import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { SectionLinks } from './components/SectionLinks'
import axios from 'axios'
import { useNavigate ,Link} from 'react-router-dom'
export const OrderConfirm = () => {
    const [products1, setproducts1] = useState()
    const [isloading1, setisloading1] = useState(true)
    const [iserror1, setiserror1] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setiserror1(false);
            try {
                const response = await axios('http://localhost:9999/orders/' + JSON.parse(sessionStorage.getItem("data")).userid);
                setproducts1(response);


                if (response !== undefined) {
                    // console.log(response)
                    setisloading1(false)

                }
            } catch (error) {
                setiserror1(true);
            }
        };
        fetchData()
    }, [])
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

                                    <span class="empty__text-1">Check for Email for more details.</span>

                                    <Link class="empty__redirect-link btn--e-brand" to={'/'} >Back to Home</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="o-summary__section u-s-m-b-30">
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
            </div>


            <Footer />
            <Prejs />
        </div>
    )
}
