import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href='/blog/testId' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'
            alt=''
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>这是一个标题</h1>
          <p className={styles.description}>
            这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。
          </p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'
            alt=''
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>这是一个标题</h1>
          <p className={styles.description}>
            这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。
          </p>
        </div>
      </Link>
      <Link href='/blog/testId' className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'
            alt=''
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>这是一个标题</h1>
          <p className={styles.description}>
            这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。这是一段描述。
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Blog