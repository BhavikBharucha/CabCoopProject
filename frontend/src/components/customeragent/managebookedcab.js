import React, { useEffect,useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const ManageCabBookedCars = () => {
    
    const [bookedcab,setBookedCab] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        getAllBookedCabDetails();
    },[]);

    const getAllBookedCabDetails = async () => {
        try{
            let result = await fetch("http://localhost:3000/cagentcab/ListBookedCab",{
                method: "GET"
            });

            result = await result.json();

            if(result){
                setBookedCab(result.data);
                return console.log(result.data);
            }
        }catch(err){
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
                    <h3 style={{ marginTop: "-10px" }}>ManageBooked Cab</h3>
                    <ul >
                        <li><Link to='/simplogin' onClick={Logout}>Logout</Link></li>
                        {/* <li ><a  href="#">Item 2</a></li>
                        <li ><a  href="#">Item 3</a></li> */}
                    </ul>
                </nav>
                <div className='managedriverdetails container'>
            <br />
            <div className="card">
                <div className="card-header">

                    <div className='row'>
                        <div className='col-md-4'>
                            Booked Cab Details
                        </div>

                        <div className='col-md-5'>

                        </div>

                        <div className='col-md-1'>

                            {/* <Link to="/admin/dashboard" className='btn btn-success' style={{ float: "right" }}><i className="fa fa-plus" style={{ color: "white" }} /></Link> */}
                        </div>

                        <div className='col-md-2'>

                            {/* <Link to="/admin/registeredoctor" className='btn btn-info pr-2' style={{ float: "right" }}><i className="fa fa-plus" style={{ color: "white" }} /></Link> */}

                            <Link to="/adcustomerhome" className='btn btn-success' style={{ float: "right" }}><i className="fa fa-arrow-left" style={{ color: "white" }} /></Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">

                    <table className="table table-bordered" style={{fontSize: "18px"}}>
                        <thead>
                            <tr>
                                <th>SR No.</th>
                                <th>Customer Name</th>
                                <th>Email</th>
                                <th>Mobile No.</th>
                                
                                <th>No. of passengers</th>
                                <th>No. of luggage</th>
                                {/* <th>Gumastadhara Number</th> */}
                            </tr>
                        </thead>

                        <tbody>
                            {
                                bookedcab.length > 0 ? bookedcab.map((item, index) => (
                                    <tr key={item._id}>
                                        <th scope="row" style={{ width: "5%" }}>{index + 1}</th>
                                        {/* <td style={{ width: "8%" }}>{item["customeragent_id"][0].company_name}</td> */}
                                        <td style={{ width: "8%" }}>{item.customer_firstname + " " + item.customer_lastname}</td>
                                        <td style={{ width: "7%" }}>{item.customer_email}</td>
                                        <td style={{ width: "5%" }}>{item.customer_contact_number}</td>
                                        
                                        {/* <td style={{ width: "3%" }}>{item.date}</td>
                                        <td style={{ width: "3%" }}>{item.time}</td> */}
                                        {/* <td style={{ width: "3%" }}>{item["from"][0].city_name}</td> */}
                                        {/* <td style={{ width: "3%" }}>{item["to"][0].city_name}</td> */}
                                        <td style={{ width: "5%" }}>{item.no_of_passengers}</td>
                                        <td style={{ width: "5%" }}>{item.no_of_luggage}</td>
                                        {/* <td style={{ width: "5%" }}>{item["car_category"][0].car_category}</td> */}
                                        {/* <td style={{ width: "15%" }}>{item.gumastadhara_number}</td> */}

                                        {/* <td style={{ width: "5%" }}>
                                            <center>
                                                <button onClick={() => changeStatusToConfirm(item._id)} style={{ width: "30px", borderRadius: "5px", backgroundColor: "white", border: "0px" }}>
                                                    <i className="fa fa-check-square-o" style={{ padding: 2, color: "green", fontSize: 16 }} />
                                                </button>

                                                <Link to={"/admin/AddCategory/" + item._id}><i className="fa fa-edit" style={{ color: "green" }} /></Link>

                                                <button data-bs-toggle="modal" data-bs-target="#updatecategorydetailmodal"
                                                    onClick={() => { SelectCategoryById(item._id) }} style={{ width: "20px", backgroundColor: "white", border: "0px" }}>
                                                    <i className="fa fa-edit" style={{ color: "green" }} />
                                                </button>
                                            </center>
                                        </td> */}
                                    </tr>
                                ))
                                    : <tr> <td colspan="3" style={{ textAlign: "center" }}><strong>No Records
                                        Founds!</strong></td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
            </div>
        </div >
    )
}

export default ManageCabBookedCars;