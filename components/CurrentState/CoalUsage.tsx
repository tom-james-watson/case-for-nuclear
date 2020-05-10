import * as React from 'react'
import BgVideo from 'react-background-video-player'
import styles from './CoalUsage.scss'
import globalStyles from '../../pages/Global.scss'

export default function CoalUsage() {
  // @ts-ignore
  if (!process.browser) {
    return null
  }

  return (
    <div>
      <div className={styles.coalUsage}>
        <BgVideo
          containerWidth={window.innerWidth}
          containerHeight={window.innerHeight}
          src={'/videos/coal-loop.mp4'}
          autoPlay
          loop
        />
        <div className={styles.videoBackground}></div>
        <div className={styles.contentContainer}>
          <div className={globalStyles.callout}>
            In the time it takes you to read this video, <span className={globalStyles.red}>800</span> carriages of coal will have been burned globally.
          </div>
        </div>
      </div>
      <p><a href="https://www.youtube.com/watch?v=In3zXS4dKQA">"SD70MAC led coal train climbs Mullan Pass"</a>, by <a href="https://www.youtube.com/channel/UCb1RAWtQgMciIRyE4ZJFSbA">Scott Hiddelston</a>, licensed under CC BY.</p>
    </div>
  )
}
