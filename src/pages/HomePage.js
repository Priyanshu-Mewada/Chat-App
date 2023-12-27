import React, { useState ,useRef} from "react";
import Header from "../components/Header";
import Message from "../components/Message";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth,db} from "../firebase"
import { addDoc, collection, serverTimestamp ,query,orderBy } from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore";
import FlipMove from "react-flip-move";

function HomePage() {
    const [input , setInput] = useState("");
    const [user] = useAuthState(auth);
    const lastMessageDiv = useRef(null);
    const sendMessage = (e) => {
        e.preventDefault();
        addDoc(collection(db, "chats"),{
            sender :user?.displayName,
            message: input,
            time: serverTimestamp(),
        }).then(()=>{
            setInput("");
            scrollTOBottom();
            scrollTOBottom();
        })
        .catch((err)=> alert(err.message));
    }

    const [messages] = useCollection(
        query(collection(db , "chats"),orderBy("time","asc"))
    );

    const scrollTOBottom =() =>{
        lastMessageDiv.current.scrollIntoView({
            behaviour: "smooth",
        });
    };


        // CSS

        const effect = {
            boxShadow: '5px 5px 13px #b8c7dd, -5px -5px 13px #ffffff',
          };
     
    return(

        <div>
            <Header/>

            {/* body */}
            <div className="max-w-2xl mx-auto  "
                    // style={effect}
                    >
                {/* Messages */}
                <div className="p-5 rounded-xl ">
                    <FlipMove>
                    {messages?.docs?.map((message)=>(
                        <Message 
                        key={message.id}
                        sender={message.data().sender}
                        message={message.data().message}
                        time={message.data()?.time?.toDate().getTime()}
                        />
                   ))}
                   </FlipMove>
                   <div ref={lastMessageDiv} className="mb-10" />
                </div>
                {/* Input */}
                <div className="flex justify-center ">
                <form className="fixed bottom-2 w-96 flex  justify-between   space-x-2">
                    <input 
                    style={effect}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder="Enter a message...." 
                    className="flex-1 p-3 outline-none bg-none rounded-lg"/>
                    <button 
                    disabled={!input}
                    onClick={sendMessage}
                    style={effect}
                    className="bg-gray-400 text-sm text-black font-bold p-3 mx rounded-lg hover:scale-95 transition-all duration-200 ease-in-out disabled:bg-white  disabled:cursor-not-allowed " >Send</button>
                </form>
                </div>
            </div>
        </div>
        
    );
}
export default HomePage;