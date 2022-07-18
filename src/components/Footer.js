import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
    const [email, setemail] = useState()
    const sendEmailRegister = (e)=>{
        e.preventDefault()
                
    }
    return (
        <div>
            <footer>
                <div className="outer-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="outer-footer__content u-s-m-b-40">
                                    <span className="outer-footer__content-title">Contact Us</span>
                                    <div className="outer-footer__text-wrap"><i className="fas fa-home" />
                                        <span>4247 Ashford Drive Virginia VA-20006 USA</span></div>
                                    <div className="outer-footer__text-wrap"><i className="fas fa-phone-volume" />
                                        <span>(+0) 900 901 904</span></div>
                                    <div className="outer-footer__text-wrap"><i className="far fa-envelope" />
                                        <span>contact@domain.com</span></div>
                                    <div className="outer-footer__social">
                                        <ul>
                                            <li>
                                                <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f" /></a></li>
                                            <li>
                                                <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter" /></a></li>
                                            <li>
                                                <a className="s-youtube--color-hover" href="#"><i className="fab fa-youtube" /></a></li>
                                            <li>
                                                <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram" /></a></li>
                                            <li>
                                                <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="outer-footer__content u-s-m-b-40">
                                            <span className="outer-footer__content-title">Information</span>
                                            <div className="outer-footer__list-wrap">
                                                <ul>
                                                    <li>
                                                        <Link to={'/newarrival'}>Cart</Link></li>
                                                    <li>
                                                        <Link to={'/signup'}>Signup</Link></li>
                                                    <li>
                                                        <Link to={'/login'}>Login</Link></li>
                                                    <li>
                                                        <Link to={'/auction'}>Auction</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="outer-footer__content u-s-m-b-40">
                                            <div className="outer-footer__list-wrap">
                                                <span className="outer-footer__content-title">Our Company</span>
                                                <ul>
                                                    <li>
                                                        <Link to={'/about'}>About us</Link></li>
                                                    <li>
                                                        <Link to={'/contact'}>Contact Us</Link></li>
                                                    <li>
                                                        <Link to={'/faq'}>Sitemap</Link></li>
                                                    <li>
                                                        <Link to={'/review'}>Store</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="outer-footer__content">
                                    <span className="outer-footer__content-title">Join our Newsletter</span>
                                    <form className="newsletter" onSubmit={sendEmailRegister}>
                                        
                                        <div className="newsletter__group">
                                            <label htmlFor="newsletter" />
                                            <input className="input-text input-text--only-white" type="text" id="newsletter" placeholder="Enter your Email" onChange={(e)=>{setemail(e.target.value)}} />
                                            <button className="btn btn--e-brand newsletter__btn" type="submit">SUBSCRIBE</button></div>
                                        <span className="newsletter__text">Subscribe to the mailing list to receive updates on promotions, new arrivals, discount and coupons.</span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="lower-footer__content">
                                    <div className="lower-footer__copyright">
                                        <span>Copyright © 2022</span>
                                        <Link to={'/'}> CartBuddy</Link>
                                        <span> All Right Reserved</span></div>
                                    <div className="lower-footer__payment">
                                        <ul>
                                            <li><i className="fab fa-cc-stripe" /></li>
                                            <li><i className="fab fa-cc-paypal" /></li>
                                            <li><i className="fab fa-cc-mastercard" /></li>
                                            <li><i className="fab fa-cc-visa" /></li>
                                            <li><i className="fab fa-cc-discover" /></li>
                                            <li><i className="fab fa-cc-amex" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
