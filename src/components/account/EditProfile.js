import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

export const EditProfile = (props) => {


    const navigate = useNavigate()
    const [isloading, setisloading] = useState(true)
    const [iserror, setiserror] = useState(false)
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [email, setemail] = useState()
    const [phonenum, setphonenum] = useState()
    //before
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setiserror(false);


    //         try {
    //             const response = await axios('https://cartbuddy-api.herokuapp.com/user');
    //             response.data.map((e) => {
    //                 if (e.userid === JSON.parse(sessionStorage.getItem("data")).userid) {
    //                     setfirstname(e.firstname)
    //                     setlastname(e.lastname)
    //                     setemail(e.email)
    //                     setphonenum(e.phonenum)
    //                     setobj(e);
    //                 }
    //             })
    //             if (response !== undefined) {
    //                 setisloading(false)
    //             }
    //         } catch (error) {
    //             setiserror(true);
    //         }

    //     };
    //     fetchData()

    // }, [])

    let token ="";
    const [obj, setobj] = useState()
    if(sessionStorage.getItem("data")!==null){
         token=JSON.parse(sessionStorage.getItem("data")).authtoken
    }
    
    useEffect(() => {
        setisloading(true)
        axios.get("https://cartbuddy-api.herokuapp.com/getuserdata",{headers:{'authtoken':token}}).then((e)=>{
            // console.log(e.data)
            if(e.data.data === null && e.data.status ===404){
                // props.toastClick(`${e.data.msg},1`)
                navigate("/error404")
            }else{
                setfirstname(e.data.data.firstname)
                setlastname(e.data.data.lastname)
                setemail(e.data.data.email)
                setphonenum(e.data.data.phonenum)
                setobj(e.data.data);
                setisloading(false)
            }
        })
    },[])

    const updateData = async (e) => {
        e.preventDefault()
        let objData = { "firstname": firstname, "lastname": lastname,"phonenum": phonenum,"authtoken":obj.authtoken };
        await axios.put("https://cartbuddy-api.herokuapp.com/updatecus", objData).then((e) => {
            props.toastClick(`${e.data.msg},1`)
            sessionStorage.setItem("data",JSON.stringify({'firstname':e.data.data.firstname,"lastname":e.data.data.lastname,'authtoken':e.data.data.authtoken}));
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
                            isloading  ?<PulseLoader color='#FF4500'/>:(
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
                                                    <input disabled className="input-text input-text--primary-style" type="text" id="reg-fname" value={email} onChange={(e) => setemail(e.target.value)} /></div>
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
