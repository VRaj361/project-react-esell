import React from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { PreLoading } from './components/PreLoading'
export const Home = () => {

    return (
        <div>
            {/* loading page */}
            {/* <PreLoading/> */}
            <Prejs />
            <Precss />
            <Navbar />
            {/* <SliderHome /> */}
            <div className="app-content">
                {/*====== Primary Slider ======*/}
                <div className="s-skeleton s-skeleton--h-600 s-skeleton--bg-grey">
                    <div className="owl-carousel primary-style-1" id="hero-slider">
                        <div className="hero-slide hero-slide--1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="slider-content slider-content--animation">
                                            <span className="content-span-1 u-c-secondary">Latest Update Stock</span>
                                            <span className="content-span-2 u-c-secondary">30% Off On Electronics</span>
                                            <span className="content-span-3 u-c-secondary">Find electronics on best prices, Also Discover most selling products of electronics</span>
                                            <span className="content-span-4 u-c-secondary">Starting At
                                                <span className="u-c-brand">$1050.00</span></span>
                                            <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide hero-slide--2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="slider-content slider-content--animation">
                                            <span className="content-span-1 u-c-white">Find Top Brands</span>
                                            <span className="content-span-2 u-c-white">10% Off On Electronics</span>
                                            <span className="content-span-3 u-c-white">Find electronics on best prices, Also Discover most selling products of electronics</span>
                                            <span className="content-span-4 u-c-white">Starting At
                                                <span className="u-c-brand">$380.00</span></span>
                                            <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide hero-slide--3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="slider-content slider-content--animation">
                                            <span className="content-span-1 u-c-secondary">Find Top Brands</span>
                                            <span className="content-span-2 u-c-secondary">10% Off On Electronics</span>
                                            <span className="content-span-3 u-c-secondary">Find electronics on best prices, Also Discover most selling products of electronics</span>
                                            <span className="content-span-4 u-c-secondary">Starting At
                                                <span className="u-c-brand">$550.00</span></span>
                                            <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Primary Slider ======*/}
                {/*====== Section 1 ======*/}
                <div className="u-s-p-y-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-46">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary u-s-m-b-12">SHOP BY DEALS</h1>
                                        <span className="section__span u-c-silver">BROWSE FAVOURITE DEALS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 u-s-m-b-30">
                                    <a className="collection" href="shop-side-version-2.html">
                                        <div className="aspect aspect--bg-grey  box-image">
                                            <img className="  collection__img" src="images/collection/blackfridaysell.jpg" alt="" /></div>
                                    </a></div>
                                <div className="col-lg-7 col-md-7 u-s-m-b-30">
                                    <a className="collection" href="shop-side-version-2.html">
                                        <div className="aspect aspect--bg-grey   box-image">
                                            <img className="collection__img" src="images/collection/cybermonday.jpg" alt="" /></div>
                                    </a></div>
                                <div className="col-lg-7 col-md-7 u-s-m-b-30">
                                    <a className="collection" href="shop-side-version-2.html">
                                        <div className="aspect aspect--bg-grey  box-image">
                                            <img className=" collection__img" src="images/collection/saleposter.jpg" alt="" /></div>
                                    </a></div>
                                <div className="col-lg-5 col-md-5 u-s-m-b-30">
                                    <a className="collection" href="shop-side-version-2.html">
                                        <div className="aspect aspect--bg-grey   box-image">
                                            <img className="collection__img" src="images/collection/specialoffer.jpg" alt="" /></div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    {/*====== Section Content ======*/}
                </div>
                {/*====== End - Section 1 ======*/}
                {/*====== Section 2 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-16">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary u-s-m-b-12">TOP TRENDING</h1>
                                        <span className="section__span u-c-silver">CHOOSE CATEGORY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="filter-category-container">
                                        <div className="filter__category-wrapper">
                                            <button className="btn filter__btn filter__btn--style-1 js-checked" type="button" data-filter="*">ALL</button></div>
                                        <div className="filter__category-wrapper">
                                            <button className="btn filter__btn filter__btn--style-1" type="button" data-filter=".headphone">HEADPHONES</button></div>
                                        <div className="filter__category-wrapper">
                                            <button className="btn filter__btn filter__btn--style-1" type="button" data-filter=".smartphone">SMARTPHONES</button></div>
                                        <div className="filter__category-wrapper">
                                            <button className="btn filter__btn filter__btn--style-1" type="button" data-filter=".sportgadget">SPORT GADGETS</button></div>
                                        <div className="filter__category-wrapper">
                                            <button className="btn filter__btn filter__btn--style-1" type="button" data-filter=".dslr">DSLR</button></div>
                                    </div>
                                    <div className="filter__grid-wrapper u-s-m-t-30 " >
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item headphone">
                                                <div className="product-o product-o--hover-on product-o--radius">
                                                    <div className="product-o__wrap box-img">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="https://media.istockphoto.com/photos/red-headphone-on-white-background-headphones-isolated-on-a-white-picture-id1198424468?k=20&m=1198424468&s=612x612&w=0&h=OStauJp1dD5RGfjt4gwZCG9ePHh_1a8b94iozzeUUlU=" alt="" /></a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">Red Wireless Headphone</a></span>
                                                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                                                        <span className="product-o__review">(23)</span></div>
                                                    <span className="product-o__price">$125.00
                                                        <span className="product-o__discount">$160.00</span></span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item headphone">
                                                <div className="product-o product-o--hover-on product-o--radius">
                                                    <div className="product-o__wrap box-img">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="https://www.reliancedigital.in/medias/Realme-BT-Stereo-Buds-WL2-ANC-Earphone-492403683-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDUzN3xpbWFnZS9qcGVnfGltYWdlcy9oYjAvaGE2Lzk2MjM2NDc0ODU5ODIuanBnfDJkMjdhMzg3NDc0MDM4OWZjMmYxZjRjYWNhMDY0ZDZmOTZmNDE3MjUwODUwNDBjZDA0ZjcyYTQwYmI2NzZiNmQ" alt="" /></a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">Yellow Wireless Headphone</a></span>
                                                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" /><i className="far fa-star" /><i className="far fa-star" />
                                                        <span className="product-o__review">(23)</span></div>
                                                    <span className="product-o__price">$125.00
                                                        <span className="product-o__discount">$160.00</span></span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item sportgadget">
                                                <div className="product-o product-o--hover-on product-o--radius">
                                                    <div className="product-o__wrap box-img">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="https://5.imimg.com/data5/DX/BP/MY-4597056/hover-board-electric-scooter-500x500.jpg" alt="" /></a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">Hover Skateboard Scooter</a></span>
                                                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                                                        <span className="product-o__review">(23)</span></div>
                                                    <span className="product-o__price">$125.00
                                                        <span className="product-o__discount">$160.00</span></span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item sportgadget">
                                                <div className="product-o product-o--hover-on product-o--radius">
                                                    <div className="product-o__wrap box-img">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="https://i.pinimg.com/originals/1b/cd/25/1bcd25f34d55c2a7ab73241234c5055e.jpg" alt="" /></a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">Hover Red Skateboard Scooter</a></span>
                                                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                                                        <span className="product-o__review">(23)</span></div>
                                                    <span className="product-o__price">$125.00
                                                        <span className="product-o__discount">$160.00</span></span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item dslr">
                                                <div className="product-o product-o--hover-on product-o--radius">
                                                    <div className="product-o__wrap box-img">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="https://m.media-amazon.com/images/I/618rNsyJvyL._SL1200_.jpg" alt="" /></a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">Canon DSLR Camera 4k</a></span>
                                                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                                                        <span className="product-o__review">(23)</span></div>
                                                    <span className="product-o__price">$125.00
                                                        <span className="product-o__discount">$160.00</span></span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item smartphone">
                                                <div className="product-o product-o--hover-on product-o--radius">
                                                    <div className="product-o__wrap box-img">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="https://www.mytrendyphone.ie/images/Samsung-Galaxy-S21-5G-128GB-Phantom-Grey-8806090892776-18012021-03-p.jpg" alt="" /></a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">Sumsung S21 RAM 6GB New</a></span>
                                                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                                                        <span className="product-o__review">(23)</span></div>
                                                    <span className="product-o__price">$125.00
                                                        <span className="product-o__discount">$160.00</span></span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item smartphone">
                                                <div className="product-o product-o--hover-on product-o--radius">
                                                    <div className="product-o__wrap box-img">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="https://www.mymobilesprice.com/wp-content/uploads/2021/11/Xiaomi-Poco-X4-NFC-500x500.jpg" alt="" /></a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">Smartphone RAM 8GB New</a></span>
                                                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                                                        <span className="product-o__review">(23)</span></div>
                                                    <span className="product-o__price">$125.00
                                                        <span className="product-o__discount">$160.00</span></span>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item smartphone">
                                                <div className="product-o product-o--hover-on product-o--radius">
                                                    <div className="product-o__wrap box-img">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                            <img className="aspect__img" src="https://specifications-pro.com/wp-content/uploads/2021/11/Xiaomi-Poco-X4-NFC-600x600.jpg" alt="" /></a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                                <li>
                                                                    <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                                <li>
                                                                    <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a></span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">Smartphone RAM 16GB New</a></span>
                                                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                                                        <span className="product-o__review">(23)</span></div>
                                                    <span className="product-o__price">$125.00
                                                        <span className="product-o__discount">$160.00</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="load-more">
                                        <button className="btn btn--e-brand" type="button">Load More</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 2 ======*/}
                {/*====== Section 3 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-46">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary u-s-m-b-12">DEAL OF THE DAY</h1>
                                        <span className="section__span u-c-silver">BUY DEAL OF THE DAY, HURRY UP! THESE NEW PRODUCTS WILL EXPIRE SOON.</span>
                                        <span className="section__span u-c-silver">ADD THESE ON YOUR CART.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 u-s-m-b-30">
                                    <div className="product-o product-o--radius product-o--hover-off u-h-100">
                                        <div className="product-o__wrap box-img">
                                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                <img className="aspect__img" src="https://media.istockphoto.com/photos/quadcopter-drone-with-4k-video-camera-flying-in-the-air-picture-id911190112?k=20&m=911190112&s=612x612&w=0&h=6mkFfZ_h5OVzYH_b0DVaYMdMZd86Zn8MZH89gWPJN0w=" alt="" /></a>
                                            <div className="product-o__special-count-wrap">
                                                <div className="countdown countdown--style-special" data-countdown="2020/05/01" />
                                            </div>
                                            <div className="product-o__action-wrap">
                                                <ul className="product-o__action-list">
                                                    <li>
                                                        <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                    <li>
                                                        <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                    <li>
                                                        <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                    <li>
                                                        <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <span className="product-o__category">
                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                        <span className="product-o__name">
                                            <a href="product-detail.html">DJI Phantom Drone 4k</a></span>
                                        <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                                            <span className="product-o__review">(2)</span></div>
                                        <span className="product-o__price">$125.00
                                            <span className="product-o__discount">$160.00</span></span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 u-s-m-b-30">
                                    <div className="product-o product-o--radius product-o--hover-off u-h-100">
                                        <div className="product-o__wrap box-img">
                                            <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
                                                <img className="aspect__img" src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJvbmV8ZW58MHx8MHx8&w=1000&q=80" alt="" /></a>
                                            <div className="product-o__special-count-wrap">
                                                <div className="countdown countdown--style-special" data-countdown="2020/05/01" />
                                            </div>
                                            <div className="product-o__action-wrap">
                                                <ul className="product-o__action-list">
                                                    <li>
                                                        <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
                                                    <li>
                                                        <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
                                                    <li>
                                                        <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
                                                    <li>
                                                        <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <span className="product-o__category">
                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                        <span className="product-o__name">
                                            <a href="product-detail.html">DJI Phantom Drone 2k</a></span>
                                        <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                                            <span className="product-o__review">(2)</span></div>
                                        <span className="product-o__price">$125.00
                                            <span className="product-o__discount">$160.00</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 3 ======*/}
                
                {/*====== Section 5 ======*/}
                <div className="banner-bg">
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="banner-bg__countdown">
                                        <div className="countdown countdown--style-banner" data-countdown="2020/05/01" />
                                    </div>
                                    <div className="banner-bg__wrap">
                                        <div className="banner-bg__text-1">
                                            <span className="u-c-white">Global</span>
                                            <span className="u-c-secondary">Offers</span></div>
                                        <div className="banner-bg__text-2">
                                            <span className="u-c-secondary">Official Launch</span>
                                            <span className="u-c-white">Don't Miss!</span></div>
                                        <span className="banner-bg__text-block banner-bg__text-3 u-c-secondary">Enjoy Free Shipping when you buy 2 items and above!</span>
                                        <a className="banner-bg__shop-now btn--e-secondary" href="shop-side-version-2.html">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 5 ======*/}
                {/*====== Section 6 ======*/}
                <div className="u-s-p-y-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-46">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary u-s-m-b-12">FEATURED PRODUCTS</h1>
                                        <span className="section__span u-c-silver">FIND NEW FEATURED PRODUCTS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    
                </div>
                {/*====== End - Section 6 ======*/}
                {/*====== Section 7 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                    <a className="promotion" href="shop-side-version-2.html">
                                        <div className="aspect aspect--bg-grey aspect--square">
                                            <img className="aspect__img promotion__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/promo/promo-img-1.5f96cc043d8d56d909cf10e4e5aa15f1.jpg" alt="" /></div>
                                        <div className="promotion__content">
                                            <div className="promotion__text-wrap">
                                                <div className="promotion__text-1">
                                                    <span className="u-c-secondary">ACCESSORIES FOR YOUR EVERYDAY</span></div>
                                                <div className="promotion__text-2">
                                                    <span className="u-c-secondary">GET IN</span>
                                                    <span className="u-c-brand">TOUCH</span></div>
                                            </div>
                                        </div>
                                    </a></div>
                                <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                    <a className="promotion" href="shop-side-version-2.html">
                                        <div className="aspect aspect--bg-grey aspect--square">
                                            <img className="aspect__img promotion__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/promo/promo-img-2.abd2eefacfe8993c75b7b2fa7b1255b9.jpg" alt="" /></div>
                                        <div className="promotion__content">
                                            <div className="promotion__text-wrap">
                                                <div className="promotion__text-1">
                                                    <span className="u-c-secondary">SMARTPHONE</span>
                                                    <span className="u-c-brand">2019</span></div>
                                                <div className="promotion__text-2">
                                                    <span className="u-c-secondary">NEW ARRIVALS</span></div>
                                            </div>
                                        </div>
                                    </a></div>
                                <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
                                    <a className="promotion" href="shop-side-version-2.html">
                                        <div className="aspect aspect--bg-grey aspect--square">
                                            <img className="aspect__img promotion__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/promo/promo-img-3.d0917732e79dbe1ebd3f7faaa530e720.jpg" alt="" /></div>
                                        <div className="promotion__content">
                                            <div className="promotion__text-wrap">
                                                <div className="promotion__text-1">
                                                    <span className="u-c-secondary">DSLR FOR NEW GENERATION</span></div>
                                                <div className="promotion__text-2">
                                                    <span className="u-c-brand">GET UP TO 10% OFF</span></div>
                                            </div>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 7 ======*/}
                {/*====== Section 8 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                    <div className="column-product">
                                        <span className="column-product__title u-c-secondary u-s-m-b-25">SPECIAL PRODUCTS</span>
                                        <ul className="column-product__list">
                                            <li className="column-product__item">
                                                <div className="product-l">
                                                    <div className="product-l__img-wrap">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                            <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product23.0396d3b9726043121035dc21ca04667a.jpg" alt="" /></a></div>
                                                    <div className="product-l__info-wrap">
                                                        <span className="product-l__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                                        <span className="product-l__name">
                                                            <a href="product-detail.html">Razor Gear 15 Ram 16GB</a></span>
                                                        <span className="product-l__price">$125.00</span></div>
                                                </div>
                                            </li>
                                            <li className="column-product__item">
                                                <div className="product-l">
                                                    <div className="product-l__img-wrap">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                            <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product24.1d327df19d02228df09271ec8d9773aa.jpg" alt="" /></a></div>
                                                    <div className="product-l__info-wrap">
                                                        <span className="product-l__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                                        <span className="product-l__name">
                                                            <a href="product-detail.html">Razor Gear 13 Ram 16GB</a></span>
                                                        <span className="product-l__price">$125.00</span></div>
                                                </div>
                                            </li>
                                            <li className="column-product__item">
                                                <div className="product-l">
                                                    <div className="product-l__img-wrap">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                            <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product25.07d27887db29cda33f5b661f031053a2.jpg" alt="" /></a></div>
                                                    <div className="product-l__info-wrap">
                                                        <span className="product-l__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                                        <span className="product-l__name">
                                                            <a href="product-detail.html">Razor Gear 15 Ram 8GB</a></span>
                                                        <span className="product-l__price">$125.00</span></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                    <div className="column-product">
                                        <span className="column-product__title u-c-secondary u-s-m-b-25">WEEKLY PRODUCTS</span>
                                        <ul className="column-product__list">
                                            <li className="column-product__item">
                                                <div className="product-l">
                                                    <div className="product-l__img-wrap">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                            <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product26.b73b22477f27a27e373fe484836e94a6.jpg" alt="" /></a></div>
                                                    <div className="product-l__info-wrap">
                                                        <span className="product-l__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                                        <span className="product-l__name">
                                                            <a href="product-detail.html">Razor Gear 10 Ram 16GB</a></span>
                                                        <span className="product-l__price">$125.00
                                                            <span className="product-l__discount">$160</span></span></div>
                                                </div>
                                            </li>
                                            <li className="column-product__item">
                                                <div className="product-l">
                                                    <div className="product-l__img-wrap">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                            <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product27.e640391cc048c113bb3c91f9f23aa083.jpg" alt="" /></a></div>
                                                    <div className="product-l__info-wrap">
                                                        <span className="product-l__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                                        <span className="product-l__name">
                                                            <a href="product-detail.html">Razor Gear 15 Ram 8GB</a></span>
                                                        <span className="product-l__price">$125.00
                                                            <span className="product-l__discount">$160</span></span></div>
                                                </div>
                                            </li>
                                            <li className="column-product__item">
                                                <div className="product-l">
                                                    <div className="product-l__img-wrap">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                            <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product28.2069818c404fd70f9b8aea111247f3de.jpg" alt="" /></a></div>
                                                    <div className="product-l__info-wrap">
                                                        <span className="product-l__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                                        <span className="product-l__name">
                                                            <a href="product-detail.html">Razor Gear 15 Ultra Ram 16GB</a></span>
                                                        <span className="product-l__price">$125.00
                                                            <span className="product-l__discount">$160</span></span></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
                                    <div className="column-product">
                                        <span className="column-product__title u-c-secondary u-s-m-b-25">FLASH PRODUCTS</span>
                                        <ul className="column-product__list">
                                            <li className="column-product__item">
                                                <div className="product-l">
                                                    <div className="product-l__img-wrap">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                            <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product29.06d588da4521b71d1decdc8ba3d8227d.jpg" alt="" /></a></div>
                                                    <div className="product-l__info-wrap">
                                                        <div className="product-l__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></div>
                                                        <span className="product-l__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                                        <span className="product-l__name">
                                                            <a href="product-detail.html">Razor Gear 20 Ultra Ram 16GB</a></span>
                                                        <span className="product-l__price">$125.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="column-product__item">
                                                <div className="product-l">
                                                    <div className="product-l__img-wrap">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                            <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product30.4a4450fc843892eecd4574ad549b11aa.jpg" alt="" /></a></div>
                                                    <div className="product-l__info-wrap">
                                                        <div className="product-l__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></div>
                                                        <span className="product-l__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                                        <span className="product-l__name">
                                                            <a href="product-detail.html">Razor Gear 11 Ultra Ram 16GB</a></span>
                                                        <span className="product-l__price">$125.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="column-product__item">
                                                <div className="product-l">
                                                    <div className="product-l__img-wrap">
                                                        <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
                                                            <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/product/electronic/product31.ecf7e50532f4d47ddb5ae65771918533.jpg" alt="" /></a></div>
                                                    <div className="product-l__info-wrap">
                                                        <div className="product-l__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></div>
                                                        <span className="product-l__category">
                                                            <a href="shop-side-version-2.html">Electronics</a></span>
                                                        <span className="product-l__name">
                                                            <a href="product-detail.html">Razor Gear 10 Ultra Ram 16GB</a></span>
                                                        <span className="product-l__price">$125.00</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 8 ======*/}
                {/*====== Section 9 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                    <div className="service u-h-100">
                                        <div className="service__icon"><i className="fas fa-truck" /></div>
                                        <div className="service__info-wrap">
                                            <span className="service__info-text-1">Free Shipping</span>
                                            <span className="service__info-text-2">Free shipping on all US order or order above $200</span></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                    <div className="service u-h-100">
                                        <div className="service__icon"><i className="fas fa-redo" /></div>
                                        <div className="service__info-wrap">
                                            <span className="service__info-text-1">Shop with Confidence</span>
                                            <span className="service__info-text-2">Our Protection covers your purchase from click to delivery</span></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                    <div className="service u-h-100">
                                        <div className="service__icon"><i className="fas fa-headphones-alt" /></div>
                                        <div className="service__info-wrap">
                                            <span className="service__info-text-1">24/7 Help Center</span>
                                            <span className="service__info-text-2">Round-the-clock assistance for a smooth shopping experience</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 9 ======*/}
                {/*====== Section 10 ======*/}
                <div className="u-s-p-b-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-46">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary u-s-m-b-12">LATEST FROM BLOG</h1>
                                        <span className="section__span u-c-silver">START YOU DAY WITH FRESH AND LATEST NEWS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                    <div className="bp-mini bp-mini--img u-h-100">
                                        <div className="bp-mini__thumbnail box-img">
                                            {/*====== Image Code ======*/}
                                            <a className="aspect aspect--bg-grey  u-d-block" href="blog-detail.html">
                                                <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/blog/post-2.33454e236d5f8298c4f5c9c8dc54ffb8.jpg" alt="" /></a>
                                            {/*====== End - Image Code ======*/}
                                        </div>
                                        <div className="bp-mini__content">
                                            <div className="bp-mini__stat">
                                                <span className="bp-mini__stat-wrap">
                                                    <span className="bp-mini__publish-date">
                                                        <a>
                                                            <span>25 February 2018</span></a></span></span>
                                                <span className="bp-mini__stat-wrap">
                                                    <span className="bp-mini__preposition">By</span>
                                                    <span className="bp-mini__author">
                                                        <a href="#">Dayle</a></span></span>
                                                <span className="bp-mini__stat">
                                                    <span className="bp-mini__comment">
                                                        <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                                                            <span>8</span></a></span></span></div>
                                            <div className="bp-mini__category">
                                                <a>Learning</a>
                                                <a>News</a>
                                                <a>Health</a></div>
                                            <span className="bp-mini__h1">
                                                <a href="blog-detail.html">Life is an extraordinary Adventure</a></span>
                                            <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <div className="blog-t-w">
                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 u-s-m-b-30  ">
                                    <div className="bp-mini bp-mini--img u-h-100  ">
                                        <div className="bp-mini__thumbnail ">
                                            {/*====== Image Code ======*/}
                                            <a className="aspect aspect--bg-grey u-d-block" href="blog-detail.html">
                                                <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/blog/post-12.f333e9ee018997e7c8794279d3788a5d.jpg" alt="" /></a>
                                            {/*====== End - Image Code ======*/}
                                        </div>
                                        <div className="bp-mini__content">
                                            <div className="bp-mini__stat">
                                                <span className="bp-mini__stat-wrap">
                                                    <span className="bp-mini__publish-date">
                                                        <a>
                                                            <span>25 February 2018</span></a></span></span>
                                                <span className="bp-mini__stat-wrap">
                                                    <span className="bp-mini__preposition">By</span>
                                                    <span className="bp-mini__author">
                                                        <a href="#">Dayle</a></span></span>
                                                <span className="bp-mini__stat">
                                                    <span className="bp-mini__comment">
                                                        <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                                                            <span>8</span></a></span></span></div>
                                            <div className="bp-mini__category">
                                                <a>Learning</a>
                                                <a>News</a>
                                                <a>Health</a></div>
                                            <span className="bp-mini__h1">
                                                <a href="blog-detail.html">Wait till its open</a></span>
                                            <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <div className="blog-t-w">
                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                    <div className="bp-mini bp-mini--img u-h-100">
                                        <div className="bp-mini__thumbnail">
                                            {/*====== Image Code ======*/}
                                            <a className="aspect aspect--bg-grey  u-d-block" href="blog-detail.html">
                                                <img className="aspect__img" src="https://d2r00w08fz6ft0.cloudfront.net/ludus-demo/images/blog/post-5.5991f334a2298c3c070ed888e810176f.jpg" alt="" /></a>
                                            {/*====== End - Image Code ======*/}
                                        </div>
                                        <div className="bp-mini__content">
                                            <div className="bp-mini__stat">
                                                <span className="bp-mini__stat-wrap">
                                                    <span className="bp-mini__publish-date">
                                                        <a>
                                                            <span>25 February 2018</span></a></span></span>
                                                <span className="bp-mini__stat-wrap">
                                                    <span className="bp-mini__preposition">By</span>
                                                    <span className="bp-mini__author">
                                                        <a href="#">Dayle</a></span></span>
                                                <span className="bp-mini__stat">
                                                    <span className="bp-mini__comment">
                                                        <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                                                            <span>8</span></a></span></span></div>
                                            <div className="bp-mini__category">
                                                <a>Learning</a>
                                                <a>News</a>
                                                <a>Health</a></div>
                                            <span className="bp-mini__h1">
                                                <a href="blog-detail.html">Tell me difference between smoke and vape</a></span>
                                            <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            <div className="blog-t-w">
                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
                                                <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 10 ======*/}
                {/*====== Section 11 ======*/}
                <div className="u-s-p-b-90 u-s-m-b-30">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-46">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary u-s-m-b-12">CLIENTS FEEDBACK</h1>
                                        <span className="section__span u-c-silver">WHAT OUR CLIENTS SAY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            {/*====== Testimonial Slider ======*/}
                            <div className="slider-fouc">
                                <div className="owl-carousel" id="testimonial-slider">
                                    <div className="testimonial">
                                        <div className="testimonial__img-wrap">
                                            <img className="testimonial__img" src="images/about/test-1.jpg" alt="" /></div>
                                        <div className="testimonial__content-wrap">
                                            <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
                                            <blockquote className="testimonial__block-quote">
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                            </blockquote>
                                            <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial__img-wrap">
                                            <img className="testimonial__img" src="images/about/test-2.jpg" alt="" /></div>
                                        <div className="testimonial__content-wrap">
                                            <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
                                            <blockquote className="testimonial__block-quote">
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                            </blockquote>
                                            <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial__img-wrap">
                                            <img className="testimonial__img" src="images/about/test-3.jpg" alt="" /></div>
                                        <div className="testimonial__content-wrap">
                                            <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
                                            <blockquote className="testimonial__block-quote">
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                            </blockquote>
                                            <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                        </div>
                                    </div>
                                    <div className="testimonial">
                                        <div className="testimonial__img-wrap">
                                            <img className="testimonial__img" src="images/about/test-4.jpg" alt="" /></div>
                                        <div className="testimonial__content-wrap">
                                            <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
                                            <blockquote className="testimonial__block-quote">
                                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
                                            </blockquote>
                                            <span className="testimonial__author">John D. / DVNTR Inc.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*====== End - Testimonial Slider ======*/}
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 11 ======*/}
                
                
            </div>
            {/*====== End - App Content ======*/}
            <div>
                <div className="modal fade" id="quick-look">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal--shadow">
                            <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal" />
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-5">
                                        {/*====== Product Breadcrumb ======*/}
                                        <div className="pd-breadcrumb u-s-m-b-30">
                                            <ul className="pd-breadcrumb__list">
                                                <li className="has-separator">
                                                    <a href="index.hml">Home</a></li>
                                                <li className="has-separator">
                                                    <a href="shop-side-version-2.html">Electronics</a></li>
                                                <li className="has-separator">
                                                    <a href="shop-side-version-2.html">DSLR Cameras</a></li>
                                                <li className="is-marked">
                                                    <a href="shop-side-version-2.html">Nikon Cameras</a></li>
                                            </ul>
                                        </div>
                                        {/*====== End - Product Breadcrumb ======*/}
                                        {/*====== Product Detail ======*/}
                                        <div className="pd u-s-m-b-30">
                                            <div className="pd-wrap">
                                                <div id="js-product-detail-modal">
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-1.jpg" alt="" /></div>
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-2.jpg" alt="" /></div>
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-3.jpg" alt="" /></div>
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-4.jpg" alt="" /></div>
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-5.jpg" alt="" /></div>
                                                </div>
                                            </div>
                                            <div className="u-s-m-t-15">
                                                <div id="js-product-detail-modal-thumbnail">
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-1.jpg" alt="" /></div>
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-2.jpg" alt="" /></div>
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-3.jpg" alt="" /></div>
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-4.jpg" alt="" /></div>
                                                    <div>
                                                        <img className="u-img-fluid" src="images/product/product-d-5.jpg" alt="" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*====== End - Product Detail ======*/}
                                    </div>
                                    <div className="col-lg-7">
                                        {/*====== Product Right Side Details ======*/}
                                        <div className="pd-detail">
                                            <div>
                                                <span className="pd-detail__name">Nikon Camera 4k Lens Zoom Pro</span></div>
                                            <div>
                                                <div className="pd-detail__inline">
                                                    <span className="pd-detail__price">$6.99</span>
                                                    <span className="pd-detail__discount">(76% OFF)</span><del className="pd-detail__del">$28.97</del></div>
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <div className="pd-detail__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
                                                    <span className="pd-detail__review u-s-m-l-4">
                                                        <a href="product-detail.html">23 Reviews</a></span></div>
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <div className="pd-detail__inline">
                                                    <span className="pd-detail__stock">200 in stock</span>
                                                    <span className="pd-detail__left">Only 2 left</span></div>
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <span className="pd-detail__preview-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span></div>
                                            <div className="u-s-m-b-15">
                                                <div className="pd-detail__inline">
                                                    <span className="pd-detail__click-wrap"><i className="far fa-heart u-s-m-r-6" />
                                                        <a href="signin.html">Add to Wishlist</a>
                                                        <span className="pd-detail__click-count">(222)</span></span></div>
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <div className="pd-detail__inline">
                                                    <span className="pd-detail__click-wrap"><i className="far fa-envelope u-s-m-r-6" />
                                                        <a href="signin.html">Email me When the price drops</a>
                                                        <span className="pd-detail__click-count">(20)</span></span></div>
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <ul className="pd-social-list">
                                                    <li>
                                                        <a className="s-fb--color-hover" href="#"><i className="fab fa-facebook-f" /></a></li>
                                                    <li>
                                                        <a className="s-tw--color-hover" href="#"><i className="fab fa-twitter" /></a></li>
                                                    <li>
                                                        <a className="s-insta--color-hover" href="#"><i className="fab fa-instagram" /></a></li>
                                                    <li>
                                                        <a className="s-wa--color-hover" href="#"><i className="fab fa-whatsapp" /></a></li>
                                                    <li>
                                                        <a className="s-gplus--color-hover" href="#"><i className="fab fa-google-plus-g" /></a></li>
                                                </ul>
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <form className="pd-detail__form">
                                                    <div className="pd-detail-inline-2">
                                                        <div className="u-s-m-b-15">
                                                            {/*====== Input Counter ======*/}
                                                            <div className="input-counter">
                                                                <span className="input-counter__minus fas fa-minus" />
                                                                <input className="input-counter__text input-counter--text-primary-style" type="text" defaultValue={1} data-min={1} data-max={1000} />
                                                                <span className="input-counter__plus fas fa-plus" /></div>
                                                            {/*====== End - Input Counter ======*/}
                                                        </div>
                                                        <div className="u-s-m-b-15">
                                                            <button className="btn btn--e-brand-b-2" type="submit">Add to Cart</button></div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <span className="pd-detail__label u-s-m-b-8">Product Policy:</span>
                                                <ul className="pd-detail__policy-list">
                                                    <li><i className="fas fa-check-circle u-s-m-r-8" />
                                                        <span>Buyer Protection.</span></li>
                                                    <li><i className="fas fa-check-circle u-s-m-r-8" />
                                                        <span>Full Refund if you don't receive your order.</span></li>
                                                    <li><i className="fas fa-check-circle u-s-m-r-8" />
                                                        <span>Returns accepted if product not as described.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*====== End - Product Right Side Details ======*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Quick Look Modal ======*/}
                {/*====== Add to Cart Modal ======*/}
                <div className="modal fade" id="add-to-cart">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-radius modal-shadow">
                            <button className="btn dismiss-button fas fa-times" type="button" data-dismiss="modal" />
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="success u-s-m-b-30">
                                            <div className="success__text-wrap"><i className="fas fa-check" />
                                                <span>Item is added successfully!</span></div>
                                            <div className="success__img-wrap">
                                                <img className="u-img-fluid" src="images/product/electronic/product1.jpg" alt="" /></div>
                                            <div className="success__info-wrap">
                                                <span className="success__name">Beats Bomb Wireless Headphone</span>
                                                <span className="success__quantity">Quantity: 1</span>
                                                <span className="success__price">$170.00</span></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="s-option">
                                            <span className="s-option__text">1 item (s) in your cart</span>
                                            <div className="s-option__link-box">
                                                <a className="s-option__link btn--e-white-brand-shadow" data-dismiss="modal">CONTINUE SHOPPING</a>
                                                <a className="s-option__link btn--e-white-brand-shadow" href="cart.html">VIEW CART</a>
                                                <a className="s-option__link btn--e-brand-shadow" href="checkout.html">PROCEED TO CHECKOUT</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Add to Cart Modal ======*/}


            </div>

            {/* footer load*/}
            <Footer />


        </div>
    )
}
