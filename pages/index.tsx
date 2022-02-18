import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useSprings, useTrail, animated } from 'react-spring'
import No from '../components/no'

const Home: NextPage = () => {
  const noList = [
    { opacity: 0.1 },
    { opacity: 0.3 },
    { opacity: 0.6 }
  ]
  const springs = useSprings(noList.length,
    noList.map(item =>
    ({
      from: { opacity: 1 },
      to: { opacity: item.opacity },
      config: {
        mass: 3,
        frequency: 1,
        damping: 1,
        clamp: true
      }
    })))


  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-slate-600'>
      <Head>
        <title>Has Ben gone to the ARC yet?</title>
      </Head>

      {/* {trail.map(animatedProps => <animated.div style={animatedProps}>No</animated.div>)} */}
      {springs.map(animatedProps => <animated.div style={animatedProps}>No</animated.div>)}

      <No></No>
      <No></No>
      <No></No>
      <No></No>

    </div>
  )
}

export default Home
