import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useSpring, animated } from 'react-spring'

const Home: NextPage = () => {
  const [mouseOver, setMouseOver] = useState(false)
  const styles = useSpring({
    from: {opacity: !mouseOver ? 0 : 1},
    to: {opacity: !mouseOver? 1 : 0},
    config: {
      mass: 8,
      tension: 80,
      friction: !mouseOver ? 200 : 40,
    }
  })
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-slate-600'>
      <animated.div style={styles} className='text-9xl text-gray-300' onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>No</animated.div>
    </div>
  )
}

export default Home
