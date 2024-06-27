import React from "react";

import ChatInput from "./ChatInput";
import { getMessageRoute } from "../utils/APIRoutes";

import { SiGoogleclassroom } from "react-icons/si";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
export default function RoomContainer({currentuser,currentRoom,socket}){
    const [messages,setMessages]=useState([]);
    const handleSendMessage=async(msg)=>{
        console.log('hi');
    }
    {/*const func=async()=>{
        if(currentChat){
        const response=await axios.post(getMessageRoute,{
            from:currentuser.username,
            to:currentChat.username2,
        })
        setMessages(response.data);}
    }
    useEffect(()=>{
        func();
    },[currentChat])
    useEffect(()=>{
        if(socket){
            socket.on("msg-receive",(data)=>{
                setArrivalmessage({fromSelf:false,message:data.message,from:data.from});
            })
        }
    },[])
    useEffect(()=>{
        if(arrivalMessage){ 
            if(arrivalMessage.from==currentChat.username2){
             const newmsg={
                fromSelf:false,
                message:arrivalMessage.message
             }
             setMessages((prev)=>[...prev,newmsg])}
            else{
                handleNewMsg(arrivalMessage.from);
            }}
    },[arrivalMessage])*/}
    return(
        <div className="max-h-[100%] overflow-hidden ">
        
        {currentRoom && (
        <div className="flex flex-col">
            <div className="flex text-white justify-between items-center py-[1rem] px-[3rem] bg-[#ffffff39] rounded-3xl">
                <div className="flex gap-[3rem]">
                    <SiGoogleclassroom  className="h-[50px] w-[50px] rounded-full" />
                    <div className="text-white text-4xl">{currentRoom?.name} 
                    </div>
                </div>
            </div>

            <div className="h-[62vh] py-[0.5rem] px-[2rem] flex flex-col gap-[1rem] ">
            <ScrollToBottom className="h-[62vh] ">
            {
            messages.map((message)=>{
                return(
                <div key={message}>
                    {message.fromSelf?(<div className="text-white flex justify-end items-center w-[50%] my-[15px] ml-[200px] lg:ml-[420px] "><div className=" max-w-[90%] py-[0.5rem] px-[2rem] break-words lg:text-xl rounded-3xl bg-purple-800">{message.message}</div></div>):(<div className="text-white flex  justify-start items-center w-[50%] my-[15px] "><div className=" max-w-[90%] py-[0.5rem] px-[2rem] break-words lg:text-xl rounded-3xl bg-blue-900">{message.message}</div></div>)
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