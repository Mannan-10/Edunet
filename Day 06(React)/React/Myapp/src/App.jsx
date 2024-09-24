import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Carousel from './components/Carousel'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="cards">
        <Cards title="card 1" description="Some content about the card 1" />
        <Cards title="card 2" description="Some content about the card 2" />
        <Cards title="card 3" description="Some content about the card 3" />
      </div>
      <Footer />
    </>
  )
}

export default App
