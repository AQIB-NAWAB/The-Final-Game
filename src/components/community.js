import React from "react";

const Community = () => {
  return (
    <>
      <div className="text-center mb-0 text-white pt-2 pt-md-5">
        {/* <h1 className="community mb-4" style={{ fontFamily: "font-iceland", fontSize:"50px" }}>
          JOIN OUR COMMUNITY
        </h1>
        <div className='py-5 d-none d-md-block' style={{paddingLeft:"90px", paddingRight:"90px"}}>
        <p className="text-start py-2" style={{ fontSize: "17px" }}>
          As we embark on this exhilarating journey, the future of Siege
          Builders: Clash of Legends holds endless possibilities. Our vision is
          to create a game that caters to diverse audiences, ensuring that every
          player can find enjoyment within our virtual world. Through continuous
          updates and additions to maps, characters, weapons, and the overall
          environment, we strive to enhance your gaming experience, keeping the
          excitement and thrill alive with each passing moment.
        </p>
        <p className="text-start py-2" style={{ fontSize: "17px" }}>
          While competitive gaming often remains exclusive to a select few, we
          believe that everyone deserves a chance to experience the thrill of
          competition. To fulfil this vision, we will establish a comprehensive
          league system where players of all skill levels can engage in a unique
          and rewarding competitive environment. Whether you aspire to reach the
          highest echelons of professional play or simply enjoy the thrill of
          friendly competition, Siege Builders: Clash of Legends aims to provide
          an inclusive and unforgettable experience for all.
        </p>
        <p className="text-start py-2" style={{ fontSize: "17px" }}>
          At Siege Builders: Clash of Legends, we are firm believers in the
          potential of the web 3 system, and we are committed to harnessing its
          power to its fullest extent. Our dedicated team will work tirelessly
          to ensure that every fan of first-person and third-person shooter
          games can immerse themselves in our platform and find unparalleled
          enjoyment. In addition, we recognize the importance of catering to a
          wider range of players, and as such, we will introduce more casual
          modes that appeal to diverse audiences of all ages.
        </p>
        </div> */}
        <div className="d-block d-md-flex fs-5 justify-content-center community_list">
        <a href="https://twitter.com/SiegeBuilders?t=aL8eFDd16P9Kaa34T9J3nQ&s=09" target="_blank" style={{color:"white"}}> <p> TWITTER </p></a>
          <p>TELEGRAM</p>
          <p>DISCORD</p>
          <p>INSTAGRAM</p>
          <a href="https://www.youtube.com/channel/UCyeKTJ0C5xqwZrJc4gTpHjA" target="_blank" style={{color:"white"}}><p>YOUTUBE</p></a>
        </div>
      </div>

      <div className="text-center mb-5 text-white pt-5">
        <p className="mb-4" style={{ fontSize: "15px" }}>
          All screenshots and content are © of their respective owners.
          Copyright © 2023 Siege Builders.
        </p>
        <div
          style={{ fontSize: "18px" }}
          className="d-flex justify-content-center community_list "
        >
          <span>PRIVACY POLICY</span>
          <span>TERMS AND CONDITIONS</span>
        </div>
        <div>
          <p style={{ fontSize: "14px" }}>
            More info:<span>mauroblanco@opengamesbuilders.com</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Community;
