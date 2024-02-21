import React from 'react'
import { Link } from 'react-router-dom';

const Bookings = () => {
    return (    
        <div>
            <div class="adsidebar">
                <img src="./logo.png" alt="logo" className='images' ></img>
                <Link to={"/driverhomepage"}>Dashboard</Link>
                <Link to={"/driverbookings"}>Bookings</Link>
                <Link to={""}>Payment</Link>
            </div >
            <div className="admain">
                <nav className="navv">
                    <h3 style={{marginTop:"-10px"}}>Driver bookings Dashboard</h3>
                    <ul >
                        <li ><a  href="#">Item 1</a></li>
                        <li ><a  href="#">Item 2</a></li>
                        <li ><a  href="#">Item 3</a></li>
                    </ul>
                </nav>
                hello
            </div>

        </div >
    )
}
export default Bookings;