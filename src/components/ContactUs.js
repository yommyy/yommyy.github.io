import React from 'react'
import '../assets/css/style.css'

function ContactUs() {
    return (
      <>
        {/* <!-- Contact--> */}
        <section className="contact-section bg-black">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fa fa-map-marked-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Address</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      Blk 28 Lot22b Silcas Village, Brgy. San Francisco, Halang, Biñan City, Laguna 
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fa fa-envelope text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Email</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">
                      <a href="#!">jvillanueva2698@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fa fa-mobile-alt text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Phone</h4>
                    <hr className="my-4" />
                    <div className="small text-black-50">+(639) 939 7811 704</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social d-flex justify-content-center">
              <a className="mx-2" href="#!">
                <i className="fa fa-twitter"></i>
              </a>
              <a className="mx-2" href="#!">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a className="mx-2" href="#!">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </>
    );
}

export default ContactUs
