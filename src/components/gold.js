import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Community from './community'
const Gold = () => {
  return (
    <>
        <Container fluid className='g-0'>
            <div className='d-flex justify-content-end mb-5 banner'>
            <div>
            <div class="card px-2 mb-4" style={{width: "47rem", }}>
                <div class="card-body bg-transparent">
                    <div className='text-center w-50 mb-3 m-auto bg-transparent border border-2 border-warning rounded-5'>
                    <h1 style={{fontSize:"55px"}} class="card-title mb-0 text-warning bg-transparent">CWAR GOLD</h1>
                    </div>
                    <Row className='bg-transparent text-center'>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">Total CWAR</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">Total Value</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">APY</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">Lock</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">Pool Validity</p>
                        </Col>
                    </Row>
                    <Row className='bg-transparent text-center' style={{letterSpacing:"1px"}}>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">11,841,929</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">$119,603</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">16%</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">120 days</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 bg-transparent">4/4/2024</p>
                        </Col>
                    </Row>
                </div>
                </div>

                <div class="card px-2 py-2 m-auto mb-4" style={{width: "40rem", letterSpacing:"1px"}}>
                <div className='bg-transparent pe-3 d-flex align-items-center'>
                <div class="card-body bg-transparent">
                    
                    <Row className='bg-transparent'>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 text-center bg-transparent mb-0">Total CWAR</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 text-center bg-transparent mb-0">Total Value</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 text-center bg-transparent mb-0">APY</p>
                        </Col>
                       
                    </Row>
                    <Row className='bg-transparent'>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 text-center bg-transparent mb-0">0</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 text-center bg-transparent mb-0">0</p>
                        </Col>
                        <Col className='bg-transparent text-white'>
                            <p className="fs-4 text-center bg-transparent mb-0">0</p>
                        </Col>
                       
                    </Row>
                </div>
                <div className='bg-transparent'>
                    {/* <h1 style={{fontSize:"30px"}} class="card-title mb-0 text-white bg-transparent">CLAIM</h1> */}
                    <button type="button" class="text-center mb-0 m-auto btn btn-primary rounded-3 claim">CLAIM</button>
                    </div>
                </div>
                </div>

                <div class="card px-4 pb-3 pt-4 m-auto" style={{width: "23rem", letterSpacing:"1px"}}>
                <div className='w-100 m-auto mb-3'>
                <input type="number" placeholder="0.0000" step="0.0001" class="w-100 h-10 px-3 text-2xl bg-slate-900/0 text-white font-iceland border-white border-b-2 border-x-0 border-t-0 border-opacity-50 outline-none focus:border-blue-500 placeholder:font-iceland transition duration-200" value=""></input>

                </div>
                <div className='bg-transparent d-flex align-items-center'>
                <div className='bg-transparent w-100 m-auto d-flex justify-content-between'>
                    <button style={{opacity:"0.7"}} type="button" class="text-center bg-success mb-0 border-0  btn btn-primary rounded-3 stake">STAKE</button>
                    <button style={{opacity:"0.7"}} type="button" class="text-center bg-danger border-0 mb-0  btn btn-primary rounded-3 stake">UNSTAKE</button>
                </div>
                </div>
                </div>
            </div>
            </div>
            
            <Community/>
           
        </Container>
    </>
  )
}

export default Gold
