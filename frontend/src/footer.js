import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section class="info_section layout_padding-top layout_padding2-bottom">
                <div class="container">
                    <div class="box">
                        <div class="info_form">
                            <h4>
                                Subscribe Our Newsletter
                            </h4>
                            <form action="">
                                <input type="text" placeholder="Enter your email"></input>
                                <div class="d-flex justify-content-end">
                                    <button>

                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="info_links">
                            <ul>
                                <li class="">
                                    <Link to={"/"}><a class="" >Home</a></Link>
                                </li>
                                <li class="">
                                <Link to={"/aboutus"}><a class="" > About</a></Link>
                                </li>
                                <li class="">
                                <Link to={"/services"}><a class="" > Services </a></Link>
                                </li>
                                <li class="">
                                <Link to={"/news"}><a class="" > News</a></Link>
                                </li>
                                <li class="">
                                <Link to={"/contactus"}><a class="" >Contact Us</a></Link>
                                </li>
                                <li class="">
                                <Link to={"/simplogin"}><a class="" >Login</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div class="info_social">
                            <div>
                                <Link to={""}>
                                    <img src="images/fb.png" alt=""></img>
                                </Link>
                            </div>
                            <div>
                                <Link to={""}>
                                    <img src="images/twitter.png" alt=""></img>
                                </Link>
                            </div>
                            <div>
                                <Link to={""}>
                                    <img src="images/linkedin.png" alt=""></img>
                                </Link>
                            </div>
                            <div>
                                <Link to={""}>
                                    <img src="images/instagram.png" alt=""></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <!-- end info section --> */}

            {/* <!-- footer section --> */}
            <section class="container-fluid footer_section">
                <div class="container">
                    <p>
                        &copy; 2023 All Rights Reserved By S.K. & Team
                    </p>
                </div>
            </section>
            {/* <!-- footer section --> */}

        </div>
    )
}

export default Footer;