import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage"
import './App.css'
import LandingPage from './components/LandingPage';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
