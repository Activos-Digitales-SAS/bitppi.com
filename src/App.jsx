import React from "react"
import { Routes,Route } from "react-router-dom"
import Home from "./routes/Home.jsx"
import Servicios from "./routes/Servicios.jsx"
import Nosotros from "./routes/Nosotros.jsx"
import Contacto from "./routes/Contacto.jsx"
import Detalles from "./routes/Detalles.jsx"
import Detalles2 from "./routes/Detalles2.jsx"




function App() {

  return (
    <>
     <Routes>
     <Route path ='/' element={ <Home/>} />
     <Route path ='/servicios' element={ <Servicios />} />
     <Route path ='/nosotros' element={ <Nosotros />} />
     <Route path ='/contacto' element={ <Contacto />} />
     <Route path ='/detalles' element={ <Detalles />} />
     <Route path ='/detalles2' element={ <Detalles2 />} />
   
     </Routes>
    </>
  )
}

export default App
