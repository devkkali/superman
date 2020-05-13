import React, { Component } from 'react'

export class Home extends Component {
render () {
    return (<div>
       
        {/*================Header Menu Area =================*/}
        {/*================Home Banner Area =================*/}
        <section className="home_banner_area">
          <div className="banner_inner d-flex align-items-center">
            <div className="overlay bg-parallax" data-stellar-ratio={2} data-stellar-vertical-offset={0} data-background />
            {/* <div class="overlay overlay-bg"></div> */}
            <div className="container">
              <div className="banner_content text-center">
                <p className="top-text">Welcome to</p>
                <h1>Radisson</h1>
                <p className="text">If you are looking at blank cassettes on the web, you may be very confused at the difference in
                  price. You may
                  see some for as low as $.17 each.</p>
                <a className="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
                  <img src="img/video-icon.png" className="vdo-btn" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*================End Home Banner Area =================*/}
        {/*================Booking Area =================*/}
        <section className="container">
          <div className="booking_area">
            <form action>
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-6">
                  <div className="booking_item">
                    <p>Check - in</p>
                    <span className="day">15</span>
                    <span className="month">th sep</span>
                    <label htmlFor="CheckIn">
                      <i className="fa fa-angle-down" />
                    </label>
                    <input type="date" className="form-control" name="CheckIn" id="CheckIn" aria-describedby="emailHelp" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-6">
                  <div className="booking_item">
                    <p>Check - out</p>
                    <span className="day">25</span>
                    <span className="month">th sep</span>
                    <label htmlFor="CheckOut">
                      <i className="fa fa-angle-down" />
                    </label>
                    <input type="date" className="form-control" name="CheckOut" id="CheckOut" aria-describedby="emailHelp" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-6">
                  <div className="booking_item">
                    <p>Toatal guests</p>
                    <span className="day">05</span>
                    <span className="month">person</span>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-6 coupon-code">
                  <div className="booking_item">
                    <p className="text-capitalize">
                      <a href="#">Got a Coupon Code?</a>
                    </p>
                    <button type="submit" className="main_btn text-uppercase">check availabity</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/*================End Booking Area =================*/}
        {/*================About Area =================*/}
        <section className="about_area section_gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main_title">
                  <div className="top-part">
                    <p>About Us Our History Mission &amp; Vision</p>
                  </div>
                  <h2>
                    About Us Our History <br />
                    Mission &amp; Vision
                  </h2>
                  <div className="bottom_part">
                    <p>
                      inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                      especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond
                      reproach.
                      inappropriate behavior is often laughed.
                    </p>
                  </div>
                  <a href="#" className="main_btn mt-45">Request Custom Price</a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="video_area" id="video">
                  <img className="img-fluid" src="img/video-1.jpg" alt="" />
                  <div className="overlay overlay-bg" />
                  <a className="popup-youtube" href="https://www.youtube.com/watch?v=VufDd-QL1c0">
                    <img src="img/video-icon-1.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================End About Area =================*/}
        {/* Start Our Room Area */}
        <section className="our_room_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="main_title">
                  <div className="top-part">
                    <p>Our Rooms</p>
                  </div>
                  <h2>Our Rooms</h2>
                  <div className="bottom_part">
                    <p>
                      We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day to day,
                      also asks us to remain physically young. Young at heart,
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="room_left">
                  <img className="img-fluid" src="img/room/r1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="owl-carousel owl-room">
                  <div className="room_right">
                    <h1 className="price">
                      <i className="fa fa-dollar" />250<span>/night</span>
                    </h1>
                    <h1 className="type">
                      Double Deluxe Room
                    </h1>
                    <p>
                      We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day to day,
                      also
                      asks us to remain physically young. Young at heart,
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-5">
                        <ul>
                          <li>Air Condition</li>
                          <li>Car Parking</li>
                          <li>Swimming Pool</li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-5">
                        <ul>
                          <li>Restaurant &amp; Bar</li>
                          <li>Vehicle Rental</li>
                          <li>Complementary Meal</li>
                        </ul>
                      </div>
                    </div>
                    <a href="#" className="main_btn">Book Now</a>
                  </div>
                  <div className="room_right">
                    <h1 className="price">
                      <i className="fa fa-dollar" />250<span>/night</span>
                    </h1>
                    <h1 className="type">
                      Double Deluxe Room
                    </h1>
                    <p>
                      We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day to day,
                      also
                      asks us to remain physically young. Young at heart,
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-5">
                        <ul>
                          <li>Air Condition</li>
                          <li>Car Parking</li>
                          <li>Swimming Pool</li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-5">
                        <ul>
                          <li>Restaurant &amp; Bar</li>
                          <li>Vehicle Rental</li>
                          <li>Complementary Meal</li>
                        </ul>
                      </div>
                    </div>
                    <a href="#" className="main_btn">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Our Room Area */}
        {/*================Testimonials Area =================*/}
        <section className="testimonials-area section_gap_top color-bg">
          <div className="container">
            <div className="text-center">
              <img className="quote-img" src="img/quote.png" alt="" />
            </div>
            <div className="testi-slider owl-carousel" data-slider-id={1}>
              <div className="item">
                <div className="testi-item">
                  <h4>Fanny Spencer</h4>
                  <ul className="list">
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                  <div className="wow fadeIn" data-wow-duration="1s">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it,
                      you travel
                      across her face <br /> and She is the host to your journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-item">
                  <h4>Fanny Spencer</h4>
                  <ul className="list">
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                  <div className="wow fadeIn" data-wow-duration="1s">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it,
                      you travel
                      across her face <br /> and She is the host to your journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-item">
                  <h4>Fanny Spencer</h4>
                  <ul className="list">
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                  <div className="wow fadeIn" data-wow-duration="1s">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it,
                      you travel
                      across her face <br /> and She is the host to your journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testi-item">
                  <img src="img/quote.png" alt="" />
                  <h4>Fanny Spencer</h4>
                  <ul className="list">
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                    <li><a href="#"><i className="fa fa-star" /></a></li>
                  </ul>
                  <div className="wow fadeIn" data-wow-duration="1s">
                    <p>
                      As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it,
                      you travel
                      across her face <br /> and She is the host to your journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-thumbs d-flex justify-content-center" data-slider-id={1}>
              <div className="owl-thumb-item">
                <div>
                  <img className="img-fluid" src="img/testimonial/t1.png" alt="" />
                </div>
                <div className="overlay overlay-grad" />
              </div>
              <div className="owl-thumb-item">
                <div>
                  <img className="img-fluid" src="img/testimonial/t2.png" alt="" />
                </div>
                <div className="overlay overlay-grad" />
              </div>
              <div className="owl-thumb-item">
                <div>
                  <img className="img-fluid" src="img/testimonial/t3.png" alt="" />
                </div>
                <div className="overlay overlay-grad" />
              </div>
              <div className="owl-thumb-item">
                <div>
                  <img className="img-fluid" src="img/testimonial/t4.png" alt="" />
                </div>
                <div className="overlay overlay-grad" />
              </div>
            </div>
          </div>
        </section>
        {/*================End Testimonials Area =================*/}
        {/*================Latest Blog Area =================*/}
        <section className="latest_blog_area section_gap color-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main_title">
                  <p className="text-uppercase">Our Blog Posts</p>
                  <h2>
                    Our Blog Posts
                  </h2>
                  <p>
                    nappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                    especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
                    inappropriate behavior is often laughed.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="single-recent-blog col-lg-4 col-md-6">
                <div className="thumb">
                  <img className="f-img img-fluid mx-auto" src="img/b1.jpg" alt="" />
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <a href="#" className="main_btn">Travel</a>
                  </div>
                  <div className="meta">
                    <span>30th Sep, 2018</span>
                    <span>02 Comments</span>
                  </div>
                </div>
                <a href="#">
                  <h4>Low Cost Advertising let us know
                    the side effect of printing</h4>
                </a>
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer hears tales of
                  diamonds and begins dreaming of vast riches. He sells his farm and hikes off over the horizon never heard.
                </p>
              </div>
              <div className="single-recent-blog col-lg-4 col-md-6">
                <div className="thumb">
                  <img className="f-img img-fluid mx-auto" src="img/b2.jpg" alt="" />
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <a href="#" className="main_btn">Travel</a>
                  </div>
                  <div className="meta">
                    <span>30th Sep, 2018</span>
                    <span>02 Comments</span>
                  </div>
                </div>
                <a href="#">
                  <h4>Low Cost Advertising let us know
                    the side effect of printing</h4>
                </a>
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer hears tales of
                  diamonds and begins dreaming of vast riches. He sells his farm and hikes off over the horizon never heard.
                </p>
              </div>
              <div className="single-recent-blog col-lg-4 col-md-6">
                <div className="thumb">
                  <img className="f-img img-fluid mx-auto" src="img/b3.jpg" alt="" />
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <a href="#" className="main_btn">Travel</a>
                  </div>
                  <div className="meta">
                    <span>30th Sep, 2018</span>
                    <span>02 Comments</span>
                  </div>
                </div>
                <a href="#">
                  <h4>Low Cost Advertising let us know
                    the side effect of printing</h4>
                </a>
                <p>
                  Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer hears tales of
                  diamonds and begins dreaming of vast riches. He sells his farm and hikes off over the horizon never heard.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*================End Latest Blog Area =================*/}
        {/*================ start footer Area  =================*/}
        <footer className="footer-area section_gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-3  col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h6>About Agency</h6>
                  <p>
                    The world has become so fasted that people don’t want to standby reading page of info they would much rather
                    look at a presentation and understand message.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h6>Quick Links</h6>
                  <div className="row">
                    <ul className="col footer-nav">
                      <li><a href="#">Sitemaps</a></li>
                      <li><a href="#">Categories</a></li>
                      <li><a href="#">Archives</a></li>
                      <li><a href="#">Advertise</a></li>
                      <li><a href="#">Ad Choice</a></li>
                    </ul>
                    <ul className="col footer-nav">
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Help Center</a></li>
                      <li><a href="#">Newsletters</a></li>
                      <li><a href="#">Feedback</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h6>Newsletter</h6>
                  <p>For business professionals caught between high OEM price mediocre print and graphic.</p>
                  <div className id="mc_embed_signup">
                    <form target="_blank" noValidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="form-inline">
                      <div className="d-flex flex-row">
                        <input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '" required type="email" />
                        <button className="click-btn btn btn-default"><i className="lnr lnr-location" aria-hidden="true" /></button>
                        <div style={{position: 'absolute', left: '-5000px'}}>
                          <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
                        </div>
                        {/* <div class="col-lg-4 col-md-4">
                                              <button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
                                          </div>  */}
                      </div>
                      <div className="info" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-3  col-md-6 col-sm-6">
                <div className="single-footer-widget mail-chimp">
                  <h6 className="mb-20">Instafeed</h6>
                  <ul className="instafeed d-flex flex-wrap">
                    <li><img src="img/instagram/Image-01.jpg" alt="" /></li>
                    <li><img src="img/instagram/Image-02.jpg" alt="" /></li>
                    <li><img src="img/instagram/Image-03.jpg" alt="" /></li>
                    <li><img src="img/instagram/Image-04.jpg" alt="" /></li>
                    <li><img src="img/instagram/Image-05.jpg" alt="" /></li>
                    <li><img src="img/instagram/Image-06.jpg" alt="" /></li>
                    <li><img src="img/instagram/Image-07.jpg" alt="" /></li>
                    <li><img src="img/instagram/Image-08.jpg" alt="" /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
              <div>
                <p className="footer-text m-0">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
              <div className="footer-social d-flex align-items-center">
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-dribbble" /></a>
                <a href="#"><i className="fa fa-behance" /></a>
              </div>
            </div>
          </div>
        </footer>
        {/*================ End footer Area  =================*/}
      </div>
      




    )
}
}

export default Home