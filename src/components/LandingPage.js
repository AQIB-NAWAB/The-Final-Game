import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import tranimg from '../assets/images/bg-transit-bottom.png'
import bg4 from '../assets/images/bg4.png'

const LandingPage = () => {
  return (
        <>
        <Container fluid>
            <div className='landingpage-video-div position-relative'>
                <div className='text-white text-center position-absolute w-100' style={{bottom:"0", left:"50%", transform:"translateX(-50%)"}}>
                    <h1 className='mb-0' style={{fontSize:"90px", fontFamily:"font-iceland"}}>CRYOWAR</h1>
                    <h2 className='mb-0' style={{fontSize:"40px", fontFamily:"font-iceland"}}>NEXT-GEN BLOCKCHAIN MULTIPLAYER GAME</h2>
                    <p className='mb-0' style={{fontSize:"25px"}}>Jump right into battle and prove your valor in an action-packed mobile free-to-play 1v1v1 arena brawler.</p>
                </div>
            </div>

            <div className='landingpage-bg2-div'>
            <Row className='justify-content-around'>
                <Col lg={4}>
                    <div className='' style={{marginTop:"120px"}}>
                        <h1 style={{fontSize:"70px", fontFamily:"font-iceland"}}>ABOUT CRYOWAR</h1>
                        <div>
                            <h5 style={{fontWeight:"600"}}>MULTIPLAYER NFT</h5>
                            <p>CRYOWAR is a real-time multiplayer PVP arena NFT game developed in Unreal Engine and on the Solana network.</p>
                        </div>
                        <div>
                            <h5 style={{fontWeight:"600"}}>AMALGAM</h5>
                            <p>Cryowar is an amalgam between traditional gaming experience and best practices of the blockchain world, DAO voting, NFT, and decentralized finance (DEFI).</p>
                        </div>
                        <div>
                            <h5 style={{fontWeight:"600"}}>DEFLATIONARY</h5>
                            <p>A gaming ecosystem with deflationary mechanisms that integrates staking with gameplay, allowing RPG stakers to earn better rewards through increasing their in-game skill and experience levels.</p>
                        </div>
                        <div>
                            <h5 style={{fontWeight:"600"}}>MULTI-BLOCKCHAIN MEDIEVAL METAVERSE</h5>
                            <p>Our endgame is the creation of a multi-blockchain Medieval Metaverse without boundaries</p>
                        </div>
                        <div>
                            <h5 style={{fontWeight:"600"}}>FEATURING</h5>
                            <p>CROSS-PLATFORM MULTIPLAYER
                                8 UNIQUE CHARACTERS
                                SKILL-BASED GAMEPLAY
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={4}></Col>
            </Row>

            </div>

            <div className='landingpage-bg3-div'>
            <img width="100%" src={bg4} alt="" />

            </div>
            <img style={{marginTop:"-150px"}} width="100%" src={tranimg} alt="" />

        </Container>

        </> 
 )
}

export default LandingPage