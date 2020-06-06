import React from 'react'
import '../assets/css/style.css'
import motherboard from '../assets/img/motherboard.jpg'

function About() {
    return (
      <>
        {/* <!-- About--> */}
        <section className="about-section text-center" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-white mb-4">About me</h2>
                <p className="text-white-50">
                  I am a fullstack web developer, a very cooperative worker and always looking for a challenge
                </p>
              </div>
            </div>
            <img className="img-fluid" src={motherboard} alt="" />
          </div>
        </section>
      </>
    );
}

export default About
