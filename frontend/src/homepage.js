import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <div class="hero_area">
                {/* <!-- header section strats --> */}
                <header class="header_section">
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand" href=''>
                                <span>
                                    Urotaxi
                                </span>
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                    <ul class="navbar-nav  ">
                                        <li class="nav-item active"><Link to={"/"}>
                                            <a class="nav-link">Home <span class="sr-only">(current)</span></a></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to={"/aboutus"}><a class="nav-link"> About</a></Link>
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
                                        {/* <li class="nav-item">
                                            <select id="login" defaultValue="login page">
                                            <Link to={"/simplogin"}><option>English</option></Link>
                                            <Link to={"/simplogin"}><option>French</option></Link>
                                            </select>
                                        </li> */}
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
                {/* <!-- slider section --> */}
                <section class=" slider_section ">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-7 ">
                                <div class="box">
                                    <div class="detail-box">
                                        <h4>
                                            Welcome to
                                        </h4>
                                        <h1>
                                            UROTAXI
                                        </h1>
                                    </div>
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">

                                                <div class="img-box">
                                                    <img src="images/slider-img.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="img-box">
                                                    <img src="images/slider-img.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="img-box">
                                                    <img src="images/slider-img.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="img-box">
                                                    <img src="images/slider-img.png" alt=""></img>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="img-box">
                                                    <img src="images/slider-img.png" alt=""></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="btn-box">
                                        <Link to={""} class="btn-1">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-5 ">
                                <div class="slider_form">
                                    <h4>
                                        Get A Taxi Now
                                    </h4>
                                    <form action="">
                                        <input type="text" placeholder="Car Type"></input>
                                        <input type="text" placeholder="Pick Up Location"></input>
                                        <input type="text" placeholder="Drop Location"></input>
                                        <div class="btm_input">
                                            <input type="text" placeholder="Your Phone Number"></input>
                                            <button>Book Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {/* <!-- end slider section --> */}
            </div>

            {/* <!-- about section --> */}

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

            {/* <!-- end about section --> */}

            {/* <!-- service section --> */}

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
                                <Link to={""}>
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
                                <Link to={""}>
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
                                <Link to={""}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end service section --> */}

            {/* <!-- news section --> */}

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

            

            {/* <!-- contact section --> */}

            <section class="contact_section layout_padding-bottom">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Any Problems <br></br>
                            Any Questions
                        </h2>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-5  offset-md-1">
                            <div class="contact_form">
                                <h4>
                                    Get In touch
                                </h4>
                                <form action="">
                                    <input type="text" placeholder="Name"></input>
                                    <input type="text" placeholder="Phone Number"></input>
                                    <input type="text" placeholder="Message" class="message_input"></input>
                                    <button>Send</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6 px-0">
                            <div class="img-box">
                                <img src="images/contact-img.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end contact section --> */}

            {/* <!-- app section --> */}

            <section class="app_section layout_padding2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="detail-box">
                                <h2>
                                    Download Our app
                                </h2>
                                <div class="text-box">
                                    <h5>
                                        details
                                    </h5>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when distribution of letters
                                    </p>
                                </div>
                                <div class="text-box">
                                    <h5>
                                        How it works
                                    </h5>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when distribution of letters
                                    </p>
                                </div>
                                <div class="btn-box">
                                    <Link to={""}>
                                        <img src="images/playstore.png" alt=""></img>
                                    </Link>
                                    <Link to={""}>
                                        <img src="images/appstore.png" alt=""></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="img-box">
                                <img src="images/mobile.png" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end app section --> */}

            {/* <!-- why section --> */}

            <section class="why_section layout_padding">
                <div class="container">
                    <div class="heading_container">
                        <h2>
                            Why <br></br>
                            Choose Us
                        </h2>
                    </div>
                    <div class="why_container">
                        <div class="box">
                            <div class="img-box">
                                <img src="images/delivery-man-white.png" alt="" class="img-1"></img>
                                <img src="images/delivery-man-black.png" alt="" class="img-2"></img>
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Best Drivers
                                </h5>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="img-box">
                                <img src="images/shield-white.png" alt="" class="img-1"></img>
                                <img src="images/shield-black.png" alt="" class="img-2"></img>
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Safe and Secure
                                </h5>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <div class="img-box">
                                <img src="images/repairing-service-white.png" alt="" class="img-1"></img>
                                <img src="images/repairing-service-black.png" alt="" class="img-2"></img>
                            </div>
                            <div class="detail-box">
                                <h5>
                                    24x7 support
                                </h5>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- end why section --> */}            
        </div>
    )
}

export default Homepage;