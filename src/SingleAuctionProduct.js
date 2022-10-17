import React,{useState,useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import axios from 'axios'
import PreLoading from './components/PreLoading'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { border } from '@mui/system'
export const SingleAuctionProduct = () => {
    const [products, setproducts] = useState()
    const [isloading, setisloading] = useState(true)
    const [iserror, setiserror] = useState(false)
    var auctionid = useParams().id;
    var ischeck = false
    useEffect(() => {

        const fetchData = async () => {
        setiserror(false);
        try {
            const response = await axios('https://cartbuddy-api.herokuapp.com/getparticularaucpro/'+auctionid);
            // console.log("data-->"+JSON.stringify(response.data[0].photo));
            if (response !== undefined) {
                console.log(response.data)
                setproducts(response.data);
                setisloading(false)
            }
        } catch (error) {
            setiserror(true);
        }

        };
        fetchData()


    }, [])
    
    let token = "";
    // let resdata=false;
    if (sessionStorage.getItem("data") !== null) {
        token = JSON.parse(sessionStorage.getItem("data")).authtoken
    }

    const [obj, setobj] = useState(null)
    useEffect(() => {
        axios.get("https://cartbuddy-api.herokuapp.com/getuserdata",{headers:{'authtoken':token}}).then((e)=>{
            if(e.data.data === null && e.data.status ===404){
                // props.toastClick(`${e.data.msg},1`)
                navigate("/error404")
            }else{
                setobj(e.data.data)
            }
        })
    }, [])

    const [newbid, setnewbid] = useState("")
    const navigate=useNavigate()
    const newBidValue=async(e)=>{
        e.preventDefault();
        console.log("userid"+obj);
        let arr=[]
        const objAddress={'userid':obj.userid,'bid':newbid};
        // console.log(objAddress)
        if(products.biduser===null || products.biduser ==="" || products.biduser==undefined){            
            arr.push(objAddress);
        }else{
            
            arr=JSON.parse(products.biduser)
            // console.log("arr",arr)
            arr.push(objAddress)
            // console.log("arr1"+arr)
        }
        console.log(objAddress)
        await axios.put("https://cartbuddy-api.herokuapp.com/updatebiduser", {"auctionid":products.auctionid,"biduser":JSON.stringify(arr)}).then((res) => {
            // console.log("success")
            // console.log(res)
            navigate("/auctionhome")
        })
    }
    
    return (
        <div>
        <Navbar />
        {iserror && <div>Something went wrong ...</div>}

        {isloading && obj===null? (
        <>

            <PreLoading />
        </>
        ) : (
            <>
            <Helmet>

            <link href="../img/favicon.png" rel="icon" />
            <link href="../img/apple-touch-icon.png" rel="apple-touch-icon" />
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />


            <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />


            <link href="../lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
            <link href="../lib/animate/animate.min.css" rel="stylesheet" />
            <link href="../lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
            <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

            <link href="../css/auctionapp.css" rel="stylesheet" />
            <script src="../lib/jquery/jquery.min.js"></script>
            <script src="../lib/jquery/jquery-migrate.min.js"></script>
            <script src="../lib/popper/popper.min.js"></script>
            <script src="../lib/bootstrap/js/bootstrap.min.js"></script>
            <script src="../lib/easing/easing.min.js"></script>
            <script src="../lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="../lib/scrollreveal/scrollreveal.min.js"></script>

            <script src="../js/auctionjs.js"></script>
          </Helmet>
          <Precss />
                <section className="intro-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="title-single-box">
                                    <h1 className="title-single">{products.productname}</h1>
                                    <span className="color-text-a">{products.category}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/*/ Intro Single End /*/}
                {/*/ Property Single Star /*/}
                <section className="property-single nav-arrow-b">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div id="property-single-carousel" className="owl-carousel owl-arrow gallery-property">
                                    <div className="carousel-item-b">
                                        <img src={`data:image/png;base64,${products.photo}`} alt="" />
                                    </div>
                                    {/* <div className="carousel-item-b">
                                        <img src="img/slide-3.jpg" alt="" />
                                    </div>
                                    <div className="carousel-item-b">
                                        <img src="img/slide-1.jpg" alt="" />
                                    </div> */}
                                </div> 
                                <div className="row justify-content-between">
                                    <div className="col-md-5 col-lg-4">
                                        <div className="property-price d-flex justify-content-center foo">
                                            <div className="card-header-c d-flex">
                                                <div className="card-box-ico">
                                                    <span className="ion-money"></span>
                                                </div>
                                                <div className="card-title-c align-self-center">
                                                    <h5 className="title-c">BID - Rs. {products.bid}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="property-summary">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="title-box-d section-t4">
                                                        <h3 className="title-d">Quick Summary</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="summary-list">
                                                <ul className="list">
                                                    <li className="d-flex justify-content-between">
                                                        <strong>Current BID:</strong>
                                                        <span>{products.bid}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <strong>Age of Product:</strong>
                                                        <span>{products.ageproduct}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <strong>Highest BID:</strong>
                                                        <span>{products.highbid}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <strong>Range Highest BID:</strong>
                                                        <span>{products.rangehighbid}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <strong>Range Lowest BID:</strong>
                                                        <span>{products.rangelowbid}</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <strong>Time:</strong>
                                                        <span>{products.time}</span>
                                                    </li>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-lg-7 section-md-t3">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d">
                                                    <h3 className="title-d">Description</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="property-description">
                                            
                                            <p className="description color-text-a no-margin">
                                                {products.description}
                                            </p>
                                        </div>
                                        {/* <div className="row section-t3">
                                            <div className="col-sm-12">
                                                <div className="title-box-d">
                                                    <h3 className="title-d">Amenities</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="amenities-list color-text-a">
                                            <ul className="list-a no-margin">
                                                <li>Balcony</li>
                                                <li>Outdoor Kitchen</li>
                                                <li>Cable Tv</li>
                                                <li>Deck</li>
                                                <li>Tennis Courts</li>
                                                <li>Internet</li>
                                                <li>Parking</li>
                                                <li>Sun Room</li>
                                                <li>Concrete Flooring</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-12">
                                <div className="row section-t3">
                                    <div className="col-sm-12">
                                        <div className="title-box-d">
                                            <h3 className="title-d">Contact Agent</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-4">
                                        <img src={`data:image/png;base64,${products.photo}`}  alt="" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="property-agent">
                                            <h4 className="title-agent">Anabella Geller</h4>
                                            <p className="color-text-a">
                                                Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                                                dui. Quisque velit nisi,
                                                pretium ut lacinia in, elementum id enim.
                                            </p>
                                            <ul className="list-unstyled">
                                                <li className="d-flex justify-content-between">
                                                    <strong>Phone:</strong>
                                                    <span className="color-text-a">(222) 4568932</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Mobile:</strong>
                                                    <span className="color-text-a">777 287 378 737</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Email:</strong>
                                                    <span className="color-text-a">annabella@example.com</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Skype:</strong>
                                                    <span className="color-text-a">Annabela.ge</span>
                                                </li>
                                            </ul>
                                            <div className="socials-a">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-facebook" aria-hidden="true" />
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-twitter" aria-hidden="true" />
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-instagram" aria-hidden="true" />
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-pinterest-p" aria-hidden="true" />
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="#">
                                                            <i className="fa fa-dribbble" aria-hidden="true" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4">
                                        <div className="property-contact">
                                            <form className="form-a" onSubmit={newBidValue}>
                                                <div className="row">
                                                    
                                                    <div className="col-md-12 mb-1">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Your BID *" required onChange={(e)=>{setnewbid(e.target.value)}} />
                                                            {parseInt(products.highbid) < parseInt(newbid) || products.highbid!==""?ischeck=true :ischeck =false}
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-12">
                                                        <button disabled={ischeck? false : true} type="submit" className="btn btn-a">Add BID</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
              )}
        </div>
    )
}
