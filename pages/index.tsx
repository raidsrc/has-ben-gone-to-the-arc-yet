import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import No from '../components/no'

const Home: NextPage = () => {
  const [showMoreNos, setShowMoreNos] = useState(false)
  setTimeout(() => setShowMoreNos(true), 8000)
  return (
    <div className='flex flex-col justify-evenly items-center w-screen h-screen bg-slate-600'>
      <Head>
        <title>Has Ben gone to the ARC yet?</title>
      </Head>


      {showMoreNos ?
        <>
          <No />
        </> : ""}
      <No />
      {showMoreNos ?
        <>
          <No />
        </> : ""}

    </div>
  )
}

export default Home
