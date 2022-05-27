import React from 'react'
import {Helmet} from 'react-helmet'
export const Prejs = () => {
  return (
    <div>
        <Helmet>
                {/* <script>
                    window.ga = function() {
                        ga.q.push(arguments)
                    };
                    ga.q = [];
                    ga.l = +new Date;
                    ga('create', 'UA-XXXXX-Y', 'auto');
                    ga('send', 'pageview')
                </script> */}
                <script src="https://www.google-analytics.com/analytics.js" async defer></script>

                {/* <!--====== Vendor Js ======--> */}
                <script src="../js/vendor.js"></script>

                {/* <!--====== jQuery Shopnav plugin ======--> */}
                <script src="../js/jquery.shopnav.js"></script>
                <script src="../js/app.js"></script>
                {/* <!--====== App ======--> */}

                {/* <!--====== Noscript ======--> */}
                {/* <noscript>
                        <div className="app-setting">
                        <div className="container">
                        <div className="row">
                        <div className="col-12">
                            <div className="app-setting__wrap">
                                <h1 className="app-setting__h1">JavaScript is disabled in your browser.</h1>

                                <span className="app-setting__text">Please enable JavaScript in your browser or upgrade to a JavaScript-capable browser.</span>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                </noscript> */}
            </Helmet>
    </div>
  )
}
