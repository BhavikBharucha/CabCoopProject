import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminManageCABookedCars = () => {
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
                <Link to={"/adpayment"}>Payment</Link></div >
            <div className="admain">
                <nav className="navv">
                    <h3 style={{ marginTop: "-10px" }}>Admin Manage CA Booked Car Dashboard</h3>
                    <ul >
                        <li><Link to={"/adminmanagecabookedcars"}>Homepage</Link></li>
                        <li ><Link to={"/managedbookedcarslist"}>List</Link></li>
                        {/* <li ><a href="#">Item 2</a></li> */}
                        {/* <li ><a href="#">Item 3</a></li> */}
                    </ul>
                </nav>
                list of Booked Cars Dashboard
            </div>
        </div>
    )
}
export default AdminManageCABookedCars;
