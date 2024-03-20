import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="home">
        <div className="container text-warning">
          <div className="row">
            <div className="col-md-4 ">
              <div>
                <h1 className="fs-15 fw-bold"> API Defination </h1>
                <p className="fw-bold fs-12">
                  An API is a set of programming code that enables data
                  transmission between one software product and another. It also
                  contains the terms of this data exchange.
                </p>
              </div>
            </div>
            <div className="col-md-5"></div>
            <div className="col-md-3 ">
              <div>
                <h1 className="fs-8 fw-bold"> Applications</h1>
                <ul className="fs-12 fw-bold">
                  <li>Web Development</li>
                  <li>Data Analysis and Visualization</li>
                  <li>Mobile App Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
