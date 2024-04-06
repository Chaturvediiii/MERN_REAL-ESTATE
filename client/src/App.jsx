import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home'
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home/>} to='/'/>
        <Route element={<About/>} to='/about'/>
        <Route element={<Profile/>} to='/profile'/>
        <Route element={<SignUp/>} to='/signup'/>
        <Route element={<SignIn/>} to='/signin'/>
      </Routes>
    </Router>
  )
}

