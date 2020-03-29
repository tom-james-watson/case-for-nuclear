import * as React from 'react'
import {NextPage} from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CurrentState from '../components/CurrentState'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CurrentState />
      <div style={{marginTop: 80}} />
    </div>
  )
}

export default IndexPage
