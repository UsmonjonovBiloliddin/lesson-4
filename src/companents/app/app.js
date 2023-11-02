import React, { useState } from 'react'
import "./app.css"
import Navbar from '../navbar/navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Hom from "../Hom/home"
import Aboute from "../Aboute/aboute"
import Cantact from "../Contact/contact"
import Open from '../open/open'
const App = () => {

  const [name , setName] = useState("salom")
  const [open , setOpen] = useState(false)
  return (
    <div className='contianer'>
      <BrowserRouter>
      <Navbar setOpen={setOpen} open={open} />
          <Routes>
            <Route path='/' element={<Hom />} />
            <Route path='/aboute' element={<Aboute />} />
            <Route path='/cantact' element={<Cantact />} />
          </Routes>
          <Open open ={open} />
      </BrowserRouter>
    </div>
  )
}

export default App