import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
export const OtpEnter = (props) => {
    const [first, setfirst] = useState('')
    const [second, setsecond] = useState('')
    const [third, setthird] = useState('')
    const [fourth, setfourth] = useState('')
    const [fifth, setfifth] = useState('')
    const [sixth, setsixth] = useState('')
    const [is_check, setis_check] = useState(false)
    const navigate = useNavigate()
    const getUserOTP = (e) => {
        e.preventDefault()
        let optWhole = first + second + third + fourth + fifth + sixth;
        const cookies = new Cookies();
     
        if(cookies.get("otpResetEmail")===undefined){
            props.toastClick(`Otp Expire Try Again,2`)
        }else{
            let otp_enc = cookies.get('otpResetEmail');
            // console.log("otp en "+otp_enc)
            
            setis_check(true)
            
            axios.post("http://localhost:9999/otpemailcheck",{"otp":optWhole+","+otp_enc,"authtoken":JSON.parse(sessionStorage.getItem("data")).authtoken}).then((data)=>{
                if(data.data===true){
                    // console.log("data.data email "+data.data) 
                    let d = new Date();
                    d.setTime(d.getTime() + 700*1000);
                    let otp=JSON.parse(sessionStorage.getItem("data")).authtoken
                    
                    cookies.set('userauth', otp, { path: '/',expires:d });
                    sessionStorage.clear()
                    navigate("/newpassword")
                }else{
                    props.toastClick("Wrong OTP,3")
                    navigate("/login")
                }
            });
        }
    }
    return (
        <div>
            <Helmet>

                <link href="../css/OTP.css" rel="stylesheet" />
                <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

                <script src="../lib/jquery/jquery.min.js"></script>

                <script src="../lib/bootstrap/js/bootstrap.min.js"></script>

                <script src="../js/otpjs.js"></script>

            </Helmet>

            <div className="container height-100 d-flex justify-content-center align-items-center">
                <div className="position-relative">
                    <img alt='This is image' src='https://i.postimg.cc/HkW96wxV/cartbuddy.png' className='mt-4 mb-4'></img>

                    <form className="card p-2 text-center" style={{ backgroundColor: "#FF4500" }} onSubmit={getUserOTP}>
                        <h6>Please enter the one time password <br /> to verify your account</h6>
                        <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                            <input className="m-2 text-center form-control rounded" type="text" onChange={(e) => { setfirst(e.target.value) }} maxLength={1} />
                            <input className="m-2 text-center form-control rounded" type="text" onChange={(e) => { setsecond(e.target.value) }} maxLength={1} />
                            <input className="m-2 text-center form-control rounded" type="text" onChange={(e) => { setthird(e.target.value) }} maxLength={1} />
                            <input className="m-2 text-center form-control rounded" type="text" onChange={(e) => { setfourth(e.target.value) }} maxLength={1} />
                            <input className="m-2 text-center form-control rounded" type="text" onChange={(e) => { setfifth(e.target.value) }} maxLength={1} />
                            <input className="m-2 text-center form-control rounded" type="text" onChange={(e) => { setsixth(e.target.value) }} maxLength={1} />
                        </div>
                        <div className="mt-4">
                            {is_check===false?<button className="btn  px-4 validate" type='submit'>Validate</button>:<PulseLoader color="white"/>}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
