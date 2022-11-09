import React from 'react';
import { Col, Row } from 'react-bootstrap';
import threepic from '../../../assets/threepic.png'
const Biography = () => {
    return (
        <div className='services'>
            <div className='container d-flex py-4' style={{ maxWidth: "900px" }}>
                <Row xs={1} md={2}>
                    <Col>
                        <div className=''>
                            <h1 className='bebus-font'>BIOGRAPHY</h1>
                            <p>
                                DCP is more than just an artist. He has created one of the most dedicated online audiences & brand in electronic music.



                                In 2019, his track “ALONG” with Steff Da Campo was one of the most supported songs of the year according to 2001tracklists and reached #4 on the Beatport top 100. DCP and his DJ partner Lauren Z. Ray travel the globe playing shows in Europe & Asia, as well as give speeches at Miami Music Week, Dancefair & Amsterdam Dance Event.



                                DCP has accumulated millions of streams & his music has been released on the industry’s best labels including: Spinnin’ Records, Musical Freedom, Armada Music, and has been supported by the world’s biggest DJs including: Don Diablo, Tiësto, Martin Garrix, and Oliver Heldens.




                                As the industry develops & social media trends change, you can expect that DCP will be on the forefront leading the way.
                            </p>
                        </div>
                    </Col>
                    <Col>

                        <div>
                            <img className='img-fluid' src={threepic} alt="" />
                        </div>
                    </Col>
                </Row>

            </div>

        </div>
    );
};

export default Biography;