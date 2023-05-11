import { useContext, useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Planets from './components/Planets'
import PlanetDetails from './components/PlantDetails'
import Checkout from './components/Checkout'

function App() {

  return (

    <div className='App'>
      <Router>
        <h1 className='title'> StarWars Galactic Airlines</h1>
        <nav className='navbar'>
          <Link className='navLink' to='/'>Home</Link>
          <Link className='navLink' to='/planets'>Planets</Link>
          <Link className='navLink' to='/about'>About</Link>
        </nav>

        <footer className='footer'>Created by Tyler Ferre</footer>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/planets' element={<Planets/>} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/planets/:planetId' element={<PlanetDetails/>}/>
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
