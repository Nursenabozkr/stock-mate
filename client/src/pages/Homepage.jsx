import React from 'react'
import '../output.css'
import Navbar from '../components/Navbar'
import Header from '../components/homeComponent/Header'
import HomeStats from '../components/homeComponent/HomeStats'
import HomePrice from '../components/homeComponent/HomePrice'
import HomeContact from '../components/homeComponent/HomeContact'
import HomeFooter from '../components/homeComponent/HomeFooter'

function Homepage() {
    return (
         <div className="">
          <Navbar />
          <div id="header">
          <Header />
          </div>
         
          <div id="stats">
          <HomeStats />
          </div>
         
          <div id="package">
               <HomePrice />
          </div>
       
          <div id="contact">
          <HomeContact />
          </div>
        
          <div id="footer">
          <HomeFooter />
          </div>
       
 
         </div>
      )
}

export default Homepage