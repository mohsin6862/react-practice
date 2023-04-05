import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nav/Navbar'
import User from './components/User/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    <Navbar> </Navbar>
    <User></User>
    </div>
  )
}

export default App
