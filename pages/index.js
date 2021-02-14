import Head from 'next/head'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'
import { FlipableCard } from '../components/Card'
import React, { useState }  from 'react'

export default function Home() {

  const isChip = [
    {
      id: "chip_1",
      img: "images/chip_1.png",
      key: 1,
    },
    {
      id: "chip_2",
      img: "images/chip_2.png",
      key: 2,

    },
    {
      id: "chip_3",
      img: "images/chip_3.png",
      key: 3,

    },
    {
      id: "chip_1",
      img: "images/chip_1.png",
      key: 4,

    },
    {
      id: "chip_2",
      img: "images/chip_2.png",
      key: 5,

    },
    {
      id: "chip_3",
      img: "images/chip_3.png",
      key: 6,

    },

  ]

  const [memory, setMemory] = useState([

  ])





  
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
        {isChip
          .sort(() => Math.random() - 0.5)
          .map((element) => {
            return (
              <FlipableCard
                id={element.id}
                img={element.img}
                memory={memory}
                setMemory={setMemory}
                isChip={isChip}
                key={element.key}
              />
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
         <p>© 2021 Pug Memory</p>
      </footer>
    </div>
  )
}
