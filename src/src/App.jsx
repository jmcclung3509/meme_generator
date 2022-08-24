import { useState } from 'react'
// import trollFace from './assets/troll-face.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from "./components/Header"
import Form from "./components/Form"

function App() {
 

  return (
    <div>
      <Header />
      <div class = "main-container">
        <Form />
      </div>
      
    </div>
  )
}

export default App
