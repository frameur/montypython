import React from 'react'
import Darkmode from '../components/Darkmode'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Slider from '../components/Slider'
import Time1 from '../components/Time1'
import Time2 from '../components/Time2'

const Home = () => {
  return (
    <div>
      <Navigation />
      <section className="content">
        <Darkmode />
        <div className="time1">
          <Time1 />
        </div>
        <div className="time2">
          <Time2 />
        </div>
        <div className="slider">
          <Slider />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home
