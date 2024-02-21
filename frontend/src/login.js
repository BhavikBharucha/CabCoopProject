import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from "sweetalert";

const Loginpage = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    const simplelogin = async (e) => {

        try {
            e.preventDefault();

            //return console.log(email,password);
            if (!email || !password) {
                return false;
            }

            let result = await fetch('http://localhost:3000/login', {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            result = await result.json();

            //return console.log(result.role);

            if (result.error) {
                alert(result.error)
            }

            if (result === "Your status is deactive right now!!") {
                return swal({
                    title: "Login",
                    text: "Your status is deactive right now!!",
                    icon: "warning",
                });
            } else {
                if (result.auth) {

                    if (result.role === "admin") {
                        sessionStorage.setItem("user", JSON.stringify(result.result));
                        //sessionStorage.setItem("token", JSON.stringify(result.auth));
                        sessionStorage.setItem("role", JSON.stringify("admin"));
                        sessionStorage.setItem("userid", JSON.stringify(result.result._id));
                        swal({
                            title: "Login",
                            text: "Admin Login Successfull!",
                            icon: "success",
                        });

                        navigate("/adminhomepage");

                    }

                    if (result.role === "customer") {

                        sessionStorage.setItem("user", JSON.stringify(result.result));
                        //sessionStorage.setItem("token", JSON.stringify(result.auth));
                        sessionStorage.setItem("role", JSON.stringify("company"));
                        sessionStorage.setItem("userid", JSON.stringify(result.result._id));
                        swal({
                            title: "Login",
                            text: "Customer Login Successfull!",
                            icon: "success",
                        });


                        navigate("/");

                    }

                    if (result.role === "customeragent") {
                        sessionStorage.setItem("user", JSON.stringify(result.result));
                        //sessionStorage.setItem("token", JSON.stringify(result.auth));
                        sessionStorage.setItem("role", JSON.stringify("customeragent"));
                        sessionStorage.setItem("userid", JSON.stringify(result.result._id));
                        swal({
                            title: "Login",
                            text: "CustomerAgent Login Successfull!",
                            icon: "success",
                        });

                        navigate("/agenthomepage");
                    }

                    if (result.role === "driveragent") {
                        sessionStorage.setItem("user", JSON.stringify(result.result));
                        //sessionStorage.setItem("token", JSON.stringify(result.auth));
                        sessionStorage.setItem("role", JSON.stringify("driveragent"));
                        sessionStorage.setItem("userid", JSON.stringify(result.result._id));
                        swal({
                            title: "Login",
                            text: "DriverAgent Login Successfull!",
                            icon: "success",
                        });

                        navigate("/driveragenthome");
                    }

                } else {
                    swal({
                        title: "Login",
                        text: "Invalid Username or Password!",
                        icon: "warning",
                    });
                }
            }
        } catch (err) {
            console.log(err);
        }



    }

    return (
        <div class="body">
            {/* {console.log(values)} */}
            {/* <div id="homebtn">
                <Link to={"/"}><a><i class="fa-solid fa-house"></i></a>
                </Link></div> */}
            <div class="form-container sign-up-form">

                <div class="form-box sign-up-box">
                    <h2>Login In</h2>
                    <div class="sliding-link">
                        <p>Become a member as driver?</p>
                        <span class="sign-in-btn">
                            <Link to={"/Driveragent"}>
                                Sign Up
                            </Link>
                        </span>
                    </div>
                    <div class="sliding-link" style={{ marginTop: "-6%" }}>
                        <p>Become a member as Customer agent?</p>
                        <span class="sign-in-btn">
                            <Link to={"/Customeragent"}>
                                Sign Up
                            </Link>
                        </span>
                    </div>
                    <div class="sliding-link" style={{ marginTop: "-6%" }}>
                        <p>Become a member as Customer?</p>
                        <span class="sign-in-btn">
                            <Link to={"/customerrg"}>
                                Sign Up
                            </Link>
                        </span>
                    </div>
                    <form class="box2">
                        <div class="box1">
                            <div>
                                <div class="field">
                                    <i class="fa-solid fa-at"></i>
                                    <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email ID" />
                                </div>
                                <div class="field">
                                    <i class="fa-regular fa-user"></i>
                                    <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                </div>
                                <div class="field">
                                    <Link to={""}>forgot password ?</Link>
                                </div>
                            </div>

                        </div>
                        <button type="button" class='submit-btn' onClick={simplelogin}>Login In</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
// ending
export default Loginpage;