import React from 'react'
import { Link } from 'react-router-dom';

const Driverhome = () => {
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
                    <h3 style={{ marginTop: "-10px" }}>Driver main Dashboard</h3>
                    <ul >
                        <li ><Link to={"#"}>Item 1</Link></li>
                        <li ><Link to={"#"}>Item 2</Link></li>
                        <li ><Link to={"#"}>Item 3</Link></li>
                    </ul>
                </nav>
                hello
            </div>

        </div >
    )
}
export default Driverhome;