import React from 'react';
import { useNavigate } from 'react-router-dom';
import {signOut} from 'firebase/auth';
import { auth } from '../utils/firebase';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {onAuthStateChanged}  from "firebase/auth";
import { addUser,removeuser } from '../Slices/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {

  const dispatch = useDispatch();

useEffect(()=>{
const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
          console.log(user)
          console.log("datadddd")
          const {uid, email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL} ))
          // window.location.href = '/browse'
          navigate('/browse');
      } else {
          dispatch(removeuser())
          // window.location.href = '/'
          navigate('/');
      }
    });
    // clean up when , do not need that .
    return () => unsubscribe();
},[])
const navigate = useNavigate();
const user = useSelector((store) => store.user);
const handleSignOut = () =>{
  signOut(auth).then(() => {
    // navigate('/');
  }).catch((error) => {
    // navigate('/error')
  });
}

  return (
    <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent z-10 px-8 py-2 flex justify-between">
    <img
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="Netflix Logo"
      className="w-44" 
    />
    
    { user && <div className='flex p-4 gap-2 items-center' > 

      <img 
      className="cursor-pointer w-10 h-10 p-2"
      alt='logo'
      src = {user?.photoURL}
       />
       <button onClick={handleSignOut} className='text-bold text-white'>Sign out</button>
     
    </div>}
  </div>
  
   
  );
};

export default Header;
