import React from 'react'
import { Link } from 'react-router-dom';

const DriverAgenthome = () => {
    return (    
        <div>
            <div class="adsidebar">
                <img src="./logo.png" alt="logo" className='images' ></img>
                <Link to={"/driveragenthome"}>Dashboard</Link>
                <Link to={"/adddriver"}>add driver</Link>
                <Link to={""}>Drivers</Link>
            </div >
            <div className="admain">
                <nav className="navv">
                    <h3 style={{marginTop:"-10px"}}>Driver Agent main Dashboard</h3>
                    <ul >
                        <li ><Link  to={"#"}>Item 1</Link></li>
                        <li ><Link  to={"#"}>Item 2</Link></li>
                        <li ><Link  to={"#"}>Item 3</Link></li>
                    </ul>
                </nav>
                hello
            </div>

        </div >
    )
}
export default DriverAgenthome;