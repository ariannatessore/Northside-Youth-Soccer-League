import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../utilities/firebase';
import { AuthContext } from './AuthContext';

export const Navbar = () => {
   
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">Nysl Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}