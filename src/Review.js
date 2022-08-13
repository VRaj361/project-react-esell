import React,{useState,useEffect} from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Precss } from './components/Precss'
import { Prejs } from './components/Prejs'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PreLoading from './components/PreLoading'
export const Review = () => {
    const [products, setproducts] = useState()
    
    const [isloading, setisloading] = useState(true)
    const [iserror, setiserror] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            setiserror(false);
            try {
                const response = await axios('http://localhost:9999/getreviews');
                // console.log("data-->"+JSON.stringify(response.data[0].photo));
                console.log(response)
                if (response !== undefined) {
                    setproducts(response.data);
                    
                    setisloading(false)
                }
            } catch (error) {
                setiserror(true);
            }

        };
        fetchData()


    }, [])
  return (
    <div>
      <Precss />
      <Navbar />
      

      {isloading ? (
          <PreLoading />
      ) : (
      <div className="app-content">
        {/*====== Section 1 ======*/}
        <div className="u-s-p-y-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12">

                <div className="col-lg-12">
                  <div className="load-more">
                    {JSON.parse(sessionStorage.getItem("data"))!==null?<Link className="btn btn--e-brand custom_btn " to={'/addreview'}>Add Review</Link>:null}
                  </div>
                </div>
                <div className="blog-w-master">
                  <div className="u-s-m-b-60">
                    <div className="blog-w">
                      <span className="blog-w__h">SEARCH</span>
                      <form className="blog-search-form">
                        <label htmlFor="post-search" />
                        <input className="input-text input-text--primary-style" type="text" id="post-search" placeholder="Search" />
                        <button className="btn btn--icon fas fa-search" type="submit" /></form>
                    </div>
                  </div>
                  <div className="u-s-m-b-60">
                    <div className="blog-w">
                      <span className="blog-w__h">CATEGORIES</span>
                      <ul className="blog-w__list">
                        <li>
                          <a href="blog-left-sidebar.html">Corporate</a></li>
                        <li>
                          <a href="blog-left-sidebar.html">Creative</a></li>
                        <li>
                          <a href="blog-left-sidebar.html">Design</a></li>
                        <li>
                          <a href="blog-left-sidebar.html">News</a></li>
                        <li>
                          <a href="blog-left-sidebar.html">Photography</a></li>
                      </ul>
                    </div>
                  </div>



                  <div>
                    <div className="blog-w">
                      <span className="blog-w__h">TAGS</span>
                      <div className="blog-t-w">
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Dresses</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Shirts &amp; Tops</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Polo Shirts</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Sweaters</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Blazers</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Vests</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Jackets</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12">

                <div className="bp u-s-m-b-30">
                  <div className="bp__wrap">
                    {/* <div className="bp__thumbnail">
                      
                      <div className="slider-fouc">
                        <div className="owl-carousel post-gallery">
                          <div>
                            <a href="blog-detail.html">
                              <img className="u-img-fluid" src="images/blog/post-1.jpg" alt="" /></a></div>
                          <div>
                            <a href="blog-detail.html">
                              <img className="u-img-fluid" src="images/blog/post-2.jpg" alt="" /></a></div>
                          <div>
                            <a href="blog-detail.html">
                              <img className="u-img-fluid" src="images/blog/post-3.jpg" alt="" /></a></div>
                        </div>
                      </div>
                      
                    </div> */}
                    {products.map((product)=>{
                      return(
                        <div className="bp__info-wrap">
                        <div className="bp__stat">
                          <span className="bp__stat-wrap">
                            <span className="bp__publish-date">
                              <a href="blog-left-sidebar.html">
                                <span>{product.date}</span></a></span></span>
                          <span className="bp__stat-wrap">
                            <span className="bp__author">
                              <a href="blog-left-sidebar.html">{product.name}</a></span></span>
                          {/* <span className="bp__stat-wrap">
                            <span className="bp__comment">
                              <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                                <span>16</span></a></span>
                              </span> */}
                          <span className="bp__stat-wrap">
                            {/* <span className="bp__category">
                              <a href="blog-left-sidebar.html">Drawing</a>
                              <a href="blog-left-sidebar.html">Design</a>
                              <a href="blog-left-sidebar.html">Illustrator</a></span>*/}
                            </span></div> 
                        <span className="bp__h1">
                          <a href="blog-detail.html">{product.title}</a></span>
                        {/* <span className="bp__h2">A post with the gallery</span> */}
                        <div className="blog-t-w">
                          {/* {product.keywords.split(' ').map((e)=>{
                            <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">{e}</a>
                          })} */}
                          {product.keywords.split(" ").map((e)=>{
                            return(
                              <a className="gl-tag btn--e-transparent-hover-brand-b-2" >{e}</a>
                            )
                          })}
                          
                        </div>
                        <p className="bp__p">{product.description}</p>
                        <div className="gl-l-r">
                          <div>
                            {/* <span className="bp__read-more">
                              <a href="blog-detail.html">READ MORE</a></span> */}
                            </div>
                          <ul className="bp__social-list">
                            <li>
                              <a className="s-fb--color" href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li>
                              <a className="s-tw--color" href="#"><i className="fab fa-twitter" /></a></li>
                            <li>
                              <a className="s-insta--color" href="#"><i className="fab fa-instagram" /></a></li>
                            <li>
                              <a className="s-wa--color" href="#"><i className="fab fa-whatsapp" /></a></li>
                            <li>
                              <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g" /></a></li>
                          </ul>
                        </div>
                      </div>
                      )
                    })}
                      
                  </div>
                </div>

                {/* audio video slider 
                <div className="bp u-s-m-b-30">
                  <div className="bp__wrap">
                    <div className="bp__thumbnail">
                      
                      <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/532448574&color=%23333333&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
                      
                    </div>
                    <div className="bp__info-wrap">
                      <div className="bp__stat">
                        <span className="bp__stat-wrap">
                          <span className="bp__publish-date">
                            <a href="blog-left-sidebar.html">
                              <span>25 April 2018</span></a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__author">
                            <a href="blog-left-sidebar.html">John</a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__comment">
                            <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                              <span>99</span></a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__category">
                            <a href="blog-left-sidebar.html">Soundcloud</a>
                            <a href="blog-left-sidebar.html">Lyrics</a></span></span></div>
                      <span className="bp__h1">
                        <a href="blog-detail.html">EDM is only dance-floor oriented it has no emotions</a></span>
                      <span className="bp__h2">A post with the embed audio</span>
                      <div className="blog-t-w">
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">EDM</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Trance</a></div>
                      <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      <div className="gl-l-r">
                        <div>
                          <span className="bp__read-more">
                            <a href="blog-detail.html">READ MORE</a></span></div>
                        <ul className="bp__social-list">
                          <li>
                            <a className="s-fb--color" href="#"><i className="fab fa-facebook-f" /></a></li>
                          <li>
                            <a className="s-tw--color" href="#"><i className="fab fa-twitter" /></a></li>
                          <li>
                            <a className="s-insta--color" href="#"><i className="fab fa-instagram" /></a></li>
                          <li>
                            <a className="s-wa--color" href="#"><i className="fab fa-whatsapp" /></a></li>
                          <li>
                            <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bp u-s-m-b-30">
                  <div className="bp__wrap">
                    <div className="bp__thumbnail">
                      
                      <audio controls>
                        <source src="audio/1.mp3" /></audio>
                      
                    </div>
                    <div className="bp__info-wrap">
                      <div className="bp__stat">
                        <span className="bp__stat-wrap">
                          <span className="bp__publish-date">
                            <a href="blog-left-sidebar.html">
                              <span>25 June 2018</span></a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__author">
                            <a href="blog-left-sidebar.html">Doe</a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__comment">
                            <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                              <span>15</span></a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__category">
                            <a href="blog-left-sidebar.html">Genre</a>
                            <a href="blog-left-sidebar.html">Song</a></span></span></div>
                      <span className="bp__h1">
                        <a href="blog-detail.html">Pop Genre only focusing on stupidity</a></span>
                      <span className="bp__h2">A post with the audio</span>
                      <div className="blog-t-w">
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Pop</a></div>
                      <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      <div className="gl-l-r">
                        <div>
                          <span className="bp__read-more">
                            <a href="blog-detail.html">READ MORE</a></span></div>
                        <ul className="bp__social-list">
                          <li>
                            <a className="s-fb--color" href="#"><i className="fab fa-facebook-f" /></a></li>
                          <li>
                            <a className="s-tw--color" href="#"><i className="fab fa-twitter" /></a></li>
                          <li>
                            <a className="s-insta--color" href="#"><i className="fab fa-instagram" /></a></li>
                          <li>
                            <a className="s-wa--color" href="#"><i className="fab fa-whatsapp" /></a></li>
                          <li>
                            <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bp u-s-m-b-30">
                  <div className="bp__wrap">
                    <div className="bp__thumbnail">
                      
                      <div className="post-video-block">
                        <a className="post-video-link" /><video className="post-video" src="video/video-sample.mp4" poster="video/video-thumbnail.jpg" /></div>
                      
                    </div>
                    <div className="bp__info-wrap">
                      <div className="bp__stat">
                        <span className="bp__stat-wrap">
                          <span className="bp__publish-date">
                            <a href="blog-left-sidebar.html">
                              <span>25 July 2018</span></a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__author">
                            <a href="blog-left-sidebar.html">Doe</a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__comment">
                            <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                              <span>56</span></a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__category">
                            <a href="blog-left-sidebar.html">Video</a>
                            <a href="blog-left-sidebar.html">Camera</a></span></span></div>
                      <span className="bp__h1">
                        <a href="blog-detail.html">Save your movement on a camera</a></span>
                      <span className="bp__h2">A post with the video</span>
                      <div className="blog-t-w">
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Camera</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Recording</a></div>
                      <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      <div className="gl-l-r">
                        <div>
                          <span className="bp__read-more">
                            <a href="blog-detail.html">READ MORE</a></span></div>
                        <ul className="bp__social-list">
                          <li>
                            <a className="s-fb--color" href="#"><i className="fab fa-facebook-f" /></a></li>
                          <li>
                            <a className="s-tw--color" href="#"><i className="fab fa-twitter" /></a></li>
                          <li>
                            <a className="s-insta--color" href="#"><i className="fab fa-instagram" /></a></li>
                          <li>
                            <a className="s-wa--color" href="#"><i className="fab fa-whatsapp" /></a></li>
                          <li>
                            <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bp">
                  <div className="bp__wrap">
                    <div className="bp__thumbnail">
                      
                      <iframe src="https://www.youtube.com/embed/qKqSBm07KZk" allowFullScreen />
                      
                    </div>
                    <div className="bp__info-wrap">
                      <div className="bp__stat">
                        <span className="bp__stat-wrap">
                          <span className="bp__publish-date">
                            <a href="blog-left-sidebar.html">
                              <span>25 August 2018</span></a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__author">
                            <a href="blog-left-sidebar.html">John</a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__comment">
                            <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
                              <span>4</span></a></span></span>
                        <span className="bp__stat-wrap">
                          <span className="bp__category">
                            <a href="blog-left-sidebar.html">Youtube</a>
                            <a href="blog-left-sidebar.html">Videos</a></span></span></div>
                      <span className="bp__h1">
                        <a href="blog-detail.html">Oh No! 1 Trillion Videos</a></span>
                      <span className="bp__h2">A post with the embed video</span>
                      <div className="blog-t-w">
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Recording</a>
                        <a className="gl-tag btn--e-transparent-hover-brand-b-2" href="blog-left-sidebar.html">Freetime</a></div>
                      <p className="bp__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                      <div className="gl-l-r">
                        <div>
                          <span className="bp__read-more">
                            <a href="blog-detail.html">READ MORE</a></span></div>
                        <ul className="bp__social-list">
                          <li>
                            <a className="s-fb--color" href="#"><i className="fab fa-facebook-f" /></a></li>
                          <li>
                            <a className="s-tw--color" href="#"><i className="fab fa-twitter" /></a></li>
                          <li>
                            <a className="s-insta--color" href="#"><i className="fab fa-instagram" /></a></li>
                          <li>
                            <a className="s-wa--color" href="#"><i className="fab fa-whatsapp" /></a></li>
                          <li>
                            <a className="s-gplus--color" href="#"><i className="fab fa-google-plus-g" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div> 
                </div>*/}
                {/* <nav className="post-center-wrap u-s-p-y-60">
                  
                  <ul className="blog-pg">
                    <li className="blog-pg--active">
                      <a href="blog-left-sidebar.html">1</a></li>
                    <li>
                      <a href="blog-left-sidebar.html">2</a></li>
                    <li>
                      <a href="blog-left-sidebar.html">3</a></li>
                    <li>
                      <a href="blog-left-sidebar.html">4</a></li>
                    <li>
                      <a className="fas fa-angle-right" href="blog-left-sidebar.html" /></li>
                  </ul>
                  
                </nav> */}
              </div>
            </div>
          </div>
        </div>
        {/*====== End - Section 1 ======*/}
      </div>)}
      {/*====== End - App Content ======*/}
      <Footer />
      <Prejs />
    </div>
  )
}
