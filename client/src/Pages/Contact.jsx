import React from "react";
import { useNavigate } from "react-router-dom";
import {BiPowerOff} from 'react-icons/bi'
import { FaRocketchat } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { MdPersonSearch } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {IoMdSend} from 'react-icons/io'
import { getContactsRoute } from "../utils/APIRoutes";
function Contact(){
    const [contacts,setContacts]=useState([]);
    const [search,setSearch]=useState("");
    const [currentuser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("login-user")));
    const navigate=useNavigate();
    const handleClick1=async()=>{
        localStorage.clear();
        navigate("/");
    }
    function handleUserInput(e){
        
        const {value}=e.target;
        setSearch(value);
       
    }
    const func=async()=>{
        if(currentuser){
            const data=await axios.post(`${getContactsRoute}`,{
                username:currentuser.username
            });
            console.log(data);
            setContacts(data.data.contacts);
            
            
        }
        else{
            navigate("/");
        }
    }
    
    useEffect(()=>{
        func();
    },[])
    return(
        <div className="h-[100vh] w-[100vw] bg-[#131324] flex items-center justify-center">
        
        <div className="h-[100vh] w-[85vw] bg-[#00000076] ">
        <div className=" h-[10%] pt-[3rem] flex justify-center items-center gap-[1.5rem]">
        
        <button onClick={handleClick1} className="flex items-center justify-center p-[0.4rem] lg:p-[0.6rem] bg-[#9a86f3] rounded-2xl text-2xl cursor-pointer hover:bg-[#ebe7ff] hover:text-blue-700 font-bold w-[140px]"><FaRocketchat className="mr-[4px]"/>Chats</button>
        <button onClick={()=>navigate('/contacts')} className="flex items-center justify-center p-[0.4rem] lg:p-[0.6rem] bg-[#9a86f3] rounded-2xl text-2xl cursor-pointer hover:bg-[#ebe7ff] hover:text-blue-700 font-bold w-[140px]"><MdPersonSearch className="mr-[4px]"/>Contacts</button>
        <button onClick={handleClick1} className="flex items-center justify-center p-[0.4rem] lg:p-[0.6rem] bg-[#9a86f3] rounded-2xl text-2xl cursor-pointer hover:bg-[#ebe7ff] hover:text-blue-700 font-bold w-[140px]"><SiGoogleclassroom className="mr-[4px]"/>Rooms</button>
        <button onClick={handleClick1} className="flex items-center justify-center p-[0.4rem] lg:p-[0.6rem] bg-[#9a86f3] rounded-2xl text-2xl cursor-pointer hover:bg-[#ebe7ff] hover:text-blue-700 font-bold w-[140px]"><BiPowerOff className="mr-[4px]"/>Logout</button>
        

        
        </div>
        <div className="h-[90%] overflow-auto">
            <div className="h-[300px] flex flex-col items-center justify-top mt-[50px] gap-[2rem]">
                <h1 className="text-white text-2xl">Search users To Connect With !!</h1>
                <form className="w-[60%] flex gap-[1rem] lg:gap-[2rem]" onSubmit={(e)=>{}}>
                <input type="text" placeholder="Search username here" value={search} onChange={handleUserInput} className="w-[85%] h-[3rem] rounded-[2rem] px-[2rem] bg-[#ffffff34] text-white"/>
                <button type="submit" className="w-[15%] bg-[#9a86f3] flex justify-center items-center rounded-[2rem] hover:bg-[#ebe7ff] hover:text-blue-700 transition-all duration-200"><IoMdSend size={25}/></button>
            
            
            </form>
            </div>
            <div>
            {
                contacts.length==0?(<div className="text-white flex items-center justify-center text-2xl"><p>No Contacts yet add contacts</p> </div>):(contacts?.map((contact,index)=>{

                }))
            }
            
            
            </div>
        
        
        </div>
        
        </div></div>
    )

}
export default Contact;