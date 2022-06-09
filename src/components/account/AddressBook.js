import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
export const AddressBook = () => {
    let obj = JSON.parse(sessionStorage.getItem("data"))
    let objAddress = JSON.stringify(obj.address).split(",")
    let objFi = []
    let navigate=useNavigate()
    if (objAddress[0] != '""' ) {
        for (let i in objAddress) {
            let arr = objAddress[i].split("  ")
            arr[0] = arr[0].replace('"\\"', '')
            arr[0] = arr[0].replace('"', '')
            arr[5] = arr[5].replace('"', '')
            arr[5] = arr[5].replace('\\', '')
            objFi.push(arr)
            console.log(objFi)
        }
    }else{
        console.log("out")
    }
    let index=-1;
    let check=-1;
    function deleteAddress(e){
        for (let i=0;i<objAddress.length;i++){
            
            check=objAddress[i].includes(e)
            if(check){
                index=i;
                break;
            }
            
        }
        objAddress.splice(index,1)
        console.log(objAddress.toString())
        let objData={"userid":obj.userid,"firstname":obj.firstname,"lastname":obj.lastname,"createdate":obj.createdate,"gender":obj.gender,"email":obj.email,"password":obj.password,"phonenum":obj.phonenum,"address":objAddress.toString()};
        console.log(objData)
        sessionStorage.setItem("data",JSON.stringify(objData))
        navigate("/myaccount/addressbook")
    }
    return (

        <>

            <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                    <div className="dash__pad-2">
                        <div className="dash__address-header">
                            <h1 className="dash__h1">Address Book</h1>
                            <div>
                                <span className="dash__link dash__link--black u-s-m-r-8">
                                    <a href="dash-address-make-default.html">Make default shipping address</a></span>
                                <span className="dash__link dash__link--black">
                                    <a href="dash-address-make-default.html">Make default shipping address</a></span></div>
                        </div>
                    </div>
                </div>
                <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius u-s-m-b-30">
                    <div className="dash__table-2-wrap gl-scroll">
                        <table className="dash__table-2">
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
                                {objFi.length>0? objFi.map((e) => {
                                    return (
                                        <tr>
                                            <td>
                                                <button className="address-book-edit btn--e-transparent-platinum-b-2" onClick={()=>deleteAddress(e[0])}>Delete</button>
                                            </td>
                                            <td>{e[0] + " " + e[1] + " ," + e[5]}</td>
                                            <td>{e[3]}</td>
                                            <td>{e[4]}</td>
                                            <td>{e[2]}</td>
                                        </tr>

                                    )
                                }):""}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <Link className="dash__custom-link btn--e-brand-b-2" to={'/myaccount/addaddress'}><i className="fas fa-plus u-s-m-r-8" />
                        <span>Add New Address</span></Link></div>
            </div>

        </>
    )
}
