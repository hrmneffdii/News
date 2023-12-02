import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from './pages/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/:id" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
