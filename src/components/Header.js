import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './utils/firbase';
import { useDispatch, useSelector } from 'react-redux';
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

}, []);

  return (
    <div>
    <div className='absolute  p-8 bg-gradient-to-b from-black w-screen flex flex-wrap justify-between  '>
        <img 
        className='w-44  '
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="log"
        />
        {user && <div className='flex'>
        <img
        className='w-12 h-12 '
   src="https://media.licdn.com/dms/image/v2/D4D03AQHK8wAAswSOfw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719488057749?e=1756339200&v=beta&t=80CvWinY884PUCuIr3yQB1yPfbUzmbESbxMakQWpzoA"
        // src="https://occ-0-5452-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
        alt="profile-logo"
        
        />
        <button className='text-white font-bold p-2' onClick={handleSignout}>(Sign Out)</button>
        </div>}

    </div>
    </div>
  )
}

export default Header;