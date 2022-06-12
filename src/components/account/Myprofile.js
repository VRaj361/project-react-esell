import React from 'react'
import {Link} from 'react-router-dom'
export const Myprofile = () => {
    let obj=JSON.parse(sessionStorage.getItem("data"))
    console.log(obj)
    return (
        
            <>
                <div className="col-lg-9 col-md-12">
                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                        <div className="dash__pad-2">
                            <h1 className="dash__h1 u-s-m-b-14">My Profile</h1>
                            <span className="dash__text u-s-m-b-30">Look all your info, you could customize your profile.</span>
                            <div className="row">
                                <div className="col-lg-4 u-s-m-b-30">
                                    <h2 className="dash__h2 u-s-m-b-8">Full Name</h2>
                                    <span className="dash__text">{obj.firstname+" "+obj.lastname}</span>
                                </div>
                                <div className="col-lg-4 u-s-m-b-30">
                                    <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>
                                    <span className="dash__text">{obj.email}</span>
                                    <div className="dash__link dash__link--secondary">
                                        <a href="#">Change</a></div>
                                </div>
                                <div className="col-lg-4 u-s-m-b-30">
                                    <h2 className="dash__h2 u-s-m-b-8">Phone</h2>
                                    <span className="dash__text">{obj.phonenum}</span>
                                    <div className="dash__link dash__link--secondary">
                                        <a href="#">Add</a></div>
                                </div>
                                <div className="col-lg-4 u-s-m-b-30">
                                    <h2 className="dash__h2 u-s-mb-8">Created Date</h2>
                                    <span className="dash__text">{obj.createdate}</span>
                                </div>
                                <div className="col-lg-4 u-s-m-b-30">
                                    <h2 className="dash__h2 u-s-m-b-8">Gender</h2>
                                    <span className="dash__text">{obj.gender}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="dash__link dash__link--secondary u-s-m-b-30">
                                        <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a></div>
                                    <div className="u-s-m-b-16">
                                        <Link className="dash__custom-link btn--e-transparent-brand-b-2" to={'/myaccount/editprofile'}>Edit Profile</Link></div>
                                    <div>
                                        <Link className="dash__custom-link btn--e-brand-b-2" to={"/changepassword"}>Change Password</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        
    )
}
