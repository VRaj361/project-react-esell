import React,{useState,useEffect} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
export const AddressBook = () => {

    const [isloading, setisloading] = useState(true)

    const [obj, setobj] = useState()
    const [objFi, setobjFi] = useState()
    
    console.log(obj)
    let navigate=useNavigate()
    let token ="";
    if(sessionStorage.getItem("data")!==null){
         token=JSON.parse(sessionStorage.getItem("data")).authtoken
    }

    useEffect(() => {
        setisloading(true)
       
        axios.get("https://cartbuddy-api.herokuapp.com/getuserdata",{headers:{'authtoken':token}}).then((e)=>{
            if(e.data.data === null && e.data.status ===404){
                // props.toastClick(`${e.data.msg},1`)
                navigate("/error404")
            }else{
                setobj(e.data.data)
                setobjFi(JSON.parse(e.data.data.address))
                setisloading(false)
            }
        })
        
    },[])
       
    const deleteAddress=async(e)=>{

        const objArr=JSON.parse(obj.address)
        for(var i =0;i<objArr.length;i++){
            if(objArr[i].streetadd===e.streetadd&&objArr[i].landmark===e.landmark&&objArr[i].postal===e.postal){
                objArr.splice(i,1)  
                break;
            }
        }

        await axios.put("https://cartbuddy-api.herokuapp.com/updatecus",{"address":JSON.stringify(objArr),"authtoken":token}).then((e)=>{
            console.log(e)
            sessionStorage.setItem("data",JSON.stringify({'firstname':e.data.data.firstname,"lastname":e.data.data.lastname,'authtoken':e.data.data.authtoken}))
            window.location.reload()
            navigate("/myaccount/addressbook")
        })
    }
    return (

        <>

            <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                    <div className="dash__pad-2">
                        <div className="dash__address-header">
                            <h1 className="dash__h1">Address Book</h1>
                            
                        </div>
                    </div>
                </div>
                <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius u-s-m-b-30">
                    <div className="dash__table-2-wrap gl-scroll">
                        {objFi===null?<div>Please Enter Address</div>:
                        isloading===false&&objFi!==null?<table className="dash__table-2">
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Address</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {objFi.map((e) => {
                                    return (
                                        <tr>
                                            <td>
                                                <button className="address-book-edit btn--e-transparent-platinum-b-2"  onClick={()=>deleteAddress(e)}>Delete</button>
                                            </td>
                                            {/* {console.log(e)} */}
                                            <td>{e.streetadd + " " + e.landmark + " ," + e.postal}</td>
                                            <td>{e.state}</td>
                                            <td>{e.city}</td>
                                            <td>{e.country}</td>
                                        </tr>

                                    )
                                })}

                            </tbody>
                        </table>:<div>Loading</div>}
                    </div>
                </div>
                <div>
                    <Link className="dash__custom-link btn--e-brand-b-2" to={'/myaccount/addaddress'}><i className="fas fa-plus u-s-m-r-8" />
                        <span>Add New Address</span></Link></div>
            </div>

        </>
    )
}
