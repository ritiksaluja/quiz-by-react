import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'style-components'

function Content() {
    const navigate = useNavigate()
   function bank1(){
    navigate('/bank1')

   }
  return (
    <div className='choose'>
      <Button onClick={bank1}>C Programming </Button>
      <Button>JavaScript</Button>
      <Button>React</Button>
    
    </div>
  )
}

export default Content