import React from "react";
import { useState } from "react";
import Welcome from "../components/Welcome.jsx";
import {BiPowerOff} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";
import { FaRocketchat } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdPersonSearch } from "react-icons/md";
export default function Home(){
    const [currentuser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("login-user")));
    const navigate=useNavigate();
    const handleClick1=async()=>{
        localStorage.clear();
        navigate("/");
    }
    return(
        <div className="h-[100vh] w-[100vw] bg-[#131324] flex items-center justify-center">
        
        <div className="h-[100vh] w-[85vw] bg-[#00000076] ">
        <div className=" h-[50px] pt-[3rem] flex justify-center items-center gap-[1.5rem]">
        
        <button onClick={handleClick1} className="flex items-center justify-center p-[0.4rem] lg:p-[0.6rem] bg-[#9a86f3] rounded-2xl text-2xl cursor-pointer hover:bg-[#ebe7ff] hover:text-blue-700 font-bold w-[130px]"><FaRocketchat className="mr-[4px]"/>Chats</button>
        <button onClick={handleClick1} className="flex items-center justify-center p-[0.4rem] lg:p-[0.6rem] bg-[#9a86f3] rounded-2xl text-2xl cursor-pointer hover:bg-[#ebe7ff] hover:text-blue-700 font-bold w-[130px]"><MdPersonSearch className="mr-[4px]"/>Search</button>
        <button onClick={handleClick1} className="flex items-center justify-center p-[0.4rem] lg:p-[0.6rem] bg-[#9a86f3] rounded-2xl text-2xl cursor-pointer hover:bg-[#ebe7ff] hover:text-blue-700 font-bold w-[130px]"><SiGoogleclassroom className="mr-[4px]"/>Rooms</button>
        <button onClick={handleClick1} className="flex items-center justify-center p-[0.4rem] lg:p-[0.6rem] bg-[#9a86f3] rounded-2xl text-2xl cursor-pointer hover:bg-[#ebe7ff] hover:text-blue-700 font-bold w-[130px]"><BiPowerOff className="mr-[4px]"/>Logout</button>
        

        
        </div>
        
        <div className="flex items-center justify-center"><Welcome currentuser={currentuser}/></div>
        
        </div>
        
        
        </div>
    )
}