import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary ">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Application Program Interface
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-warning fs-5 fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning fs-5 fw-bold"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning fs-5 fw-bold"
                  to="/weather"
                >
                  Weather
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning fs-5 fw-bold"
                  to="/users"
                >
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-warning fs-5 fw-bold"
                  to="/randomusers"
                >
                  Random Users
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/" className="btn btn-outline-warning">
                Logout
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
