import React from 'react'

import Baner from '../components/Baner'
import Footer from '../components/Footer.jsx';
import Freebook from '../components/Freebook.jsx';
import Navbar from '../components/Navbar.jsx';


function Home() {
  return (
    <div>
        <Navbar/>

    <Baner/>
    <Freebook/>
    <Footer/>
      
    </div>
  )
}

export default Home
