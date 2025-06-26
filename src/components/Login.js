import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidatedata } from './utils/Validation';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './utils/firbase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';


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
  displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D4D03AQHK8wAAswSOfw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719488057749?e=1756339200&v=beta&t=80CvWinY884PUCuIr3yQB1yPfbUzmbESbxMakQWpzoA"
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
        <div className='absolute -z-10 w-full h-full'>
             <img
        className='object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
        alt="banner"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-black bg-opacity-80 absolute w-3/12 p-8 my-36 mx-auto left-0 right-0 rounded-lg h-fit'>
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