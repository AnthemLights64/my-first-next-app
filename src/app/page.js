import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <h1 className={styles.title} style={{color: 'aliceblue'}}>
          这是一个super amazing的标题
        </h1>
        <p className={styles.description}>
          这是一段文本。这是一段文本。这是一段文本。这是一段文本。这是一段文本。这是一段文本。
        </p>
        <Button url='/portfolio' text='这是一个按钮' />
      </div>

      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt='Home Page'/>
      </div>
    </div>
  )
}
