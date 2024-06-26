
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Chat from './Pages/Chat.jsx'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/contacts" element={<Contact/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/chats" element={<Chat/>}></Route>
    
    </Routes>
      
    </>
  )
}

export default App
