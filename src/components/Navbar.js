import React from 'react'
import { Link } from 'react-router-dom'
import { Prejs } from './Prejs'

export const Navbar = () => {
    //email is use to check that this option availible for login customer 
    const data=sessionStorage.getItem("data")
    

    return (
        <div>

            {/*====== Header Wrapper ======*/}
            <div className="header-wrapper " >
                <header className="header--style-1">
                    {/*====== Nav 1 ======*/}
                    <nav className="primary-nav primary-nav-wrapper--border">
                        <div className="container">
                            {/*====== Primary Nav ======*/}
                            <div className="primary-nav">
                                {/*====== Main Logo ======*/}
                                <Link className="main-logo" to={'/'}>
                                    <img src="images/logo/cartbuddy.png" alt="" width={"200"} /></Link>
                                {/*====== End - Main Logo ======*/}
                                {/*====== Search Form ======*/}
                                <form className="main-form">
                                    <label htmlFor="main-search" />
                                    <input className="input-text input-text--border-radius input-text--style-1" type="text" id="main-search" placeholder="Search" />
                                    <button className="btn btn--icon fas fa-search main-search-button" type="submit" /></form>
                                {/*====== End - Search Form ======*/}
                                {/*====== Dropdown Main plugin ======*/}
                                <div className="menu-init" id="navigation">
                                    <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs" type="button" />
                                    {/*====== Menu ======*/}
                                    <div className="ah-lg-mode">
                                        <span className="ah-close">✕ Close</span>
                                        {/*====== List ======*/}
                                        <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                                            <li className="has-dropdown" data-tooltip="tooltip" data-placement="left" title="Account">
                                                <a>{data!==null?<span className='mega-text' style={{fontSize:"large"}}>{JSON.parse(data).email[0]}</span>:<i className="far fa-user-circle" />}</a>
                                                {/*====== Dropdown ======*/}
                                                <span className="js-menu-toggle" />
                                                <ul style={{ width: '120px' }}>
                                                    <li>
                                                    {data===null?"":
                                                        <Link to={'/myaccount'}><i className="fas fa-user-circle u-s-m-r-6" />
                                                            <span>Account</span></Link>
                                                    }
                                                    </li>
                                                    
                                                    <li>
                                                    {data!==null?"":
                                                        <Link to={'/signup'}><i className="fas fa-user-plus u-s-m-r-6" />
                                                            <span>Signup</span></Link>
                                                    }
                                                    </li>

                                                    <li>
                                                    {data!==null?"":
                                                        <Link to={'/login'}><i className="fas fa-lock u-s-m-r-6" />
                                                            <span>Signin</span></Link>
                                                    }
                                                    </li>
                                                    <li>
                                                    {data!==null?
                                                        <Link to={'/logout'}><i className="fas fa-lock-open u-s-m-r-6" />
                                                            <span>Logout</span></Link>:""
                                                    }
                                                    </li>
                                                </ul>
                                                {/*====== End - Dropdown ======*/}
                                            </li>

                                            <li data-tooltip="tooltip" data-placement="left" title="Contact">
                                                <a href="tel:+0900901904"><i className="fas fa-phone-volume" /></a></li>
                                            <li data-tooltip="tooltip" data-placement="left" title="Mail">
                                                <a href="mailto:contact@domain.com"><i className="far fa-envelope" /></a></li>
                                        </ul>
                                        {/*====== End - List ======*/}
                                    </div>
                                    {/*====== End - Menu ======*/}
                                </div>
                                {/*====== End - Dropdown Main plugin ======*/}
                            </div>
                            {/*====== End - Primary Nav ======*/}
                        </div>
                    </nav>
                    {/*====== End - Nav 1 ======*/}
                    {/*====== Nav 2 ======*/}
                    <nav className="secondary-nav-wrapper">
                        <div className="container">
                            {/*====== Secondary Nav ======*/}
                            <div className="secondary-nav">
                                {/*====== Dropdown Main plugin ======*/}
                                <div className="menu-init" id="navigation1">
                                    {/* given empty space */}
                                </div>
                                {/*====== End - Dropdown Main plugin ======*/}
                                {/*====== Dropdown Main plugin ======*/}
                                <div className="menu-init" id="navigation2">
                                    <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cog" type="button" />
                                    {/*====== Menu ======*/}
                                    <div className="ah-lg-mode">
                                        <span className="ah-close">✕ Close</span>
                                        {/*====== List ======*/}
                                        <ul className="ah-list ah-list--design2 ah-list--link-color-secondary">
                                            <li>
                                                <Link to={'/newarrival'}>NEW ARRIVALS</Link></li>
                                            <li className="has-dropdown">
                                                <a>PAGES<i className="fas fa-angle-down u-s-m-l-6" /></a>
                                                {/*====== Dropdown ======*/}
                                                <span className="js-menu-toggle" />
                                                <ul style={{ width: '170px' }}>
                                                    <li className="has-dropdown has-dropdown--ul-left-100">
                                                        <Link to={"/"}>Home</Link>
                                                    </li>


                                                    <li className="has-dropdown has-dropdown--ul-left-100">
                                                        <a>Empty<i className="fas fa-angle-down i-state-right u-s-m-l-6" /></a>
                                                        {/*====== Dropdown ======*/}
                                                        <span className="js-menu-toggle" />
                                                        <ul style={{ width: '200px' }}>
                                                            <li>
                                                                <a href="empty-search.html">Empty Search</a></li>
                                                            <li>
                                                                <a href="empty-cart.html">Empty Cart</a></li>
                                                            <li>
                                                                <a href="empty-wishlist.html">Empty Wishlist</a></li>
                                                        </ul>
                                                        {/*====== End - Dropdown ======*/}
                                                    </li>
                                                    <li className="has-dropdown has-dropdown--ul-left-100">
                                                        <Link to={"/productdetails"}>Product Details</Link>

                                                    </li>


                                                </ul>
                                                {/*====== End - Dropdown ======*/}
                                            </li>
                                            <li>
                                                <Link to={'/myaccount/manageorder'}>MANAGER ORDER</Link>
                                            </li>
                                            {data!==null?
                                            <li>
                                                <Link to={'/addproduct'}>ADD PRODUCT</Link>
                                            </li>:""
                                            }
                                            <li>
                                                <Link to={'/review'}>REVIEW</Link>
                                            </li>
                                            <li className="">
                                                <Link to={'/contact'}>CONTACT US</Link>

                                            </li>
                                            <li className="">
                                                <Link to={'/about'}>ABOUT US</Link>

                                            </li>
                                            <li className="">
                                                <Link to={'/faq'}>FAQ</Link>

                                            </li>
                                        </ul>
                                        {/*====== End - List ======*/}
                                    </div>
                                    {/*====== End - Menu ======*/}
                                </div>
                                {/*====== End - Dropdown Main plugin ======*/}
                                {/*====== Dropdown Main plugin ======*/}
                                <div className="menu-init" id="navigation3">
                                    <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-shopping-bag toggle-button-shop" type="button" />
                                    <span className="total-item-round">2</span>
                                    {/*====== Menu ======*/}
                                    <div className="ah-lg-mode">
                                        <span className="ah-close">✕ Close</span>
                                        {/*====== List ======*/}
                                        <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                                            <li>
                                                <Link to={"/wishlist"}><i className="far fa-heart" /></Link></li>
                                            <li className="has-dropdown">
                                                <a className="mini-cart-shop-link"><i className="fas fa-shopping-bag" />
                                                    <span className="total-item-round">2</span></a>
                                                {/*====== Dropdown ======*/}
                                                <span className="js-menu-toggle" />
                                                <div className="mini-cart">
                                                    {/*====== Mini Product Container ======*/}
                                                    <div className="mini-product-container gl-scroll u-s-m-b-15">
                                                        {/*====== Card for mini cart ======*/}
                                                        <div className="card-mini-product">
                                                            <div className="mini-product">
                                                                <div className="mini-product__image-wrapper">
                                                                    <a className="mini-product__link" href="product-detail.html">
                                                                        <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></a></div>
                                                                <div className="mini-product__info-wrapper">
                                                                    <span className="mini-product__category">
                                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                                    <span className="mini-product__name">
                                                                        <a href="product-detail.html">Yellow Wireless Headphone</a></span>
                                                                    <span className="mini-product__quantity">1 x</span>
                                                                    <span className="mini-product__price">$8</span></div>
                                                            </div>
                                                            <a className="mini-product__delete-link far fa-trash-alt" />
                                                        </div>
                                                        {/*====== End - Card for mini cart ======*/}
                                                        {/*====== Card for mini cart ======*/}
                                                        <div className="card-mini-product">
                                                            <div className="mini-product">
                                                                <div className="mini-product__image-wrapper">
                                                                    <a className="mini-product__link" href="product-detail.html">
                                                                        <img className="u-img-fluid" src="images/product/electronic/product18.jpg" alt="" /></a></div>
                                                                <div className="mini-product__info-wrapper">
                                                                    <span className="mini-product__category">
                                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                                    <span className="mini-product__name">
                                                                        <a href="product-detail.html">Nikon DSLR Camera 4k</a></span>
                                                                    <span className="mini-product__quantity">1 x</span>
                                                                    <span className="mini-product__price">$8</span></div>
                                                            </div>
                                                            <a className="mini-product__delete-link far fa-trash-alt" />
                                                        </div>
                                                        {/*====== End - Card for mini cart ======*/}
                                                        {/*====== Card for mini cart ======*/}
                                                        <div className="card-mini-product">
                                                            <div className="mini-product">
                                                                <div className="mini-product__image-wrapper">
                                                                    <a className="mini-product__link" href="product-detail.html">
                                                                        <img className="u-img-fluid" src="images/product/women/product8.jpg" alt="" /></a></div>
                                                                <div className="mini-product__info-wrapper">
                                                                    <span className="mini-product__category">
                                                                        <a href="shop-side-version-2.html">Women Clothing</a></span>
                                                                    <span className="mini-product__name">
                                                                        <a href="product-detail.html">New Dress D Nice Elegant</a></span>
                                                                    <span className="mini-product__quantity">1 x</span>
                                                                    <span className="mini-product__price">$8</span></div>
                                                            </div>
                                                            <a className="mini-product__delete-link far fa-trash-alt" />
                                                        </div>
                                                        {/*====== End - Card for mini cart ======*/}
                                                        {/*====== Card for mini cart ======*/}
                                                        <div className="card-mini-product">
                                                            <div className="mini-product">
                                                                <div className="mini-product__image-wrapper">
                                                                    <a className="mini-product__link" href="product-detail.html">
                                                                        <img className="u-img-fluid" src="images/product/men/product8.jpg" alt="" /></a></div>
                                                                <div className="mini-product__info-wrapper">
                                                                    <span className="mini-product__category">
                                                                        <a href="shop-side-version-2.html">Men Clothing</a></span>
                                                                    <span className="mini-product__name">
                                                                        <a href="product-detail.html">New Fashion D Nice Elegant</a></span>
                                                                    <span className="mini-product__quantity">1 x</span>
                                                                    <span className="mini-product__price">$8</span></div>
                                                            </div>
                                                            <a className="mini-product__delete-link far fa-trash-alt" />
                                                        </div>
                                                        {/*====== End - Card for mini cart ======*/}
                                                    </div>
                                                    {/*====== End - Mini Product Container ======*/}
                                                    {/*====== Mini Product Statistics ======*/}
                                                    <div className="mini-product-stat">
                                                        <div className="mini-total">
                                                            <span className="subtotal-text">SUBTOTAL</span>
                                                            <span className="subtotal-value">$16</span></div>
                                                        <div className="mini-action">
                                                            <Link className="mini-link btn--e-brand-b-2" to={"/checkout"}>PROCEED TO CHECKOUT</Link>
                                                            <Link className="mini-link btn--e-transparent-secondary-b-2" to={"/viewcart"}>VIEW CART</Link></div>
                                                    </div>
                                                    {/*====== End - Mini Product Statistics ======*/}
                                                </div>
                                                {/*====== End - Dropdown ======*/}
                                            </li>
                                        </ul>
                                        {/*====== End - List ======*/}
                                    </div>
                                    {/*====== End - Menu ======*/}
                                </div>
                                {/*====== End - Dropdown Main plugin ======*/}
                            </div>
                            {/*====== End - Secondary Nav ======*/}
                        </div>
                    </nav>
                    {/*====== End - Nav 2 ======*/}
                </header>
            </div>
            {/*====== End - Header Wrapper ======*/}
            <Prejs />
        </div>


    )
}
