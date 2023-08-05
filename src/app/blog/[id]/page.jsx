import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { cache: 'no-store' }
  })
 
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

const BlogPost = async ({ params }) => {

  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
              <Image
                src='https://images.unsplash.com/photo-1542736637-74169a802172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                alt=''
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>头发茂密的作者</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            alt=''
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          这是一段文字。这是一段文字。这是一段文字。这是一段文字。这是一段文字。这是一段文字。这是一段文字。
          <br/>
          <br/>
          这是一段文字。这是一段文字。这是一段文字。这是一段文字。这是一段文字。这是一段文字。这是一段文字。
          <br/>
          <br/>
          这是一段文字。这是一段文字。这是一段文字。这是一段文字。这是一段文字。这是一段文字。这是一段文字。
        </p>
      </div>
    </div>
  )
}

export default BlogPost