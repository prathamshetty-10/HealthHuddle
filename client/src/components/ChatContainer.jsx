import React from "react";

import ChatInput from "./ChatInput";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
export default function ChatContainer({currentuser,currentChat}){
    const [messages,setMessages]=useState([]);
    const handleSendMessage=()=>{
        console.log('hi');
    }
    return(
        <div className="max-h-[100%] overflow-hidden ">
        
        {currentChat && (
        <div className="flex flex-col">
            <div className="flex text-white justify-between items-center py-[1rem] px-[3rem] bg-[#ffffff39] rounded-3xl">
                <div className="flex gap-[3rem]">
                    <img src={currentChat.secure_url2} className="h-[50px] w-[50px] rounded-full" />
                    <div className="text-white text-4xl">{currentChat?.username2} 
                    </div>
                </div>
            </div>

            <div className="h-[62vh] py-[0.5rem] px-[2rem] flex flex-col gap-[1rem] ">
            <ScrollToBottom className="h-[62vh] ">
            {
            messages.map((message)=>{
                return(
                <div key={message}>
                    {message.fromSelf?(<div className="text-white flex justify-end items-center w-[50%] my-[15px] ml-[200px] lg:ml-[420px] "><div className=" max-w-[90%] py-[0.5rem] px-[2rem] break-words lg:text-xl rounded-3xl bg-[#9900ff20]">{message.message}</div></div>):(<div className="text-white flex  justify-start items-center w-[50%] my-[15px] "><div className=" max-w-[90%] py-[0.5rem] px-[2rem] break-words lg:text-xl rounded-3xl bg-[#4f04ff21]">{message.message}</div></div>)
                }
                </div>


                )
                
                })
            
            }
            
            </ScrollToBottom>
            </div>
            <div>
            <ChatInput handleSendMessage={handleSendMessage} />
            
            
            
            
            </div>




        </div>)
        }
        </div>)
}