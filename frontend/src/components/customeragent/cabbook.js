import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cabbook = () => {

    const [customer_firstname, setCustomer_firstname] = React.useState("");
    const [customer_lastname, setCustomer_lastname] = React.useState("");
    const [customer_email, setCustomer_email] = React.useState("");
    const [customer_contact_number, setCustomer_contact_number] = React.useState("");
    const [date, setDate] = useState(new Date());
    const weekend = (date) => new Date() <= (date - 1);
    const [time, setTime] = useState('');
    const [from, setFrom] = React.useState("");
    const [to, setTo] = React.useState("");
    const [no_of_passengers, setNumber_of_passengers] = React.useState("");
    const [no_of_luggage, setNumber_of_luggage] = React.useState("");
    const [car_category, setCarcategory] = React.useState("");

    //For from
    const [city, setCity] = React.useState("");
    const [cityid, setCityId] = React.useState("");
    const [state, setState] = React.useState("");
    const [stateid, setStateId] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [countryid, setCountryId] = React.useState("");
    const [statestatus, setStateStatus] = useState(true);
    const [citystatus, setCityStatus] = useState(true);

    //For to
    const [tocity, settoCity] = React.useState("");
    const [tocityid, settoCityId] = React.useState("");
    const [tostate, settoState] = React.useState("");
    const [tostateid, settoStateId] = React.useState("");
    const [tocountry, settoCountry] = React.useState("");
    const [tocountryid, settoCountryId] = React.useState("");
    const [tostatestatus, settoStateStatus] = useState(true);
    const [tocitystatus, settoCityStatus] = useState(true);

    const [carcategoryid, setCarCategoryId] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getAllCountry(); //For From
        getAllToCountry(); //For To
        getAllCarCategory();
    }, [])

    //Get all country

    //For From
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

    const getAllCity = async (stateid) => {
        try {
            let result = await fetch(`http://localhost:3000/city/ListAllCityBasedOnState/${stateid}`, {
                method: "GET"
            });

            result = await result.json();

            //return console.log(result.data);

            if (result) {
                setCity(result.data);
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
        getAllCity(e.target.value);
    }

    //For To
    const getAllToCountry = async () => {
        try {
            let result = await fetch("http://localhost:3000/country/ListCountry", {
                method: "GET"
            });

            result = await result.json();

            //return console.log(result.data);

            if (result) {
                settoCountry(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getAllToState = async (countryid) => {
        try {
            let result = await fetch(`http://localhost:3000/state/ListStateBasedOnCountryId/${countryid}`, {
                method: "GET"
            });

            result = await result.json();

            //return console.log(result.data);

            if (result) {
                settoState(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const getAllToCity = async (stateid) => {
        try {
            let result = await fetch(`http://localhost:3000/city/ListAllCityBasedOnState/${stateid}`, {
                method: "GET"
            });

            result = await result.json();

            //return console.log(result.data);

            if (result) {
                settoCity(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const onToStatechangeHandel = (e) => {

        settoCountryId(e.target.value);
        settoStateStatus(false);
        getAllToState(e.target.value);
    };

    const onToCityChangeHandel = (e) => {
        settoCityStatus(false);
        settoStateId(e.target.value);
        getAllToCity(e.target.value);
    }

    const getAllCarCategory = async () => {
        try {
            let result = await fetch('http://localhost:3000/car/ListCarDetails', {
                method: "GET"
            });

            result = await result.json();

            //return console.log(result.data);

            if (result) {
                setCarcategory(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const BookCab = async () => {
        try {

            //return console.log(sessionStorage.getItem("userid").replace(/['"]+/g, ''));
            const customerAgent_id = sessionStorage.getItem("userid").replace(/['"]+/g, '');
            console.warn(customerAgent_id)
            // const customerAgent_id = 1234567890 

            setFrom(cityid);
            setTo(cityid);

            let result = await fetch('http://localhost:3000/cagentcab/BookCab', {
                method: "POST",
                body: JSON.stringify({ customerAgent_id, customer_firstname, customer_lastname, customer_email, customer_contact_number, date, time, from, to, no_of_passengers, no_of_luggage, carcategoryid }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            result = await result.json();
            navigate("/managecacab")
            return console.log(customerAgent_id, customer_firstname, customer_lastname, customer_email, customer_contact_number, date, time, from, to, no_of_passengers, no_of_luggage, carcategoryid);
        } catch (err) {
            console.log(err);
        }
    }

    const Logout = () => {
        sessionStorage.clear();
        navigate("/simplogin");
    }

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
                    <h3 style={{ marginTop: "-10px" }}>Cab Booking</h3>
                    <ul >
                        <li><Link to='/simplogin' onClick={Logout}>Logout</Link></li>
                        {/* <li ><a  href="#">Item 2</a></li>
                        <li ><a  href="#">Item 3</a></li> */}
                    </ul>
                </nav>
                Book a ride

                <div className='admain-content'>
                    <div >
                        <input className="inputbox" value={customer_firstname} onChange={(e) => setCustomer_firstname(e.target.value)} type="text" name="customer_firstname" placeholder="customer_firstname" />
                    </div>
                    <div >
                        <input className="inputbox" value={customer_lastname} onChange={(e) => setCustomer_lastname(e.target.value)} type="text" name="customer_lastname" placeholder="customer_lastname" />
                    </div>
                    <div >
                        <input className="inputbox" value={customer_email} onChange={(e) => setCustomer_email(e.target.value)} type="email" name="customer_email" placeholder="customer_email" />
                    </div>
                    <div >
                        <input className="inputbox" type="number" onChange={(e) => setCustomer_contact_number(e.target.value)} value={customer_contact_number} name="customer_contact_number" placeholder="customer_contact_number" />
                    </div>
                    <div className="inputbox">
                        <DatePicker
                            filterDate={weekend}
                            selected={date}
                            onChange={(date) => setDate(date)}
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                    <div class="inputbox">
                        {/* <TimePicker
                            placeholder="Select Time"
                            use12Hours
                            showSecond={false}
                            focusOnOpen={true}
                            selected={time}
                            onChange={(time) => setTime(time)}
                            format="hh:mm A"
                            value={time}
                        /> */}

                        <input type='time' value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>

                    {/* For From */}
                    <div className='inputbox'>
                        from :<br />
                        <select className='ddlcountry' name="country" value={countryid} onChange={(e) => onStatechangeHandel(e)}>
                            <option value={0}>----Select Country----</option>

                            {
                                country.length > 0 ? country.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.country_name}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }
                        </select>
                        <select className='ddlstate' name="state" disabled={statestatus} value={stateid} onChange={(e) => onCityChangeHandel(e)}>
                            <option value={0}>----Select State----</option>

                            {
                                state.length > 0 ? state.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.state_name}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }
                        </select>
                        <select className='ddlcity' name="city" disabled={citystatus} value={cityid} onChange={(e) => setCityId(e.target.value)}>
                            <option value={0}>----Select City----</option>

                            {
                                city.length > 0 ? city.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.city_name}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }
                        </select>
                    </div>
                    <br />

                    {/* For To */}
                    <div className='inputbox'>
                        To :<br />
                        <select className='ddlcountry' name="country" value={tocountryid} onChange={(e) => onToStatechangeHandel(e)}>
                            <option value={0}>----Select Country----</option>

                            {
                                tocountry.length > 0 ? tocountry.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.country_name}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }
                        </select>
                        <select className='ddlstate' name="state" disabled={tostatestatus} value={tostateid} onChange={(e) => onToCityChangeHandel(e)}>
                            <option value={0}>----Select State----</option>

                            {
                                tostate.length > 0 ? tostate.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.state_name}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }
                        </select>
                        <select className='ddlcity' name="city" disabled={tocitystatus} value={tocityid} onChange={(e) => settoCityId(e.target.value)}>
                            <option value={0}>----Select City----</option>

                            {
                                tocity.length > 0 ? tocity.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.city_name}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }
                        </select>
                    </div>
                    <br />

                    <div >
                        <select defaultValue="select number of passengers"
                            className='inputbox' value={no_of_passengers} onChange={(e) => setNumber_of_passengers(e.target.value)}>
                            <option value="">Select number of passengers</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div >
                        <select defaultValue="select number of luggage"
                            className='inputbox' value={no_of_luggage} onChange={(e) => setNumber_of_luggage(e.target.value)}>
                            <option value="">Select number of luggage</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div >
                        <select defaultValue="Select Car category"
                            className="inputbox" name="car_category" value={carcategoryid} onChange={(e) => setCarCategoryId(e.target.value)}>
                            <option value="">Select car category</option>
                            {
                                car_category.length > 0 ? car_category.map((item, index) => (
                                    <option key={item._id} value={item._id}>{item.car_category}</option>
                                ))
                                    : <option value={0}>No Records Founds!</option>
                            }

                        </select>
                    </div>
                    <div >
                        <button type="button" class='submit-btn' onClick={BookCab}>Submit</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
export default Cabbook;