import { Route,Routes } from 'react-router-dom'
import Home from './pages/home';
import './App.css'
import Login from "./pages/login";
import ForgotPassword from './components/forgot-password';
import Profile from './pages/profile.jsx';
import Register from './pages/register.jsx'

function App() {
  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/register' element={<Register/>}/>


      </Routes>
  )
}

export default App;
