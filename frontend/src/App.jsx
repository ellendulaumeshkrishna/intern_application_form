import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import About from './components/About'
import {Routes, Route , useLocation} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoutes'
import PasswordResetRequest from './components/PasswordResetRequest'
import PasswordReset from './components/PasswordReset'
import Apply from './components/Apply'
import ProfessorPreferenceForm from "./components/PreferenceForm";
import MyDisplay from './components/Display'
// import mypdfViewer from './components/showpdf'


function App() {
  const location = useLocation()
  const noNavbar = location.pathname==="/register" || location.pathname==="/" ||  location.pathname.includes("password")
   const myWidth=150
  return (
    <>
      {
        noNavbar ? 
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/request/password_reset" element={<PasswordResetRequest/>}/>
          <Route path="/password-reset/:token" element={<PasswordReset/>}/>
        </Routes> 
        
        : 

      
      <Navbar   drawerWidth={myWidth} 
        content={
          <Routes>
            <Route element={<ProtectedRoute/>}   >
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>} /> 
              <Route path="/apply" element={<Apply/>}/>  
              <Route path="/preference" element={<ProfessorPreferenceForm />} />
              <Route path="/display" element={<MyDisplay/>}/>
              {/* <Route path="/pdf" element={<mypdfViewer/>}/> */}
            </Route>             
          </Routes>
        }     
        />
      }      
    </>
  )
}

export default App



