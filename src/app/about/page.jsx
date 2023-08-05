import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image
          src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
          fill={true}
          alt=''
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>这是一个标题</h1>
          <h2 className={styles.imgDescription}>这是2号标题</h2>
        </div>

      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>我们是谁</h1>
          <p className={styles.description}>
            我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。
            <br/>
            <br/>
            我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。我们具体是谁。
            <br/>
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>我们是干什么的</h1>
          <p className={styles.description}>
            我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。
            <br/>
            <br/>
            我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。我们具体是干什么的。
            <br/>
          </p>
          <Button url="/contact" text="联系我们" />
        </div>
      </div>
    </div>
  )
}

export default About