import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const News = () => {
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
                                        <li class="nav-item "><Link to={"/services"}>
                                            <a class="nav-link"> Services</a></Link>
                                        </li>
                                        <li class="nav-item active"><Link to={"/news"}>
                                            <a class="nav-link"> News    <span class="sr-only">(current)</span></a></Link>
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


            {/* //   <!-- news section --> */}

            <section class="news_section layout_padding">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Our <br></br>
                            News
                        </h2>
                    </div>
                    <div class="news_container">
                        <div class="box">
                            <div class="date-box">
                                <h6>
                                    01 Nov 2019
                                </h6>
                            </div>
                            <div class="img-box">
                                <img src="images/news-img.jpg" alt=""></img>
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Eiusmod tempor incididunt
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="date-box">
                                <h6>
                                    01 Nov 2019
                                </h6>
                            </div>
                            <div class="img-box">
                                <img src="images/news-img.jpg" alt=""></img>
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Eiusmod tempor incididunt
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="date-box">
                                <h6>
                                    01 Nov 2019
                                </h6>
                            </div>
                            <div class="img-box">
                                <img src="images/news-img.jpg" alt=""></img>
                            </div>
                            <div class="detail-box">
                                <h6>
                                    Eiusmod tempor incididunt
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end news section --> */}


           
        </div>
    )
}
export default News;