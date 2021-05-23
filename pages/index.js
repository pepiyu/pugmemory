import Head from 'next/head'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'
import MemoryBuilder from '../components/MemoryBuilder'
import React  from 'react'

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
          <button className={styles.button_start} onClick={()=>{ window.location='/'}}>Start Game</button>
        </p>

        <div className={styles.grid}>
          <MemoryBuilder/>
        </div>
      </main>

      <footer className={styles.footer}>
         <p>© 2021 Pug Memory</p>
      </footer>
    </div>
  )
}