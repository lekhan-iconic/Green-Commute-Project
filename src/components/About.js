import React from "react";
import Navbar from "./Navbar.js";

function About() {
  return (
    <>
      <Navbar />
      <div className="abouts">
        <h1 className="text-center p-3 fs-12 fw-bold">About Us</h1>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="card">
                <img src="aboutcard.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title fs-12 fw-bold ">
                    Green Commute Initiative
                  </h5>
                  <p class="card-text text-center">
                    The Green Commute Initiative is our flagship program aimed
                    at reducing carbon emissions by promoting eco-friendly
                    commuting options such as cycling, walking, and carpooling.
                  </p>
                  <a href="#" class="btn btn-success">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <img src="slide4.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title fs-12 fw-bold">
                    Sustainable Transportation Solutions
                  </h5>
                  <p class="card-text">
                    Our sustainable transportation solutions focus on innovative
                    ways to reduce traffic congestion and promote cleaner modes
                    of transportation. Discover how we're revolutionizing urban
                    mobility.
                  </p>
                  <a href="#" class="btn btn-success">
                    Explore Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <img src="aboutcards.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title fs-12 fw-bold">
                    Community Engagement Programs
                  </h5>
                  <p class="card-text text-left">
                    Our community engagement programs empower individuals and
                    communities to embrace sustainable commuting habits. Get
                    involved in our initiatives and make a positive impact on
                    the environment.
                  </p>
                  <a href="#" class="btn btn-success">
                    Join Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
