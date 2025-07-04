import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import StaffLayout from './Layout/StaffLayout';
import StaffDashboard from './Component/Dashboard';
import Home from './Component/Home';
import Booking from './Component/Booking';
import LoginRegister from './Component/LoginRegister';
import PropertyDetails from './Component/PropertyDetails';
import ManageCustomers from './Component/ManageCustomers'; 
import ManageBooking from './Component/ManageBooking'; 
import ManagePayments from './Component/ManagePayments';
import AboutUs from './Component/AboutUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="register" element={<LoginRegister />} />
        {/* Main website layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="property" element={<PropertyDetails />} />
          <Route path="building/:buildId" element={<PropertyDetails />} />
          <Route path="about" element={<AboutUs />} />
        </Route>

        {/* Staff layout routes */}
        <Route path="/staff" element={<StaffLayout />}>
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="customers" element={<ManageCustomers />} />
          <Route path="bookings" element={<ManageBooking />} />
          <Route path="payments" element={<ManagePayments />} />
          {/* Add more staff routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
