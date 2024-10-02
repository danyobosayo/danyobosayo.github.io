import React from 'react'
import Hero from './Hero.jsx'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" component={<Hero/>} />
            <Route path="/danielkim.github.io/" component={<Hero/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App