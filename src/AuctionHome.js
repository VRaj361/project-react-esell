import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { SectionLinks } from './components/SectionLinks'


export const AuctionHome = () => {
  return (
    <div>
    <Helmet>
        <link href="../img/favicon.png" rel="icon"/>
        <link href="../img/apple-touch-icon.png" rel="apple-touch-icon"/>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet"/>


        <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>


        <link href="../lib/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="../lib/animate/animate.min.css" rel="stylesheet"/>
        <link href="../lib/ionicons/css/ionicons.min.css" rel="stylesheet"/>
        <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>

        <link href="../css/auctionapp.css" rel="stylesheet"/>
        <script src="../lib/jquery/jquery.min.js"></script>
        <script src="../lib/jquery/jquery-migrate.min.js"></script>
        <script src="../lib/popper/popper.min.js"></script>
        <script src="../lib/bootstrap/js/bootstrap.min.js"></script>
        <script src="../lib/easing/easing.min.js"></script>
        <script src="../lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="../lib/scrollreveal/scrollreveal.min.js"></script>
        
        

        
        <script src="../js/auctionjs.js"></script>
    </Helmet>
    <Precss/>
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
    <div className="intro intro-carousel">
      <div id="carousel" className="owl-carousel owl-theme">
        <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(../img/slide-1.jpg)'}}>
          <div className="overlay overlay-a" />
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="intro-body">
                      <p className="intro-title-top">Doral, Florida
                        <br /> 78345</p>
                      <h1 className="intro-title mb-4">
                        <span className="color-b">204 </span> Mount
                        <br /> Olive Road Two</h1>
                      <p className="intro-subtitle intro-price">
                        <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(../img/slide-2.jpg)'}}>
          <div className="overlay overlay-a" />
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="intro-body">
                      <p className="intro-title-top">Doral, Florida
                        <br /> 78345</p>
                      <h1 className="intro-title mb-4">
                        <span className="color-b">204 </span> Rino
                        <br /> Venda Road Five</h1>
                      <p className="intro-subtitle intro-price">
                        <a href="#"><span className="price-a">rent | $ 12.000</span></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item-a intro-item bg-image" style={{backgroundImage: 'url(../img/slide-3.jpg)'}}>
          <div className="overlay overlay-a" />
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="intro-body">
                      <p className="intro-title-top">Doral, Florida
                        <br /> 78345</p>
                      <h1 className="intro-title mb-4">
                        <span className="color-b">204 </span> Alira
                        <br /> Roan Road One</h1>
                      <p className="intro-subtitle intro-price">
                        <a href="#"><span className="price-a">rent | $ 12.000</span></a>
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
    {/*/ Carousel end /*/}
    {/*/ Property Star /*/}
    <section className="section-property section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest Properties</h2>
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
          <div className="carousel-item-b">
            <div className="card-box-a card-shadow">
              <div className="img-box-a">
                <img src="../img/property-6.jpg" alt="" className="img-a img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-overlay-a-content">
                  <div className="card-header-a">
                    <h2 className="card-title-a">
                      <a href="property-single.html">206 Mount
                        <br /> Olive Road Two</a>
                    </h2>
                  </div>
                  <div className="card-body-a">
                    <div className="price-box d-flex">
                      <span className="price-a">rent | $ 12.000</span>
                    </div>
                    <a href="#" className="link-a">Click here to view
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
                <img src="../img/property-3.jpg" alt="" className="img-a img-fluid" />
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
          </div>
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
    {/*/ News End /*/}
    <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
    
    {/* JavaScript Libraries */}
    {/* Contact Form JavaScript File */}
    {/* Template Main Javascript File */}
  </div>
  )
}
