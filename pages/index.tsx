import type { NextPage } from 'next'
import Head from 'next/head'
import { useSprings, useTrail, animated } from 'react-spring'
import No from '../components/no'

const Home: NextPage = () => {


  return (
    <div className='flex flex-col justify-evenly items-center w-screen h-screen bg-slate-600'>
      <Head>
        <title>Has Ben gone to the ARC yet?</title>
      </Head>

      <No></No>
      <No></No>
      <No></No>
      <No></No>

    </div>
  )
}

export default Home
