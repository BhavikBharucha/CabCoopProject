import React from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Fixedplaces = () => {

    const Logout = () => {
        sessionStorage.clear();
        navigate("/simplogin");
    }

    const navigate = useNavigate();

    return (    
        <div>
            <div class="adsidebar">
                <img src="./logo.png" alt="logo" className='images' ></img>
                <Link to='/agenthomepage'>Dashboard</Link>
                <Link to='/managecacab'>ManageBooked Cab</Link>
                <Link to='/cabbook'>Cab Book</Link>
                <Link to='/fixedplaces'>Fixed Price</Link>
                <Link to='#'>Payment</Link>
            </div >
            <div className="admain">
                <nav className="navv">
                    <h3 style={{marginTop:"-10px"}}>Fixed places </h3>
                    <ul >
                        <li><Link to='/simplogin' onClick={Logout}>Logout</Link></li>
                        {/* <li ><a  href="#">Item 2</a></li>
                        <li ><a  href="#">Item 3</a></li> */}
                    </ul>
                </nav>
                hello
            </div>

        </div >
    )
}
export default Fixedplaces;