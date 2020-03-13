import * as React from 'react'
import styles from './Hero.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCover}>
        <div className={styles.heroImage} />
        <div className={styles.heroImageFilter} />
      </div>
      <h1 className={styles.heroTitle}>The Case For Nuclear</h1>
      <h2 className={styles.heroSubtitle}>Why we must rethink our plan for low-carbon energy</h2>
    </section>
  )
}
