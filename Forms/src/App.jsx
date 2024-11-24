import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Forms></Forms>
    </>
  )
}

export default App
