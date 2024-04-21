import React from 'react'
import HeroSection from '../components/Hero'
import List from '../components/List'
import Blog from './Blog'
import About from '../components/About'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <List/>
      <Blog number={6}/>
    </div>
  )
}
