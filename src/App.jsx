import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
// import HomePage from './pages/HomePage/HomePage'
import SignUp from './pages/SignUp/SignUp'

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
