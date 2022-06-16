import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddAddress = () => {
    const [streetadd, setstreetadd] = useState("")
    const [landmark, setlandmark] = useState("")
    const [country, setcountry] = useState("")
    const [state, setstate] = useState("")
    const [city, setcity] = useState("")
    const [postal, setpostal] = useState("")
    const [isloading, setisloading] = useState(true)
    const [iserror, setiserror] = useState(false)
    const [obj, setobj] = useState()
    // let obj = JSON.parse(sessionStorage.getItem("data"))
    let navigate=useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            setiserror(false);


            try {
                const response = await axios('http://localhost:9999/user');
                response.data.map((e) => {
                    if (e.userid === JSON.parse(sessionStorage.getItem("data")).userid) {
                        
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




    const getAddress=async(e)=>{
        e.preventDefault()
        const objAddress={"streetadd":streetadd,"landmark":landmark,"country":country,"state":state,"city":city,"postal":postal}
        let arr=[]
        if(obj.address===null){            
            arr.push(objAddress);
        }else{
            
            arr=JSON.parse(obj.address)
            console.log("arr",arr)
            arr.push(objAddress)
            console.log(arr)
            // obj.address=arr.toString()
            //convert array into string
        }
        let objData={"userid":obj.userid,"firstname":obj.firstname,"lastname":obj.lastname,"createdate":obj.createdate,"gender":obj.gender,"email":obj.email,"password":obj.password,"phonenum":obj.phonenum,"address":JSON.stringify(arr)};
        await axios.put("http://localhost:9999/user",objData).then((e)=>{
            console.log("success")
            console.log(e)
            sessionStorage.setItem("data",JSON.stringify({'firstname':e.data.firstname,"lastname":e.data.lastname,'userid':e.data.userid}))
            navigate("/myaccount/addressbook")
        })
    }
    return (
        <div className="col-lg-9 col-md-12">
            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">Add new Address</h1>
                    <span className="dash__text u-s-m-b-30">We need an address where we could deliver products.</span>
                    <form className="dash-address-manipulation" onSubmit={getAddress}>
                        <div className="gl-inline">
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="address-phone">STREET ADDRESS *</label>
                                <input className="input-text input-text--primary-style" type="text" id="address-phone" placeholder='House name and Street' onChange={(e)=>setstreetadd(e.target.value)}/></div>
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="address-street">LANDMARK *</label>
                                <input className="input-text input-text--primary-style" type="text" id="address-street" placeholder="Near Area for the Mark" onChange={(e)=>setlandmark(e.target.value)}/></div>

                        </div>
                        <div className="gl-inline">
                            <div className="u-s-m-b-30">
                                {/*====== Select Box ======*/}
                                <label className="gl-label" htmlFor="address-country">COUNTRY *</label><select className="select-box select-box--primary-style" id="address-country" onChange={(e)=>setcountry(e.target.value)}>
                                    <option selected value>Choose Country</option>
                                    <option value="India">INDIA (IN)</option>
                                    <option value="United Arab Emirate">United Arab Emirate (UAE)</option>
                                    <option value="United Kingdom">United Kingdom (UK)</option>
                                    <option value="United States">United States (US)</option>
                                </select>
                                
                                {/*====== End - Select Box ======*/}
                            </div>
                            <div className="u-s-m-b-30">
                                {/*====== Select Box ======*/}
                                <label className="gl-label" htmlFor="address-state">STATE/PROVINCE *</label><select className="select-box select-box--primary-style" id="address-state" onChange={(e)=>setstate(e.target.value)}>
                                    <option selected value>Choose State/Province</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Maharastra">Maharastra</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Dubai">Dubai</option>
                                    <option value="London">London</option>
                                    <option value="New York">New York</option>
                                </select>
                                
                                {/*====== End - Select Box ======*/}
                            </div>
                        </div>
                        <div className="gl-inline">
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="address-city">TOWN/CITY *</label>
                                <input className="input-text input-text--primary-style" type="text" id="address-city" onChange={(e)=>setcity(e.target.value)}/></div>
                                
                            <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="address-street">ZIP/POSTAL CODE *</label>
                                <input className="input-text input-text--primary-style" type="text" id="address-postal" placeholder="Zip/Postal Code" onChange={(e)=>setpostal(e.target.value)}/></div>
                                
                        </div>
                        <button className="btn btn--e-brand-b-2" type="submit">SAVE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
