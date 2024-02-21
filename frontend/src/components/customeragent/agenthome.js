import React,{useEffect,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Agenthome = () => {
    const [cars, setCarDetails] = useState("");

    useEffect(() => {
        getAllCarDetails();
    }, [])

    const navigate = useNavigate();

    const getAllCarDetails = async () => {

        try {
            let result = await fetch("http://localhost:3000/car/ListCarDetails", {
                method: "GET"
            })

            result = await result.json();
            console.log(result);

            setCarDetails(result.data);
        } catch (err) {
            console.log("Server Error");
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
                    <h3 style={{marginTop:"-10px"}}>Dashboard</h3>
                    <ul >
                        <li><Link to='/simplogin' onClick={Logout}>Logout</Link></li>
                        {/* <li ><a  href="#">Item 2</a></li>
                        <li ><a  href="#">Item 3</a></li> */}
                    </ul>
                </nav>
                <div className='container'>
                    <div>
                    <marquee><h3>Welcome to <span>Cab</span> Service</h3></marquee>
                    </div>

                    <div>
                        <h5>Here we have following types of cars:</h5>
                        <hr/>

                        <div className="card">
                <div className="card-header">

                    <div className='row'>
                        <div className='col-md-4'>
                            Car Details
                        </div>

                        <div className='col-md-5'>

                        </div>

                        <div className='col-md-1'>

                            {/* <Link to="/admin/dashboard" className='btn btn-success' style={{ float: "right" }}><i className="fa fa-plus" style={{ color: "white" }} /></Link> */}
                        </div>

                        <div className='col-md-2'>

                            {/* <Link to="/admin/registeredoctor" className='btn btn-info pr-2' style={{ float: "right" }}><i className="fa fa-plus" style={{ color: "white" }} /></Link> */}

                            
                        </div>
                    </div>
                </div>

                <div className="card-body">

                    <table className="table table-bordered" style={{fontSize: "18px"}}>
                        <thead>
                            <tr>
                                <th>SR No.</th>
                                <th>Owner Name</th>
                                <th>Owner number</th>
                                <th>Image</th>
                                <th>Model</th>
                                <th>Category</th>
                                <th>model Number</th>
                                <th>Number Plate</th>
                                <th>Insurance Expire Date</th>
                                <th>PUC Expire Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cars.length > 0 ? cars.map((item, index) => (
                                    <tr key={item._id}>
                                        <th scope="row" style={{ width: "8%" }}>{index + 1}</th>
                                        <td style={{ width: "15%" }}>{item.car_owner_name}</td>
                                        <td style={{ width: "15%" }}>{item.car_owner_contactno}</td>

                                        <td style={{ width: "15%" }}>{item ?
                                            <img src={`http://localhost:3000/${item.car_image}`} style={{height:"100%",width:"100%"}}/>

                                            :
                                            <span>deleted</span>
                                        }</td>

                                        <td style={{ width: "5%" }}>{item.car_model}</td>
                                        <td style={{ width: "5%" }}>{item.car_category}</td>
                                        <td style={{ width: "10%" }}>{item.model_number}</td>
                                        <td style={{ width: "15%" }}>{item.number_plate}</td>
                                        <td style={{ width: "10%" }}>{item.insurance_expire_date}</td>
                                        <td style={{ width: "15%" }}>{item.puc_expire_date}</td>

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
            </div>

        </div >
    )
}
export default Agenthome;