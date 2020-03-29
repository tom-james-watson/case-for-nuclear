import * as React from 'react'
import styles from './Hero.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <span className={styles.heroTitle}>The</span>
        <span className={styles.heroTitle}>Case</span>
        <span className={styles.heroTitle}>For</span>
        <span className={`${styles.heroTitle} ${styles.heroTitleNuclear}`}>Nuclear</span>
        <span className={styles.heroSubtitle}>Why we must rethink our plan for low-carbon energy</span>
      </div>
    </section>
  )
}
