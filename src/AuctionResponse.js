import React,{useEffect,useState} from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'
import { Precss } from './components/Precss'
import { Navbar } from './components/Navbar'
export const AuctionResponse = () => {
    const [product, setproduct] = useState()
    const [isloading, setisloading] = useState(true)
    let token ="";
    if(sessionStorage.getItem("data")!==null){
         token=JSON.parse(sessionStorage.getItem("data")).authtoken
    }
    var userid = useParams().id;

    
    useEffect(() => {
        const fetchData = async () => {
            
                try {
                    axios.get("http://localhost:9999/getUserAuction/"+userid).then((e)=>{
                        if (e !== null) {
                            setproduct(e.data);
                            setisloading(false)
                        }else{
                            setproduct(null);
                            setisloading(false)
                        }
                    })   
                } catch (error) {
                    console.log("error in my order")
                }
            }
        
        fetchData()
    }, [])
    const navigate=useNavigate()
    const setBidOrder=async(e)=>{
        
        const obj={"userid":e,"productid":product[0].productid};
        await axios.put("http://localhost:9999/setHighBid",obj).then((e)=>{
            console.log(" set the value")
            navigate("/")
        })
    }
  return (
    
        <>
            <Precss/>
            <Navbar/>
            <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                    <div className="dash__pad-2">
                        <h1 className="dash__h1 u-s-m-b-14">My Product BID Users</h1>
                        <span className="dash__text u-s-m-b-30">Here you can see all User which BID for Your product.</span>
    
                      <div className="m-order__list">
                            
                      {product!==undefined&&isloading===false?  
                        product.map((e)=>{
                            return(
                                <div className="m-order__get">
                                <div className="manage-o__header u-s-m-b-30">
                                    <div className="dash-l-r">
                                        <div>
                                            <div className="manage-o__text-2 u-c-secondary">Name - {e.firstname+" "+e.lastname}</div>
                                            <div className="manage-o__text u-c-silver">Email - {e.email} </div>
                                        </div>
                                        <div>
                                            <div className="dash__link dash__link--brand">
                                            <button className='btn btn--e-brand custom_btn ' onClick={()=>{setBidOrder(e.userid)}} >Approve</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="manage-o__description">
                                    <div className="description__container">
                                        
                                           
                                        <div className="description-title">Bid Value - {e.cartdata}</div>
                                    </div>
                                    <div className="description__info-wrap">
                                        {e.status==="Processing"?
                                        <div>
                                            <span className="manage-o__badge badge--processing">Processing</span>
                                        </div>:e.status==="Shipped"?
                                        
                                        <div>
                                            <span className="manage-o__badge badge--shipped">Shipped</span>
                                        </div>:e.status==="Delivered"?
                                    
                                        <div>
                                            <span className="manage-o__badge badge--delivered">Delivered</span>
                                        </div>:""
                                        }
                                            
                                        {/* <div>
                                            <span className="manage-o__text-2 u-c-silver">Total Bill &nbsp;
                                                <span className="manage-o__text-2 u-c-secondary">Rs: &nbsp;{e.billamount+e.billtax}</span></span></div> */}
                                    </div>
                                </div>
                            </div>
                            )
                        })   
                            :<PulseLoader color='#FF4500'/>}
                            
                        </div> 
                    </div>
                </div>
            </div>

        </>
   
  )
}
