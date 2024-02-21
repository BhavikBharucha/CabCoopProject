import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ManageCustomerAgent = () => {

    const [customer, setCustomerDetails] = useState("");
    

    useEffect(() => {
        getAllCustomerAgent();
    }, [])

    const getAllCustomerAgent = async () => {

        try {
            let result = await fetch("http://localhost:3000/customeragent/get_All_CustomerAgent_Details", {
                method: "GET"
            })

            result = await result.json();
           
            console.log(result);
            setCustomerDetails(result.data);
            

        } catch (err) {
            console.log("Server Error");
        }
    }

    return (
        <div className='managedriverdetails container' style={{marginLeft:"-10px"}}>
            <br />
            <div className="card" style={{width:"110%"}}>
                <div className="card-header">

                    <div className='row'>
                        <div className='col-md-4'>
                            Customer Agent Details 
                        </div>

                        <div className='col-md-5'>

                        </div>

                        <div className='col-md-1'>

                            {/* <Link to="/admin/dashboard" className='btn btn-success' style={{ float: "right" }}><i className="fa fa-plus" style={{ color: "white" }} /></Link> */}
                        </div>

                        <div className='col-md-2'>

                            {/* <Link to="/admin/registeredoctor" className='btn btn-info pr-2' style={{ float: "right" }}><i className="fa fa-plus" style={{ color: "white" }} /></Link> */}

                            <Link to="/adcsahome" className='btn btn-success' style={{ float: "right" }}><i className="fa fa-arrow-left" style={{ color: "white" }} /></Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>SR No.</th>
                                <th>Company Name</th>
                                <th>Owner Name</th>
                                <th>Email</th>
                                <th>Mobile No.</th>
                                <th>City</th>
                                <th>Gst Number</th>
                                <th>Gumastadhara Number</th>
                                <th>Company Pancard</th>
                                <th>Owner Adharcard</th>
                                <th>Owner Pancard</th>
                                <th>Company Address</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                customer.length > 0 ? customer.map((item, index) => (
                                    <tr key={item._id}>
                                        <th scope="row" >{index + 1}</th>
                                        <td >{item.company_name}</td>
                                        <td >{item.owner_name}</td>
                                        <td >{item.email}</td>
                                        <td >{item.mobile_number}</td>
                                        <td >{item["cityid"][0].city_name}</td>
                                        <td >

                                            {item ?
                                                <img src={`http://localhost:3000/${item.gst_number}`} alt="gst_number" style={{height:"100%",width:"100%"}} />
                                                :
                                                <span>deleted</span>
                                            }

                                        </td>
                                        <td >

                                            {item ?
                                                <img src={`http://localhost:3000/${item.gumastadhara_number}`} alt="gumastadhara_number" style={{height:"100%",width:"100%"}} />
                                                :
                                                <span>deleted</span>
                                            }


                                        </td>
                                        <td >

                                            {item ?
                                                <img src={`http://localhost:3000/${item.company_pancard}`} alt="company_pancard" style={{height:"100%",width:"100%"}}/>
                                                :
                                                <span>deleted</span>
                                            }

                                        </td>

                                        <td >

                                            {item ?
                                                <img src={`http://localhost:3000/${item.owner_adharcard}`} alt="owner_adharcard" style={{height:"100%",width:"100%"}}/>
                                                :
                                                <span>deleted</span>
                                            }

                                        </td>

                                        <td >

                                            {item ?
                                                <img src={`http://localhost:3000/${item.owner_pancard}`} alt="gumastadhara_number" style={{height:"100%",width:"100%"}}/>
                                                :
                                                <span>deleted</span>
                                            }


                                        </td>
                                        <td >{item.company_address}</td>

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

export default ManageCustomerAgent;