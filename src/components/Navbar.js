import React from "react";
import logo from "../assets/images/cryo-logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top p-0 pt-2 px-5"
        style={{ background: "rgba(0, 0, 0, 0.9)", }}
      >
        <div className="container-fluid">
          <a className="navbar-brand w-20" href="#">
            <img width="300px" src={logo} alt="" />
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
          <div
            className="collapse navbar-collapse w-60 justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <a
                  className="nav-link fs-4 active text-white"
                  aria-current="page"
                  href="#"
                >
                  OVERVIEW
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#">
                  COMMUNITY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#">
                  WHITE PAPER
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#">
                  REWARDS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#">
                <NavLink className="text-white" to="/StakeGold">STAKE</NavLink>
                </a>
                {/* <NavLink to="/StakeGold">STAKE</NavLink> */}
              </li>
            </ul>
            <div className="d-flex d-md-none w-20 justify-content-end">
              <button type="button" className="btn btn-primary btn-lg wallet">
                Select Wallet
              </button>
            </div>
          </div>
          <div className="d-md-flex d-none w-20 justify-content-end">
            <button type="button" className="btn btn-primary btn-lg wallet fs-4">
              Select Wallet
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
