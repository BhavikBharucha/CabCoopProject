import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const Aboutus = () => {
    return (
        <div className='sub_page'>
            <div class="hero_area">
                {/* <!-- header section strats --> */}
                <header class="header_section">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand">
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
                                        <li class="nav-item active">
                                            <Link to={"/aboutus"}><a class="nav-link"> About  <span class="sr-only">(current)</span></a></Link>
                                        </li>
                                        <li class="nav-item"><Link to={"/services"}>
                                            <a class="nav-link"> Services </a></Link>
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
                {/* <!-- end header section-- > */}
            </div >

            {/* //   < !--about section-- > */}

            <section class="about_section layout_padding">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-md-5 offset-lg-2 offset-md-1">
                            <div class="detail-box">
                                <h2>
                                    About <br></br>
                                    Taxi Company
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamm
                                </p>
                                <Link to={""}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="img-box">
                                <img src="images/about-img.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--end about section-- > */}
        </div >
    )
}

export default Aboutus;