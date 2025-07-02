import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidatedata } from '../utils/Validation';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firbase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Avatar_Logo, BackgroundImg_URL } from '../utils/Contents';


const Login = () => {
  const[Login,setLogin]=useState(true);
  const[errorMessage,seterrorMessage]=useState(null);


  const dispatch=useDispatch();
   
   const name = useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handletogglelogin=()=>{
    setLogin(!Login);
  }

const handleValidData = () => {
  const emailValue = email.current.value;
  const passwordValue = password.current.value;

  const message = checkValidatedata({email: emailValue,password: passwordValue});

  seterrorMessage(message);

  if(message)return;

  if(!Login){
    //Sigup logic
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    updateProfile(user, {
  displayName: name.current.value, photoURL: Avatar_Logo
}).then(() => {
  // Profile updated!
  // ...
    const uid = user.uid;
      dispatch(addUser({
        uid:user.uid,
        email:user.email,
        displayName:user.displayName,
        photoURL:user.photoURL,
      }))

}).catch((error) => {
  seterrorMessage(error)
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + " - " + errorMessage);
    // ..
  });

  }
  else{
    //Sign In Logic
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode + " - " + errorMessage);
  });

  }
};


  return (
    <div>
        <Header/>
        <div className='absolute -z-10 w-screen h-screen'>
             <img
        className='object-cover w-screen h-screen'
        src={BackgroundImg_URL}
        alt="banner"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-11/12 sm:w-3/12 p-6 sm:p-8 mx-auto my-36 left-0 right-0 bg-black bg-opacity-80 rounded-lg h-fit'>
          <h1 className='text-white p-2 my-4 text-3xl font-bold'>{Login?"Sign In":"Sign Up"}</h1>
          {!Login && <input ref={name} className="text-white w-full p-2 my-4 rounded-sm bg-gray-700"  type="text" placeholder='Full Name'></input>}
          <input  ref={email} className="text-white w-full p-2 my-4 rounded-sm bg-gray-700" type='text' placeholder='Email'></input>
          <input  ref={password} className="text-white w-full p-2 my-4 rounded-sm bg-gray-700"  type="password" placeholder='Password'></input>
          <p className='text-red-500 text-sm p-2'>{errorMessage}</p>
          <button className="bg-red-700 w-full p-2 my-6 rounded-lg " onClick={handleValidData} >Sign In</button>  
          <p className='text-white cursor-pointer' onClick={handletogglelogin}>{Login?"New to Netflix?Sign up now.":"Already have a account?Sign in now"}</p>      
          </form>
    </div>
  )
}

export default Login