import * as React from 'react'
import Section from '../Section'
import ExampleGraph from './ExampleGraph'
import ProductionAndEmissions from './ProductionAndEmissions'
import globalStyles from '../../pages/Global.scss'

export default function CurrentState() {
  return (
    <Section>
      <p className={globalStyles.callout}>Based on current emissions, we are projected to lock in 2c of global warming in <span className={globalStyles.red}>5 years</span>.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ExampleGraph />
      <p>As of 2020, X% of our energy comes from dirty, high-carbon, energy sources.</p>
      <ProductionAndEmissions />
    </Section>
  )
}
