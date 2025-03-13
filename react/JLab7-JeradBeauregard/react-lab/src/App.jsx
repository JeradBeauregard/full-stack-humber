import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./components/header/header.jsx"
import Card from "./components/card/card.jsx"
import Footer from "./components/footer/footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
   <Header />
    <div id="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
    </div>
    <Footer/>
    </body>
  )
}

export default App
