import React from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { SectionLinks } from './components/SectionLinks'
import { ManageAccount } from './components/account/ManageAccount'
import { Myprofile } from './components/account/Myprofile'
import { AddressBook } from './components/account/AddressBook'
import { TrackOrder } from './components/account/TrackOrder'
import { MyOrder } from './components/account/MyOrder'
import { MyPayment } from './components/account/MyPayment'
import { Cancellation } from './components/account/Cancellation'
import { EditProfile } from './components/account/EditProfile'
import { EditAddress } from './components/account/EditAddress'
import { ManageOrder } from './components/account/ManageOrder'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
export const MyAccout = () => {
    return (
        <div>
            <Precss/>

            {/* navbar */}
            <Navbar />

            {/* first load login page */}
            <div className="app-content">

                {/* section 1 */}
                <SectionLinks nextLink="Account" />

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
                                                <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                                                <ul className="dash__f-list">
                                                    <li>
                                                        <a className="dash-active" href="dashboard.html">Manage My Account</a></li>
                                                    <li>
                                                        <a href="dash-my-profile.html">My Profile</a></li>
                                                    <li>
                                                        <a href="dash-address-book.html">Address Book</a></li>
                                                    <li>
                                                        <a href="dash-track-order.html">Track Order</a></li>
                                                    <li>
                                                        <a href="dash-my-order.html">My Orders</a></li>
                                                    <li>
                                                        <a href="dash-payment-option.html">My Payment Options</a></li>
                                                    <li>
                                                        <a href="dash-cancellation.html">My Returns &amp; Cancellations</a></li>
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
                                    

                                        {/* <ManageAccount/> */}

                                        {/* <Myprofile/> */}

                                        {/* <AddressBook/> */}

                                        {/* <TrackOrder/> */}

                                        {/* <MyOrder/> */}

                                        {/* <MyPayment/> */}

                                        {/* <Cancellation/> */}

                                        <EditProfile/>
                                        
                                        {/* <EditAddress/> */}

                                        {/* <ManageOrder/> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 2 ======*/}







            </div>
            {/* footer */}
            <Footer />
            <Prejs/>
        </div>
    )
}
