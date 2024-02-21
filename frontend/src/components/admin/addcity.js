import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Addcity = () => {

    const [city_name, setCityName] = React.useState("");
    const [state_name, setStateName] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [countryid, setCountryId] = React.useState("");
    const [state, setState] = React.useState("");
    const [state_id, setStateId] = React.useState("");
    const [city, setCity] = React.useState("");
    const [cityid, setCityId] = React.useState("");
    const [statestatus, setStateStatus] = useState(true);
    const [citystatus, setCityStatus] = useState(true);

    useEffect(() => {
        getAllCountry();
    }, [])

    //Get all country
    const getAllCountry = async () => {
        try {
            let result = await fetch("http://localhost:3000/country/ListCountry", {
                method: "GET"
            });

            result = await result.json();

            //return console.log(result.data);

            if (result) {
                setCountry(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // get all states
    const getAllState = async (countryid) => {
        try {
            let result = await fetch(`http://localhost:3000/state/ListStateBasedOnCountryId/${countryid}`, {
                method: "GET"
            });

            result = await result.json();

            //return console.log(result.data);

            if (result) {
                setState(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const onStatechangeHandel = (e) => {
        setCountryId(e.target.value);
        setStateStatus(false);
        getAllState(e.target.value);
    };

    const onCityChangeHandel = (e) => {
        setCityStatus(false);
        setStateId(e.target.value);
        // getAllCity(e.target.value);
    }

    const addcities = async (e) => {
        e.preventDefault();
        if (!city_name) {
            return false;
        }

        let result = await fetch('http://localhost:3000/city/Save_City_Details', {
            method: 'POST',
            body: JSON.stringify({
                state_id, city_name
            }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        result = await result.json();

        if (result) {
            console.log("city added");
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
            <div class="admain">
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
                    <h1>Add city</h1>
                    <div>
                        <select className='ddlcountry' name="country" value={countryid} onChange={(e) => onStatechangeHandel(e)} style={{ height: "25px", fontSize: "medium" }}>
                            <option value={0}>----Select Country----</option>

                            {
                                country.length > 0 ? country.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.country_name}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }
                        </select>
                    </div>
                    <div>
                        <select className='ddlstate' name="state" disabled={statestatus} value={state_id} onChange={(e) => onCityChangeHandel(e)} style={{ height: "25px", fontSize: "medium" }}>
                            <option value={0}>----Select State----</option>

                            {
                                state.length > 0 ? state.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.state_name}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }
                        </select>
                    </div>
                    <input type="text" placeholder="add city" value={city_name} onChange={(e) => { setCityName(e.target.value) }} style={{ height: "25px", fontSize: "medium" }}/>
                   <br />
                    <button type="button" class='submit-btn' onClick={addcities} style={{marginBottom:"10%"}}> Add </button>
                </div>
            </div>

        </div>
    )
}
export default Addcity;