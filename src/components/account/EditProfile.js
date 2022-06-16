import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const EditProfile = () => {


    const navigate = useNavigate()
    const [isloading, setisloading] = useState(true)
    const [iserror, setiserror] = useState(false)
    const [obj, setobj] = useState()
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [email, setemail] = useState()
    const [phonenum, setphonenum] = useState()
    useEffect(() => {
        const fetchData = async () => {
            setiserror(false);


            try {
                const response = await axios('http://localhost:9999/user');
                response.data.map((e) => {
                    if (e.userid === JSON.parse(sessionStorage.getItem("data")).userid) {
                        setfirstname(e.firstname)
                        setlastname(e.lastname)
                        setemail(e.email)
                        setphonenum(e.phonenum)
                        setobj(e);
                    }
                })
                if (response !== undefined) {
                    setisloading(false)
                }
            } catch (error) {
                setiserror(true);
            }

        };
        fetchData()

    }, [])

    const updateData = async (e) => {
        e.preventDefault()

        let objData = { "userid": obj.userid, "firstname": firstname, "lastname": lastname, "createdate": obj.createdate, "gender": obj.gender, "email": email, "password": obj.password, "phonenum": phonenum, "address": obj.address };
        await axios.put("http://localhost:9999/user", objData).then((e) => {
            console.log("success")
            console.log(e)
            sessionStorage.setItem("data",JSON.stringify({'firstname':e.data.firstname,"lastname":e.data.lastname,'userid':e.data.userid}));
            navigate("/myaccount")
            
        })
    }


    return (
        <>

            <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                    <div className="dash__pad-2">
                        <h1 className="dash__h1 u-s-m-b-14">Edit Profile</h1>
                        <span className="dash__text u-s-m-b-30">Looks like you haven't update your profile</span>
                        <div className="dash__link dash__link--secondary u-s-m-b-30">
                            <a data-modal="modal" data-modal-id="#dash-newsletter">Subscribe Newsletter</a></div>
                        {
                            isloading  ?<div>isloading</div>:(
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form className="dash-edit-p" onSubmit={updateData}>
                                            <div className="gl-inline">
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-fname">FIRST NAME *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-fname" value={firstname} onChange={(e) => setfirstname(e.target.value)} /></div>
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-lname">LAST NAME *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-lname" value={lastname} onChange={(e) => setlastname(e.target.value)} /></div>
                                            </div>
                                            <div className="gl-inline">
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-fname">Email *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-fname" value={email} onChange={(e) => setemail(e.target.value)} /></div>
                                                <div className="u-s-m-b-30">
                                                    <label className="gl-label" htmlFor="reg-lname">Phonu Number *</label>
                                                    <input className="input-text input-text--primary-style" type="text" id="reg-lname" value={phonenum} onChange={(e) => setphonenum(e.target.value)} /></div>
                                            </div>


                                            <button className="btn btn--e-brand-b-2" type="submit">SAVE</button>
                                        </form>
                                    </div>
                                </div> )
                        }
                    </div>
                </div>
            </div>



        </>
    )
}
