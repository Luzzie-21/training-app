'use client'

import Image from 'next/image'
import React from 'react';
import { useState } from 'react';
import styles from './page.module.css'

const exercises = [
  {
      "id": "2b325d18-5d6c-11ee-8c99-0242ac120002",
      "title": "curls for the girls",
      "url": "https://www.youtube.com/watch?v=76-XkrB7YS8"
  },
  {
      "id": "eca1fea4-5d6c-11ee-8c99-0242ac120002",
      "title": "squats",
      "url": "https://www.youtube.com/watch?v=xqvCmoLULNY"
  },
  {
      "id": "eca205a2-5d6c-11ee-8c99-0242ac120002",
      "title": "lunges",
      "url": "https://www.youtube.com/watch?v=wrwwXE_x-pQ"
  },
  {
      "id": "eca2073c-5d6c-11ee-8c99-0242ac120002",
      "title": "bench press",
      "url": "https://www.youtube.com/watch?v=JvOJdUtx6UQ"
  },
  {
      "id": "eca208fe-5d6c-11ee-8c99-0242ac120002",
      "title": "pull up",
      "url": "https://www.youtube.com/watch?v=sFenIPnxtaU"
  },
  {
      "id": "eca20aa2-5d6c-11ee-8c99-0242ac120002",
      "title": "triceps",
      "url": "https://www.youtube.com/watch?v=0WEot369EfE"
  },
  {
      "id": "eca20bf6-5d6c-11ee-8c99-0242ac120002",
      "title": "curls for the girls",
      "url": "https://www.youtube.com/watch?v=76-XkrB7YS8"
  },
  {
      "id": "eca20d18-5d6c-11ee-8c99-0242ac120002",
      "title": "Abs",
      "url": "https://www.youtube.com/watch?v=UYWBfKXPJvA"
  },
  {
      "id": "eca20e1c-5d6c-11ee-8c99-0242ac120002",
      "title": "core",
      "url": "https://www.youtube.com/watch?v=sd7FdBHUT30"
  },
  {
      "id": "eca20f48-5d6c-11ee-8c99-0242ac120002",
      "title": "back",
      "url": "https://www.youtube.com/watch?v=25fxE9VrmPs"
  }
];

type Exercise = {
  id: String,
  title: String,
  url: String
}

export default function Home() {

  const [exercise, setExercise] = useState<Exercise>({id: "", title: "", url: ""});

function pickRandomExercise(): Exercise {
  function getRandom (list: Array<any>) {
    return list[Math.floor((Math.random()*list.length))];
  }
  return getRandom(exercises)
}
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <button onClick={() => setExercise(pickRandomExercise)}>Get random exercise!</button>
      </div>

      <div className={styles.center}>
       <p>{exercise.title}</p>
       
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
