import React from 'react';
import './Header.css'
import logo from '../../../assets/logo/logo.png';
import dcp1 from '../../../assets/dcp1.jpg';
import dcp2 from '../../../assets/dcp2.jpg';
import dcp3 from '../../../assets/dcp3.jpg';
import threepic from '../../../assets/threepic.png';


const Header = () => {
    return (
        <div className="header-banner">
            <div className='d-block d-md-flex align-items-center '>
                <div className='my-2  container p-5'>
                    <div className='mx-auto  w-100 p-4'>

                        <img src={logo} alt="" />
                        <p className='fs-2 '>DCP is more than just an artist. <br /> He has created one <br />of the most dedicated <br /> online audiences & brand in electronic music.</p>
                    </div>
                </div>
                <div className=''>

                    <img className='fluid w-100' style={{ maxHeight: "700px" }} src={dcp3} alt="" />
                    {/* <img className='fluid w-100' style={{ maxHeight: "700px" }} src={threepic} alt="" /> */}

                    {/* <img src={dcp1} style={{ maxWidth: "200px" }} className=" border  border-2" alt="" />
                    <img src={dcp2} style={{ maxWidth: "200px" }} className=" border start-80 position-absolute top-70" alt="" /> */}

                </div>

            </div>


        </div>
    );
};

export default Header;