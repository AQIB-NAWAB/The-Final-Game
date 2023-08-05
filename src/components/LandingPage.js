import React, { useState, useEffect, useRef, Suspense } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import logoCryowar from "../assets/images/Cryowar-win-01.png";
import logoCryowarWatch from "../assets/images/Cryowar-stopwatchs-01.png";
import logoUnreal from "../assets/images/logo-unreal-hor.png";

import transittest1 from "../assets/images/transit-test (1).png";
import Heavy1 from "../assets/images/bg-heavy-1.jpg";
import Heavy3 from "../assets/images/bg-heavy-3.jpg";
import bgvalkyrie1 from "../assets/images/bg-valkyrie-1.jpg";
import bgvalkyrie2 from "../assets/images/bg-valkyrie-2.jpg";
import bgcenturion1 from "../assets/images/bg-centurion-1.jpg";
import bgcenturion2 from "../assets/images/bg-centurion-2.jpg";
import Centurion1_Idle from "../assets/images/Centurion1_Idle.png";
import Centurion3_Idle from "../assets/images/Centurion3_Idle.png";

import polygon from '../assets/images/polygon.png'
import Community from "./community";

import team1 from "../assets/images/team1.png"
import team2 from "../assets/images/team2.png"
import team3 from "../assets/images/team3.png"
import team4 from "../assets/images/team4.png"
import team5 from "../assets/images/team5.png"
import team6 from "../assets/images/team6.png"

import chatLink from "../assets/images/chatlink.png"
import bitMark from "../assets/images/bitmark.png"
import immutable from "../assets/images/immutable.png"
import aws from "../assets/images/aws.png"


import videoBg from "../assets/video/hero.mp4"

import poster from "../assets/images/OGB ORIGNAL LOGO-1.png"
import { Icon } from '@iconify/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import desktopPicture from "../assets/images/desktopPicture.png"
import desktopVideo from "../assets/video/desktopVideo.mp4"
import CustomModal from "./Modal";
const LandingPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(Heavy1);
  const [backgroundImage2, setBackgroundImage2] = useState(bgvalkyrie1);
  const [backgroundImage3, setBackgroundImage3] = useState(bgcenturion1);
  const [image, setImage] = useState(Centurion1_Idle);
  const [isModalDisplay,setIsModalDisplay]=useState(false)

  const [color, setColor] = useState("#948b4e");
  const [color2, setColor2] = useState("#d4770d");
  const [color3, setColor3] = useState("#474139");

  // ===== text translate on scroll ========
  const [scrollOffset, setScrollOffset] = useState(100);
  const [scroll, setScroll] = useState(0);

  // find the top of each section
  const sectionA = document.querySelector('.section-a')?.offsetTop;
  const sectionB = document.querySelector('.section-b')?.offsetTop;
  const sectionC = document.querySelector('.section-c')?.offsetTop;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // get the window height on scroll
      const currentScroll = window.scrollY + scrollOffset;
      setScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollOffset]);

  useEffect(() => {
    // Add your animation logic here
    if (scroll > sectionA) {
      document.querySelector('.section-a .hero-title').classList.add('animate-normal');
      document.querySelector('.section-a .hero-subtitle').classList.add('animate-delay');
    }

    if (scroll > sectionB) {
      document.querySelector('.section-b .hero-title').classList.add('animate-normal');
      document.querySelector('.section-b .hero-subtitle').classList.add('animate-delay');
    }

    if (scroll > sectionC) {
      document.querySelector('.section-c .hero-title').classList.add('animate-normal');
      document.querySelector('.section-c .hero-subtitle').classList.add('animate-delay');
    }
  }, [scroll, sectionA, sectionB, sectionC]);
