import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Graph from './components/Graph'
import Champions from './components/Champions'
import Solution from './components/solution/Solution'
import Perks from './components/Perks'
import Fees from './components/Fees'
import Faq from './components/Faq'
import Backbone from './components/backbone/Backbone'
import Curriculum from './components/curriculum/Curriculum'
import Footer from "./components/Footer"
import AboutUs from "./components/footerpages/AboutUS"
import Contact from "./components/footerpages/Contact"
import DCMA from "./components/footerpages/DCMA"
import Refundpolicy from "./components/footerpages/Refundpolicy"
import Privacy from "./components/footerpages/Privacy"
import Terms from "./components/footerpages/Terms"
// import Register from './components/register/register'

import { Routes, Route, useNavigate } from "react-router-dom";

// import './App.css'
import Register from './components/register/register'

const Ethereum = () => {
  return (
    <>

    <Routes>
      <Route exact path='/' element={
      <>
        <Landing />
        <Graph />
        {/* <Curriculum /> */}

        <div id="Our Champions">
          <Champions />
        </div>
    
        <div id="Backbone">
        <Backbone />
        </div>

        <div id="Perks">
        <Perks />
        </div>
        <Fees />

        <div id="Curriculum">
          <Solution />
        </div>
        <Faq />
      </>
      }/>

      <Route exact path="/register" element={<Register />} />
      <Route exact path="/curriculum" element={<Curriculum />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/dcma" element={<DCMA />} />
      <Route exact path="/privacy" element={<Privacy />} />
      <Route exact path="/refundpolicy" element={<Refundpolicy />} />
      <Route exact path="/terms" element={<Terms />} />
      <Route exact path="/contact-us" element={<Contact />} />
    </Routes>
    
    </>
  )
}

export default Ethereum