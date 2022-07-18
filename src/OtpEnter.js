import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'
export const OtpEnter = () => {
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
        // console.log(optWhole)
        const cookies = new Cookies();
        let arr= [];
        if(cookies.get("otpResetEmail")===undefined){
            console.log("login again")
        }else{
            arr = cookies.get('otpResetEmail').split(" ");
            // console.log(arr[0]+" "+arr[1])
            //console.log(cookies.get('otpResetEmail'));
            if(arr[0]===optWhole){
                // console.log("email for password")
                setis_check(true)
                axios.post("http://localhost:9999/sendemailu",{"userid":parseInt(arr[1])}).then((data)=>{
                    // console.log(data)
                    if(data.data===true){
                        navigate("/login")
                    }
                })
                
            }else{
                console.log("otp is wrong")
            }
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
