import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Addstate = () => {

    const [state_name, setStateName] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [country_id, setCountryId] = React.useState("");
    const [state, setState] = React.useState("");
    const [stateid, setStateId] = React.useState("");
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


    const addstates = async (e) => {
        e.preventDefault();
        if (!state_name) {
            return false;
        }

        console.warn(state_name)

        let result = await fetch('http://localhost:3000/state/Save_State_Details', {
            method: 'POST',
            body: JSON.stringify({
                country_id, state_name
            }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        result = await result.json();
        console.log(result)
        if (result) {
            console.log("state added");
        }
        else {
            alert(result.error);
        }
    }

    const onStatechangeHandel = (e) => {

        setCountryId(e.target.value);
        // setStateStatus(false);
        // getAllState(e.target.value);
    };


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
                    <h1>Add state</h1>
                    <div>
                        <select className='ddlcountry' name="country" value={country_id} onChange={(e) => onStatechangeHandel(e)} style={{height:"25px",fontSize:"medium"}}>
                            <option value={0}>----Select Country----</option>

                            {
                                country.length > 0 ? country.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.country_name}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }
                        </select>
                    </div>
                    <input type="text" placeholder="add state" value={state_name} onChange={(e) => { setStateName(e.target.value) }} style={{height:"25px",fontSize:"medium"}} />
                    <br /><button type="button" onClick={addstates} class='submit-btn' style={{marginBottom:"10%"}}> Add </button>
                </div>
            </div>
        </div>
    )
}
export default Addstate;