import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Admincarhome = () => {
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
                    <h3 style={{marginTop:"-10px"}}>Admin car Dashboard</h3>
                    <ul >
                        <li ><Link  to={"/adcardash"}>Homepage</Link></li>
                        <li ><Link  to={"/Addcar"}>Add car</Link></li>
                        <li ><Link to={"/managecarlist"}>List</Link></li>
                    </ul>
                </nav>
                Hello
            </div>

        </div >
    )
}
export default Admincarhome;