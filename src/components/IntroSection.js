import React from 'react'
import '../assets/css/style.css'

function IntroSection() {
    return (
      <>
        {/* <!-- Masthead--> */}
        <header className="masthead">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <h1 className="mx-auto my-0 text-uppercase">Welcome To My Portfolio</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                I am a fullstack web developer, seeking a challenge to the technical world of IT.
              </h2>
              <a className="btn btn-primary js-scroll-trigger" href="#about">
                Get Started
              </a>
            </div>
          </div>
        </header>
      </>
    );
}

export default IntroSection
