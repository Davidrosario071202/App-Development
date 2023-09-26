import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/css/App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProfilePage from '../src/pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import CartPage from './pages/CartPage';
import UserDashboard from './pages/Dashboard';
import TermsAndConditions from './pages/Terms';
import PrivacyPolicy from './pages/Privacy';
import Faq from './pages/Faq';
import ContactUs from './pages/Contact';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Home' element={<Home/>}/>
      <Route exact path='/ProfilePage' element={<ProfilePage/>}/>
      <Route exact path='/EditProfilePage' element={<EditProfilePage/>}/>
      <Route exact path='/CartPage' element={<CartPage/>}/>
      <Route exact path='/Dashboard' element={<UserDashboard/>}/>
      <Route exact path='/terms' element={<TermsAndConditions/>}/>
      <Route exact path='/privacy' element={<PrivacyPolicy/>}/>
      <Route exact path='/faq' element={<Faq/>}/>
      <Route exact path='/Contact us' element={<ContactUs/>}/>
      


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;