// import { paste } from '@testing-library/user-event/dist/paste'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss' 
import { Prejs } from './components/Prejs'
import { SectionLinks } from './components/SectionLinks'

export const Cart = () => {
    const [products, setproducts] = useState()

    const [isloading, setisloading] = useState(true)
    const [iserror, setiserror] = useState(false)

    // const [paramValue, setparamValue] = useState()
    var productid = useParams().id;
    // setparamValue(productid)
    // console.log(productid)
    useEffect(() => {
        const fetchData = async () => {
            setiserror(false);

            if(productid!==undefined){
                try {
                    // console.log("userid",JSON.parse(sessionStorage.getItem("data")).userid)
                    const response = await axios('http://localhost:9999/products/' + productid + "/" + JSON.parse(sessionStorage.getItem("data")).userid);

                    setproducts(response.data);
                    if (response !== undefined) {
                        setisloading(false)
                    }
                } catch (error) {
                    setiserror(true);
                }
            }else{
                setproducts("")
            }

        };
        fetchData()

    }, [])
    // console.log("products", products)
    // console.log(products)
    // console.log(iserror)
    // console.log(isloading)

    //second request for get all product
    const [products1, setproducts1] = useState()
    const [isloading1, setisloading1] = useState(true)
    const [iserror1, setiserror1] = useState(false)
    // if(isloading===false &&products!=null){
    // console.log("product ",products)   
    useEffect(() => {
        
        const fetchData = async () => {
            setiserror1(false);
            // console.log(productid,"thadh")
            if (isloading === false&&products!==undefined) {
                try {

                    const response = await axios('http://localhost:9999/products/' + JSON.parse(sessionStorage.getItem("data")).userid);

                    setproducts1(response);
                    if (response !== undefined) {
                        setisloading1(false)
                    }
                } catch (error) {
                    setiserror1(true);
                }
            }else if (productid===undefined){
                try {

                    const response = await axios('http://localhost:9999/products/' + JSON.parse(sessionStorage.getItem("data")).userid);

                    setproducts1(response);
                    // console.log("productid 1" ,products1)
                    if (response !== undefined) {
                        setisloading1(false)
                        if(response.data===''){
                            navigate('/emptycart')
                        }
                    }
                } catch (error) {
                    setiserror1(true);
                }
            }

        };
        fetchData()


    }, [isloading])
    

    //products
    const navigate=useNavigate();
    const deleteParticularProduct = async(productid)=>{
        // console.log(productid)
        await axios.get("http://localhost:9999/productdelete/"+productid+"/"+JSON.parse(sessionStorage.getItem("data")).userid).then(()=>{
            // console.log("done")
        })
        // setTimeout(() => {
            navigate('/newarrival')
        // }, 2000);
    }


    const clearCartData=async()=>{
        await axios.get("http://localhost:9999/productdeleteall/"+JSON.parse(sessionStorage.getItem("data")).userid).then((res)=>{
            // console.log(res)
            if(res.data===true){
                navigate("/emptycart")
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
                                                {products1.data.map((e)=>{
                                                    return(
                                                    <tr>
                                                        <td>
                                                            <div className="table-p__box">
                                                                <div className="table-p__img-wrap">
                                                                    <img className="u-img-fluid" src="images/product/electronic/product3.jpg" alt="" /></div>
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
