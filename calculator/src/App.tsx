import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './calculator/HelloWorld'
import Calculator from './calculator/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld/>
      <Calculator/>
    </>
  )
}

export default App
