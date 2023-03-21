import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const [name , setname] = useState()
    const [email , setemail] = useState()
    const [password , setpassword] = useState()
    const navigate = useNavigate() 
     function Createuser(e){
        e.preventDefault()
        localStorage.setItem("username" ,JSON.stringify(name))
        localStorage.setItem("useremail" ,JSON.stringify(email))
        localStorage.setItem("userpassword" ,JSON.stringify(password))
        setname('')
        setemail('')
        setpassword('')
        navigate("/Loginpage")

        // console.log( name , email  , password)
     }
  return (
    <div className='signin'>

         <h1>Please Enter Your Details</h1>
        <form onSubmit={Createuser}>
            <input type="text" placeholder='Enter Your Name' required value= {name} onChange={(e)=>{setname(e.target.value)}}></input> <br/> 

            <input type="email" placeholder='Email' required value={email}
             onChange={(e)=>{setemail(e.target.value)}}></input> <br/> 
            <input type="password" placeholder='Enter Your Password' required value ={password}
              onChange={(e)=>{setpassword(e.target.value)}}></input> <br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Signin