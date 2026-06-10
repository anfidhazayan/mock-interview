import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome to AI Interview</h1>
        <p className="login-description">Please log in to continue</p>
        <form className="login-form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" className="login-input" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" className="login-input" />
          <button type="submit" className="login-button">Log In</button>
          <h6 className="forgot-password">Forgot Password?</h6>
          
        </form>
    
        <p className="signup-link">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Hero" className="hero-img" />
      </div>
      </div>

     
  )
}

export default App
