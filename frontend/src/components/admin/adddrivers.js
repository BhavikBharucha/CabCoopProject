import React from 'react'
import { Link } from 'react-router-dom';

const AdminAdddriver = () => {
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
                    <h3 style={{marginTop:"-10px"}}>Admin Add Drivers</h3>
                    <ul >
                        <li><Link to={"/addahome"}>Homepage</Link></li>
                        <li ><Link to={"/managedriveragent"}>List</Link></li>
                        <li ><Link to={"/adadddrivers"}> Add Drivers</Link></li>
                        <li ><Link to={"#"}>Item 3</Link></li>
                    </ul>
                </nav>
                <div className='inputbox'>
                    First Name :-
                    <input type='text' name='first_name' className='inputbox' placeholder='enter first name'></input>
                </div>
                <div className='inputbox'>
                    Last Name :-
                    <input type='text' name='last_name' className='inputbox' placeholder='enter last name'></input> 
                </div>
                <div className='inputbox'>
                    Email Id :-
                    <input type='email' name='emailid' className='inputbox' placeholder='enter email id'></input>
                </div>
                <div className='inputbox'>
                    Phone Number:-
                    <input type='number' name='phonenumber' className='inputbox' placeholder='enter phone number'></input>
                </div>
                <div className='inputbox'>
                    City :-
                    <input type='text' name='city' className='inputbox' placeholder='enter city name'></input> 
                </div>
                <div className='inputbox'>
                    Licence photo (front):- 
                    <input type='file' name='licence_fphoto' className='inputbox' placeholder='attach licence front photo'></input>
                </div>
                <div className='inputbox'>
                    Licence photo (back):- 
                    <input type='file' name='licence_bphoto' className='inputbox' placeholder='attach licence back photo'></input>
                </div>
                <div className='inputbox'>
                    Licence Number :-
                    <input type='text' name='licence_number' className='inputbox' placeholder='enter licence number'></input>
                </div>
                <div className='inputbox'>
                    Licence issue date :- 
                    <input type='date' name='licence_issueddate' className='inputbox' placeholder='enter licence issue date'></input>
                </div>
                <div className='inputbox'>
                    Licence validity date :- 
                    <input type='date' name='licence_validdate' className='inputbox' placeholder='enter licence validity date'></input>
                </div>
                
                <button style={{ padding: "5px",marginTop:"5%" ,backgroundColor: "orange", border: "none", borderRadius: "10px", cursor: "pointer" }} type="button"  className="btnsn">Add Driver</button>

            </div>

        </div>
        )
}

export default AdminAdddriver;
