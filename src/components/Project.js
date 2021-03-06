import React from 'react'
import masthead from "../assets/img/bg-masthead.jpg";
import demo1 from '../assets/img/demo-image-01.jpg';
import demo2 from '../assets/img/demo-image-02.jpg';

function Project() {
    return (
      <>
        {/* <!-- Projects--> */}
        <section className="projects-section bg-light" id="projects">
          <div className="container">
            {/* <!-- Featured Project Row--> */}
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7">
                <img className="img-fluid mb-3 mb-lg-0" src={masthead} alt="" />
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <h4>Sample Project 1</h4>
                  <p className="text-black-50 mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ad tempore, itaque maiores dolor nostrum exercitationem quasi architecto magni eligendi accusamus culpa vel voluptas rem consequuntur dolorum libero quibusdam voluptatibus.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Project One Row--> */}
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div className="col-lg-6">
                <img className="img-fluid" src={demo1} alt="" />
              </div>
              <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">Sample Project 2</h4>
                      <p className="mb-0 text-white-50">
                        An example of where you can put an image of a project,
                        or anything else, along with a description.
                      </p>
                      <hr className="d-none d-lg-block mb-0 ml-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Project Two Row--> */}
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-6">
                <img className="img-fluid" src={demo2} alt="" />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <h4 className="text-white">Sample Project 3</h4>
                      <p className="mb-0 text-white-50">
                        Another example of a project with its respective
                        description. These sections work well responsively as
                        well, try this theme on a small screen!
                      </p>
                      <hr className="d-none d-lg-block mb-0 mr-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Project
