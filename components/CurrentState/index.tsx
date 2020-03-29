import * as React from 'react'
import Section from '../Section'
import ExampleGraph from './ExampleGraph'
import globalStyles from '../../pages/Global.scss'

export default function CurrentState() {
  return (
    <Section>
      <p className={globalStyles.callout}>Current estimates suggest that we have <span className={globalStyles.red}>5 years</span> left to address climate change</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ExampleGraph />
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </Section>
  )
}
