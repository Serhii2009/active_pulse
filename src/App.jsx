import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './pages/HomePage/HomePage'
import SignUp from './pages/SignUp/SignUp'
import PhoneSignUp from './pages/PhoneSignUp/PhoneSignUp'
import LogIn from './pages/LogIn/LogIn'
import PhoneLogIn from './pages/PhoneLogIn/PhoneLogIn'
import PersonalCabinet from './pages/PersonalCabinet/PersonalCabinet'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from './contexts/AuthContext'
import TrainingPrograms from './pages/TrainingPrograms/TrainingPrograms'

const App = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div>
      <Router>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <HomePage />
              ) : (
                <Navigate to="/personal-cabinet" />
              )
            }
          />
          <Route
            path="/signup"
            element={
              !isAuthenticated ? (
                <SignUp />
              ) : (
                <Navigate to="/personal-cabinet" />
              )
            }
          />
          <Route path="/phone-signup" element={<PhoneSignUp />} />
          <Route
            path="/login"
            element={
              !isAuthenticated ? <LogIn /> : <Navigate to="/personal-cabinet" />
            }
          />
          <Route path="/phone-login" element={<PhoneLogIn />} />
          <Route
            path="/personal-cabinet"
            element={
              isAuthenticated ? <PersonalCabinet /> : <Navigate to="/" />
            }
          />

          <Route path="/training-programs" element={<TrainingPrograms />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
