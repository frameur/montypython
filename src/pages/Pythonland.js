import React from 'react'
import Animatedcircular from '../components/Animatedcircular'
import Darkmode from '../components/Darkmode'
import Footer from '../components/Footer'

import Navigation from '../components/Navigation'

const Pythonland = () => {
  return (
    <div>
      <Darkmode />
      <Navigation />
      <section>
        <Animatedcircular />
      </section>
      <Footer />
    </div>
  )
}

export default Pythonland
