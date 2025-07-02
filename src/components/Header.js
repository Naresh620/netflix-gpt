import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firbase';
import { Logo, SUPPORT_LANGUAGES } from '../utils/Contents';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptsearchview } from '../utils/gptSlice';
import { gptViewSupportLang } from '../utils/configs';


const Header = () => {
  

  const dispatch=useDispatch()

  const user=useSelector((store)=>store.user)

  const ShowGptSearch=useSelector(store=>store.gpt.ShowGptSearch)
  const navigate=useNavigate();


  const handleSignout=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  }

  const handleGptSearchViews=()=> {
    dispatch(toggleGptsearchview())
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

  const handlegptLang=(e)=>{
    dispatch(gptViewSupportLang(e.target.value))
  }
  return (
    <div className='relative w-full '>
    <div className='flex justify-between  px-8 py-4 bg-gradient-to-b from-black z-10 absolute w-full'>
        <img 
        className='w-44'
        src={Logo}
        alt="log"
        />
        {user && 
        
        <div className='flex items-center gap-4 p-4'>
          {ShowGptSearch && <select className='bg-gray-700 text-white hover:cursor-point hover:bg-gray-500 rounded-lg p-2'
          onChange={handlegptLang}>
            {SUPPORT_LANGUAGES.map(lang=><option key={lang.identifier}>{lang.name}</option>)}
          </select>}
          
          <button className=' px-5 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200 shadow-md'
          onClick={handleGptSearchViews}
          >GPT Search</button>
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