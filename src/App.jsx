import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Ods from './pages/Ods'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/ods' element={<Ods/>} />
      </Routes>
      <Footer/>
    </>
  )
  
}

export default App
