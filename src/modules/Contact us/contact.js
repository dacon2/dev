import './index.css'

import React, { useRef } from 'react'

const Contact = () => {


    const fname = useRef(null)
    const lname = useRef(null)
    const email = useRef(null)
    const message = useRef(null)

    const handleFunc = (e) =>{

      e.preventDefault()
      let Fname = fname.current.value
      let Lname = lname.current.value
      let Email = email.current.value
      let Message = message.current.value
      console.log(Fname,Lname,Email,Message)
      
    }
 

  return (
    <>
    <div className="whole-container">
        <h1 className='main-heading'>
            Contact us
        </h1>
       

        <div className="mini-container">
            <input type="text" name="fname" placeholder='First Name' required ref={fname} />
            <input type="text" name="lname" placeholder='Last Name' required ref={lname} />
            <input type="email" name="email" placeholder='Email' required ref={email} />
            <input type="text" name="message" placeholder='Any Samll Message' required ref={message}  />
        </div>

        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded m-4" onClick={handleFunc}>
          Submit
        </button>
        
        </div>
    </>
  )
}

export default Contact