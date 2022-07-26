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

import { AccountInfo } from './components/AccountInfo'
export const MyAccout = (props) => {
    
    return (
        <div>
            
                <Precss />

                {/* navbar */}
                <Navbar />

                {/* first load login page */}
                <div className="app-content">

                    {/* section 1 */}
                    <SectionLinks nextLink="Account" />

                    <AccountInfo toastClick={props.toastClick}/>
                    {/*====== End - Section 2 ======*/}
                    {/* load the dynamic content */}


                             

                                {/* <Myprofile/> */}

                                {/* <AddressBook/> */}

                                {/* <TrackOrder/> */}

                                {/* <MyOrder/> */}

                                {/* <MyPayment/> */}

                                {/* <Cancellation/> */}

                                {/* <EditProfile /> */}

                                {/* <EditAddress/> */}

                                {/* <ManageOrder/> */}
                </div>
                {/* footer */}
                <Footer />
                <Prejs />
           
        </div>
    )
}
