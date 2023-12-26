 import React from "react";
// import styles from "./index.css"
import {auth} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
    const [user] = useAuthState(auth);
  //CSS  
    const effect = {
        backgroundColor: '#E0E4E7',
        boxShadow: '5px 5px 13px #b8c7dd, -5px -5px 13px #ffffff',
      };
    return(
        <header className="m-6 rounded-2xl flex justify-between items-center bg-white sticky top-0 p-5 z-10 " style={effect}>
            <h1 className="text-3xl font-bold text-gray-600 " >Chat App</h1>
            <img 
            onClick={()=> auth.signOut()}
            src={user?.photoURL}
            alt="profile" 
            className="h-10 w-10 rounded-full cursor-pointer"/>
        </header>
    );
}
export default Header;