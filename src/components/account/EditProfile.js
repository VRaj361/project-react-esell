import React from 'react'

export const EditProfile = () => {
    return (
        <>

            <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                    <div className="dash__pad-2">
                        <h1 className="dash__h1 u-s-m-b-14">Edit Profile</h1>
                        <span className="dash__text u-s-m-b-30">Looks like you haven't update your profile</span>
                        <div className="dash__link dash__link--secondary u-s-m-b-30">
                            <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a></div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form className="dash-edit-p">
                                    <div className="gl-inline">
                                        <div className="u-s-m-b-30">
                                            <label className="gl-label" htmlFor="reg-fname">FIRST NAME *</label>
                                            <input className="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="John" /></div>
                                        <div className="u-s-m-b-30">
                                            <label className="gl-label" htmlFor="reg-lname">LAST NAME *</label>
                                            <input className="input-text input-text--primary-style" type="text" id="reg-lname" placeholder="Doe" /></div>
                                    </div>
                                    <div className="gl-inline">
                                        <div className="u-s-m-b-30">
                                            {/*====== Date of Birth Select-Box ======*/}
                                            <span className="gl-label">BIRTHDAY</span>
                                            <div className="gl-dob">
                                                <input type="date" className='select-box select-box--primary-style'/>
                                            </div>
                                            {/*====== End - Date of Birth Select-Box ======*/}
                                        </div>
                                        <div className="u-s-m-b-30">
                                            <label className="gl-label" htmlFor="gender">GENDER</label><select className="select-box select-box--primary-style u-w-100" id="gender">
                                                <option selected>Select</option>
                                                <option value="male">Male</option>
                                                <option value="male">Female</option>
                                            </select></div>
                                    </div>
                                    <div className="gl-inline">
                                        <div className="u-s-m-b-30">
                                            <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>
                                            <span className="dash__text">johndoe@domain.com</span>
                                            <div className="dash__link dash__link--secondary">
                                                <a href="#">Change</a></div>
                                        </div>
                                        <div className="u-s-m-b-30">
                                            <h2 className="dash__h2 u-s-m-b-8">Phone</h2>
                                            <span className="dash__text">Please enter your mobile</span>
                                            <div className="dash__link dash__link--secondary">
                                                <a href="#">Add</a></div>
                                        </div>
                                    </div>
                                    <button className="btn btn--e-brand-b-2" type="submit">SAVE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            </>
            )
}
