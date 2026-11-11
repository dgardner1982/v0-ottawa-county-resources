import type { CSSProperties } from 'react'
import styles from './spinning-logo.module.css'

const LOGO_SRC =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Recovery%20Alliance%20Business%20Cards-UXhe7EFsenUbcy44EqMjYgUa3HNUT3.jpg'

const EDGE_LAYERS = 10

function CoinFace({ side }: { side: 'front' | 'back' }) {
  return (
    <div className={`${styles.face} ${styles[side]}`}>
      <img src={LOGO_SRC} alt="" aria-hidden="true" className={styles.art} draggable={false} />
      <span className={styles.shine} aria-hidden="true" />
    </div>
  )
}

export function SpinningLogo() {
  return (
    <div className={styles.stage}>
      <img src={LOGO_SRC} alt="Ottawa County Recovery Alliance" className={styles.base} draggable={false} />
      <div className={styles.coin} aria-hidden="true">
        <div className={styles.spinner}>
          {Array.from({ length: EDGE_LAYERS }, (_, index) => (
            <span
              key={index}
              className={styles.edge}
              style={{ '--layer': (index / (EDGE_LAYERS - 1)) * 2 - 1 } as CSSProperties}
            />
          ))}
          <CoinFace side="front" />
          <CoinFace side="back" />
        </div>
      </div>
    </div>
  )
}
