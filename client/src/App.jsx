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
import Properties from './pages/Properties';
import Header from './components/Header';
import Contact from './pages/Contact';
import OurAgents from './pages/OurAgents';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact element={<Home/>} to='/'/>
        <Route exact element={<About/>} to='/about'/>
        <Route exact element={<Profile/>} to='/profile'/>
        <Route exact element={<SignUp/>} to='/sign-up'/>
        <Route exact element={<SignIn/>} to='/sign-in'/>
        <Route exact element={<Properties/>} to='/properties'/>
        <Route exact element={<Contact/>} to='/contact'/>
        <Route exact element={<OurAgents/>} to='/our-agents'/>
        <Route exact element={<Blog/>} to='/blog'/>
      </Routes>
    </Router>
  )
}

