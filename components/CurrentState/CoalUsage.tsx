import * as React from 'react'
import BgVideo from 'react-background-video-player'
import styles from './CoalUsage.scss'
import globalStyles from '../../pages/Global.scss'

interface Player {
  video: HTMLVideoElement
}

export default function CoalUsage() {
  // @ts-ignore
  if (!process.browser) {
    return null
  }

  const [player, setPlayer] = React.useState<Player | null>(null)

  React.useEffect(() => {
    if (!player) {
      return
    }

    player.video.playbackRate = 0.5
  }, [player])

  return (
    <div>
      <div className={styles.coalUsage}>
        <BgVideo
          ref={setPlayer}
          containerWidth={window.innerWidth}
          containerHeight={window.innerHeight}
          src={'/videos/coal-loop.mp4'}
          autoPlay
          loop
        />
        <div className={styles.videoBackground}></div>
        <div className={styles.contentContainer}>
          <div className={globalStyles.callout}>
            In the time it takes you to read this article, <span className={globalStyles.red}>800</span> carriages of coal will have been burned globally.
          </div>
        </div>
      </div>
      <p><a href="https://www.youtube.com/watch?v=In3zXS4dKQA">&quot;SD70MAC led coal train climbs Mullan Pass&quot;</a>, by <a href="https://www.youtube.com/channel/UCb1RAWtQgMciIRyE4ZJFSbA">Scott Hiddelston</a>, licensed under CC BY.</p>
    </div>
  )
}
