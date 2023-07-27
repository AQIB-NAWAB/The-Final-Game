import React from "react";
import logo from "../assets/images/OGB ORIGNAL LOGO-1.png";
import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top pt-3 pb-5 px-0 px-sm-2 px-md-5"
      >
        <div className="container-fluid" style={{}}>
        <button
            className="navbar-toggler p-0 border border-0"
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
            
            <NavLink style={{textDecoration:"none"}} className="text-white p-0" to="/"><img className="navbar_logo" width="90px" src={logo} alt="" /></NavLink>
          {/* </a> */}
          {/* <div className="d-lg-none w-20 justify-content-end">
            <button style={{background:""}} type="button" className="btn border-0 btn-primary btn-lg wallet fs-sm-4">
              Select Wallet
            </button>
          </div> */}
        
          <div
            className="collapse navbar-collapse w-60 justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav gap-4">
             <li className="nav-item">
                <a className="nav-link  text-white" href="#aboutus">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  active text-white dropbtn"
                  aria-current="page"
                  href="#"
                >
                  OVERVIEW
                </a>
                {/* <div class="dropdown-content">
                  <a className=" text-white dropbtn" href="#aboutcryowar">ABOUT SIEGE
            </a>

                  <a className=" text-white dropbtn" href="#solanaplateform">BLOCKCHAIN INTEGRATION</a>
                  <a className=" text-white dropbtn" href="#gamemodes">GAMEPLAY</a>
                  <a className=" text-white dropbtn" href="#heroes">MEET THE HEROES</a>

                </div> */}
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#ourstory">
                  OUR STORY
                </a>
              </li>
               <li className="nav-item">
                <a className="nav-link  text-white" href="#gameplay">
                  GAME PLAY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white">
                  WHITE PAPER
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#ourteam">
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  text-white" to="">
                  PARTNER
                </NavLink>
              </li>
              
              {/* <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#community">
                  COMMUNITY
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
              </li> */}
            </ul>
            
          </div>
          {/* <div className="d-none d-lg-inline w-20 justify-content-end">
              <button type="button" className="btn btn-primary border-0 btn-lg wallet">
                Select Wallet
              </button>
            </div> */}
          
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
