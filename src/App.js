import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Bollywood from './components/Bollywood';
import Hollywood from './components/Hollywood';
import Food from './components/Food';
import Technology from './components/Technology';
import Navbar from './components/Navbar';
import AddToCart from './components/AddToCart';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/cart' element={<AddToCart/>}/>
          
        </Routes>

      </Router>

    </div>
  )
}

export default App