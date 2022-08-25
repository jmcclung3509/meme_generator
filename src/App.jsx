import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import "./index.css"


import Header from "./components/Header"
import Form from "./components/Form"


function App() {
 

  return (
    <div>
      <Header />
      <div className = "main-container">
        <Form />
      </div>
      
    </div>
  )
}

export default App
