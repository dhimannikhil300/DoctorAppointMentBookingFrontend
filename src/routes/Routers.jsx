import Home from '../pages/Home'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'
import CheckoutSuccess from '../pages/Doctors/CheckoutSuccess'
import ProtectedRoute from './ProtectedRoute'
import AdminDashboard from '../Dashboard/admin/AdminDashboard'
import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/doctors' element={<Doctors/>} />
      <Route path='/doctors/:id' element={<DoctorDetails/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/checkout-success' element={<CheckoutSuccess/>} />
      <Route path='/users/profile/me' element={<ProtectedRoute allowedRoles={['patient']}> <MyAccount/> </ProtectedRoute>} />
      <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRoles={['doctor']}> <Dashboard/> </ProtectedRoute>} />
      <Route path='/admin/profile/me' element={<ProtectedRoute allowedRoles={['admin']}> <AdminDashboard/> </ProtectedRoute>} />

    </Routes>
  )
}

export default Routers