import React from 'react'
import Home from './Routes/Home'
import Navbar from './components/Navbar'
import Detalle from './Routes/Detalle'
import Detalle2 from './Routes/Detalle2'
import Detalle3 from './Routes/Detalle3'
import Detalle4 from './Routes/Detalle4'
import Detalle5 from './Routes/Detalle5'
import Detalle6 from './Routes/Detalle6'
import Detalle7 from './Routes/Detalle7'
import Detalle8 from './Routes/Detalle8'
import Detalle9 from './Routes/Detalle9'
import Detalle10 from './Routes/Detalle10'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
  
    <>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/detalle/' element={<Detalle/>}/>
        <Route path='/detalle2' element={<Detalle2/>}></Route>
        <Route path='/detalle3' element={<Detalle3/>}></Route>
        <Route path='/detalle4' element={<Detalle4/>}></Route>
        <Route path='/detalle5' element={<Detalle5/>}></Route>
        <Route path='/detalle6' element={<Detalle6/>}></Route>
        <Route path='/detalle7' element={<Detalle7/>}></Route>
        <Route path='/detalle8' element={<Detalle8/>}></Route>
        <Route path='/detalle9' element={<Detalle9/>}></Route>
        <Route path='/detalle10' element={<Detalle10/>}></Route>

      </Routes>
    
    </>
  )
}

export default App
