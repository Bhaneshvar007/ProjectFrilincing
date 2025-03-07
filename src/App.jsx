import { useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Pages/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
 
      <Home />
    </div>
  )
}

export default App
