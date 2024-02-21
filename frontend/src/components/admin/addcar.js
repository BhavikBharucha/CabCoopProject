import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Addcar = () => {

    const [car_owner_name, setCarOwnerName] = React.useState("");
    const [car_owner_contactno, setMobileNo] = React.useState("");
    const [car_image, setPhoto] = React.useState("");
    const [car_model, setCarmodel] = React.useState("");
    const [car_category, setCarcategory] = useState("");
    const [model_number, setModelnumber] = React.useState("");
    const [number_plate, setNumberplate] = React.useState("");
    const [date, setDate] = useState(new Date());
    const [insurance_expire_date, setInsexpdate] = React.useState("");
    const [puc_expire_date, setPucexpdate] = React.useState("");


    const navigate = useNavigate();

    const handlechange = (e) => {
        setPhoto(e.target.files[0]);
    }

    const addCar = async (e) => {
        const formdata = new FormData();

        formdata.append("car_owner_name", car_owner_name);
        formdata.append("car_owner_contactno", car_owner_contactno);
        formdata.append("car_image", car_image);
        formdata.append("car_model", car_model);
        formdata.append("car_category", car_category);
        formdata.append("model_number", model_number);
        formdata.append("number_plate", number_plate);
        formdata.append("insurance_expire_date", insurance_expire_date);
        formdata.append("puc_expire_date", puc_expire_date);

        e.preventDefault();

        // http://localhost:3000/car/SaveCarDetails

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        const result = await axios.post(
            "http://localhost:3000/car/SaveCarDetails",
            formdata, config
        );

        // result = await result.json();
        alert("car added");
        navigate("/adcardash");

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
                <Link to={"/adpayment"}>Payment</Link>
                </div >
            <div className="admain">
                <nav className="navv">
                    <h3 style={{ marginTop: "-10px" }}>Admin Add Car </h3>
                    <ul >
                        <li ><Link to={"/adcardash"}>Homepage</Link></li>
                        <li ><Link to={"/Addcar"}>add car</Link></li>
                        <li ><Link to={"/managecarlist"}>List</Link></li>
                    </ul>
                </nav>
                <div className="admain-content">
                    <div>
                        <input className="inputbox" type="text" value={car_owner_name} onChange={(e) => { setCarOwnerName(e.target.value) }} name="car_owner_name" placeholder="car_owner_name" />
                    </div>
                    <div>
                        <input className="inputbox" type="text" value={car_owner_contactno} name="car_owner_contactno" onChange={(e) => { setMobileNo(e.target.value) }} placeholder="car_owner_contactno" />

                    </div>
                    <div>
                        <form><input className="inputbox" type="file" onChange={handlechange} name="upload_file" placeholder='car image' ></input>
                        </form>

                    </div>
                    <div>
                        <input className="inputbox" type="text" onChange={(e) => { setCarmodel(e.target.value) }} value={car_model} name="car_model" placeholder="car_model" />

                    </div>
                    <div>
                        <select defaultValue="Select Car category"
                            className="inputbox" value={car_category} onChange={(e) => setCarcategory(e.target.value)}>
                            <option value="">Select car category</option>
                            <option value={'Hatchback'}>Hatchback</option>
                            <option value={'Sedan'}>Sedan</option>
                            <option value={'suv'}>suv</option>
                            <option value={'muv'}>muv</option>
                            <option value={'convertable'}>convertable</option>
                            <option value={'wagon'}>wagon</option>
                            <option value={'luxury'}>luxury</option>
                            <option value={'coupe'}>coupe</option>
                            <option value={'antique'}>antique</option>
                            <option value={'micro'}>micro</option>
                            <option value={'sports car'}>sports car</option>
                            <option value={'super car'}>super car</option>
                            <option value={'muscle car'}>muscle car</option>
                            <option value={'limousine'}>limousine</option>
                            <option value={'hybrid car'}>hybrid car</option>
                            <option value={'electric car'}>electric car</option>
                            <option value={'electric car'}>electric car</option>
                            <option value={'minibus'}>minibus</option>
                            <option value={'minivan'}>minivan</option>
                        </select>

                    </div>
                    <div>
                        <input className="inputbox" type="text" onChange={(e) => { setModelnumber(e.target.value) }} value={model_number} name="model_number" placeholder="model_number" />

                    </div>
                    <div>
                        <input className="inputbox" type='text' value={number_plate} name='number_plate' onChange={(e) => { setNumberplate(e.target.value) }} placeholder='numberplate' />

                    </div>
                    <div className='inputbox'>
                        {/* <input className="inputbox" type="text" value={insurance_expire_date} name="insurance_expire_date" onChange={(e) => { setInsexpdate(e.target.value) }} placeholder="insurance_expire_date" /> */}
                        insurance_expire_date
                        <DatePicker selected={insurance_expire_date} onChange={(date) => setInsexpdate(date)} />
                    </div>
                    <div className='inputbox'>
                        puc_expire_date
                        {/* <input className="inputbox" type='text' value={puc_expire_date} name='puc_expire_date' onChange={(e) => { setPucexpdate(e.target.value) }} placeholder='puc_expire_date' /> */}
                        <DatePicker selected={puc_expire_date} onChange={(date) => setPucexpdate(date)} />
                    </div>

                    <button style={{ padding: "5px",marginTop:"5%" ,backgroundColor: "orange", border: "none", borderRadius: "10px", cursor: "pointer" }} type="button" onClick={addCar} className="btnsn">Add photo</button>

                </div>
            </div>

        </div>
    )
}

export default Addcar;