// ======== text on scroll end =============
  const paragraphRefs = useRef([]);

  const changeBackground = (id) => {
    // Update the backgroundImage state with the new image path
    if (id == 1) {
      setBackgroundImage(Heavy1);
      setColor("#948b4e");
    } else {
      setBackgroundImage(Heavy3);
      setColor("#688c84");
    }
  };
  const changeBackgroundTwo = (id) => {
    // Update the backgroundImage state with the new image path
    if (id == 1) {
      setBackgroundImage2(bgvalkyrie1);
      setColor2("#d4770d");
    } else {
      setBackgroundImage2(bgvalkyrie2);
      setColor2("#b31d33");
    }
  };

  const changeBackgroundThree = (id) => {
    // Update the backgroundImage state with the new image path
    if (id == 1) {
      setBackgroundImage3(bgcenturion1);
      setColor3("#474139");
      setImage(Centurion1_Idle);
    } else {
      setBackgroundImage3(bgcenturion2);
      setColor3("#7e3b8a");
      setImage(Centurion3_Idle);
    }
  };

  useEffect(() => {
    const paragraphs = paragraphRefs.current;

    const handleScroll = () => {
      paragraphs.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const top = rect.top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.8) {
          const scrollPosition = window.pageYOffset;
          const elementPosition = element.offsetTop;
          const distanceFromTop = elementPosition - scrollPosition;
          element.style.transform = `translateY(${distanceFromTop * 0.4}px)`; // Adjust the value as needed
          element.classList.add("show");
        } else {
          element.style.transform = "translateY(0)";
          element.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {/* <Navbar/> */}
      <Container fluid className="g-0">
        <ToastContainer hideProgressBar={true} autoClose={1000}   />
    {isModalDisplay && <CustomModal isModalDisplay={isModalDisplay}  setIsModalDisplay={setIsModalDisplay}/> }
        <div className="landingpage-video-div position-relative">
        <video autoPlay loop  muted className="video">
  <source src={videoBg} type="video/mp4" className="sorce"/>
</video>
          <div
            className="text-white text-center  w-100 heroBG"
           
          >
            <h1
              className="mb-0 heading shadow-lg"
              style={{ fontSize: "90px", fontFamily: "font-iceland" }}
            >
              Siege Builders: Clash of Legends
            </h1>
            <h2
              className="mb-0 sub_heading"
              style={{
                fontSize: "40px",
                fontFamily: "font-iceland",
                letterSpacing: "2px",
              }}
            >
              Next-Gen Blockchain-based Online Multiplayer Game
            </h2>
            <p className="mb-0 d-none d-lg-inline animate-delay" style={{ fontSize: "16px", letterSpacing:"1px" }}>
              Test your skills against the best players in the world and become
              the champion.
              <br />
            </p>
            <button onClick={()=>setIsModalDisplay(true)} className="py-3 text-capitalize">  Claim Your Airdrop </button>
          </div>
        </div>
        {/* ref={(el) => (paragraphRefs.current[0] = el)} */}
        <div
          id="aboutus"
          className="landingpage-bg2-div pt-5"
        >
          <Row className="justify-content-around m-0">
            <Col xs={11} sm={10} md={10} lg={6}>
              <div
                className="scroll-appear landingpage-bg2-div-column1 "
                style={{ marginTop: "40px" }}
              >
                <h1
                  className="heading2 mb-4"
                  style={{ fontSize: "60px", fontFamily: "font-iceland", }}
                >
                  About Siege Builders: Clash of Legends
                </h1>
                <ul className="ps-0 ps-md-1 hero-subtitle">
                  {/* <h5 className='sub-heading2' style={{fontWeight:"600"}}>MULTIPLAYER NFT</h5> */}
                  <li className="">
                     <strong>Multiplayer -</strong> Players can compete against each other in a
                    variety of modes, such as PvP and PvE.
                  </li>

                  {/* <h5 className='sub-heading2' style={{fontWeight:"600"}}>AMALGAM</h5> */}
                  <li>
                     <strong>Cross-platform -</strong> The game can be played on any platform,
                    such as PC, or mobile
                  </li>

                  {/* <h5 className='sub-heading2' style={{fontWeight:"600"}}>DEFLATIONARY</h5> */}
                  <li>
                     <strong>NFT-based -</strong> In-game assets are stored as NFTs, which means
                    that players can own and trade them
                  </li>

                  {/* <h5 className='sub-heading2' style={{fontWeight:"600"}}>MULTI-BLOCKCHAIN MEDIEVAL METAVERSE</h5> */}
                  <li>
                     <strong>Wide range of maps and modes -</strong> The game offers a variety
                    of maps and modes to keep players entertained
                  </li>

                  {/* <h5 className='sub-heading2' style={{fontWeight:"600"}}>FEATURING</h5> */}
                  <li>
                     <strong>Own your in-game assets -</strong> Players can own their in-game
                    assets, such as weapons, armor, and skins
                  </li>

                  <li>
                     <strong>Play with players from all over the world -</strong> Players can
                    play with players from all over the world, thanks to the
                    game's cross-platform functionality.
                  </li>
                  <li>
                     <strong>Cross-chain trading -</strong> Players can trade their in-game
                    assets across different blockchains, which means that they
                    can always find the best price for their assets. This makes
                    the game more liquid and accessible to players from all over
                    the world.
                  </li>
                  <li>
                     <strong>Thrilling tournaments -</strong> Players can participate in
                    thrilling tournaments with big prize pools
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </div>
        

        <div className="landingpage-bg3-div">
        {/* <img
            className="bg4"
            style={{ marginTop: "", }}
            width="100%"
            src={bg4}
            alt=""
          /> */}
          
          
          <div
            className="text-center landingpage-bg3-div-inner mx-auto"
          >
            <h1
              className="heading2 mb-4"
              style={{ fontFamily: "font-iceland", fontSize: "60px", textTransform:"uppercase" }}
            >
             Unreal Visuals will make you believe you’re actually there.
            </h1>
            <p className="" style={{fontSize:"19px", letterSpacing:"1px"}}>
            Siege Builders is taking full advantage of the graphical power of Unreal Engine 5, seamlessly bringing near PC-level graphics at up to 120 frames per second, directly to you.
            </p>
          </div>
          <Row
            lg={12}
            className="m-0 text-white align-items-center justify-content-center gap-5"
          >
            <Col lg={3} className="noPay">
              <div className="text-center">
                <img className="mb-4 mb-md-5 free-to-play" width="280px" src={logoCryowar} alt="" />
                <div className="">
                  <h1 style={{ fontFamily: "font-iceland ", fontSize: "60px" }}>
                  Free-To-Play	
                  </h1>
                  <p style={{fontSize:"18px", letterSpacing:"1px"}}>
                  Play our free-to-play NFT-based multiplayer shooter game and earn real-life assets
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} className="">
            <div className="text-center">
                <img className="mb-4 mb-md-5 free-to-play" width="280px" src={logoUnreal} alt="" />
                <div className="">
                  <h1 style={{ fontFamily: "font-iceland ", fontSize: "55px",marginTop:"20px" }}>
                  POWERED BY	
                  </h1>
                  <p style={{fontSize:"18px", letterSpacing:"1px"}}>
                  Play our free-to-play NFT-based multiplayer shooter game and earn real-life assets
                  </p>
                </div>
              </div>

            </Col>
            <Col lg={3} className=" short-session">
              <div className="text-center">
                <img
                  className="mb-3 mb-md-5 free-to-play"
                  width="280px"
                  src={logoCryowarWatch}
                  alt=""
                />
                <div className="">
                  <h1 style={{ fontFamily: "font-iceland", fontSize: "60px" }}>
                  Play-To-Earn
                  </h1>
                  <p style={{fontSize:"18px", letterSpacing:"1px"}}>
                    Play to earn by participating in thrilling tournaments and becoming the champion pf all time
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <img
          className="bottom_img"
          style={{ marginTop: "-200px" }}
          width="100%"
          src={tranimg}
          alt=""
        /> */}

        <div
          id="solanaplateform"
          style={{ marginBottom: "20px" }}
          className="text-white builtOn-solana"
        >
          <h1
            className=" text-center"
            style={{
              fontFamily: "font-iceland",
              fontSize: "60px",
              marginBottom: "40px",
              // textTransform:"uppercase"
            }}
          >
            Built on Polygon blockchain:
          </h1>
          <h1
            className="heading2 text-center"
            style={{
              fontFamily: "font-iceland",
              fontSize: "64px",
              marginBottom: "100px",
              textTransform:"uppercase",
              display:"flex",
              justifyContent:"center",
              gap:"20px"
            }}
          >
          <img style={{backgroundColor:"black"}} width="75px" src={polygon} alt="" />
            Polygon
          </h1>

          <Row className="justify-content-around m-0 features">
            <Col lg={5} style={{display:"flex ",flexDirection:"column",gap:"40px"}}>
              <div className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center gap-3">
                  <h3
                    className=""
                    style={{ fontFamily: "font-iceland", fontSize: "27px", }}
                  >
                    LOWER TRANSACTION FEES: 
                  </h3>
                  {/* <img width="35px" height="33px" src={solana} alt="" /> */}
                </div>
                <p className="mt-3" style={{ fontSize: "19px",}}>
                <span className="fw-bold">Polygon</span> offers significantly lower transaction fees than Ethereum, which is important for gaming, where players need to be able to make frequent, small transactions.
                </p>
              </div>

              <div className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center gap-3">
                  <h3
                    className=""
                    style={{ fontFamily: "font-iceland", fontSize: "27px" }}
                  >
                    FASTER CONFIRMATION TIMES: 
                  </h3>
                </div>
                <p className="mt-3" style={{ fontSize: "19px" }}>
                <span className="fw-bold">Polygon</span> also offers faster confirmation times than Ethereum, which is important for gaming, where players need to be able to experience smooth gameplay.
                </p>
              </div>

              <div className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center gap-3">
                  <h3
                    className=""
                    style={{ fontFamily: "font-iceland", fontSize: "27px" }}
                  >
                    MORE SCALABILITY: 
                  </h3>
                </div>
                <p className="mt-3" style={{ fontSize: "19px" }}>
                <span className="fw-bold">Polygon</span> is a Layer 2 scaling solution for Ethereum, which means that it can handle more transactions than Ethereum without compromising on security or decentralization. This is important for gaming, where large numbers of players need to be able to interact with the game world simultaneously.for global scale with more than 650
                  global validators.
                </p>
              </div>
            </Col>
            <Col lg={5} style={{display:"flex ",flexDirection:"column",gap:"40px"}}>
              <div className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center gap-3 align-items-center">
                  <h3
                    className="mb-0"
                    style={{ fontFamily: "font-iceland", fontSize: "27px" }}
                  >
                    EXTENSIBLE:
                  </h3>
                  {/* <img width="32px" height="36px" src={serum} alt="" /> */}
                </div>
                <p className="mt-3" style={{ fontSize: "19px" }}>
                <span className="fw-bold">Polygon</span> is an extensible platform, which means that it can be easily adapted to meet the needs of different gaming applications. This makes it a good choice for developers who want to create innovative and cutting-edge gaming experiences.
                </p>
              </div>

              <div className="mb-5 mb-md-0">
                <div className="d-flex justify-content-center gap-3 align-items-center">
                  <h3
                    className="mb-0 "
                    style={{ fontFamily: "font-iceland", fontSize: "27px" }}
                  >
                    ACTIVE COMMUNITY:
                  </h3>
                  {/* <img width="42px" height="42px" src={stardust} alt="" /> */}
                </div>
                <p className="mt-3 " style={{ fontSize: "19px" }}>
                <span className="fw-bold ">Polygon</span> has a large and active community of developers and users, which provides a supportive environment for developers who are building games on the platform.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div id="ourstory" className="landingpage-bgStory-div text-white" style={{ margin:"0 auto", }}>
          <Row className="m-0 justify-content-around">
            {/* <Col
              xs={12}
              lg={6}
              className="order-2 order-lg-1 column1"
              style={{ marginTop: "220px" }}
            >
              <div className="d-flex justify-content-center">
                <img width="60%" src={mobile} alt="" />
              </div>
            </Col> */}
            <Col lg={11}
              className="order-1 order-lg-2 column2"
              style={{ marginTop: "30px" }}
            >
              <div className="gameStory" style={{ marginTop: "70px" }}>
                <h3
                  style={{
                    color: "",
                    fontSize: "50px",
                    letterSpacing: "2px",
                    fontFamily: "font-iceland",
                  }}
                  className="game-story"
                >
                  GAME STORY
                </h3>
                
                <p style={{ fontSize: "19px" }}>
                In the mystical realm of Eldoria, factions battle for supremacy over the fabled Crown of Legends. Led by visionary Mauro, the Siege Builders emerge as extraordinary warriors, combining combat prowess with architectural skill. United by a shared purpose, they strive to bring unity and peace to Eldoria, bridging the gaps between warring factions.
                </p>
                <p style={{ fontSize: "19px" }}>
                Siege Builders: Clash of Legends invites you to embark on a thrilling journey in a realm torn by conflict. Unleash your combat skills and architectural innovation to shape the destiny of Eldoria. Each battle tests your mettle, pushing you to overcome ancient guardians, unlock secrets, and confront your inner demons. Rise above the chaos, build your legend, and claim the Crown of Legends.
                </p>
                
                <p style={{ fontSize: "19px" }}>
                Prepare for an epic adventure where valour, strategy, and creativity intertwine. Join the ranks of the Siege Builders, experience intense battles, and unleash your ingenuity in constructing fortifications. Forge alliances, unite factions, and become a legend in Eldoria. Will you seize the opportunity to shape the future of a war-torn world and leave your mark in Siege Builders: Clash of Legends?
                </p>
              </div>
            </Col>
          </Row>
          {/* <img
            className="transittest-img"
            style={{ marginTop: "-70px" }}
            width="100%"
            src={transittest}
            alt=""
          /> */}
        </div>

        <div id="gameplay" className="landingpage-bg4-div mt-5 mt-md-0 text-white">
          <Row className="m-0 justify-content-justify-content-around gap-0">
            <Col
              xs={12}
              lg={6}
              className="order-2 order-lg-1 column1"
              style={{ marginTop: "130px ",height:"500px", }}
            >
              <div className="d-flex justify-content-center align-items-center position-relative ">
              <video  loop controls   className="desktopVideo" poster={poster}>
  <source src={desktopVideo} type="video/mp4" />
</video>
                <img width="100%" height={"500px"} src={desktopPicture} alt="" />

              </div>
            </Col>
            <Col lg={6}
              className="order-1 order-lg-2 column2"
              style={{ marginTop: "50px" }}
            >
              <div className="px-3 ps-lg-5 gameplay" style={{ marginTop: "70px" }}>
                <h3
                  style={{
                    fontSize: "25px",
                    letterSpacing: "2px",
                  }}
                  className="game-story"
                >
                  GAMEPLAY
                </h3>
             
                <p style={{ fontSize: "19px" }}>
                  Siege Builders: Clash of Legends offers an exhilarating
                  gameplay experience with four distinct game modes.
                </p>
                <p style={{ fontSize: "19px" }}>
                  Prepare to engage in intense battles and showcase your skills
                  in different arenas:
                </p>
                <h5 className="sub-heading2" style={{ fontWeight: "600" }}>
                  BATTLE ROYALE
                </h5>
                <p>
                  {" "}
                  Immerse yourself in a thrilling survival challenge where 100
                  players parachute from an airship, strategically choosing
                  their landing zones. Explore the vast map, gather resources,
                  and adapt to the environment as you fight to be the last one
                  standing.
                </p>
                <h5 className="sub-heading2" style={{ fontWeight: "600" }}>
                  5 VS 5 TEAM COMPETITION
                </h5>
                <p>
                  Team up with your allies and engage in strategic warfare.
                  Coordinate your actions, utilise the environment to your
                  advantage, and execute well-planned strategies. Choose from
                  two game modes: one focused on rescuing hostages and the other
                  on activating or deactivating objectives. The teamwork and
                  tactical prowess of your squad will determine your path to
                  triumph.
                </p>
                <h5 className="sub-heading2" style={{ fontWeight: "600" }}>
                  DEATHMATCH
                </h5>
                <p>
                  Hone your combat skills in this classic shooter mode. Enter
                  fast-paced battles where it's every warrior for themselves.
                  Showcase your marksmanship, reflexes, and decision-making as
                  you strive to outgun your opponents. The more eliminations you
                  achieve, the higher your score climbs.
                </p>
                <h5 className="sub-heading2" style={{ fontWeight: "600" }}>
                  CAPTURE THE FLAG
                </h5>
                <p>
                  Engage in casual yet intense gameplay as two teams of 10
                  players compete to capture each other's territories. Engage in
                  relentless battles, navigate through treacherous terrain, and
                  devise clever strategies to outwit your adversaries. Work
                  together with your teammates to secure victory and claim glory
                  on the battlefield.
                </p>
              </div>
            </Col>
          </Row>
          {/* <img
            className="transittest-img d-none d-lg-block "
            style={{ marginTop: "-75px", height:"30vh" }}
            width="100%"
            src={transittest}
            alt=""
          /> */}
        </div>
        {/* <img
            className="d-block d-lg-none position-absolute w-100"
            style={{ marginTop: "-70px", height:"20vh" }}
            width="100%"
            src={transittest}
            alt=""
          /> */}


    


 

        <div
          className="text-white text-center aboutus_main_div"
          style={{ marginBottom: "100px",marginTop:"100px" }}
        >
          <h1
            style={{
              fontSize: "70px",
              letterSpacing: "2px",
              fontFamily: "font-iceland",
              marginBottom: "80px",
            }}
          >
            OUR TEAM
          </h1>

          <Row className="m-0 mb-5">
            <Col sm={3} md={3}>
              <div className="mb-5 aboutUs-div">
                <img
                  className="mb-2 mb-md-4"
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                  }}
                  src={team1}
                  alt="Mauro Blanco - CEO"
                />
                <p style={{ fontFamily: "font-iceland", fontSize: "23px" }}>
                Mauro Blanco - CEO
                </p>
                <a href="https://www.linkedin.com/in/mauro-blanco-69b8b793/" target="_blank" style={{color:"white"}}><Icon className="instagram" fontSize="40px" icon="mdi:linkedin"  /></a>
              </div>
            </Col>
            <Col sm={3} md={3}>
              <div className="mb-5 aboutUs-div">
                <img
                  className="mb-2 mb-md-4"
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                  }}
                  src={team2}
                  alt="Safar Ali Nathani - CMO "
                />
                <p style={{ fontFamily: "font-iceland", fontSize: "23px" }}>
                Safar Ali Nathani - CMO 
                </p>
                <a href="https://www.linkedin.com/in/safaralinathani/" target="_blank" style={{color:"white"}}><Icon className="instagram" fontSize="40px" icon="mdi:linkedin"  /></a>
              </div>
            </Col>
            <Col sm={3} md={3}>
              <div className="mb-5 aboutUs-div">
                <img
                  className="mb-2 mb-md-4"
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                  }}
                  src={team3}
                  alt="Basshar Okal  -   CCO  - "
                />
                <p style={{ fontFamily: "font-iceland", fontSize: "23px" }}>
                Basshar Okal  -   CCO  - 
                  (CEO)
                </p>
                <a href="https://www.linkedin.com/in/basshar-okal-48151223b/" target="_blank" style={{color:"white"}}><Icon className="instagram" fontSize="40px" icon="mdi:linkedin"  /></a>
              </div>
            </Col>
            <Col sm={3} md={3}>
              <div className="mb-5 aboutUs-div">
                <img
                  className="mb-2 mb-md-4"
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    objectFit:"cover",


                  }}
                  src={team4}
                  alt="Wahab Ahamad - CTO"
                />
                <p style={{ fontFamily: "font-iceland", fontSize: "23px" }}>
                Wahab Ahamad - CTO
                </p>
                <a href="https://www.linkedin.com/in/wahab-ahmad-83a27584/" target="_blank" style={{color:"white"}}><Icon className="instagram" fontSize="40px" icon="mdi:linkedin"  /></a>

              </div>
            </Col>
            <Col sm={3} md={3}>
              <div className="mb-5 aboutUs-div">
                <img
                  className="mb-2 mb-md-4"
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    objectFit:"cover",


                  }}
                  src={team5}
                  alt="Wahab Ahamad - CTO"
                />
                <p style={{ fontFamily: "font-iceland", fontSize: "23px" }}>
                Rehan  - Blockchain expert
                </p>
                <a href="https://www.linkedin.com/in/rehan-shahjahan" target="_blank" style={{color:"white"}}><Icon className="instagram" fontSize="40px" icon="mdi:linkedin"  /></a>

              </div>
            </Col>
            <Col sm={3} md={3}>
              <div className="mb-5 aboutUs-div">
                <img
                  className="mb-2 mb-md-4"
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    objectFit:"cover",


                  }}
                  src={team6}
                  alt="Wahab Ahamad - CTO"
                />
                <p style={{ fontFamily: "font-iceland", fontSize: "23px" }}>
                Felix vaughn -  Business developer
                </p>
                <a href="https://twitter.com/Felixvaughn04?t=Ya7pCJFUivo2Ff8xy9gruA&s=09" target="_blank" style={{color:"white"}}><Icon className="instagram" fontSize="40px" icon="mdi:twitter"  /></a>

              </div>
            </Col>
          </Row>

          <div className="partners mt-5  " style={{ padding:"60px 0px",   }}>
          <h1
            style={{
              fontSize: "70px",
              letterSpacing: "2px",
              fontFamily: "font-iceland",
              marginBottom: "80px",
            }}
          >
            OUR PARTNERS
          </h1>
          <div style={{flexWrap:"wrap"}} className="partner_container d-flex  gap-5 justify-content-center align-content-center gap-2">
