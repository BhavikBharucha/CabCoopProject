import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const DriverAgent = () => {

  const [isContainerActive, setIsContainerActive] = React.useState(false);

  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [date_of_birth, setDateOfBirth] = React.useState("");
  const [contact_number, setContactNo] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [countryid, setCountryId] = React.useState("");
  const [state, setState] = React.useState("");
  const [stateid, setStateId] = React.useState("");
  const [city, setCity] = React.useState("");
  const [cityid, setCityId] = React.useState("");
  const [postal_code, setPostelCode] = React.useState("");
  const [license_number, setLicenseNumber] = React.useState("");
  const [license_expire, setLicenseExpire] = React.useState("");
  const [username, setUserName] = React.useState("");
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

  const REGISTERDriverAgent = async (e) => {
    e.preventDefault();
    if (!first_name || !last_name || !date_of_birth || !contact_number || !email || !address || !country || !countryid || !state ||
      !stateid || !cityid || !postal_code || !license_number || !license_expire || !username || !password) {
      return false;
    }
    // return console.warn(fist_name,last_name,date_of_birth,email,contact_number,address,country,countryid,state,stateid,cityid,postal_code,license_number,license_expire,username,password);

    let result = await fetch('http://localhost:3000/driveragent/Driver_Agent_Registration', {
      method: 'post',
      body: JSON.stringify({
        first_name, last_name, date_of_birth, email, contact_number, address, country,
        countryid, state, stateid, cityid, postal_code, license_number, license_expire, username, password
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    result = await result.json();
    //return console.log(result);
    if (result) {
      console.log("Registration of Driver Agent is successfull");
    }
    else {
      alert(result.error);
    }
  }


  return (
    <div class="body">
      {/* <div id="homebtn">
        <Link to={"/"}> <a><i class="fa-solid fa-house"></i></a></Link>
      </div> */}
      <div class="form-container sign-up-form">

        <div class="form-box sign-up-box">
          <h4>Driver Agent Sign Up</h4>
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
                  <i class="fa-solid fa-at"></i>
                  <input type="text" name="first_name" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value) }} value={first_name} />
                </div>

                <div class="field">
                  <i class="fa-regular fa-user"></i>
                  <input type="text" name="last_name" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} value={last_name} />
                </div>

                <div class="field">
                  <i class="fa-regular fa-user"></i>
                  <input type="date" name="date_of_birth" placeholder="Date Of Birth" onChange={(e) => { setDateOfBirth(e.target.value) }} value={date_of_birth} onfocus="this.type='date'" onblur="this.type='text'" />
                </div>

                <div class="field">
                  <i class="fa-regular fa-user"></i>
                  <input type="email" name="email" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
                </div>

                <div class="field">
                  <i class="fa-solid fa-calendar-days"></i>
                  <input onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                    maxlength="10" type="number" name="contact_number" placeholder="contact_number" onChange={(e) => { setContactNo(e.target.value) }} value={contact_number} />
                </div>

                <div class="field">
                  <i class="fa-solid fa-at"></i>
                  <input type="text" name="address" placeholder="Address" onChange={(e) => { setAddress(e.target.value) }} value={address} />
                </div>
                <div class="field">
                  <i class="fa-solid fa-id-card"></i>
                  <input type="text" name="username" placeholder="User Name" onChange={(e) => { setUserName(e.target.value) }} value={username} />
                </div>
              </div>

              <div>
                <div class="field">
                  <i class="fa-solid fa-map-location-dot"></i>
                  { /* <  input type="text" name="country" placeholder="Country" onChange={onChangeHandler} value={values.country} /> */}
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
                  {/*  <input type="text" name="state" placeholder="State" onChange={onChangeHandler} value={values.state} /> */}
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
                  {/* <input type="text" name="city" placeholder="City" onChange={onChangeHandler} value={values.city} /> */}
                  <select className='ddlcity' name="city" disabled={citystatus} value={city} onChange={(e) => setCityId(e.target.value)}>
                    <option value={0}>----Select City----</option>

                    {
                      city.length > 0 ? city.map((item, index) => (
                        <option key={item._id} value={item._id}>{item.city_name}</option>
                      ))
                        : <option value={0}>No Records Founds!</option>
                    }
                  </select>
                </div>

                <div class="field">
                  <i class="fa-solid fa-map-pin"></i>
                  <input type="number" name="postal_code" placeholder="Postal Code" onChange={(e) => { setPostelCode(e.target.value) }} value={postal_code} />
                </div>

                <div class="field">
                  <i class="fa-solid fa-id-card"></i>
                  <input type="text" name="license_number" placeholder="License Number" onChange={(e) => { setLicenseNumber(e.target.value) }} value={license_number} />
                </div>

                <div class="field">
                  <i class="fa-regular fa-calendar"></i>
                  <input type="date" name="license_expire" placeholder="License Expiry" onChange={(e) => { setLicenseExpire(e.target.value) }} value={license_expire} onfocus="this.type='date'" onblur="this.type='text'" />
                </div>

                <div class="field">
                  <i class="fa-solid fa-id-card"></i>
                  <input type="password" name="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                </div>

              </div>

            </div>
            <button type="button" class='submit-btn' onClick={REGISTERDriverAgent}>Sign Up</button>
          </form>

        </div>
      </div>
    </div>
  );

}
// ending
export default DriverAgent;