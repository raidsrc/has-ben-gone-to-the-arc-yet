import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import No from '../components/no'

const Home: NextPage = () => {
  const [showMoreNos, setShowMoreNos] = useState(false)
  const [showMoreNos2, setShowMoreNos2] = useState(false)
  setTimeout(() => setShowMoreNos(true), 8000)
  setTimeout(() => setShowMoreNos2(true), 13000)
  return (
    <div className='flex flex-col justify-evenly items-center w-screen h-screen bg-slate-600'>
      <Head>
        <title>Has Ben gone to the ARC yet?</title>
      </Head>

      {showMoreNos ?
        <div className='flex w-full justify-evenly'>
          {showMoreNos2 ? <No /> : ""}
          <No />
          {showMoreNos2 ? <No /> : ""}
        </div> : ""}
      <div className='flex w-full justify-evenly'>
        {showMoreNos2 ? <No /> : ""}
        <No />
        {showMoreNos2 ? <No /> : ""}
      </div>
      {showMoreNos ?
        <div className='flex w-full justify-evenly'>
          {showMoreNos2 ? <No /> : ""}
          <No />
          {showMoreNos2 ? <No /> : ""}
        </div> : ""}

    </div>
  )
}

export default Home
