import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>让我们保持联系！</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src='/contact.png'
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='姓名' className={styles.input} />
          <input type="text" placeholder='邮箱' className={styles.input} />
          <textarea
            className={styles.textarea}
            placeholder='说点啥吧...'
            cols="30"
            rows="10"></textarea>
          <Button url="#" text="提交" />
        </form>
      </div>
    </div>
  )
}

export default Contact