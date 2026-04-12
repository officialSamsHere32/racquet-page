import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Banner from './components/Banner'
import Hero from './components/hero'
import About from './components/About'
import './App.css'
import Testimoni from './components/Testimonial'
import Join from './components/join'
import Questions from './components/Questions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Hero />
              <About />
              <Join />
              <Testimoni />
              <Questions />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
