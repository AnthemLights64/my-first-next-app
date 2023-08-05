import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 WenlongLu. All rights reserved.</div>
        <div className={styles.social}>
            <Image src="/facebook.png" width={15} className={styles.icon} height={15} alt=''/>
            <Image src="/instagram.png" width={15} className={styles.icon} height={15} alt=''/>
            <Image src="/twitter.png" width={15} className={styles.icon} height={15} alt=''/>
            <Image src="/youtube.png" width={15} className={styles.icon} height={15} alt=''/>
        </div>
    </div>
  )
}

export default Footer