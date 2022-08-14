import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { PulseLoader } from 'react-spinners'
import { Precss } from '../Precss'

export const ManageOrder = (props) => {

    const [product, setproduct] = useState()
    const [isloading, setisloading] = useState(true)
    const [parproduct, setparproduct] = useState()
    let token = "";
    if (sessionStorage.getItem("data") !== null) {
        token = JSON.parse(sessionStorage.getItem("data")).authtoken
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get("http://localhost:9999/order", { headers: { "authtoken": token, "orderid": parseInt(sessionStorage.getItem("orderid")) } }).then((e) => {
                    console.log(e.data.data)
                    if (e !== null) {
                        setproduct(e.data.data);

                        setparproduct(JSON.parse(e.data.data.orderdata))
                        console.log(JSON.stringify(e.data.data.orderdata))
                        setisloading(false)
                    } else {
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

    //cancel order
    const navigate=useNavigate()
    const cancelOrder = async(orderid)=>{
        await axios.delete("http://localhost:9999/cancelorder",{headers:{"authtoken":token,"orderid":orderid}}).then((e)=>{
            console.log(e)
            if(e.data.status===200){
                props.toastClick(`${e.data.msg},1`)
                navigate("/myaccount/myorder")
            }else{
                props.toastClick(`${e.data.msg},2`)
                navigate("/myaccount/myorder")
            }
        })
    }

    return (
        <>

            {product !== undefined && isloading === false ? <div className="col-lg-9 col-md-12">
                <h1 className="dash__h1 u-s-m-b-30">Order Details</h1>
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                    <div className="dash__pad-2">
                        <div className="dash-l-r">
                            <div>
                                <div className="manage-o__text-2 u-c-secondary">Order {product.orderid}</div>
                                <div className="manage-o__text u-c-silver">Placed on {product.orderdate}</div>
                            </div>
                            <div>
                                <div className="manage-o__text-2 u-c-silver">Total:
                                    <span className=" o-card__price"> Rs. {product.billamount + product.billtax}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                    <div className="dash__pad-2">
                        <div className="manage-o">
                            <div className="manage-o__header u-s-m-b-30">
                                {/* <div className="manage-o__icon"><i className="fas fa-box u-s-m-r-5" />
                                    <span className="manage-o__text">Package 1</span></div> */}
                                    
                                   {product.status!=='Delivered'? <button className='btn btn--e-brand custom_btn' onClick={()=>cancelOrder(product.orderid)}>Cancel Order</button>:"Delivered Successfully"}
                            </div>
                            <div className="dash-l-r">
                                <div className="manage-o__text u-c-secondary">Delivered After Two Day For the OrderDate</div>
                                <div className="manage-o__icon"><i className="fas fa-truck u-s-m-r-5" />
                                    <span className="manage-o__text">Standard</span></div>
                            </div>
                            <div className="manage-o__timeline">
                                <div className="timeline-row">
                                    {
                                    product.status==="Processing"&&
                                        
                                            <>
                                            <div className="col-lg-4 u-s-m-b-30">
                                                <div className="timeline-step">
                                                    <div className="timeline-l-i timeline-l-i--finish">
                                                        <span className="timeline-circle" /></div>
                                                    <span className="timeline-text">Processing</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 u-s-m-b-30">
                                                <div className="timeline-step">
                                                    <div className="timeline-l-i ">
                                                        <span className="timeline-circle" /></div>
                                                    <span className="timeline-text">Shipped</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 u-s-m-b-30">
                                                <div className="timeline-step">
                                                    <div className="timeline-l-i ">
                                                        <span className="timeline-circle" /></div>
                                                    <span className="timeline-text">Delivered</span>
                                                </div>
                                            </div>
                                            </>
                                    }{
                                        product.status==="Shipped"&&

                                            <>
                                            <div className="col-lg-4 u-s-m-b-30">
                                            <div className="timeline-step">
                                                <div className="timeline-l-i timeline-l-i--finish">
                                                    <span className="timeline-circle" /></div>
                                                <span className="timeline-text">Processing</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 u-s-m-b-30">
                                            <div className="timeline-step">
                                                <div className="timeline-l-i timeline-l-i--finish">
                                                    <span className="timeline-circle" /></div>
                                                <span className="timeline-text">Shipped</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 u-s-m-b-30">
                                            <div className="timeline-step">
                                                <div className="timeline-l-i ">
                                                    <span className="timeline-circle" /></div>
                                                <span className="timeline-text">Delivered</span>
                                            </div>
                                        </div>
                                        </>
                                }{
                                    product.status==="Delivered"&&<>
                                            <div className="col-lg-4 u-s-m-b-30">
                                            <div className="timeline-step">
                                                <div className="timeline-l-i timeline-l-i--finish">
                                                    <span className="timeline-circle" /></div>
                                                <span className="timeline-text">Processing</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 u-s-m-b-30">
                                            <div className="timeline-step">
                                                <div className="timeline-l-i timeline-l-i--finish">
                                                    <span className="timeline-circle" /></div>
                                                <span className="timeline-text">Shipped</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 u-s-m-b-30">
                                            <div className="timeline-step">
                                                <div className="timeline-l-i timeline-l-i--finish">
                                                    <span className="timeline-circle" /></div>
                                                <span className="timeline-text">Delivered</span>
                                            </div>
                                        </div>
                                        </>
                                        
                                }
                                </div>
                            </div>
                            {
                                parproduct.map((e) => {
                                    return (
                                        <div className="manage-o__description">

                                            <div className="description__container">
                                                {/* <div className="description__img-wrap">
                                                <img className=' u-img-fluid' src={`data:image/png;base64,${e.photo}`}/></div> */}
                                                <div className="description-title">{e.productname}</div>
                                            </div>

                                            <div className="description__info-wrap">
                                                <div>
                                                    <span className="manage-o__text-2 u-c-silver">Quantity:&nbsp;
                                                        <span className="manage-o__text-2 u-c-secondary">1</span></span></div>
                                                <div>

                                                        <span className="manage-o__text-2 u-c-secondary">Rs. {e.price}</span></div>
                                            </div>
                                        </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
                            <div className="dash__pad-3">
                                <h2 className="dash__h2 u-s-m-b-8">Billing Information</h2>
                                <h2 className="dash__h2 u-s-m-b-8">Billing Name : {product.billname}</h2>
                                <span className="dash__text-2">Billineg Note : {product.ordernote}</span>
                            </div>
                        </div>
                        <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
                            <div className="dash__pad-3">
                                <h2 className="dash__h2 u-s-m-b-8">Billing Address</h2>
                                <span className="dash__text-2">{product.billaddress}</span>
                                {/* <span className="dash__text-2">(+0) 900901904</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dash__box dash__box--bg-white dash__box--shadow u-h-100">
                            <div className="dash__pad-3">
                                <h2 className="dash__h2 u-s-m-b-8">Total Summary</h2>
                                <div className="dash-l-r u-s-m-b-8">
                                    <div className="manage-o__text-2 u-c-secondary">Subtotal</div>
                                    <div className="o-card__price">Rs. {product.billamount}</div>
                                </div>
                                <div className="dash-l-r u-s-m-b-8">
                                    <div className="manage-o__text-2 u-c-secondary">Shipping Fee</div>
                                    <div className="manage-o__text-2 u-c-secondary">{product.billtax===0?"Free Delivery":"Rs. "+product.billtax}</div>
                                </div>
                                {product.discount>0?
                                <div className="dash-l-r u-s-m-b-8">
                                    <div className="manage-o__text-2 " style={{"color":"green"}}>Discount(Promocode)</div>
                                    <div className="manage-o__text-2 " style={{"color":"green"}}>Rs. -{product.discount}</div>
                                </div>:null}
                                <div className="dash-l-r u-s-m-b-8">
                                    <div className="manage-o__text-2 u-c-secondary">Total</div>
                                    <div className="o-card__price">Rs. {product.billamount + product.billtax}</div>
                                </div>
                                <span className="dash__text-2">Paid by {product.payinfo}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <PulseLoader color='#FF4500' />}
        </>
    )
}
