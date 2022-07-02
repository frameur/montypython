import React from 'react'
import Darkmode from '../components/Darkmode'
import Form from '../components/Form'
import Headerland from '../components/Headerland'
import Navigation from '../components/Navigation'

const Pythonland = () => {
  return (
    <div>
      <Darkmode />
      <Navigation />
      <section className="moviescard">
        <Headerland />
        <Form />
      </section>
    </div>
  )
}

export default Pythonland
