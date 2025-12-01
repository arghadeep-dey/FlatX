import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layout_components/Header.jsx'
import Menu from './components/layout_components/Menu.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [isMenuExpanded, setIsMenuExpanded] = useState(true)

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded)
  }

  return (
    <>
      <Header />
      <Menu isExpanded={isMenuExpanded} onToggle={toggleMenu} />
      <div className={`pt-16 p-6 transition-all duration-300 ease-in-out ${isMenuExpanded ? 'ml-64' : 'ml-16'}`}>
        <p>Dashboard</p>
      </div>
    </>
  )
}

export default App
