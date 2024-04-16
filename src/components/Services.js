import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="services">
        <div>
          <Navbar />
        </div>
        <h1 className="text-center p-3 fs-12 fw-bold">Our Services</h1>
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="container">
              <div className="card h-100">
                <center>
                  {" "}
                  <img
                    style={{ width: "250px" }}
                    src="car (1).png"
                    className="card-img-top"
                    alt="..."
                  />
                </center>
                <div className="card-body ">
                  <center>
                    {" "}
                    <h5 className="card-title bg-success p-2 text-white ">
                      Car Service
                    </h5>{" "}
                  </center>
                  <center>
                    {" "}
                    <p className="card-text">
                      Our car services encompass a wide range of offerings
                      designed to keep your vehicle running smoothly and looking
                      its best and we provide comprehensive care for your
                      vehicle.
                    </p>{" "}
                  </center>
                  <br />
                  <center>
                    <Link to="/carbooking">
                      <button type="button" class="btn bg-success text-light">
                        Book a Ride
                      </button>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container">
              <div className="card h-100">
                <center>
                  {" "}
                  <img
                    style={{ width: "250px" }}
                    src="moto.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </center>
                <div className="card-body">
                  <center>
                    {" "}
                    <h5 className="card-title bg-success p-2 text-white">
                      Electric Motorcycle Service
                    </h5>{" "}
                  </center>
                  <center>
                    {" "}
                    <p className="card-text">
                      Our electric motorbike services encompass a comprehensive
                      range of solutions tailored to maintain the efficiency and
                      longevity of your electric-powered ride.
                    </p>{" "}
                  </center>
                  <br />
                  <center>
                    {" "}
                    <Link to="/bikebooking">
                      {" "}
                      <button type="button" class="btn bg-success text-light">
                        Book a Ride
                      </button>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container">
              <div className="card h-100">
                <center>
                  {" "}
                  <img
                    style={{ width: "250px" }}
                    src="bike (1).jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </center>
                <div className="card-body">
                  <center>
                    {" "}
                    <h5 className="card-title bg-success p-2 text-white">
                      Bike Service
                    </h5>
                  </center>
                  <center>
                    {" "}
                    <p className="card-text">
                      Our bicycle service offerings are tailored to cater to the
                      diverse needs of cyclists, ensuring their bikes remain in
                      peak condition for optimal performance and enjoyment.
                    </p>
                  </center>
                  <br />
                  <center>
                    {" "}
                    <Link to="/bicyclebooking">
                      {" "}
                      <button type="button" class="btn bg-success text-light">
                        Book a Ride
                      </button>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
