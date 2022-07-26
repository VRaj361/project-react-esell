import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
export const ManageAccount = () => {
    const [product, setproduct] = useState()
    const [isloading, setisloading] = useState(true)
    let token = "";
    if (sessionStorage.getItem("data") !== null) {
        token = JSON.parse(sessionStorage.getItem("data")).authtoken
    }
    useEffect(() => {
        const fetchData = async () => {

            try {
                axios.get("http://localhost:9999/allorders", { headers: { "authtoken": token } }).then((e) => {
                    if (e !== null) {
                        setproduct(e.data.data);
                        setisloading(false)
                    }
                })
            } catch (error) {
                console.log("problem in manageaccount")
            }
        }

        fetchData()
    }, [])
    return (
        <>

            <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                    <div className="dash__pad-2">
                        <h1 className="dash__h1 u-s-m-b-14">Manage My Account</h1>
                        <span className="dash__text u-s-m-b-30">From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.</span>
                        <div className="row">
                            <div className="col-lg-4 u-s-m-b-30">
                                <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                    <div className="dash__pad-3">
                                        <h2 className="dash__h2 u-s-m-b-8">PERSONAL PROFILE</h2>
                                        <div className="dash__link dash__link--secondary u-s-m-b-8">
                                            <Link to={"/myaccount/editprofile"}>Edit</Link></div>
                                        <span className="dash__text">If you Required to change your Password.</span>
                                        <div className="dash__link dash__link--secondary u-s-m-b-8">
                                            <Link to={"/changepassword"}>Change Password</Link></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 u-s-m-b-30">
                                <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                    <div className="dash__pad-3">
                                        <h2 className="dash__h2 u-s-m-b-8">ADDRESS BOOK</h2>
                                        <span className="dash__text-2 u-s-m-b-8">Show Your All Addresses</span>
                                        <div className="dash__link dash__link--secondary u-s-m-b-8">
                                            <Link to={"/myaccount/addressbook"}>Show</Link></div>
                                        <span className="dash__text">You can add Shiping Address at Billing Page.</span>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 u-s-m-b-30">
                                <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                    <div className="dash__pad-3">
                                        <h2 className="dash__h2 u-s-m-b-8">OFFERS AND COUPONS</h2>
                                        <div className="dash__link dash__link--secondary u-s-m-b-8">
                                            <Link to={"/myaccount/couponoffer"}>Show</Link></div>
                                        <span className="dash__text">Coupens can Add on the base of Purchase Item.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {product !== undefined && isloading === false ? <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius">
                    <h2 className="dash__h2 u-s-p-xy-20">RECENT ORDERS</h2>
                    <div className="dash__table-wrap gl-scroll">
                        <table className="dash__table">
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Bill Name</th>
                                    <th>Date of Bill</th>
                                    <th>Bill Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((e) => {
                                    return (
                                        <tr>
                                            <td>{e.orderid}</td>
                                            <td>26/13/2016</td>
                                            <td>{e.billname}</td>
                                            <td>
                                                <div className="dash__table-total">
                                                    <span>Rs. {e.billamount+e.billtax}</span>
                                                    <div className="dash__link dash__link--brand">
                                                        <a href="dash-manage-order.html">MANAGE</a></div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })

                                }
                            </tbody>
                        </table>
                    </div>
                </div> : <PulseLoader color="#FF4500" />}
            </div>





        </>
    )
}
