"use client";
import styles from './page.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/home1')
  }, [])

  return null

  // return (
  //   <html>
  //     <head>
  //     </head>
  //     <body>
  //       <main className={styles.page}>
  //         app home page
  //       </main>
  //     </body>
  //   </html>

  // )
}
