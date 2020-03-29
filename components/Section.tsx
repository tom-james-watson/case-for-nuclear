import * as React from 'react'
import styles from './Section.scss'

interface Props {
  children: object
}

export default function Section(props: Props) {
  const {children} = props

  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  )
}
