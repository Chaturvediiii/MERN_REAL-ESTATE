import React from 'react'
import HeroSection from '../components/Hero'
import List from '../components/List'
import Blog from './Blog'
import AboutPage from './About'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutPage/>
      <List/>
      <Blog number={6}/>
    </div>
  )
}
