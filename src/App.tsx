import React, { useState } from 'react'
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import './App.less'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {renderRoutes(routes)}
      </div>
    </BrowserRouter>
  )
}

export default App
