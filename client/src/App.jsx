import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import About from './pages/About';
import SignIn from './pages/SignIn';
import Properties from './pages/Properties';
import Header from './components/Header';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/FooterBar';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/updateListing';
import Listing from './pages/Listing';
import NotFound from './pages/NotFound';
import CreateBlog from './pages/CreateBlog';
import Dashboard from './pages/Dashboard';


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route element={<PrivateRoute/>}>
          <Route path='/create-listing' element={<CreateListing/>}/>
          <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/create-blog' element={<CreateBlog/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/properties' element={<Properties/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/listing/:listingId' element={<Listing/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

