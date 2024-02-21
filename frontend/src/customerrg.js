import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Customerrg = () => {

    const [isContainerActive, setIsContainerActive] = React.useState(false);

    // const [company_name, setCompanyName] = React.useState("");
    const [first_name, setFirstName] = React.useState("");
    const [last_name, setLastName] = React.useState("");
    const [contactno, setContactNo] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [city, setCity] = React.useState("");
    const [cityid, setCityId] = React.useState("");
    const [state, setState] = React.useState("");
    const [stateid, setStateId] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [countryid, setCountryId] = React.useState("");
    // const [gst_number, setGSTNumber] = React.useState("");
    // const [gumastadhara_number, setGumastadhara] = React.useState("");
    // const [company_pancard, setCompanyPanCard] = React.useState("");
    // const [owner_adharcard, setOwnerAdharCard] = React.useState("");
    // const [owner_pancard, setOwnerPanCard] = React.useState("");
    const [residential_address, setResAddress] = React.useState("");
    const [password, setPassword] = React.useState("");

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

    const RegisterCustomerAgent = async (e) => {
        e.preventDefault();
        // if (!company_name || !brand_name || !owner_name || !mobile_number || !email || !cityid || !stateid || !countryid || !gst_number || !gumastadhara_number ||
        //     !company_pancard || !owner_adharcard || !owner_pancard || !company_address || !password) {
        //     return false;
        // }
        // return console.warn(company_name,brand_name,owner_name,mobile_number,email,cityid,stateid,countryid,gst_number,gumastadhara_number,company_pancard,owner_adharcard,owner_pancard,company_address,password);

        let result = await fetch('http://localhost:3000/customer/CustomerRegistration', {
            method: 'post',
            body: JSON.stringify({
                first_name, last_name, contactno, email, countryid, stateid, cityid,
                residential_address, password
            }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        result = await result.json();
        //   return console.log(result);
        if (result) {
            console.log("Registration of Customer is successfull");
        }
        else {
            alert(result.error);
        }
    }

    return (
        <div class="body">
            {/* {console.log(values)} */}
            {/* <div id="homebtn">
                <Link to={"/"}><a><i class="fa-solid fa-house"></i></a></Link>
            </div> */}
            <div class="form-container sign-up-form">

                <div class="form-box sign-up-box">

                    <h4>Customer Sign Up</h4>
                    <div class="sliding-link">
                        <p>Already a member?</p>
                        <span class="sign-in-btn">
                            <Link to={"/simplogin"}>
                                Sign in</Link>
                        </span>
                    </div>
                    <form class="box2">
                        <div class="box1">
                            <div>
                                <div class="field">
                                    <i class="fa-regular fa-building"></i>
                                    <input type="text" name="first_name" value={first_name} onChange={(e) => { setFirstName(e.target.value) }} placeholder="first Name" />
                                </div>
                                <div class="field">
                                    <i class="fa-regular fa-copyright"></i>
                                    <input type="text" name="last_name" value={last_name} onChange={(e) => { setLastName(e.target.value) }} placeholder="last Name" />
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-phone"></i>
                                    <input type="number" onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                        maxlength="10" name="contactno" value={contactno} onChange={(e) => { setContactNo(e.target.value) }} placeholder="Mobile Number" />
                                </div>


                                <div class="field">
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    {/* <input type="text" name="country" value={country} onChange={(e) => { setCountry(e.target.value) }} placeholder="Country" /> */}

                                    <select className='ddlcountry' name="country" value={countryid} onChange={(e) => onStatechangeHandel(e)}>
                                        <option value={0}>----Select Country----</option>

                                        {
                                            country.length > 0 ? country.map((item, index) => (
                                                <option key={item._id} value={item._id}>{item.country_name}</option>
                                            ))
                                                : <option value={0}>No Records Founds!</option>
                                        }
                                    </select>
                                </div>

                                <div class="field">
                                    <i class="fa-solid fa-location-arrow"></i>
                                    {/* <input type="text" name="State" value={state} onChange={(e) => { setState(e.target.value) }} placeholder="State" /> */}

                                    <select className='ddlstate' name="state" disabled={statestatus} value={stateid} onChange={(e) => onCityChangeHandel(e)}>
                                        <option value={0}>----Select State----</option>

                                        {
                                            state.length > 0 ? state.map((item, index) => (
                                                <option key={item._id} value={item._id}>{item.state_name}</option>
                                            ))
                                                : <option value={0}>No Records Founds!</option>
                                        }
                                    </select>
                                </div>

                                <div class="field">
                                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                                    {/* <input type="text" name="city" value={city} onChange={(e) => { setCity(e.target.value) }} placeholder="city" /> */}

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

                            </div>
                            <div>
                                <div class="field">
                                    <i class="fa-solid fa-map-pin"></i>
                                    <input type="text" name="residential_address" value={residential_address} onChange={(e) => { setResAddress(e.target.value) }} placeholder="Residential Address" />
                                </div>
                                
                                <div class="field">
                                    <i class="fa-solid fa-at"></i>
                                    <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email ID" />
                                </div>

                                <div class="field">
                                    <i class="fa-regular fa-user"></i>
                                    <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                </div>
                            </div>

                        </div>
                        <button type="button" class='submit-btn' onClick={RegisterCustomerAgent}>Sign Up</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
// ending
export default Customerrg;