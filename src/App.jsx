import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Home from './Containers/Home/Home'
import About from './Containers/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact-Us/Contact-us'
import Mainpages from './components/Main-Pages/Main-Pages'
import { Route, Routes } from 'react-router'
import Collas from './components/Collas/Collas'
import Gallery from './components/Gallery/Gallery'



function App() {
  return (

    <>
      
      <Header/>
      <main>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/mainpages' element={<Mainpages/>}></Route> 
            <Route path='/collas' element={<Collas/>}></Route> 
            <Route path='/gallery' element={<Gallery/>}></Route>
        </Routes>
      {/* <Home/> */}
      {/* <Mainpages/> */}
      {/* <Banner/> */}
      {/* <Collas/> */}
      {/* <Gallery/> */}
      {/* <StudentDetails/> */}
      </main>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
