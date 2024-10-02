import React from 'react'
import Hero from './Hero.jsx'
import {Route, Routes, BrowserRouter, Redirect, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route exact path="/danielkim.github.io">
          <Redirect to="/" />
        </Route>
        <Route exact path="/">
            <Hero />
        </Route>
          {/* Your homepage component */}
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App