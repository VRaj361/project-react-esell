import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'

export const MyOrder = () => {
    const [product, setproduct] = useState()
    const [isloading, setisloading] = useState(true)
    let token ="";
    if(sessionStorage.getItem("data")!==null){
         token=JSON.parse(sessionStorage.getItem("data")).authtoken
    }
    useEffect(() => {
        const fetchData = async () => {
            
                try {
                    axios.get("http://localhost:9999/allorders",{headers:{"authtoken":token}}).then((e)=>{
                        if (e !== null) {
                            setproduct(e.data.data);
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
    return (
        <>
            
            <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                    <div className="dash__pad-2">
                        <h1 className="dash__h1 u-s-m-b-14">My Orders</h1>
                        <span className="dash__text u-s-m-b-30">Here you can see all products that have been delivered.</span>
    
                      <div className="m-order__list">
                            
                      {product!==undefined&&isloading===false?  
                        product.map((e)=>{
                            return(
                                <div className="m-order__get">
                                <div className="manage-o__header u-s-m-b-30">
                                    <div className="dash-l-r">
                                        <div>
                                            <div className="manage-o__text-2 u-c-secondary">Order Id {e.orderid}</div>
                                            <div className="manage-o__text u-c-silver">Order on {e.orderdate} </div>
                                        </div>
                                        <div>
                                            <div className="dash__link dash__link--brand">
                                                <Link to={'/'}>MANAGE</Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="manage-o__description">
                                    <div className="description__container">
                                        
                                           
                                        <div className="description-title">{e.billname}</div>
                                    </div>
                                    <div className="description__info-wrap">
                                        <div>
                                            <span className="manage-o__badge badge--processing">Processing</span></div>
                                        
                                        {/* <div>
                                            <span className="manage-o__badge badge--shipped">Shipped</span></div>
                                    
                                        <div>
                                            <span className="manage-o__badge badge--delivered">Delivered</span></div>
                                         */}
                                            
                                        <div>
                                            <span className="manage-o__text-2 u-c-silver">Total Bill &nbsp;
                                                <span className="manage-o__text-2 u-c-secondary">Rs: &nbsp;{e.billamount+e.billtax}</span></span></div>
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
