'use client'
import React, { useState } from 'react'
import MobileNavbar from './MobileNavbar'
 import Navbar from './Navbar' 
 

const Responsive = () => {

  const [showNav,setShowNav] = useState(false)
  const showNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  return (
    <div>
      <Navbar openNav={showNavHandler} />
      <MobileNavbar closeNav={closeNavHandler} showNav={showNav}/>
    </div>
  )
}

export default Responsive