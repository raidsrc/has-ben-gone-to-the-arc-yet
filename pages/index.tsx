import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useSprings, useTrail, animated } from 'react-spring'

const Home: NextPage = () => {
  const noList = [
    { opacity: 0.5 },
    { opacity: 0.2 },
    { opacity: 0.9 }
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
  // const trail = useTrail(3, {
  //   from: { opacity: !mouseOver ? 0 : 1 },
  //   to: { opacity: !mouseOver ? 1 : 0 },
  //   config: {
  //     mass: 3,
  //     frequency: !mouseOver ? 2 : 1,
  //     damping: !mouseOver ? 6 : 1,
  //     clamp: true
  //   }
  // })

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-slate-600'>
      <Head>
        <title>Has Ben gone to the ARC yet?</title>
      </Head>

      {/* {trail.map(animatedProps => <animated.div style={animatedProps}>No</animated.div>)} */}
      {springs.map(animatedProps => <animated.div style={animatedProps}>No</animated.div>)}

    </div>
  )
}

export default Home
