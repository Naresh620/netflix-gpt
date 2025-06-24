import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[Login,setLogin]=useState(true);

  const handletogglelogin=()=>{
    setLogin(!Login);
  }
  return (
    <div>
        <Header/>
        <div className='absolute -z-10 w-full h-full'>
             <img
        className='object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
        alt="banner"/>
        </div>
        <form className='bg-black bg-opacity-80 absolute w-3/12 p-8 my-36 mx-auto left-0 right-0 rounded-lg h-fit'>
          <h1 className='text-white p-2 my-4 text-3xl font-bold'>{Login?"Sign In":"Sign Up"}</h1>
          {!Login && <input className="text-white w-full p-2 my-4 rounded-sm bg-gray-700"  type="text" placeholder='Full Name'></input>}
          <input className="text-white w-full p-2 my-4 rounded-sm bg-gray-700" type='Email' placeholder='Email'></input>
          <input className="text-white w-full p-2 my-4 rounded-sm bg-gray-700"  type="password" placeholder='Password'></input>
          <button className="bg-red-700 w-full p-2 my-6 rounded-lg "  >Sign In</button>  
          <p className='text-white cursor-pointer' onClick={handletogglelogin}>{Login?"New to Netflix?Sign up now.":"Already have a account?Sign in now"}</p>      
          </form>
    </div>
  )
}

export default Login