const express = require('express');
const cors = require('cors');
const app = express();
app.use("/uploads/car", express.static("uploads/car"));
app.use("/uploads/customeragentdocument", express.static("uploads/customeragentdocument"));


const PORT = 3000;

app.use(express.json());
app.use(cors());

const LoginRoute = require('./Routes/login.route');
const CompanyRoute = require('./Routes/company.route');
const CustomerAgentRoute = require('./Routes/customer_agent.route');
const DriverAgentRoute = require('./Routes/driver_agent.route');
const CountryRoute = require('./Routes/country.route');
const StateRoute = require('./Routes/state.route');
const CityRoute = require('./Routes/city.route');
const CarDetailsRoute = require('./Routes/cardetails.route');
const CustomerRoute = require('./Routes/customer.route');
const CustomerAgentCabBookingRoute = require('./Routes/customeragentcabbooking.route');
const CustomerCabBookingRoute = require('./Routes/customercabbooking.route');
const RouteCategory = require('./Routes/routecategory.route');

require('./DB/config')();

app.use('/',LoginRoute);
app.use('/company',CompanyRoute);
app.use('/customeragent',CustomerAgentRoute);
app.use('/driveragent',DriverAgentRoute);
app.use('/country',CountryRoute);
app.use('/state',StateRoute);
app.use('/city',CityRoute);
app.use('/car',CarDetailsRoute);
app.use('/customer',CustomerRoute);
app.use('/cagentcab',CustomerAgentCabBookingRoute); //cagent indicate customeragent
app.use('/ccab',CustomerCabBookingRoute); //ccab indicate customer cab booking
app.use('/cabroute',RouteCategory);

console.log('Running at Port: ' + PORT);
app.listen(PORT);