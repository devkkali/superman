import React, { Component } from 'react'

export class Contact extends Component {
render () {
    return (
        <div>
           <div>
  
  {/*================Home Banner Area =================*/}
  <section className="banner_area">
    <div className="banner_inner d-flex align-items-center">
      <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset={0} data-background />
      <div className="container">
        <div className="banner_content text-center">
          <h2>Contact Us</h2>
          <div className="page_link">
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================End Home Banner Area =================*/}
  {/*================Contact Area =================*/}
  <section className="contact_area section_gap">
    <div className="container">
      <div id="mapBox" className="mapBox" style={{width: '100%', height: '420px'}}>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="contact_info">
            <div className="info_item">
              <i className="lnr lnr-home" />
              <h6>California, United States</h6>
              <p>Santa monica bullevard</p>
            </div>
            <div className="info_item">
              <i className="lnr lnr-phone-handset" />
              <h6><a href="#">00 (440) 9865 562</a></h6>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
            <div className="info_item">
              <i className="lnr lnr-envelope" />
              <h6><a href="#">support@colorlib.com</a></h6>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea className="form-control" name="message" id="message" rows={1} placeholder="Enter Message" defaultValue={""} />
              </div>
            </div>
            <div className="col-md-12 text-right">
              <button type="submit" value="submit" className="submit_btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/*================Contact Area =================*/}
  {/*================ start footer Area  =================*/}
  <footer className="footer-area section_gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-3  col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h6>About Agency</h6>
            <p>
              The world has become so fasted that people don’t want to standby reading page of info they
              would much rather
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

</div>

)
}
}

export default Contact    