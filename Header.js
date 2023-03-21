import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className='nav'>
        <h3>Welcome to Quizz</h3>
        <ul>
            <li><Link to="/Signin">Signin</Link></li>
            <li>Score</li>
            <li><Link to="/Loginpage">HOME</Link></li>
        </ul>
    </header>
    </>
  )
}

export default Header