<img src={chatLink} alt="" className="rounded-circle " style={{height:"110px",width:"110px",objectFit:"cover"}}  />
<img src={polygon} alt="" className="rounded-circle " style={{height:"110px",width:"110px",objectFit:"cover"}} />
<img src={immutable} alt="" className="rounded-circle " style={{height:"110px",width:"110px",objectFit:"cover"}} />
<img src={bitMark} alt="" className="rounded-circle " style={{height:"110px",width:"110px",objectFit:"cover"}} />



          </div>
          </div>

          {/* <div
            className="py-5 d-none d-md-block aboutUs-details"
            style={{ paddingLeft: "90px", paddingRight: "90px" }}
          >
            <p className="text-start py-2" style={{ fontSize: "17px" }}>
              Siege Builders: Clash of Legends is an elaborate multiplayer
              online shooter, combines both FP and 3P perspectives. It offers a
              diverse range of game environments, catering to all types of
              shooter fans. From intense Battle Royale Matches where only the
              best survive, to thrilling team-based tournaments, the game offers
              a variety of gameplay styles that will challenge and engage
              players.
            </p>
            <p className="text-start py-2" style={{ fontSize: "17px" }}>
              The game is designed to be accessible to all, adopting a
              free-to-play model. It can be played on both PC (Windows) and
              mobile (Android and iOS) platforms, ensuring that players can
              enjoy the game wherever they go. Furthermore, the integration of
              blockchain technology within the web space 3 sets Siege Builders
              apart.
            </p>
            <p className="text-start py-2" style={{ fontSize: "17px" }}>
              Through collaborations with Polygon Labs and Immutable X on the
              Fantom network, the game leverages the potential of blockchain to
              enhance the gaming experience.
            </p>

            <h3 className="text-start py-2" style={{ fontSize: "20px" }}>
              Our Story:
            </h3>
            <p className="text-start py-2" style={{ fontSize: "17px" }}>
              Once upon a time, a group of former esports players had a dream—to
              create an extraordinary gaming experience where players could
              immerse themselves in thrilling battles and earn real rewards.
              They saw immense opportunities in the gaming industry, driven by
              the staggering number of 3.09 billion gamers worldwide and a
              desire for decentralization.
            </p>
            <p className="text-start py-2" style={{ fontSize: "17px" }}>
              Siege Builders: Clash of Legends, a game that harnessed the power
              of blockchain technology. In this realm, players fought epic
              battles, earned Siege tokens with real-world value, and owned
              their in-game assets. It was a revolution born out of the
              opportunities they saw in the gaming landscape.
            </p>
            <p className="text-start py-2" style={{ fontSize: "17px" }}>
              They recognized the vast market of gamers craving immersive
              experiences and sought to redefine the relationship between
              players and their virtual worlds. They saw the potential to create
              a game that not only entertained but also rewarded players for
              their time and skill.
            </p>
            <p
              id="community"
              className="text-start py-2"
              style={{ fontSize: "17px" }}
            >
              With Siege Builders: Clash of Legends, they embarked on a journey
              to seize the opportunities presented by the gaming industry. It
              was a story of dreams, innovation, and a quest to empower players
              in a decentralized world. Together, they aimed to reshape the
              future of gaming, unlocking new horizons and offering players an
              unprecedented gaming experience.
            </p>
          </div> */}
        </div>
       
        <Community />

      </Container>
      

    </>
  );
};

export default LandingPage;
