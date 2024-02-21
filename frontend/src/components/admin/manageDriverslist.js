import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ManageDriverAgent = () => {

    const [driver,setDriverDetails] = useState("");

    useEffect(() => {
        getAllDriverAgent();
    }, [])
    
    const getAllDriverAgent = async () => {
        
        try{
            let result = await fetch("http://localhost:3000/driveragent/get_All_DriverAgent_Details",{
                method: "GET"
            })

            result = await result.json();
            console.log(result);

            setDriverDetails(result.data);
        } catch (err) {
        console.log("Server Error");
        }
    }

    return (
        <div className='managedriverdetails container'>
            <br />
            <div className="card">
                <div className="card-header">

                    <div className='row'>
                        <div className='col-md-4'>
                            Driver Agent Details
                        </div>

                        <div className='col-md-5'>

                        </div>

                        <div className='col-md-1'>

                            {/* <Link to="/admin/dashboard" className='btn btn-success' style={{ float: "right" }}><i className="fa fa-plus" style={{ color: "white" }} /></Link> */}
                        </div>

                        <div className='col-md-2'>

                            {/* <Link to="/admin/registeredoctor" className='btn btn-info pr-2' style={{ float: "right" }}><i className="fa fa-plus" style={{ color: "white" }} /></Link> */}

                            <Link to="/addahome" className='btn btn-success' style={{ float: "right" }}><i className="fa fa-arrow-left" style={{ color: "white" }} /></Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>SR No.</th>
                                <th>Driver Agent Name</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>City</th>
                                <th>License Number</th>
                                <th>License Expire</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                driver.length > 0 ? driver.map((item, index) => (
                                    <tr key={item._id}>
                                        <th scope="row" style={{ width: "8%" }}>{index + 1}</th>
                                        <td style={{ width: "15%" }}>{item.first_name + " " + item.last_name}</td>
                                        <td style={{ width: "7%" }}>{item.email}</td>
                                        <td style={{ width: "5%" }}>{item.contact_number}</td>
                                        <td style={{ width: "5%" }}>{item["cityid"][0].city_name}</td>
                                        <td style={{ width: "10%" }}>{item.license_number}</td>
                                        <td style={{ width: "25%" }}>{item.license_expire}</td>

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
    )
}

export default ManageDriverAgent;