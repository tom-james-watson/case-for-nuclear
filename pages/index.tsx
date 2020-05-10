import * as React from 'react'
import {NextPage} from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CurrentState from '../components/CurrentState'
import CoalUsage from './../components/CurrentState/CoalUsage'

const IndexPage: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CurrentState />
      <CoalUsage />
      <div style={{marginTop: 80}} />
    </div>
  )
}

export default IndexPage
