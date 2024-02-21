import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminManageCABookedCarsList = () => {

    const [bookedcab, setBookedCab] = useState("");

    useEffect(() => {
        getAllBookedCabDetails();
    }, []);

    const getAllBookedCabDetails = async () => {
        try {
            let result = await fetch("http://localhost:3000/cagentcab/ListBookedCab", {
                method: "GET"
            });

            result = await result.json();

            if (result) {
                setBookedCab(result.data);
                return console.log(result.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div>
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

                                    <Link to="/adminmanagecabookedcars" className='btn btn-success' style={{ float: "right" }}><i className="fa fa-arrow-left" style={{ color: "white" }} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card-body">

                            <table className="table table-bordered" >
                                <thead>
                                    <tr>
                                        <th>SR No.</th>
                                        <th>Customer Name</th>
                                        <th>Email</th>
                                        <th>Mobile No.</th>
                                        <th>Car Category</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>No. of passengers</th>
                                        <th>No. of luggage</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        bookedcab.length > 0 ? bookedcab.map((item, index) => (
                                            <tr key={item._id}>
                                                <th scope="row" style={{ width: "5%" }}>{index + 1}</th>
                                                <td style={{ width: "8%" }}>{item.customer_firstname + " " + item.customer_lastname}</td>
                                                <td style={{ width: "7%" }}>{item.customer_email}</td>
                                                <td style={{ width: "5%" }}>{item.customer_contact_number}</td>
                                                <td style={{ width: "3%" }}>car category</td>
                                                <td style={{ width: "3%" }}>{item.date}</td>
                                                <td style={{ width: "3%" }}>{item.time}</td>
                                                <td style={{ width: "3%" }}>from</td>
                                                <td style={{ width: "3%" }}>to</td>
                                                <td style={{ width: "5%" }}>{item.no_of_passengers}</td>
                                                <td style={{ width: "5%" }}>{item.no_of_luggage}</td>

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
        </>
    )
}

export default AdminManageCABookedCarsList;

