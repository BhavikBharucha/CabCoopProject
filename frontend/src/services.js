import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const Services = () => {
    return (
        <div className='sub_page'>

            <div class="hero_area">
                {/* <!-- header section strats --> */}
                <header class="header_section">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand" href="index.html">
                                <span>
                                    Urotaxi
                                </span>
                            </a>
                            <a></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul class="navbar-nav  ">
                                        <li class="nav-item "><Link to={"/"}>
                                            <a class="nav-link">Home</a></Link>
                                        </li>
                                        <li class="nav-item ">
                                            <Link to={"/aboutus"}><a class="nav-link"> About</a></Link>
                                        </li>
                                        <li class="nav-item active"><Link to={"/services"}>
                                            <a class="nav-link"> Services   <span class="sr-only">(current)</span></a></Link>
                                        </li>
                                        <li class="nav-item"><Link to={"/news"}>
                                            <a class="nav-link"> News</a></Link>
                                        </li>
                                        <li class="nav-item"><Link to={"/contactus"}>
                                            <a class="nav-link">Contact Us</a></Link>
                                        </li>
                                        <li class="nav-item"><Link to={"/simplogin"}>
                                            <a class="nav-link">Login</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* <!-- end header section --> */}
            </div>

            {/* //   <!-- service section --> */}

            <section class="service_section layout_padding">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Our <br></br>
                            Taxi Services
                        </h2>
                    </div>
                    <div class="service_container">
                        <div class="box">
                            <div class="img-box">
                                <img src="images/delivery-man.png" alt=""></img>
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Private Driver
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit ame
                                </p>
                                <Link to="">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div class="box">
                            <div class="img-box">
                                <img src="images/airplane.png" alt=""></img>
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Airport Transfer
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit ame
                                </p>
                                <Link to="">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div class="box">
                            <div class="img-box">
                                <img src="images/backpack.png" alt=""></img>
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Luggage Transfer
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit ame
                                </p>
                                <Link to="">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end service section --> */}

           
        </div>
    )
}
export default Services;