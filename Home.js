import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Content from './Content'
import Header from './Header'
import Loginpage from './Loginpage'
import Signin from './Signin'
import Bank1 from './Bank1'
import Score from './Score'
import "./quiz.css"

function Home() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/Content' element={<Content/>}></Route>
        <Route path='/Loginpage' element={<Loginpage/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/Bank1' element={<Bank1/>}></Route>
        <Route path='/Score' element={<Score/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Home