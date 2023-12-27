import React from "react";
import { signInWithPopup } from "firebase/auth";
import {auth, provider } from "../firebase";

function LogInPage (){
    const signInUser = () =>{
        signInWithPopup(auth , provider).catch((err)=> alert(err.message));
    };
   //CSS
    const effect = {
        boxShadow: '5px 5px 13px #b8c7dd, -5px -5px 13px #ffffff',
      };
    return(
        <div className="flex justify-center items-center mt-60 " >
        <div className=" px-16 py-14  rounded-3xl bg-[#E0E4E7] " style={effect}>
            <h1 className="title text-gray-600 text-5xl  font-bold title ">Gup-Shup</h1>
            <button onClick={signInUser} style={effect} className=" font-bold text-white bg-gray-600 rounded-lg hover:scale-110 transition-all duration-200 ease-in-out p-3 mx-4 mt-7" >Sign In with GOOGLE</button>
        </div>
        </div>
    );
}
export default LogInPage;