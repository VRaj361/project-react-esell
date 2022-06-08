import React from 'react'
import {Link} from 'react-router-dom'
import { AddAddress } from './account/AddAddress'
import { AddressBook } from './account/AddressBook'
import { Cancellation } from './account/Cancellation'
import { EditAddress } from './account/EditAddress'
import { EditProfile } from './account/EditProfile'
import { ManageAccount } from './account/ManageAccount'
import { ManageOrder } from './account/ManageOrder'
import { MyOrder } from './account/MyOrder'
import { MyPayment } from './account/MyPayment'
import { Myprofile } from './account/Myprofile'
import { TrackOrder } from './account/TrackOrder'
export const AccountInfo = () => {
 
    const loc=window.location.href
    console.log(loc.includes("/myaccount"))
    let obj=JSON.parse(sessionStorage.getItem("data"));
    return (
        <div>
            <div className="u-s-p-b-60">
                {/*====== Section Content ======*/}
                <div className="section__content">
                    <div className="dash">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    {/*====== Dashboard Features ======*/}
                                    <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                                        <div className="dash__pad-1">
                                            <span className="dash__text u-s-m-b-16">Hello, {obj.firstname+" "+obj.lastname}</span>
                                            <ul className="dash__f-list">
                                                <li>
                                                    <Link to={'/myaccount'} >Manage My Account</Link></li>
                                                <li>
                                                    <Link to={'/myaccount/myprofile'}  >My Profile</Link></li>
                                                <li>
                                                    <Link to={'/myaccount/addressbook'} >Address Book</Link></li>
                                                <li>
                                                    <Link to={'/myaccount/trackorder'} >Track Order</Link></li>
                                                <li>
                                                    <Link to={'/myaccount/myorder'} >My Orders</Link></li>
                                                <li>
                                                    <Link to={'/myaccount/mypayment'} >My Payment Options</Link></li>
                                                <li>
                                                    <Link to={'/myaccount/cancellation'} >My Returns &amp; Cancellations</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                                        <div className="dash__pad-1">
                                            <ul className="dash__w-list">
                                                <li>
                                                    <div className="dash__w-wrap">
                                                        <span className="dash__w-icon dash__w-icon-style-1"><i className="fas fa-cart-arrow-down" /></span>
                                                        <span className="dash__w-text">4</span>
                                                        <span className="dash__w-name">Orders Placed</span></div>
                                                </li>
                                                <li>
                                                    <div className="dash__w-wrap">
                                                        <span className="dash__w-icon dash__w-icon-style-2"><i className="fas fa-times" /></span>
                                                        <span className="dash__w-text">0</span>
                                                        <span className="dash__w-name">Cancel Orders</span></div>
                                                </li>
                                                <li>
                                                    <div className="dash__w-wrap">
                                                        <span className="dash__w-icon dash__w-icon-style-3"><i className="far fa-heart" /></span>
                                                        <span className="dash__w-text">0</span>
                                                        <span className="dash__w-name">Wishlist</span></div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*====== End - Dashboard Features ======*/}
                                </div>

                                {/* load the dynamic content */}

                                {loc.endsWith("/myprofile")?<Myprofile/>:""}
                                {/* <Myprofile/> */}
                                {loc.endsWith("/addressbook")?<AddressBook/>:""}
                                {/* <AddressBook/> */}
                                {loc.endsWith("/trackorder")?<TrackOrder/>:""}
                                {/* <TrackOrder/> */}
                                {loc.endsWith("/myorder")?<MyOrder/>:""}
                                {/* <MyOrder/> */}
                                {loc.endsWith("/mypayment")?<MyPayment/>:""}
                                {/* <MyPayment/> */}
                                {loc.endsWith("/cancellation")?<Cancellation/>:""}
                                {/* <Cancellation/> */}
                                {loc.endsWith("/myaccount")? <ManageAccount/> : ""}
                                {/* <ManageAccount/> */}
                                {loc.endsWith("/manageorder")? <ManageOrder/> : ""}
                                {/* <ManageOrder/> */}
                                {loc.endsWith("/editprofile")? <EditProfile/> : ""}
                                {/* <EditProfile /> */}
                                {loc.endsWith("/addaddress")? <AddAddress/> : ""}
                                {/* <AddAddress /> */}
                                {loc.endsWith("/editaddress")? <EditAddress/> : ""}
                                {/* <EditAddress/> */}



                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section Content ======*/}
            </div>
        </div>
    )
}
