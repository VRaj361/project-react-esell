import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import axios from 'axios'
import PreLoading from './components/PreLoading'

import { border } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'

export const AuctionHome = () => {
  const [products, setproducts] = useState()
  // const res=useGetAllProducts()
  // function loadData(){
  //     res.mutate()
  // }
  const [isloading, setisloading] = useState(true)
  const [iserror, setiserror] = useState(false)
  const [obj, setobj] = useState(null)
  const navigate=useNavigate()
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
  useEffect(() => {

    const fetchData = async () => {
      setiserror(false);
      try {
        const response = await axios('https://cartbuddy-api.herokuapp.com/getauction');
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

  return (
    <div>

      <Navbar />

      {/* <div className="click-closed" />
    
    <div className="box-collapse">
      <div className="title-box-d">
        <h3 className="title-d">Search Property</h3>
      </div>
      <span className="close-box-collapse right-boxed ion-ios-close" />
      <div className="box-collapse-wrap form">
        <form className="form-a">
          <div className="row">
            <div className="col-md-12 mb-2">
              <div className="form-group">
                <label htmlFor="Type">Keyword</label>
                <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword" />
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="Type">Type</label>
                <select className="form-control form-control-lg form-control-a" id="Type">
                  <option>All Type</option>
                  <option>For Rent</option>
                  <option>For Sale</option>
                  <option>Open House</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <select className="form-control form-control-lg form-control-a" id="city">
                  <option>All City</option>
                  <option>Alabama</option>
                  <option>Arizona</option>
                  <option>California</option>
                  <option>Colorado</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="bedrooms">Bedrooms</label>
                <select className="form-control form-control-lg form-control-a" id="bedrooms">
                  <option>Any</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="garages">Garages</label>
                <select className="form-control form-control-lg form-control-a" id="garages">
                  <option>Any</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="bathrooms">Bathrooms</label>
                <select className="form-control form-control-lg form-control-a" id="bathrooms">
                  <option>Any</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <div className="form-group">
                <label htmlFor="price">Min Price</label>
                <select className="form-control form-control-lg form-control-a" id="price">
                  <option>Unlimite</option>
                  <option>$50,000</option>
                  <option>$100,000</option>
                  <option>$150,000</option>
                  <option>$200,000</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-b">Search Property</button>
            </div>
          </div>
        </form>
      </div>
    </div>
   
    
    <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
      <div className="container">
        <button type="button" className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
          <span className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
    </nav>
    */}
      {/*/ Carousel Star /*/}

      {iserror && <div>Something went wrong ...</div>}

      {isloading ? (
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

          <div className="intro intro-carousel">
            <div id="carousel" className="owl-carousel owl-theme">
              <div className="carousel-item-a intro-item bg-image" style={{ backgroundImage: 'url(../img/girl1.png)' }}>
                <div className="overlay overlay-a" />
                <div className="intro-content display-table">
                  <div className="table-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="intro-body">
                            <p className="intro-title-top">Painting
                              <br /> </p>
                            <h1 className="intro-title mb-4">
                              <span className="color-b">Artists </span>
                              <br /> Painting, Pictures and Many more</h1>
                            <p className="intro-subtitle intro-price">
                              <a href="#"><span className="price-a">Starts with just Rs. 499</span></a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item-a intro-item bg-image" style={{ backgroundImage: 'url(../img/girl2.png)' }}>
                <div className="overlay overlay-a" />
                <div className="intro-content display-table">
                  <div className="table-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="intro-body" >
                            <p className="intro-title-top">Currancy
                              <br /> </p>
                            <h1 className="intro-title mb-4">
                              <span className="color-b">Coins </span>
                              <br />Historical Notes </h1>
                            <p className="intro-subtitle intro-price">
                              <a href="#"><span className="price-a">Starts with just Rs. 999</span></a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item-a intro-item bg-image" style={{ backgroundImage: 'url(../img/girl3.png)' }}>
                <div className="overlay overlay-a" />
                <div className="intro-content display-table">
                  <div className="table-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="intro-body">
                            <p className="intro-title-top">Since 1990
                              <br /> </p>
                            <h1 className="intro-title mb-4">
                              <span className="color-b">Sports </span>
                              <br /> Ball,Bat and Many More</h1>
                            <p className="intro-subtitle intro-price">
                              <a href="#"><span className="price-a">Starts with just Rs. 9999</span></a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section-property section-t8">
            <div className="container">
              {token !== "" ?

                <div className="row">
                  <div className="col-md-12">
                    <div className="title-wrap d-flex justify-content-between">
                      <div className="title-box" style={{ textAlign: 'center' }}>
                        <div className="product-m__add-cart">
                          <Link to={`/addauction`} className="btn--e-transparent-brand-b-2" style={{ padding: "10px" }} >Add To Auction Product</Link></div>
                      </div>
                      <div className="title-box" style={{ textAlign: 'center' }}>
                        <div className="product-m__add-cart">
                          <Link to={`/auctionusers/${obj.userid}`} className="btn--e-transparent-brand-b-2" style={{ padding: "10px" }} >Show My Auction Product</Link></div>
                      </div>
                    </div>
                  </div>
                </div> : ""}

              <div className="row">
                <div className="col-md-12">
                  <div className="title-wrap d-flex justify-content-between">
                    <div className="title-box">
                      <h2 className="title-a">Latest Paintings</h2>
                    </div>
                    <div className="title-link">
                      <a href="property-grid.html">All Property
                        <span className="ion-ios-arrow-forward" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="property-carousel" className="owl-carousel owl-theme">
                {products.map((e) => {
                  return (
                    <div className="carousel-item-b">
                      <div className="card-box-a card-shadow">
                        <div className="img-box-a">
                          <img src={`data:image/png;base64,${e.photo}`} alt="" className="img-a img-fluid" />
                        </div>
                        <div className="card-overlay">
                          <div className="card-overlay-a-content">
                            <div className="card-header-a">
                              <h2 className="card-title-a">
                                <a href="property-single.html">
                                  {e.productname}</a>
                              </h2>
                            </div>
                            <div className="card-body-a">
                              <div className="price-box d-flex">
                                <span className="price-a">Current BID:Rs. {e.bid}</span>
                              </div>
                              <Link to={`/auctionproduct/${e.auctionid}`} className="link-a">Click here to view
                                <span className="ion-ios-arrow-forward" />
                              </Link>
                            </div>
                            <div className="card-footer-a">
                              <ul className="card-info d-flex justify-content-around">
                              <li>
                                <h4 className="card-info-title">Estimation</h4>
                                <span>Rs. {e.rangelowbid} to Rs. {e.rangehighbid}
                                
                                </span>
                              </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}


                {/*<div className="carousel-item-b">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img src="../img/img12.jpeg" alt="" className="img-a img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            <a href="property-single.html">157 West
                              <br /> Central Park</a>
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">rent | $ 12.000</span>
                          </div>
                          <a href="property-single.html" className="link-a">Click here to view
                            <span className="ion-ios-arrow-forward" />
                          </a>
                        </div>
                        <div className="card-footer-a">
                          <ul className="card-info d-flex justify-content-around">
                            <li>
                              <h4 className="card-info-title">Estimation</h4>
                              <span>Rs. 40000 to Rs. 60000
                              
                              </span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Area</h4>
                              <span>340m
                                <sup>2</sup>
                              </span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Beds</h4>
                              <span>2</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Baths</h4>
                              <span>4</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Garages</h4>
                              <span>1</span>
                            </li> 
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item-b">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img src="../img/property-7.jpg" alt="" className="img-a img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            <a href="property-single.html">245 Azabu
                              <br /> Nishi Park let</a>
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">rent | $ 12.000</span>
                          </div>
                          <a href="property-single.html" className="link-a">Click here to view
                            <span className="ion-ios-arrow-forward" />
                          </a>
                        </div>
                        <div className="card-footer-a">
                          <ul className="card-info d-flex justify-content-around">
                            <li>
                              <h4 className="card-info-title">Area</h4>
                              <span>340m
                                <sup>2</sup>
                              </span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Beds</h4>
                              <span>2</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Baths</h4>
                              <span>4</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Garages</h4>
                              <span>1</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item-b">
                  <div className="card-box-a card-shadow">
                    <div className="img-box-a">
                      <img src="../img/property-10.jpg" alt="" className="img-a img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-overlay-a-content">
                        <div className="card-header-a">
                          <h2 className="card-title-a">
                            <a href="property-single.html">204 Montal
                              <br /> South Bela Two</a>
                          </h2>
                        </div>
                        <div className="card-body-a">
                          <div className="price-box d-flex">
                            <span className="price-a">rent | $ 12.000</span>
                          </div>
                          <a href="property-single.html" className="link-a">Click here to view
                            <span className="ion-ios-arrow-forward" />
                          </a>
                        </div>
                        <div className="card-footer-a">
                          <ul className="card-info d-flex justify-content-around">
                            <li>
                              <h4 className="card-info-title">Area</h4>
                              <span>340m
                                <sup>2</sup>
                              </span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Beds</h4>
                              <span>2</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Baths</h4>
                              <span>4</span>
                            </li>
                            <li>
                              <h4 className="card-info-title">Garages</h4>
                              <span>1</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>*/}

              </div>
            </div>
          </section>

          {/*/ Property End /*/}
          {/*/ News Star /*/}
          <section className="section-news section-t8">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-wrap d-flex justify-content-between">
                    <div className="title-box">
                      <h2 className="title-a">Latest News</h2>
                    </div>
                    <div className="title-link">
                      <a href="blog-grid.html">All News
                        <span className="ion-ios-arrow-forward" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="new-carousel" className="owl-carousel owl-theme">
                <div className="carousel-item-c">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="../img/post-2.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="#" className="category-b">House</a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <a href="blog-single.html">House is comming
                              <br /> new</a>
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">18 Sep. 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item-c">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="../img/post-5.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="#" className="category-b">Travel</a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <a href="blog-single.html">Travel is comming
                              <br /> new</a>
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">18 Sep. 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item-c">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="../img/post-7.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="#" className="category-b">Park</a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <a href="blog-single.html">Park is comming
                              <br /> new</a>
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">18 Sep. 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item-c">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="../img/post-3.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="#" className="category-b">Travel</a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <a href="#">Travel is comming
                              <br /> new</a>
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">18 Sep. 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </>
      )}
      {/*/ News End /*/}
      {/* <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a> */}

      {/* JavaScript Libraries */}
      {/* Contact Form JavaScript File */}
      {/* Template Main Javascript File */}

    </div>

  )
}
