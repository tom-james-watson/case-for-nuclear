import * as React from 'react'
import Section from '../Section'
import ExampleGraph from './ExampleGraph'
import globalStyles from '../../pages/Global.scss'

export default function CurrentState() {
  return (
    <Section>
      <p className={globalStyles.callout}>Current estimates suggest that we have <span className={globalStyles.red}>5 years</span> left to address climate change</p>
      <p>This is just a typography example, the real content will come later.</p>
      <ExampleGraph />
      <p>That was just an example chart to test out the graphing library I'm looking at.</p>
    </Section>
  )
}
