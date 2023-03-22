import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import quiz from "./quiz.png"



function Loginpage() {
    const navigate = useNavigate()
    const [username , setusername ] = useState()
    const [ password , setpassword ] = useState()


    function nextpage(e){
        e.preventDefault()
    const data =  JSON.parse( localStorage.getItem("details") )
      data.filter((details)=>{
        if(details.name==username && details.password==password) {
            navigate('/Content')
        }
      })
    }
    
    
  return (
    <div className='login'>
     <div className='start'>
        <img src={quiz}></img>
     </div>
     <div className='form'>
        <form onSubmit={nextpage}>
        <input type="text" placeholder='Enter user user ID' required value={username} onChange={(e)=>{setusername(e.target.value)}}></input> <br/> <br/>

        <input type="password" placeholder='Enter user Password' required value={password} onChange={(e)=>{setpassword(e.target.value)}}></input> <br/> <br/>

        <button type='submit'>Start Quizz</button>
        
        </form>
     </div>

    </div>
  )
}

export default Loginpage