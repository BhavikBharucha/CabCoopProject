import React from 'react';
import { BrowserRouter, Route, Routes, UNSAFE_RouteContext } from 'react-router-dom';

import DriverAgent from './Driverrgform';
import CustomerAgent from './customerAgentrgform';
import Forgotpasswordpage from './forgotpassword';
// import Companyhome from './components/company/companyhome';
import Homepage from './homepage';
import Aboutus from './aboutus';
import Services from './services';
import News from './news';
import Contactus from './contactus';
import Adminhome from './components/admin/adminhome';
import Agenthome from './components/customeragent/agenthome';
import Driverhome from './components/driver/driverhome';
import Loginpage from './login';
import Footer from './footer';
import Addcity from './components/admin/addcity';
import Addcountry from './components/admin/addcountry';
import Addstate from './components/admin/addstate';
import AdminDriveragenthome from './components/admin/admindriveragenthome';
import AdminCustomeragenthome from './components/admin/admincustomeragenthome';
import AdminManageCABookedCars from './components/admin/adminmanageCABookedCars';
import Adminpaymentshome from './components/admin/adminpaymentshome';
import AdminLocationhome from './components/admin/adminlocation';
import Cabbook from './components/customeragent/cabbook';
import Bookings from './components/driver/bookings';
import ManageDriverAgent from './components/admin/manageDriverslist';
import ManageCustomerAgent from './components/admin/manageCustomerAgentlist';
import Customerrg from './customerrg';
import AdminCustomer from './components/admin/managecustomerhome';
import ManageCustomerlist from './components/admin/managecustomerlist';
import Addcar from './components/admin/addcar';
import DriverAgenthome from './components/driveragent/driveragenthome';
import Adddriver from './components/driveragent/adddriver';
import Admincarhome from './components/admin/admincarhome';
import Managecarlist from './components/admin/managecarlist';
import Fixedplaces from './components/customeragent/fixedplaces';
import AdminManageCABookedCarsList from './components/admin/managedbookedcarslist';
import AdminAdddriver from './components/admin/adddrivers';
import ManageCabBookedCars from './components/customeragent/managebookedcab';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          
          <Route path="/forgotpasspage" element={<Forgotpasswordpage />}></Route>

          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>

          <Route path="/agenthomepage" element={<Agenthome />}></Route>
          <Route path='/cabbook' element={<Cabbook />}></Route>
          <Route path='/fixedplaces' element={<Fixedplaces/>}></Route>
          {/* <Route path="/companyhomepage" element={<Companyhome />}></Route> */}
          <Route path="/driverhomepage" element={<Driverhome />}></Route>
          <Route path='/driverbookings' element={<Bookings/>}></Route>

          <Route path="/Driveragent" element={<DriverAgent/>}></Route>
          <Route path="/Customeragent" element={<CustomerAgent/>}></Route>
          <Route path="/simplogin" element={<Loginpage />}></Route>
          {/* <Route path="/companyloginpage" element={<Companyloginpage />}></Route> */}

          <Route path="/adminhomepage" element={<Adminhome />}></Route> 
          <Route path='/addahome' element={<AdminDriveragenthome />}></Route>
          <Route path='/adcsahome' element={<AdminCustomeragenthome />}></Route>
          <Route path='/adminmanagecabookedcars' element={<AdminManageCABookedCars/>}></Route>
          <Route path='/adpayment' element={<Adminpaymentshome />}></Route>
          <Route path='/adlocation' element={<AdminLocationhome />}></Route>
          <Route path="/addcountry" element={<Addcountry/>}></Route>
          <Route path="/addstate" element={<Addstate/>}></Route>
          <Route path="/addcity" element={<Addcity/>}></Route>
          <Route path="/managedriveragent" element={<ManageDriverAgent/>}></Route>
          <Route path="/managecustomeragent" element={<ManageCustomerAgent/>}></Route>
          <Route path='/adcustomerhome' element={<AdminCustomer/>}></Route>
          <Route path='/managecustomerlist' element={<ManageCustomerlist/>}></Route>
          <Route path='/Addcar' element={<Addcar/>}></Route>
          <Route path='/customerrg' element={<Customerrg />}></Route>
          <Route path='/driveragenthome' element={<DriverAgenthome/>}></Route>
          <Route path='/adddriver' element={<Adddriver/>}></Route>
          <Route path='/adcardash' element={<Admincarhome/>}></Route>
          <Route path='/managecarlist' element={<Managecarlist/>}></Route>
          <Route path='/managedbookedcarslist' element={<AdminManageCABookedCarsList />}></Route>
          <Route path='/adadddrivers' element={<AdminAdddriver/>}></Route>
          <Route path='/managecacab' element={<ManageCabBookedCars/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
