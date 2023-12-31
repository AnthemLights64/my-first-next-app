import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>选择一个画廊</h1>
      <div className={styles.items}>
        <Link href='/portfolio/illustrations' className={styles.item}>
          <span className={styles.title}>Illustraions</span>
        </Link>
        <Link href='/portfolio/websites' className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio