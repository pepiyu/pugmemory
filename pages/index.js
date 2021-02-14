import Head from 'next/head'
import Nav from './Components/Nav'
import styles from '../styles/Home.module.css'

import { FlipableCard } from '../components/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav></Nav>
      <Head>
        <title>Pug Memory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pug Memory
        </h1>

        <p className={styles.description}>
          <button className={styles.button_start}>Start Game</button>
        </p>

        <div className={styles.grid}>
          <FlipableCard id='pug_1' img="images/chip_2.png"/>
          <FlipableCard id='pug_2' img="images/chip_2.png"/>
          <FlipableCard id='pug_3' img="images/chip_1.png"/>
          <FlipableCard id='pug_4' img="images/chip_3.png"/>
          <FlipableCard id='pug_5' img="images/chip_1.png"/>
          <FlipableCard id='pug_6' img="images/chip_3.png"/>
        </div>
      </main>

      <footer className={styles.footer}>
         <p>© 2021 Pug Memory</p>
      </footer>
    </div>
  )
}
