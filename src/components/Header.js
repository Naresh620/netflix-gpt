import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './utils/firbase';
import { Logo } from './utils/Contents';
import { addUser, removeUser } from './utils/userSlice';

const Header = () => {

  const dispatch=useDispatch()

  const user=useSelector((store)=>store.user)
  const navigate=useNavigate();

  const handleSignout=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(addUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
  //
  return ()=>unsubscribe();
}, []);

  return (
    <div>
    <div className='flex justify-between  px-8 py-4 bg-gradient-to-b from-black z-10 absolute w-full'>
        <img 
        className='w-44'
        src={Logo}
        alt="log"
        />
        {user && <div className='flex'>
        <img
        className='w-12 h-12 '
        src={user?.photoURL}
        alt="profile-logo"
        
        />
        <button className='text-white font-bold p-2' onClick={handleSignout}>(Sign Out)</button>
        </div>}

    </div>
    </div>
  )
}

export default Header;