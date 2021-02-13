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
          <img src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" 
            height="200"/>
          </div>
          <div id='pug_2' className={styles.card}>
            <img src="images/chip_2.png" 
            height="200"/>
                      <img src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" 
            height="200"/>
          </div>
          <div id='pug_3' className={styles.card}>
            <img src="images/chip_1.png" 
            height="200"/>
            <img src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" 
            height="200"/>
          </div>
          <div id='pug_4' className={styles.card}>
            <img src="images/chip_3.png" 
            height="200"/>
            <img src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" 
            height="200"/>
          </div>
          <div id='pug_5' className={styles.card}>
            <img src="images/chip_1.png" 
            height="200"/>
            <img src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" 
            height="200"/>
          </div>
          <div id='pug_6' className={styles.card}>
            <img src="images/chip_3.png" 
            height="200"/>
            <img src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" 
            height="200"/>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
         <p>© 2021 Pug Memory</p>
      </footer>
    </div>
  )
}
