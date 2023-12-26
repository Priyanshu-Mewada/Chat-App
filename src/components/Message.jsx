import React, { forwardRef } from "react";
import moment from "moment/moment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const  Message = forwardRef(({sender , message , time}, ref) => {
    const [user] = useAuthState(auth);
//CSS
    const effect = {
        boxShadow: '5px 5px 13px #b8c7dd, -5px -5px 13px #ffffff',
      };
      
    return(
        <div 
            style = {effect}
        className={`${
            sender === user?.displayName 
            ?"w-fit bg-gray-400 min-w-[120px]  rounded-lg p-2 relative ml-auto mt-8 rounded-tr-none"
            : "w-fit bg-[#E0E4E7] min-w-[120px] rounded-lg p-2 relative mt-8 rounded-tl-none" 
        }`}>
            <p className="text-xs absolute  -top-5">{sender}</p>
            <p>{message}</p>
            <p className=" text-xs text-right">{moment(time).format("LT")}</p>
        </div>
    );
});
export default Message;