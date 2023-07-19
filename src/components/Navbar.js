import React from "react";
import logo from "../assets/images/cryo-logo.png";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top p-0 pt-2 px-0 px-sm-2 px-md-5"
      >
        <div className="container-fluid">
        <button
            className="navbar-toggler p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <Icon className="menu_icon" fontSize="40px" color="white" icon="material-symbols:menu" />
          </button>
          {/* <a className="navbar-brand w-20" href="#"> */}
            
            <NavLink style={{textDecoration:"none"}} className="text-white p-0" to="/"><img className="navbar_logo" width="300px" src={logo} alt="" /></NavLink>
          {/* </a> */}
          <div className="d-lg-none w-20 justify-content-end">
            <button style={{background:"#721aad"}} type="button" className="btn border-0 btn-primary btn-lg wallet fs-sm-4">
              Select Wallet
            </button>
          </div>
        
          <div
            className="collapse navbar-collapse w-60 justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
              <li className="nav-item dropdown">
                <a
                  className="nav-link fs-4 active text-white dropbtn"
                  aria-current="page"
                  href="#"
                >
                  OVERVIEW
                </a>
                <div class="dropdown-content">
                  <a className="fs-4 text-white dropbtn" href="#aboutcryowar">ABOUT CRYOWAR
            {/* <NavLink style={{textDecoration:"none"}} className="text-white p-0" to="/">ABOUT CRYOWAR</NavLink> */}
            </a>

                  <a className="fs-4 text-white dropbtn" href="#solanaplateform">BLOCKCHAIN INTEGRATION</a>
                  <a className="fs-4 text-white dropbtn" href="#gamemodes">GAME MODES</a>
                  <a className="fs-4 text-white dropbtn" href="#heroes">MEET THE HEROES</a>

                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#about">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#community">
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
              <li className="nav-item dropdown">
                <a className="nav-link fs-4 text-white dropbtn" href="#">
                STAKE
                </a>
                <div class="dropdown-content">
                  <a className="fs-4 text-white dropbtn mb-0" href="#">
                  <NavLink style={{textDecoration:"none"}} className="text-white p-0" to="/gold">GOLD</NavLink>
                  </a>
                  <a className="fs-4 text-white dropbtn" href="#">DIAMOND</a>
                </div>
                {/* <NavLink to="/StakeGold">STAKE</NavLink> */}
              </li>
            </ul>
            
          </div>
          <div className="d-none d-lg-inline w-20 justify-content-end">
              <button style={{background:"#721aad"}} type="button" className="btn btn-primary border-0 btn-lg wallet">
                Select Wallet
              </button>
            </div>
          
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
