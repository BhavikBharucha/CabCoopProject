import React, { useRef } from "react";
import { Link } from "react-router-dom";

const AdminLocationhome = () => {
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
                <Link to={"/adpayment"}>Payment</Link>
            </div>
            <div className="admain">
                <nav className="navv">
                    <h3 style={{ marginTop: "-10px" }}>Admin Locations Dashboard</h3>
                    <ul >
                        <li><Link to={"/adlocation"}>Homepage</Link></li>
                        <li ><Link to={"/addcountry"}>Country</Link></li>
                        <li ><Link to={"/addstate"}>State</Link></li>
                        <li ><Link to={"/addcity"}>City</Link></li>
                    </ul>
                </nav>
                list of countries, states and cities...
            </div>
        </div >
    )
}
export default AdminLocationhome;