import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

const CustomerAgent = () => {

    const [isContainerActive, setIsContainerActive] = React.useState(false);

    const [company_name, setCompanyName] = React.useState("");
    const [brand_name, setBrandName] = React.useState("");
    const [owner_name, setOwnerName] = React.useState("");
    const [mobile_number, setMobileNo] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [city, setCity] = React.useState("");
    const [cityid, setCityId] = React.useState("");
    const [state, setState] = React.useState("");
    const [stateid, setStateId] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [countryid, setCountryId] = React.useState("");
    const [gst_number, setGSTNumber] = React.useState("");
    const [gumastadhara_number, setGumastadhara] = React.useState("");
    const [company_pancard, setCompanyPanCard] = React.useState("");
    const [owner_adharcard, setOwnerAdharCard] = React.useState("");
    const [owner_pancard, setOwnerPanCard] = React.useState("");
    const [company_address, setCompanyAddress] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [statestatus, setStateStatus] = useState(true);
    const [citystatus, setCityStatus] = useState(true);

    const navigate = useNavigate();

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

        // if (!company_name || !brand_name || !owner_name || !mobile_number || !email || !cityid || !stateid || !countryid || !gst_number || !gumastadhara_number ||
        //     !company_pancard || !owner_adharcard || !owner_pancard || !company_address || !password) {
        //     return false;
        // }
        // return console.warn(company_name,brand_name,owner_name,mobile_number,email,cityid,stateid,countryid,gst_number,gumastadhara_number,company_pancard,owner_adharcard,owner_pancard,company_address,password);

        // let result = await fetch('http://localhost:3000/customeragent/Customer_Agent_Registration', {
        //     method: 'post',
        //     body: JSON.stringify({
        //         company_name, brand_name, owner_name, mobile_number, email, countryid, stateid, cityid,gst_number,
        //         gumastadhara_number, company_pancard, owner_adharcard, owner_pancard, company_address, password
        //     }),
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        // });
        // result = await result.json();
        // return console.log(result);

        const formdata = new FormData();

        formdata.append("company_name", company_name);
        formdata.append("brand_name", brand_name);
        formdata.append("owner_name", owner_name);
        formdata.append("mobile_number", mobile_number);
        formdata.append("email", email);
        formdata.append("cityid", cityid);
        formdata.append("stateid", stateid);
        formdata.append("countryid", countryid);
        formdata.append("gst_number", gst_number);
        formdata.append("gumastadhara_number", gumastadhara_number);
        formdata.append("company_pancard", company_pancard);
        formdata.append("owner_adharcard", owner_adharcard);
        formdata.append("owner_pancard", owner_pancard);
        formdata.append("company_address", company_address);
        formdata.append("password", password);

        e.preventDefault();

        const config = {
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const result = await axios.post(
            "http://localhost:3000/customeragent/Customer_Agent_Registration",
            formdata, config
        );

        if (result) {
            swal({
                title: "CustomerAgent Registration",
                text: "CustomerAgent Registered Successfully!",
                icon: "success",
            })
            navigate("/simplogin");
            console.log("Registration of Customer Agent is successfull");
        }
        else {
            alert(result.error);
        }
    }

    const handlechangeOne = (e) => {
        setGSTNumber(e.target.files[0])
    }
    const handlechangetwo = (e) => {
        setGumastadhara(e.target.files[0])
    }
    const handlechangethree = (e) => {
        setCompanyPanCard(e.target.files[0])
    }
    const handlechangefour = (e) => {
        setOwnerAdharCard(e.target.files[0])
    }
    const handlechangefive = (e) => {
        setOwnerPanCard(e.target.files[0])
    }


    return (
        <div class="body">
            {/* {console.log(values)} */}
            {/* <div id="homebtn">
                <Link to={"/"}><a><i class="fa-solid fa-house"></i></a></Link>
            </div> */}
            <div class="form-container sign-up-form" style={{ width: "1000px" }}>

                <div class="form-box sign-up-box">

                    <h4>Customer Agent Sign Up</h4>
                    <div class="sliding-link">
                        <p>Already a member?</p>
                        <span class="sign-in-btn">
                            <Link to={"/simplogin"}>
                                Sign in</Link>
                        </span>
                    </div>
                    <form class="box2" encType='multipart/form-data'>
                        <div class="box1">
                            <div style={{width:"450px"}}>
                                <div class="field" style={{marginTop:"30px",marginBottom:"30px"}}>
                                    <i class="fa-regular fa-building"></i>
                                    <input type="text" name="company_name" value={company_name} onChange={(e) => { setCompanyName(e.target.value) }} placeholder="Company Name" />
                                </div>
                                <div class="field" style={{marginTop:"60px",marginBottom:"30px"}}>
                                    <i class="fa-regular fa-copyright"></i>
                                    <input type="text" name="brand_name" value={brand_name} onChange={(e) => { setBrandName(e.target.value) }} placeholder="Brand Name" />
                                </div>
                                <div class="field" style={{marginTop:"60px",marginBottom:"30px"}}>
                                    <i class="fa-regular fa-user"></i>
                                    <input type="text" name="owner_name" value={owner_name} onChange={(e) => { setOwnerName(e.target.value) }} placeholder="Owner Name" />
                                </div>
                                <div class="field" style={{marginTop:"60px",marginBottom:"30px"}}>
                                    <i class="fa-solid fa-phone"></i>
                                    <input type="number" onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                        maxlength="10" name="mobile_number" value={mobile_number} onChange={(e) => { setMobileNo(e.target.value) }} placeholder="Mobile Number" />
                                </div>
                                <div class="field" style={{marginTop:"60px",marginBottom:"30px"}}>
                                    <i class="fa-solid fa-at"></i>
                                    <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email ID" />
                                </div>


                                <div class="field" style={{marginTop:"33px",marginBottom:"30px",justifyContent:"left"}}>
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

                                <div class="field" style={{marginTop:"33px",marginBottom:"30px",justifyContent:"left"}}>
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

                                <div class="field" style={{marginTop:"33px",marginBottom:"30px",justifyContent:"left"}}>
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
                            <div style={{width:"450px"}}>

                                <div class="field">
                                    <i class="fa-solid fa-address-book"></i><p>GST number</p>
                                    <input className="" type="file" onChange={handlechangeOne} placeholder='gst_number' name="gst_number" ></input>
                                    {/* <input type="number" name="gst_number" value={gst_number} onChange={(e) => { setGSTNumber(e.target.value) }} placeholder="GST Number" /> */}
                                </div>

                                <div class="field">
                                    <i class="fa-regular fa-address-card"></i><p>Gumastadhara number</p>
                                    <input className="" type="file" onChange={handlechangetwo} placeholder='gumastadhara_number' name="gumastadhara_number" ></input>
                                    {/* <input type="number" name="gumastadhara_number" value={gumastadhara_number} onChange={(e) => { setGumastadhara(e.target.value) }} placeholder="Gumastadhara Number" /> */}
                                </div>
                                <div class="field">
                                    <i class="fa-regular fa-id-badge"></i><p>Company Pancard</p>
                                    <input className="" type="file" onChange={handlechangethree} placeholder='company_pancard' name="company_pancard" ></input>
                                    {/* <input type="number" name="company_pancard" value={company_pancard} onChange={(e) => { setCompanyPanCard(e.target.value) }} placeholder="Company Pancard" /> */}
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-book"></i><p>Owner AdharCard</p>
                                    <input className="" type="file" onChange={handlechangefour} placeholder='owner_adharcard' name="owner_adharcard" ></input>
                                    {/* <input type="number" name="owner_adharcard" value={owner_adharcard} onChange={(e) => { setOwnerAdharCard(e.target.value) }} placeholder="Owner Adharcard" /> */}
                                </div>
                                <div class="field">
                                    <i class="fa-solid fa-id-card-clip"></i><p>Owner PanCard</p>
                                    <input className="" type="file" onChange={handlechangefive} placeholder='owner_pancard' name="owner_pancard" ></input>
                                    {/* <input type="number" name="owner_pancard" value={owner_pancard} onChange={(e) => { setOwnerPanCard(e.target.value) }} placeholder="Owner Pancard" /> */}
                                </div>

                                <div class="field">
                                    <i class="fa-solid fa-map-pin"></i>
                                    <input type="text" name="company_address" value={company_address} onChange={(e) => { setCompanyAddress(e.target.value) }} placeholder="Company Address" />
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
export default CustomerAgent;