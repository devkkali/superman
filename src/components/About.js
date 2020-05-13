import React, { Component } from 'react'

export class About extends Component {
render () {
    return (
        <div>
  {/*================Header Menu Area =================*/}
 
  {/*================Home Banner Area =================*/}
  <section className="banner_area">
    <div className="banner_inner d-flex align-items-center">
      <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset={0} data-background />
      <div className="container">
        <div className="banner_content text-center">
          <h2>About Us</h2>
          <div className="page_link">
            <a href="index.html">Home</a>
            <a href="about-us.html">About Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Home Banner Area =================*/}
  {/*================About Area =================*/}
  <section className="about_area section_gap_top">
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
  {/*================Testimonials Area =================*/}
  <section className="testimonials-area section_gap color-bg">
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

export default About