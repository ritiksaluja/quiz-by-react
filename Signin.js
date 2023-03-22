import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const [name , setname] = useState()
    const [email , setemail] = useState()
    const [password , setpassword] = useState()
    const [form , setformd] = useState([])
    const navigate = useNavigate() 
    
     function Createuser(e){
        e.preventDefault()
        const details = {
            name: name ,
            email: email, 
            password: password
        }
        // console.log(details)
        form.push(details)
      
        localStorage.setItem("details" , JSON.stringify(form))
        setname('')
        setemail('')
        setpassword('')
        alert("user created ")
        navigate("/Loginpage")
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