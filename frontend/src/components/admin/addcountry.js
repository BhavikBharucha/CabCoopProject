import React from 'react';
import { Link } from 'react-router-dom';

const Addcountry = () => {

    const [country_name, setCountryName] = React.useState("");

    const addcountries = async (e) => {
        e.preventDefault();
        if (!country_name) {
            return false;
        }

        let result = await fetch('http://localhost:3000/country/Save_Country_Details', {
            method: 'POST',
            body: JSON.stringify({
                country_name
            }),
            headers: {
                "Content-Type": "application/json"
            },
        });

        //return console.log(country_name);
        result = await result.json();

        if (result) {
            console.log("country added");
        }
        else {
            alert(result.error);
        }
    }

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
            <div className='admain'>
                <nav className="navv">
                    <h3 style={{ marginTop: "-10px" }}>Admin Locations Dashboard</h3>
                    <ul >
                        <li><Link to={"/adlocation"}>Homepage</Link></li>
                        <li ><Link to={"/addcountry"}>Country</Link></li>
                        <li ><Link to={"/addstate"}>State</Link></li>
                        <li ><Link to={"/addcity"}>City</Link></li>
                    </ul>
                </nav>
                <div style={{ marginLeft: "10px" }}>
                    <h1>Add country</h1>
                    <input type="text" value={country_name} onChange={(e) => { setCountryName(e.target.value) }}
                        placeholder="add country" style={{height:"25px",fontSize:"medium"}} />
                        <br />
                    <button type='button' onClick={addcountries} class='submit-btn' style={{marginBottom:"10%"}}> Add </button>

                    
                </div>
            </div>
        </div>
    )
}
export default Addcountry;