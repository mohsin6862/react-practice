import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nav/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    <Navbar> </Navbar>
    </div>
  )
}

export default App