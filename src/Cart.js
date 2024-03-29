// import { paste } from '@testing-library/user-event/dist/paste'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss' 
import { Prejs } from './components/Prejs'
import { SectionLinks } from './components/SectionLinks'

export const Cart = (props) => {
    const [products, setproducts] = useState()
    const [isloading, setisloading] = useState(true)
    const [obj, setobj] = useState()
    var productid = useParams().id;

    let token ="";
    if(sessionStorage.getItem("data")!==null){
         token=JSON.parse(sessionStorage.getItem("data")).authtoken
    }
    useEffect(() => {
        axios.get("https://cartbuddy-api.herokuapp.com/getuserdata",{headers:{'authtoken':token}}).then((e)=>{
            if(e.data.data === null && e.data.status ===404){
                navigate("/error404")
            }else{
                setobj(e.data.data);
            }
        })
    },[])

    useEffect(() => {
        const fetchData = async () => {
            if(productid!==undefined ){
                try {
                    axios.post("https://cartbuddy-api.herokuapp.com/addtocartproduct",{'productid':productid,"authtoken":token}).then((e)=>{
                        if (e !== null) {
                            setproducts(e.data.data);
                            setisloading(false)
                        }
                    })   
                } catch (error) {
                    props.toastClick("Something went Wrong,3")
                }
            }else{
                setproducts("")
            }
        };
        fetchData()
    }, [])
    const [products1, setproducts1] = useState()
    const [isloading1, setisloading1] = useState(true)
    useEffect(() => {
        if(obj!==undefined){
            const fetchData = async () => {
                if (isloading === false&&products!==undefined) {
                    try {
                        await axios.get("https://cartbuddy-api.herokuapp.com/productviewcart",{headers:{"userid":products.userid,"authtoken":token}}).then((e)=>{
                            if (e !== undefined) {
                                setproducts1(e.data.data);
                                setisloading1(false)
                            }
                        }) 
                    } catch (error) {
                        props.toastClick("Something went Wrong,3")
                    }
                
                }else if (productid===undefined && obj !== undefined){

                    try {
                        await axios.get("https://cartbuddy-api.herokuapp.com/productviewcart",{headers:{"userid":obj.userid,"authtoken":token}}).then((e)=>{
                            if(e.data.data===null){
                                navigate("/emptycart")
                            }
                            if (e !== undefined) {
                                setproducts1(e.data.data);
                                
                                setisloading1(false)
                            }
                        }) 
                    } catch (error) {
                        props.toastClick("Something went Wrong,3")
                    }
                }

            };
            fetchData()
        }

    }, [isloading,obj])

    const navigate=useNavigate();
    const deleteParticularProduct = async(producid)=>{
        await axios.delete("https://cartbuddy-api.herokuapp.com/deleteproduct",{data:{"userid":obj.userid,"authtoken":token,"productid":producid}}).then((e)=>{
            if(e.data.data===true && e.data.status===200){
                props.toastClick(`${e.data.msg},1`)
            }else{
                navigate("/error404")   
            }
        })
        navigate('/newarrival')
    }


    const clearCartData=()=>{
        axios.delete("https://cartbuddy-api.herokuapp.com/deleteAllProducts",{data:{"authtoken":token}}).then((res)=>{
            if(res.data.data===true){
                props.toastClick(`${res.data.msg},1`)
                navigate("/emptycart")
            }else{
                navigate("/error404")
            }
        })
    }

    return (
        <div>
            <Precss />
            <Navbar />
            <SectionLinks nextLink="View Cart" />
            <div>
                <div className="u-s-p-b-60">
                    {/*====== Section Intro ======*/}
                    <div className="section__intro u-s-m-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section__text-wrap">
                                        <h1 className="section__heading u-c-secondary">SHOPPING CART</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Intro ======*/}
                    {/*====== Section Content ======*/}
                    <div className="section__content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                                    <div className="table-responsive">
                                        <table className="table-p">
                                            { isloading1 === false && products1 !== undefined ? <tbody>
                                                {/*====== Row ======*/}
                                                {products1.map((e)=>{
                                                    return(
                                                    <tr>
                                                        <td>
                                                            <div className="table-p__box">
                                                                <div className="table-p__img-wrap">
                                                                    {/* <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div> */}
                                                                    <img className=' u-img-fluid' src={`data:image/png;base64,${e.photo}`}/></div>
                                                                
                                                                <div className="table-p__info">
                                                                    <span className="table-p__name">
                                                                        <a href="product-detail.html">{e.productname}</a></span>
                                                                    <span className="table-p__category">
                                                                        <a href="shop-side-version-2.html">{e.title}</a></span>
                                                                    <ul className="table-p__variant-list">
                                                                        <li>
                                                                            <span></span></li>
                                                                        <li>
                                                                            <span></span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="table-p__price">Rs. {e.price}</span></td>
                                                        <td>
                                                            {<div className="table-p__input-counter-wrap">
                                                                {/*====== Input Counter ======*/}
                                                                {/* <div className="input-counter">
                                                                <span className="input-counter__minus fas fa-minus" />
                                                                <input className="input-counter__text input-counter--text-primary-style" type="text" defaultValue={1} data-min={1} data-max={10} />
                                                                <span className="input-counter__plus fas fa-plus" /></div> */}

                                                            </div>}
                                                        </td>
                                                        <td>
                                                            <div className="table-p__del-wrap">
                                                                <button className="far fa-trash-alt table-p__delete-link"  onClick={()=>deleteParticularProduct(e.productid)}></button></div>
                                                        </td>
                                                    </tr>
                                                    
                                                )})}

                                                {/*====== End - Row ======*/}
                                                {/*====== Row ======*/}

                                                {/*====== End - Row ======*/}
                                            </tbody> : ""}
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="route-box">
                                        <div className="route-box__g1">
                                            <Link className="route-box__link" to={'/newarrival'}><i className="fas fa-long-arrow-alt-left" />
                                                <span>CONTINUE SHOPPING</span></Link></div>
                                        <div className="">
                                            <Link className="route-box__link" to={'/checkout'}><i class="fas fa-shopping-cart"></i>
                                                <span>Place Order</span></Link></div>
                                        <div className="route-box__g2">
                                            <button style={{border:'none'}} onClick={()=>clearCartData()} className="route-box__link" ><i className="fas fa-trash" />
                                                <span>CLEAR CART</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section Content ======*/}
                </div>
                {/*====== End - Section 2 ======*/}
                
            </div>
            <Footer />
            <Prejs />
        </div>
    )
}
