import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Properties from './pages/Properties';
import Header from './components/Header';
import Contact from './pages/Contact';
import OurAgents from './pages/OurAgents';
import Blog from './pages/Blog';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/properties' element={<Properties/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/our-agents' element={<OurAgents/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

