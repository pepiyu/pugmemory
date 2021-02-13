import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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
          <div id='pug_1' className={styles.card}>
            <img src="images/chip_2.png" 
            height="200"/>
          </div>
          <div id='pug_2' className={styles.card}>
            <img src="images/chip_2.png" 
            height="200"/>
          </div>
          <div id='pug_3' className={styles.card}>
            <img src="images/chip_1.png" 
            height="200"/>
          </div>
          <div id='pug_4' className={styles.card}>
            <img src="images/chip_3.png" 
            height="200"/>
          </div>
          <div id='pug_5' className={styles.card}>
            <img src="images/chip_1.png" 
            height="200"/>
          </div>
          <div id='pug_6' className={styles.card}>
            <img src="images/chip_3.png" 
            height="200"/>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
         <p>© 2021 Pub Memory</p>
      </footer>
    </div>
  )
}
