import React from 'react'

import Darkmode from '../components/Darkmode'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import Form from '../components/Form'
import Headerland from '../components/Headerland'

const Media = () => {
  return (
    <div>
      <Darkmode />
      <Navigation />
      <section className="moviescard">
        <Headerland />
        <Form />
      </section>
      <Footer />
    </div>
  )
}

export default Media
