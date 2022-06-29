import React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
export const EmptyCart = () => {
    return (
        <div>
            <Precss />

            {/* navbar */}
            <Navbar />
            <div className="app-content">

                <div class="u-s-p-y-60">


                    <div class="section__content">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 u-s-m-b-30">
                                    <div class="empty">
                                        <div class="empty__wrap">

                                            <span class="empty__big-text">EMPTY</span>

                                            <span class="empty__text-1">No items found on your cart.</span>

                                            <Link class="empty__redirect-link btn--e-brand" to={'/'} >Back to Home</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* load footer */}


            <Footer />
            <Prejs />
        </div>
    )
}
