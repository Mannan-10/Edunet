import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Oxygen from './components/Oxygen'
import Vshape from './components/Vshape'
import Champ from './components/Champ'
import Bmical from './components/Bmical'

function App() {

  return (
    <>
      <Oxygen /><br />
      <Vshape />
      <Champ />
      <Bmical />
    </>
  )
}

export default App
