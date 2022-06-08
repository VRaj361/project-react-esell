import React from 'react'

export const AddAddress = () => {
    return (
        <div className="col-lg-9 col-md-12">
            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">Add new Address</h1>
                    <span className="dash__text u-s-m-b-30">We need an address where we could deliver products.</span>
                    <form className="dash-address-manipulation">
                        <div className="gl-inline">
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="address-phone">STREET ADDRESS *</label>
                                <input className="input-text input-text--primary-style" type="text" id="address-phone" placeholder='House name and Street'/></div>
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="address-street">LANDMARK *</label>
                                <input className="input-text input-text--primary-style" type="text" id="address-street" placeholder="Near Area for the Mark" /></div>
                        </div>
                        <div className="gl-inline">
                            <div className="u-s-m-b-30">
                                {/*====== Select Box ======*/}
                                <label className="gl-label" htmlFor="address-country">COUNTRY *</label><select className="select-box select-box--primary-style" id="address-country">
                                    <option selected value>Choose Country</option>
                                    <option value="us">INDIA (IN)</option>
                                    <option value="uae">United Arab Emirate (UAE)</option>
                                    <option value="uk">United Kingdom (UK)</option>
                                    <option value="us">United States (US)</option>
                                </select>
                                {/*====== End - Select Box ======*/}
                            </div>
                            <div className="u-s-m-b-30">
                                {/*====== Select Box ======*/}
                                <label className="gl-label" htmlFor="address-state">STATE/PROVINCE *</label><select className="select-box select-box--primary-style" id="address-state">
                                    <option selected value>Choose State/Province</option>
                                    <option value="al">Gujrat</option>
                                    <option value="al">Maharastra</option>
                                    <option value="al">Karnataka</option>
                                    <option value="al">Dubai</option>
                                    <option value="al">London</option>
                                    <option value="ny">New York</option>
                                </select>
                                {/*====== End - Select Box ======*/}
                            </div>
                        </div>
                        <div className="gl-inline">
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="address-city">TOWN/CITY *</label>
                                <input className="input-text input-text--primary-style" type="text" id="address-city" /></div>
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="address-street">ZIP/POSTAL CODE *</label>
                                <input className="input-text input-text--primary-style" type="text" id="address-postal" placeholder="Zip/Postal Code" /></div>
                        </div>
                        <button className="btn btn--e-brand-b-2" type="submit">SAVE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
