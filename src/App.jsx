import Header from './component/header'
import Footer from './component/footer'
import './App.css'
import { useEffect } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './component/body';
import Login from './component/login';
import Signup from './component/signup';
import About from './component/about';
import AdminLogin from "./component/adminlogin"
import Booking from './component/booking';


import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from './store';

function App() {
  const dispatch=useDispatch();
  const isAdminLoggedIn=useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn=useSelector((state)=>state.user.isLoggedIn);
 console.log("isAdminlog",isAdminLoggedIn);
 console.log("isUserloh",isUserLoggedIn);
 useEffect(()=>{
  if(localStorage.getItem("userId")){
       dispatch(userActions.login())
  }else if(localStorage.getItem("adminId")){(
    dispatch(adminActions.login()));

  }

 },[]);

  return (
    <>
   <Header/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}/>
       <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login />} />
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path="/Signup" element={<Signup />} />
        <Route path="/booking/:id" element={<Booking/>}/>  
          <Route path='/sucess' element={<Body/>}/>
         
          
          
     
      </Routes>
    </BrowserRouter>
   <Footer/>
    </>
  )
}

export default App
