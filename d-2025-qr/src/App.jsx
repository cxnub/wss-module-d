import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home.html' element={<Home />} />
        <Route path='profile.html' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
