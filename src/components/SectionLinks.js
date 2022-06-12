import React from 'react'
import {Link} from 'react-router-dom'
export const SectionLinks = (props) => {
    return (
        <div>

            {/* navbar bottom section which shows the data of home / login / register like this */}


            {/*====== Section 1 ======*/}
            <div className="u-s-p-y-60">
                {/*====== Section Content ======*/}
                <div className="section__content">
                    <div className="container">
                        <div className="breadcrumb">
                            <div className="breadcrumb__wrap">
                                <ul className="breadcrumb__list">
                                    <li className="has-separator">
                                        <Link to={"/"}>Home</Link></li>
                                    <li className="is-marked">
                                        <a href="signin.html">{props.nextLink}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====== End - Section 1 ======*/}

        </div>
    )
}
