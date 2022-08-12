import React, { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import Rating from '@mui/material/Rating';
// import { useGetAllProducts } from './Hooks/useQuery/useQueryFiles'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PreLoading from './components/PreLoading'
export const ShopList = () => {


    const searchKey=useParams().searchKey
    console.log("searchKey"+searchKey)


    const [products, setproducts] = useState()
    // const res=useGetAllProducts()
    // function loadData(){
    //     res.mutate()
    // }
    const [isloading, setisloading] = useState(true)
    const [iserror, setiserror] = useState(false)
    // const [value, setValue] = useState(2);
    const navigate = useNavigate()
    useEffect(() => {
        if(searchKey===undefined){
            const fetchData = async () => {
                setiserror(false);
                try {
                    const response = await axios('http://localhost:9999/products');
                    // console.log("data-->"+JSON.stringify(response.data[0].photo));
                    if (response !== undefined) {
                        setproducts(response.data);
                        setisloading(false)
                    }
                } catch (error) {
                    setiserror(true);
                }

            };
            fetchData()
        }else{
            const fetchData = async () => {
                setiserror(false);
                try {
                    await axios.post('http://localhost:9999/products',{"productname":searchKey}).then((e)=>{
                        if(e.data!==undefined){
                            setproducts(e.data);
                            console.log(e.data)
                            setisloading(false)
                        }else{
                            navigate("/error404")
                        }
                    })
                } catch (error) {   
                    setiserror(true);
                }

            };
            fetchData()
        }

    }, [])
    
    useEffect(() => {
        
    
      
    }, [])
    

    // let arr=[]
    // if(isloading===false&& searchKey !== undefined){
    //     products.map((e)=>{
    //         if(e.productname.includes(searchKey) || e.title.includes(searchKey)|| e.description.includes(searchKey)){
    //             arr.push(e)    
    //         }
    //     })
    //     console.log("show products search "+arr)
    // }


    return (
        <div>
            <Precss />
            <Navbar />
            {iserror && <div>Something went wrong ...</div>}

            {isloading ? (
                 <PreLoading/>
            ) : (
                <div className="app-content">
                    {/*====== Section 1 ======*/}
                    <div className="u-s-p-y-90">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    <div className="shop-w-master">
                                        <h1 className="shop-w-master__heading u-s-m-b-30"><i className="fas fa-filter u-s-m-r-8" />
                                            <span>FILTERS</span></h1>
                                        <div className="shop-w-master__sidebar sidebar--bg-snow">
                                            <div className="u-s-m-b-30">
                                                <div className="shop-w">
                                                    <div className="shop-w__intro-wrap">
                                                        <h1 className="shop-w__h">CATEGORY</h1>

                                                    </div>
                                                    <div className="shop-w__wrap collapse show" id="s-category">
                                                        <ul className="shop-w__category-list gl-scroll">
                                                            <li className="has-list">
                                                                <a href="#">Electronics</a>
                                                                <span className="category-list__text u-s-m-l-6">(23)</span>
                                                                <span className="js-shop-category-span is-expanded fas fa-plus u-s-m-l-6" />
                                                                <ul style={{ display: 'block' }}>
                                                                    <li className="has-list">
                                                                        <a href="#">3D Printer &amp; Supplies</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">3d Printer</a></li>
                                                                            <li>
                                                                                <a href="#">3d Printing Pen</a></li>
                                                                            <li>
                                                                                <a href="#">3d Printing Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">3d Printer Module Board</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Home Audio &amp; Video</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">TV Boxes</a></li>
                                                                            <li>
                                                                                <a href="#">TV Receiver &amp; Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">3d Printing Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">3d Printer Module Board</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Media Players</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Earphones</a></li>
                                                                            <li>
                                                                                <a href="#">Mp3 Players</a></li>
                                                                            <li>
                                                                                <a href="#">Speakers &amp; Radios</a></li>
                                                                            <li>
                                                                                <a href="#">Microphones</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Video Game Accessories</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Nintendo Video Games Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">Sony Video Games Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">Xbox Video Games Accessories</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Security &amp; Protection</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Security Cameras</a></li>
                                                                            <li>
                                                                                <a href="#">Alarm System</a></li>
                                                                            <li>
                                                                                <a href="#">Security Gadgets</a></li>
                                                                            <li>
                                                                                <a href="#">CCTV Security Accessories</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Home Audio &amp; Video</a>
                                                                        <span className="js-shop-category-span is-expanded fas fa-plus u-s-m-l-6" />
                                                                        <ul style={{ display: 'block' }}>
                                                                            <li>
                                                                                <a href="#">TV Boxes</a></li>
                                                                            <li>
                                                                                <a href="#">TV Receiver &amp; Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">3d Printing Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">3d Printer Module Board</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Photography &amp; Camera</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Digital Cameras</a></li>
                                                                            <li>
                                                                                <a href="#">Sport Camera &amp; Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">Camera Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">Lenses &amp; Accessories</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Arduino Compatible</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Raspberry Pi &amp; Orange Pi</a></li>
                                                                            <li>
                                                                                <a href="#">Module Board</a></li>
                                                                            <li>
                                                                                <a href="#">Smart Robot</a></li>
                                                                            <li>
                                                                                <a href="#">Board Kits</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">DSLR Camera</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Nikon Camera</a></li>
                                                                            <li>
                                                                                <a href="#">Canon Camera</a></li>
                                                                            <li>
                                                                                <a href="#">Sony Camera</a></li>
                                                                            <li>
                                                                                <a href="#">DSLR Lenses</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Necessary Accessories</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Flash Cards</a></li>
                                                                            <li>
                                                                                <a href="#">Memory Cards</a></li>
                                                                            <li>
                                                                                <a href="#">Flash Pins</a></li>
                                                                            <li>
                                                                                <a href="#">Compact Discs</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="has-list">
                                                                <a href="#">Women's Clothing</a>
                                                                <span className="category-list__text u-s-m-l-6">(5)</span>
                                                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                <ul>
                                                                    <li className="has-list">
                                                                        <a href="#">Hot Categories</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Dresses</a></li>
                                                                            <li>
                                                                                <a href="#">Blouses &amp; Shirts</a></li>
                                                                            <li>
                                                                                <a href="#">T-shirts</a></li>
                                                                            <li>
                                                                                <a href="#">Rompers</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Intimates</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Bras</a></li>
                                                                            <li>
                                                                                <a href="#">Brief Sets</a></li>
                                                                            <li>
                                                                                <a href="#">Bustiers &amp; Corsets</a></li>
                                                                            <li>
                                                                                <a href="#">Panties</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Wedding &amp; Events</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Wedding Dresses</a></li>
                                                                            <li>
                                                                                <a href="#">Evening Dresses</a></li>
                                                                            <li>
                                                                                <a href="#">Prom Dresses</a></li>
                                                                            <li>
                                                                                <a href="#">Flower Dresses</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Bottoms</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Skirts</a></li>
                                                                            <li>
                                                                                <a href="#">Shorts</a></li>
                                                                            <li>
                                                                                <a href="#">Leggings</a></li>
                                                                            <li>
                                                                                <a href="#">Jeans</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Outwear</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Blazers</a></li>
                                                                            <li>
                                                                                <a href="#">Basic Jackets</a></li>
                                                                            <li>
                                                                                <a href="#">Trench</a></li>
                                                                            <li>
                                                                                <a href="#">Leather &amp; Suede</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Jackets</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Denim Jackets</a></li>
                                                                            <li>
                                                                                <a href="#">Trucker Jackets</a></li>
                                                                            <li>
                                                                                <a href="#">Windbreaker Jackets</a></li>
                                                                            <li>
                                                                                <a href="#">Leather Jackets</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Accessories</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Tech Accessories</a></li>
                                                                            <li>
                                                                                <a href="#">Headwear</a></li>
                                                                            <li>
                                                                                <a href="#">Baseball Caps</a></li>
                                                                            <li>
                                                                                <a href="#">Belts</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Other Accessories</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Bags</a></li>
                                                                            <li>
                                                                                <a href="#">Wallets</a></li>
                                                                            <li>
                                                                                <a href="#">Watches</a></li>
                                                                            <li>
                                                                                <a href="#">Sunglasses</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="has-list">
                                                                <a href="#">Men's Clothing</a>
                                                                <span className="category-list__text u-s-m-l-6">(5)</span>
                                                                <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                <ul>
                                                                    <li className="has-list">
                                                                        <a href="#">Hot Sale</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">T-Shirts</a></li>
                                                                            <li>
                                                                                <a href="#">Tank Tops</a></li>
                                                                            <li>
                                                                                <a href="#">Polo</a></li>
                                                                            <li>
                                                                                <a href="#">Shirts</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Outwear</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Hoodies</a></li>
                                                                            <li>
                                                                                <a href="#">Trench</a></li>
                                                                            <li>
                                                                                <a href="#">Parkas</a></li>
                                                                            <li>
                                                                                <a href="#">Sweaters</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Bottoms</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Casual Pants</a></li>
                                                                            <li>
                                                                                <a href="#">Cargo Pants</a></li>
                                                                            <li>
                                                                                <a href="#">Jeans</a></li>
                                                                            <li>
                                                                                <a href="#">Shorts</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Underwear</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Boxers</a></li>
                                                                            <li>
                                                                                <a href="#">Briefs</a></li>
                                                                            <li>
                                                                                <a href="#">Robes</a></li>
                                                                            <li>
                                                                                <a href="#">Socks</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Jackets</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Denim Jackets</a></li>
                                                                            <li>
                                                                                <a href="#">Trucker Jackets</a></li>
                                                                            <li>
                                                                                <a href="#">Windbreaker Jackets</a></li>
                                                                            <li>
                                                                                <a href="#">Leather Jackets</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Sunglasses</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Pilot</a></li>
                                                                            <li>
                                                                                <a href="#">Wayfarer</a></li>
                                                                            <li>
                                                                                <a href="#">Square</a></li>
                                                                            <li>
                                                                                <a href="#">Round</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Accessories</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Eyewear Frames</a></li>
                                                                            <li>
                                                                                <a href="#">Scarves</a></li>
                                                                            <li>
                                                                                <a href="#">Hats</a></li>
                                                                            <li>
                                                                                <a href="#">Belts</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="has-list">
                                                                        <a href="#">Other Accessories</a>
                                                                        <span className="js-shop-category-span fas fa-plus u-s-m-l-6" />
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">Bags</a></li>
                                                                            <li>
                                                                                <a href="#">Wallets</a></li>
                                                                            <li>
                                                                                <a href="#">Watches</a></li>
                                                                            <li>
                                                                                <a href="#">Tech Accessories</a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Food &amp; Supplies</a>
                                                                <span className="category-list__text u-s-m-l-6">(0)</span></li>
                                                            <li>
                                                                <a href="#">Furniture &amp; Decor</a>
                                                                <span className="category-list__text u-s-m-l-6">(0)</span></li>
                                                            <li>
                                                                <a href="#">Sports &amp; Game</a>
                                                                <span className="category-list__text u-s-m-l-6">(0)</span></li>
                                                            <li>
                                                                <a href="#">Beauty &amp; Health</a>
                                                                <span className="category-list__text u-s-m-l-6">(0)</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="u-s-m-b-30">
                                                <div className="shop-w">
                                                    <div className="shop-w__intro-wrap">
                                                        <h1 className="shop-w__h">PRICE</h1>

                                                    </div>
                                                    <div className="shop-w__wrap collapse show" id="s-price">
                                                        <form className="shop-w__form-p">
                                                            <div className="shop-w__form-p-wrap">
                                                                <div>
                                                                    <label htmlFor="price-min" />
                                                                    <input className="input-text input-text--primary-style" type="text" id="price-min" placeholder="Min" /></div>
                                                                <div>
                                                                    <label htmlFor="price-max" />
                                                                    <input className="input-text input-text--primary-style" type="text" id="price-max" placeholder="Max" /></div>
                                                                <div>
                                                                    <button className="btn btn--icon fas fa-angle-right btn--e-transparent-platinum-b-2" type="submit" /></div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-9 col-md-12">
                                    <div className="shop-p">
                                        <div className="shop-p__toolbar u-s-m-b-30">

                                            <div className="shop-p__tool-style">
                                                <div className="tool-style__group u-s-m-b-8">
                                                    <span className="js-shop-grid-target is-active">Grid</span>
                                                    <span className="js-shop-list-target">List</span></div>
                                            </div>
                                        </div>
                                        <div className="shop-p__collection">
                                            <div className="row is-grid-active">

                                                {products.map((e) => {
                                                    return (
                                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                                            <div className="product-m">
                                                                <div className="product-m__thumb">
                                                                    <Link className="aspect aspect--bg-grey aspect--square u-d-block" to={"/productdetails/"+e.productid}>
                                                                        {/* <img className="aspect__img" src="https://drive.google.com/uc?export=view&&id=1nJtaA7A1BArTptiITm_NCGpjCvk5L7nk" alt="" /></a> */}
                                                                        {/* <img className="aspect__img" src{`data:image/jpeg;base64,${binary_data}`}  alt="" /></a> */}
                                                                        <img className='imgsetbox' src={`data:image/png;base64,${e.photo}`}/>

                                                                    </Link>
                                                                    
                                                                    <div className="product-m__add-cart">
                                                                        <Link to={`/viewcart/${e.productid}`} className="btn--e-brand" data-modal="modal" data-modal-id="#add-to-cart">Add to Cart</Link></div>
                                                                </div>
                                                                <div className="product-m__content">
                                                                    <div className="product-m__category">
                                                                        <a href="shop-side-version-2.html">{e.title}</a></div>
                                                                    <div className="product-m__name">
                                                                        <a href="product-detail.html">{e.productname}</a></div>
                                                                    <div className="product-m__rating gl-rating-style">
                                                                        <Rating
                                                                            name="read-only"
                                                                            value={e.rating}
                                                                            readOnly  
                                                                        />
                                                                    </div>
                                                                    <div className="product-m__price">Rs. {e.price}</div>
                                                                    <div className="product-m__hover">
                                                                        <div className="product-m__preview-description">
                                                                            <span>{e.description}</span></div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )

                                                })}


                                            </div>
                                        </div>
                                        <div className="u-s-p-y-60">
                                            {/*====== Pagination ======*/}
                                            {/* <ul className="shop-p__pagination">
                                                <li className="is-active">
                                                    <a href="shop-grid-left.html">1</a></li>
                                                <li>
                                                    <a href="shop-grid-left.html">2</a></li>
                                                <li>
                                                    <a href="shop-grid-left.html">3</a></li>
                                                <li>
                                                    <a href="shop-grid-left.html">4</a></li>
                                                <li>
                                                    <a className="fas fa-angle-right" href="shop-grid-left.html" /></li>
                                            </ul> */}
                                            {/*====== End - Pagination ======*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*====== End - Section 1 ======*/}
                </div>

            )}


            <Footer />
            <Prejs />
        </div>
    )
}
