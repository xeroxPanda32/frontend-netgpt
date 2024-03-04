import React from 'react';
import { useEffect } from "react"
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from '../utils/constant';


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, (user) => { // when user signin or signup, return unsubscribe func
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }));
          navigate("/browse");
          } else { // when user signout
            dispatch(removeUser());
            navigate("/");
           }
      });

      return () => unsubcribe();

},[])

  const signoutHandler = () => { // Sign-out successful.
    signOut(auth).then(() => { 
    }).catch((error) => {
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between' >
      <img
        className=' w-44 h-full'
        src= {LOGO }
        alt='logo' />
     { user && <div className='flex'>
        <img
          className='h-20 w-18 p-4'
          src={user?.photoURL} alt='smallLogo' />
        <button className=' text-white font-bold' onClick={signoutHandler}> sign out</button>
      </div>}

    </div>
  )
}

export default Header