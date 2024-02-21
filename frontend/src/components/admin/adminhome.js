import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Adminhome = () => {

    const navigate = useNavigate();

    const Logout = () => {
        sessionStorage.clear();
        navigate("/simplogin");
    }

    return (
        <div>
            <div class="adsidebar">
                <img src="./logo.png" alt="logo" className='images' ></img>
                <Link to={"/adminhomepage"}>Dashboard</Link>
                <Link to={"/addahome"}>Driver Agent</Link>
                <Link to={"/adcsahome"}>Customer Agent</Link>
                <Link to={"/adminmanagecabookedcars"}>Manage CA Booked Car</Link>
                <Link to={"/adcustomerhome"}>Customers</Link>
                <Link to={"/adlocation"}>Locations</Link>
                <Link to={"/adcardash"}>Manage Cars</Link>
                <Link to={"/adpayment"}>Payment</Link></div>
            <div className="admain">
                <nav className="navv">
                    <h3 style={{ marginTop: "-10px" }}>Admin main Dashboard</h3>
                    <ul >
                        <li><Link to='/simplogin' onClick={Logout}>Logout</Link></li>
                        {/* <li ><a  href="#">Item 1</a></li>
                        <li ><a  href="#">Item 2</a></li>
                        <li ><a  href="#">Item 3</a></li> */}
                    </ul>
                </nav>
                <div style={{ boxSizing: "border-box" }}>
                    <div className="row">
                        <div className="column">
                            <div className="cards">
                                <div class="container">
                                    <i class="fa-regular fa-user"></i>
                                    <h5><b>Total Customer Agents</b></h5>
                                    <p>29</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="cards">
                                <div class="container">
                                    <i class="fa-regular fa-user"></i>
                                    <h5><b>Total Drivers</b></h5>
                                    <p>29</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="cards">
                                <div class="container">
                                    <i class="fa-regular fa-user"></i>
                                    <h5><b>Total Customers</b></h5>
                                    <p>29</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="cards">
                                <div class="container">
                                    <i class="fa-regular fa-user"></i>
                                    <h5><b>Total Cars</b></h5>
                                    <p>29</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="cards">
                                <div class="container">
                                    <i class="fa-regular fa-user"></i>
                                    <h5><b>Total Cab Booked</b></h5>
                                    <p>29</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="cards">
                                <div class="container">
                                    <i class="fa-regular fa-user"></i>
                                    <h5><b>Total Cities</b></h5>
                                    <p>29</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="cards">
                                <div class="container">
                                    <i class="fa-regular fa-user"></i>
                                    <h5><b>Total States</b></h5>
                                    <p>29</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="cards">
                                <div class="container">
                                    <i class="fa-regular fa-user"></i>
                                    <h5><b>Total Countries</b></h5>
                                    <p>29</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Adminhome;