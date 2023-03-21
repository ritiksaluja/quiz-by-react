import React from 'react'
import { useNavigate } from 'react-router-dom'
import Content from './Content'
import quiz from "./quiz.png"



function Loginpage() {
    const navigate = useNavigate()
    
    
  return (
    <div className='login'>
     <div className='start'>
        <img src={quiz}></img>
     </div>
     <div className='form'>
        <form>
        <input type="text" placeholder='Enter user user ID'></input> <br/> <br/>
        <input type="password" placeholder='Enter user Password'></input> <br/> <br/>
        <button onClick={()=>navigate("/Content")}>Start Quizz</button>
        
        </form>
     </div>

    </div>
  )
}

export default Loginpage