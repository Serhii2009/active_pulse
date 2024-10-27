import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
// import HomePage from './pages/HomePage/HomePage'
import SignUp from './pages/SignUp/SignUp'
import PhoneSignUp from './pages/PhoneSignUp/PhoneSignUp'
import LogIn from './pages/LogIn/LogIn'
import PhoneLogIn from './pages/PhoneLogIn/PhoneLogIn'
import PersonalCabinet from './pages/PersonalCabinet/PersonalCabinet'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/phone-signup" element={<PhoneSignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/phone-login" element={<PhoneLogIn />} />
          <Route path="/personal-cabinet" element={<PersonalCabinet />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
