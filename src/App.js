import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Fols from './components/Fols'
import Error from './components/Error'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/fols" element={<Fols />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
