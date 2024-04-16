import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4" // Corrected to "Slide 3" for the third slide
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5" // Corrected to "Slide 3" for the third slide
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="slide4.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "650px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-warning fs-12 fw-bold">Greenary World</h5>
              <p className="text-white">
                Immerse in lush landscapes and eco-friendly initiatives
                promoting sustainability, connecting communities toward a
                greener future for generations.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="public.avif"
              className="d-block w-100"
              alt="..."
              style={{ height: "650px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-12 fw-bold">
                Plant the Trees and Save the Lifes
              </h5>
              <p>
                Join hands in planting trees, nurturing life and preserving our
                planet's delicate balance for a healthier, sustainable future..
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="service.webp"
              className="d-block w-100"
              alt="..."
              style={{ height: "650px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Green environment</h5>
              <p>
                Step into a world of sustainable living, where a green
                environment thrives, fostering cleaner air, healthier
                ecosystems, and a brighter future for generations to come..
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="green.webp"
              className="d-block w-100"
              alt="..."
              style={{ height: "650px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-12 fw-bold">
                Plant the Trees and Save the Lifes
              </h5>
              <p className="text-info">
                Join hands in planting trees, nurturing life and preserving our
                planet's delicate balance for a healthier, sustainable future..
              </p>{" "}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="world-environment.png"
              className="d-block w-100"
              alt="..."
              style={{ height: "650px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Beatiful World with Greenary</h5>
              <p>
                Embrace the beauty of a verdant world, where lush greenery
                harmonizes with the environment, creating a picturesque
                landscape for all to enjoy..
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
          style={{ backgroundColor: "transparent", border: "none" }} // Add custom style for transparency
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
          style={{ backgroundColor: "transparent", border: "none" }} // Add custom style for transparency
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
